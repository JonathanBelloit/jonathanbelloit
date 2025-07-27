"use client";

import React from 'react';
import { Box, Typography, Chip, Button, Grid, Paper } from '@mui/material';
import { GitHub, Launch, Assessment } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ProjectDetails = ({ project }) => {
  const techStack = project.tech.split(' | ');

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 3, 
        mb: 3, 
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        color: 'white'
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            {project.title}
          </Typography>
          
          <Typography variant="h6" color="primary.light" gutterBottom>
            The Challenge
          </Typography>
          <Typography paragraph>
            {project.details.problem}
          </Typography>

          <Typography variant="h6" color="primary.light" gutterBottom>
            My Solution
          </Typography>
          <Typography paragraph>
            {project.details.solution}
          </Typography>

          <Typography variant="h6" color="primary.light" gutterBottom>
            Technical Implementation
          </Typography>
          <Typography paragraph>
            {project.details.technicalDetails}
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>Tech Stack</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {techStack.map((tech, index) => (
                <Chip 
                  key={index} 
                  label={tech.trim()} 
                  variant="outlined" 
                  sx={{ color: 'white', borderColor: 'white' }}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
            {project.url && (
              <Button 
                variant="contained" 
                startIcon={<Launch />}
                href={project.url}
                target="_blank"
                sx={{ 
                  background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #FF5252 30%, #26C6DA 90%)',
                  }
                }}
              >
                View Live Demo
              </Button>
            )}
            {project.codeLink && (
              <Button 
                variant="outlined" 
                startIcon={<GitHub />}
                href={project.codeLink}
                target="_blank"
                sx={{ borderColor: 'white', color: 'white' }}
              >
                View Code
              </Button>
            )}
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          {project.image && (
            <Box
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3
              }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </Box>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProjectDetails;
