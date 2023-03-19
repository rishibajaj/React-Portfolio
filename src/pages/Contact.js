import React from "react";
import Container from "@mui/system/Container";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Hero from "../components/Hero/hero";
import ContactForm from "../components/ContactForm/contactForm";
import ContactInfo from "../components/ContactInfo/contactInfo";

const Contact = () => {
    return (
      <div>
        <Hero>
          <h1>Contact</h1>
        </Hero>
        <Container>
          <Box sx={{ flexGrow: 1, paddingTop: "50px" }}>
            <Grid container spacing={20} columns={{ xs: 4, sm: 8, md: 12 }}>
              <ContactForm />
              <ContactInfo />
            </Grid>
          </Box>
        </Container>
      </div>
    );
};

export default Contact;