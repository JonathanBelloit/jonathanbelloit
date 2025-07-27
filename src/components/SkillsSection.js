"use client";

import React from 'react';
import { Box, Typography, Grid, Paper, LinearProgress, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = {
    frontend: [
      { name: 'React/Next.js', level: 90 },
      { name: 'JavaScript/TypeScript', level: 85 },
      { name: 'Material-UI', level: 88 },
      { name: 'HTML/CSS', level: 92 },
      { name: 'Framer Motion', level: 80 }
    ],
    backend: [
      { name: 'Node.js/Express', level: 85 },
      { name: 'MongoDB/Mongoose', level: 80 },
      { name: 'Firebase', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'JWT Authentication', level: 82 }
    ],
    tools: [
      'Git/GitHub', 'WordPress', 'Redux Toolkit', 'PayPal Integration',
      'Responsive Design', 'Data Analytics', 'SAS', 'REST APIs'
    ]
  };

  const SkillBar = ({ skill, delay }) => (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body2" fontWeight="medium">
          {skill.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {skill.level}%
        </Typography>
      </Box>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ delay, duration: 1 }}
      >
        <LinearProgress 
          variant="determinate" 
          value={skill.level} 
          sx={{ 
            height: 8, 
            borderRadius: 4,
            backgroundColor: 'grey.300',
            '& .MuiLinearProgress-bar': {
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
            }
          }}
        />
      </motion.div>
    </Box>
  );

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Typography 
        variant="h3" 
        textAlign="center" 
        gutterBottom 
        fontWeight="bold"
        sx={{ mb: 6 }}
      >
        Technical Expertise
      </Typography>

      <Grid container spacing={4} sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">
              Frontend Development
            </Typography>
            {skills.frontend.map((skill, index) => (
              <SkillBar 
                key={skill.name} 
                skill={skill} 
                delay={index * 0.2} 
              />
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">
              Backend Development
            </Typography>
            {skills.backend.map((skill, index) => (
              <SkillBar 
                key={skill.name} 
                skill={skill} 
                delay={index * 0.2 + 0.5} 
              />
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">
              Tools & Technologies
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
              {skills.tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 1 }}
                >
                  <Chip 
                    label={tool} 
                    variant="outlined" 
                    sx={{ 
                      mb: 1,
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white'
                      }
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillsSection;
