import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import cookie from "cookie";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/maxhomsi/">

      CleaningExpress
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const login = (e) => {
    e.preventDefault();
         e.preventDefault();
      document.cookie = cookie.serialize("loggedIn", "true", {maxAge: 60});

      navigate("/Home");
    };
   /*     axios.post('https://cleaningexpress.herokuapp.com/login', { email: state.email, password: state.password }).then(response => {
            console.log(response);
            
            document.cookie = `jwt=${response.data.signedToken};max-age=60*1000`;
            document.cookie = cookie.serialize("loggedIn", true, { maxAge: 60*100000 });
            document.cookie = `userId=${response.data.userId};max-age=60*1000`
            console.log('headers', response.headers)
            console.log("cookie" , document.cookie)
            navigate("/home")
            document.location.reload();
          
    
            
        })
            .catch(function (error) {
                console.log(error)
            })
  }; */

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cleaning-experts-essentials-buys-1657632352.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
            <TextField
              required
              onChange={handleTextChange}
              value={state.email}
              margin="normal"
              fullWidth
              id="email"
              label="email"
              name="email"
              type="email"
              autoFocus
            />
           <TextField
              required
              onChange={handleTextChange}
              value={state.password}
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                
              >
                
                Login
              </Button>
              
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                <Grid item>
                  <Link href="http://localhost:3000/SignUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}