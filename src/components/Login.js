import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import cookie from "cookie";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
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
      document.cookie = cookie.serialize("loggedIn", "true", {maxAge: 60});

      navigate("/Home");
    };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
              type= "email"
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
            <Link to="/Home">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button></Link>
            <Grid container>
              
              <Grid item>
                
                  {"Don't have an account?"} <Link href="/SignUp" variant="body2">{"Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}