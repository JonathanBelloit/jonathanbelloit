import React from 'react'
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material'

const MobileCard = ({ app, handleDetailClick }) => {
  return (
    <Card
      sx={{
        mx: 5,
        px: 2,
        pb: 5,
        height: "425px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: app.color.theme1,
        gap: 2,
      }}>
      <CardHeader title={app.title} sx={{ textAlign: "center", color: app.color.theme2 }} />
      <CardMedia
        component="img"
        height="130"
        width="75"
        image={app.image}
        alt="Test Card"
      />
      <CardContent>
        <Box sx={{display: "flex", flexDirection: "column"}}>
          <Typography variant="body1" color={app.color.theme2} sx={{ lineHeight: 1.25}}>
            {app.description}
          </Typography>
          <Typography variant="body1" textAlign="center" color={app.color.theme4} sx={{ lineHeight: 1.25}}>
            {app.tech}
          </Typography>
            <br />
          <Button variant="contained" sx={{ px: 4, mb: 2, color: app.color.theme2, backgroundColor: app.color.theme3}}>
            Demo Coming Soon
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default MobileCard