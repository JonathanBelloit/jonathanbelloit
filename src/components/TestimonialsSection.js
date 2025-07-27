"use client";

import React from 'react';
import { Box, Typography, Grid, Paper, Avatar, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import { FormatQuote } from '@mui/icons-material';

const TestimonialsSection = () => {
  // Add real testimonials here as you get them
  const testimonials = [
    {
      name: "Client Name",
      position: "CEO, Company Name",
      text: "Jonathan delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations.",
      rating: 5,
      avatar: "/path-to-avatar.jpg" // Add real avatar paths
    },
    {
      name: "Another Client",
      position: "Project Manager, Tech Company",
      text: "Working with Jonathan was a great experience. He understood our requirements perfectly and delivered a robust solution on time.",
      rating: 5,
      avatar: "/path-to-avatar2.jpg"
    },
    {
      name: "Happy Customer",
      position: "Startup Founder",
      text: "Jonathan's full-stack development skills helped us launch our MVP quickly. His data analytics background was invaluable for our reporting features.",
      rating: 5,
      avatar: "/path-to-avatar3.jpg"
    }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Typography 
        variant="h3" 
        textAlign="center" 
        gutterBottom 
        fontWeight="bold"
        sx={{ mb: 6 }}
      >
        What Clients Say
      </Typography>

      <Grid container spacing={4} sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3, 
                  height: '100%',
                  position: 'relative',
                  '&:hover': {
                    boxShadow: 6
                  }
                }}
              >
                <FormatQuote 
                  sx={{ 
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    color: 'primary.main',
                    fontSize: 40,
                    opacity: 0.3
                  }} 
                />
                
                <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ fontStyle: 'italic', mb: 3 }}
                >
                  "{testimonial.text}"
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar 
                    src={testimonial.avatar}
                    sx={{ mr: 2, bgcolor: 'primary.main' }}
                  >
                    {testimonial.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.position}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialsSection;
