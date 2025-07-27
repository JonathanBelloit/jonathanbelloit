"use client";

import React, { useState } from 'react';
import { 
  Box, Typography, Grid, Paper, TextField, Button, 
  IconButton, Snackbar, Alert
} from '@mui/material';
import { 
  LinkedIn, GitHub, Email, Download, 
  LocationOn, Phone
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you'd send this to your backend
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <Box sx={{ 
      py: 8, 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <Typography 
        variant="h3" 
        textAlign="center" 
        gutterBottom 
        fontWeight="bold"
        sx={{ mb: 2 }}
      >
        Let's Work Together
      </Typography>
      
      <Typography 
        variant="h6" 
        textAlign="center" 
        sx={{ mb: 6, opacity: 0.9 }}
      >
        Ready to bring your ideas to life? Let's discuss your next project.
      </Typography>

      <Grid container spacing={6} sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        {/* Contact Info */}
        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" gutterBottom fontWeight="bold">
                Get In Touch
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                I'm always interested in hearing about new opportunities, 
                challenging projects, and innovative ideas.
              </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Email sx={{ mr: 2, color: 'white' }} />
                <Typography>jonathan@topdogwebdev.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn sx={{ mr: 2, color: 'white' }} />
                <Typography>Pittsburgh, PA (Remote Available)</Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Connect With Me
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton 
                  sx={{ 
                    color: 'white', 
                    border: '1px solid rgba(255,255,255,0.3)',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                  }}
                  href="https://www.linkedin.com/in/jonathan-belloit-6313701b4/"
                  target="_blank"
                >
                  <LinkedIn />
                </IconButton>
                <IconButton 
                  sx={{ 
                    color: 'white', 
                    border: '1px solid rgba(255,255,255,0.3)',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                  }}
                  href="https://github.com/JonathanBelloit"
                  target="_blank"
                >
                  <GitHub />
                </IconButton>
              </Box>
            </Box>

            <Button
              variant="outlined"
              startIcon={<Download />}
              sx={{ 
                color: 'white', 
                borderColor: 'white',
                '&:hover': { 
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderColor: 'white'
                }
              }}
              // Add your resume download link here
              href="/resume.pdf"
              target="_blank"
            >
              Download Resume
            </Button>
          </motion.div>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Paper elevation={3} sx={{ p: 4, backgroundColor: 'rgba(255,255,255,0.95)' }}>
              <Typography variant="h5" gutterBottom color="text.primary" fontWeight="bold">
                Send Me a Message
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      value={formData.name}
                      onChange={handleChange('name')}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={handleChange('email')}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Company/Organization"
                      value={formData.company}
                      onChange={handleChange('company')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Project Details or Message"
                      value={formData.message}
                      onChange={handleChange('message')}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{ 
                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #FE6B8B 60%, #FF8E53 100%)',
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>

      <Snackbar 
        open={showSuccess} 
        autoHideDuration={6000} 
        onClose={() => setShowSuccess(false)}
      >
        <Alert severity="success" onClose={() => setShowSuccess(false)}>
          Message sent successfully! I'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;
