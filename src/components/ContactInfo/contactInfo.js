import React from "react";
import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import './contactInfo.css';

const ContactInfo = () => {
    return (
        <Grid item xs={4} sm={4} md={6} className="contactInfo">
            <h4>My Details:</h4>
            <p>Phone: 09999999</p>
            <p>Email: <span><a href="mailto:rishibajaj@abc.com">rishibajaj@abc.com</a></span></p>
            <p>GitHub: <span><Link to="https://github.com/" target="_blank" end>rishibajaj</Link></span></p>
        </Grid>
    )
}

export default ContactInfo;