import React from 'react';
import { Box, Container, Typography, Button, LinearProgress, Stepper, Step, StepLabel, StepContent } from '@mui/material';
import { Link } from "react-router-dom";
import Header from './Landing Page/Header';

export default function Consultation () {
    return (
        <>
        <Header></Header>
            <div className='start-assessment'>
                    <div className='ss-inner'>
                        <Typography variant="h3" align="center" gutterBottom className='ss-title'>
                            Get AI Consultation
                        </Typography>
                        <div className='career-time'>
                            <Typography variant="h6" align="center" gutterBottom className='ct-title'>
                                10 minutes career test
                            </Typography>
                        </div>
                        <Link to="/consultant">
                            <Button variant="contained" >Start the assessment</Button>
                        </Link>
                        <img src='/images/png/career-assess.webp' />
                    </div>
            </div>
        </>
    );
}