//aqui eh onde o profile do usuario vai aparecer
import * as React from 'react';
import cookie from 'cookie'
import axios from 'axios';
import Container from '@mui/material/Container'
import { Component } from 'react';


// import { useRadioGroup } from '@mui/material/RadioGroup';
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './css/hometest.css';


// export default function Profile() {
//   return (
    const cookies = cookie.parse(document.cookie); // transforma o cookie em json
    console.log(cookies)
    class Home extends Component { //onde essa caralha ta declarada
      constructor(props) {
          super(props)
          this.state = {
              maidInfo: [],
          }
        };


        
    //     componentDidMount() {
    //       axios.get('https://cleaningexpress.herokuapp.com/register')
    //           .then(res => {
                  
    //               const maidInfo = res.data
    //               this.setState({ SingUp })
                  
    //           }).catch(function (error) {
    //               console.log(error)
    //               document.location.reload();
  
    //             })
              
    //   }

      render() {
        return (
            <Container sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
            
            <div class="portfoliocard">
		<div class="coverphoto"></div>
    
		<div class="profile_picture"></div> 
		<div class="left_col">
			<div class="followers">
				<div class="follow_count">Services</div>
				Cleaning
        Washing Clothes
        Dusting
        ...

			</div>
			{/* <div class="following">
			{
            <FormControl>
  <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
  <useRadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={value}
    onChange={handleChange}
  >
    <FormControlLabel value="Requester" control={<Radio />} label="Requester" />
    <FormControlLabel value="Provider" control={<Radio />} label="Provider" />
  </useRadioGroup>
</FormControl> 
				
			</div> */}
		</div>
		<div class="right_col">
			<h2 class="name">Princess Neytiri</h2>
		
			<ul class="contact_information">
				<li class="email"></li>
				<li class="website"><a class="nostyle" href="#">princess@avatar.com</a></li>
				<li class="mail">Phone</li>
				<li class="phone">1-(732)-757-2923</li>
        <li class="zip"> Zip Code</li>
				<li class="resume"><a href="#" class="nostyle">78753</a></li>
			</ul>
      <br></br>  
		</div>
		</div>
            </Container>


        )
              }
            }
            export default Home;

  
    
  
 