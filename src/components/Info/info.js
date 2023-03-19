import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProfilePic from '../Avatar/avatar';
import './info.css'

const Info = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1, paddingTop: "50px" }}>
        <Grid container spacing={5} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item className="infoItem avatar" xs={4} sm={8} md={4}>
            <ProfilePic />
          </Grid>
          <Grid item className="infoItem" xs={4} sm={8} md={8}>
            <Typography>
              <h3>Hello!</h3>
            </Typography>
          </Grid>
          <Grid item className="infoItem" xs={4} sm={8} md={12}>
            <Typography>
              <p>I am learning Front-End development skills in a bootcamp.</p>
              <p>In this programme I've learned and implemented projects in HTML, CSS, JavaScript, Node.js and React. I plan to further enhance my skills in the coming months.</p>
              <p>My portfolio displays my
                <span><Link to="/projects" end> Projects.</Link></span>
              </p>
             
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Info;