import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';



const tiers = [
  {
    title: 'Free Estimate',
    price: '0',
    description: [
        'Commitment Free',
        'Estimate in Minutes',
        'Hassle Free',
        'Help center access',
        'Emal support'
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '150',
    description: [
        'Dusting ceiling fans',
        'Removing cobwebs',
        'Help center access',
        'Scrubbing stovetops'
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '200',
    description: [
        'Most Popular+',
        'Removing cobwebs',
        'Held center access',
        'Scrubbing stovetops',
        'and more...',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];



function PricingContent() {
    const navigate = useNavigate();
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          About Us
        </Typography>
        <Typography variant="h5" align="left" color="text.secondary" text-align= "justify" text-justify= "inter-word">
        Are you looking for a dependable and consistent Maid for your home in the greater Austin area?
        <br></br> CleaningExpress is a company that prides itself on our  
        <Typography variant="h5" align="center" color="text.secondary" text-align= "justify" text-justify= "inter-word"><br></br>100% Clean Guarantee.</Typography><br></br>


If your home is not cleaned to our stringent requirements or you notice something that was missed we will 
return to your home the next day at no additional charge for a complete new reclean of your house!

<br></br>Bonded, Insured, and Screened to Keep Your Family Protected
Have you shopped for a maid service and wondered what would happen to your home or family if this person was not who they said they were?
<br></br> Or maybe you were concerned they might not do an excellent job and leave you hanging when you need them the most?
<br></br>Well CleaningExpress customers do not have to worry! 
Our team is screened and a background check is performed on all employees to ensure you can rest easy and enjoy the smell of a freshly cleaned home!
        </Typography>
      </Container>
      {/* End hero unit */}
      
      {/* Footer */}
      
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Services() {
  return <PricingContent />;
}


