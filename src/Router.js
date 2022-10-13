import React from 'react'
import { Routes, Route } from 'react-router'
import { Navigate  } from "react-router-dom"
import cookie from "cookie"
import Login from './components/Login'
// import Selection from './components/Selection'
import SignUp from './components/Register'
import Search from './components/Search'
// import Results from './components/Results'
import Home from './components/Home' //profile do usuario
import Forgot from './components/Forgot'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
// import Events from './components/Events'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  };



const ProtectedRoute = (props) => {

    const { component: Component, ...rest } = props;
  
    return (
      checkAuth() === true ? ( <Component {...rest} /> ) : ( <Navigate to="/" /> )
    );
  };
  

const Router = () => {
    return (
        <Routes>
            {/* <Route path='/' element={<Events/>}/> */}
            <Route path="/" element={<Login/>} />
            {/* <Route path='/' element={<ProtectedRoute component={}/>}/> */}
            {/* <Route path='car/:id' element={<ProtectedRoute component={Car}/>} /> */}
            {/* <Route path="/Selection" element={<Selection/>} /> */}
            <Route path="/SignUp" element={<SignUp/>} /> 
            <Route path="/Search" element={<Search/>} /> 
            {/* <Route path="/Results" element={<Results/>} />  */}
            <Route path="/Home" element={<Home/>} /> 
            {/* <Route path="/Forgot" element={<Forgot/>} />  */}
            <Route path="/Services" element={<Services/>} /> 
            <Route path="/Pricing" element={<Pricing/>} /> 
            <Route path="/Contact" element={<Contact/>} /> 
            {/* <Route path="/Register" element={<SignIn/>} />  */}
        </Routes>
    )
}


export default Router;