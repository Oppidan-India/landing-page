// server.js - Node.js Backend with MongoDB
const PORT = process.env.PORT || 5000;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/oppidan_india';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    trim: true
  },
  role: {
    type: String,
    required: true,
    enum: ['student', 'educator', 'institution', 'corporate', 'parent', 'other']
  },
  interest: {
    type: String,
    required: true,
    enum: ['internship', 'sports', 'institution', 'corporate', 'franchise', 'general']
  },
  message: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'converted', 'closed'],
    default: 'new'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes

// Health Check
app.get('/', (req, res) => {
  res.json({ 
    message: 'Oppidan India API Server', 
    status: 'Running',
    timestamp: new Date()
  });
});

// Submit Contact Form
app.post('/api/contact', async (req, res) => {
  try {
    const { fullName, email, phone, role, interest, message } = req.body;

    // Validation
    if (!fullName || !email || !role || !interest || !message) {
      return res.status(400).json({ 
        success: false,
        message: 'Please fill in all required fields' 
      });
    }

    // Create new contact
    const newContact = new Contact({
      fullName,
      email,
      phone,
      role,
      interest,
      message
    });

    await newContact.save();

    res.status(201).json({ 
      success: true,
      message: 'Thank you for your interest! We will contact you soon.',
      data: {
        id: newContact._id,
        fullName: newContact.fullName,
        email: newContact.email
      }
    });

  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error submitting form. Please try again.' 
    });
  }
});

// Get all contacts (Admin endpoint)
app.get('/api/contacts', async (req, res) => {
  try {
    const { status, role, interest, limit = 50, page = 1 } = req.query;
    
    const filter = {};
    if (status) filter.status = status;
    if (role) filter.role = role;
    if (interest) filter.interest = interest;

    const contacts = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await Contact.countDocuments(filter);

    res.json({
      success: true,
      data: contacts,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error fetching contacts' 
    });
  }
});

// Get single contact by ID
app.get('/api/contacts/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({ 
        success: false,
        message: 'Contact not found' 
      });
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    console.error('Error fetching contact:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error fetching contact' 
    });
  }
});

// Update contact status
app.patch('/api/contacts/:id', async (req, res) => {
  try {
    const { status } = req.body;

    if (!['new', 'contacted', 'converted', 'closed'].includes(status)) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid status value' 
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({ 
        success: false,
        message: 'Contact not found' 
      });
    }

    res.json({
      success: true,
      message: 'Contact updated successfully',
      data: contact
    });
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error updating contact' 
    });
  }
});

// Delete contact
app.delete('/api/contacts/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ 
        success: false,
        message: 'Contact not found' 
      });
    }

    res.json({
      success: true,
      message: 'Contact deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error deleting contact' 
    });
  }
});

// Get statistics
app.get('/api/stats', async (req, res) => {
  try {
    const totalContacts = await Contact.countDocuments();
    const newContacts = await Contact.countDocuments({ status: 'new' });
    const contacted = await Contact.countDocuments({ status: 'contacted' });
    const converted = await Contact.countDocuments({ status: 'converted' });

    const byRole = await Contact.aggregate([
      { $group: { _id: '$role', count: { $sum: 1 } } }
    ]);

    const byInterest = await Contact.aggregate([
      { $group: { _id: '$interest', count: { $sum: 1 } } }
    ]);

    res.json({
      success: true,
      data: {
        total: totalContacts,
        new: newContacts,
        contacted,
        converted,
        byRole,
        byInterest
      }
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error fetching statistics' 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false,
    message: 'Something went wrong!' 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}`);
  console.log(`💾 MongoDB URI: ${MONGODB_URI}`);
});