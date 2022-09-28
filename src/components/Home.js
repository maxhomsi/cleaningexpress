//aqui eh onde o profile do usuario vai aparecer

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function BasicSelect() {
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <Box sx={{ maxWidth: 100, margin: "auto", marginTop: "10px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Quality</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Quality"
            onChange={handleChange}
          >
            <MenuItem value={1}>Low</MenuItem>
            <MenuItem value={2}>Normal</MenuItem>
            <MenuItem value={3}>High</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }

const label = { inputProps: { 'aria-label': 'Switch demo' } };
function valuetext(value) {
    return `${value}°C`;
  }


const card1 = (
  <React.Fragment>
    <CardContent>
      
      <Typography variant="h5" component="div">
        Online Mode
        <br />
        <br />
      </Typography>
     
      <Typography variant="body2">
        Is this application connected to the internet?
                <br />
      </Typography>
      <Switch sx={{marginTop: "30px"}} {...label} />
    </CardContent>
    
  </React.Fragment>
);

const card2 = (
    <React.Fragment>
    <CardContent>
      
      <Typography variant="h5" component="div">
        Master Volume
        <br />
        <br />
      </Typography>
     
      <Typography variant="body2">
        Overrides all other sound settings in this application
                <br />
      </Typography>
      <Slider
        sx={{marginTop: "30px"}}
        aria-label="Small steps"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={10}
        marks
        min={0}
        max={100}
        valueLabelDisplay="auto"
      />
    </CardContent>
    
      </React.Fragment>
)

const card3 = (
    <React.Fragment>
    <CardContent>
      
      <Typography variant="h5" component="div">
         Sound Quality
        <br />
        <br />
      </Typography>
     
      <Typography variant="body2">
        Manually control the music 
        quality in event of poor connection
                <br />
      </Typography>
     <BasicSelect sx={{ minWidth: 120 }} />

    </CardContent>
    
    

      </React.Fragment>
)


export default function OutlinedCard() {
   
  return (
    <Box sx={{ minWidth: 100%"", display:"flex", margin:"1%"}}>
      <Card variant="outlined" sx={{maxWidth: 300}}>{card1}</Card>
      <Card variant="outlined" sx={{marginLeft:"20px", maxWidth: 300}}>{card2}</Card>
      <Card variant="outlined" sx={{marginLeft:"20px",  maxWidth: 300}}>{card3}</Card>

      

    </Box>
  );
}