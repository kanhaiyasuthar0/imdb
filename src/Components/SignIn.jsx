import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import AppleIcon from "@mui/icons-material/Apple";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { AuthContext } from "../Context/AuthContext";
import UserDropdown from "./UserDropdown";
import axios from "axios";

const SignIn = () => {
    const {vId , setVId, setProgress, isSuccess} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{
      console.log("timer is going on");
     let timer =  setInterval(() => {
        if(isSuccess){
         clearInterval(timer)
          navigate("/")
        }
      }, 500);
    }, [isSuccess])
   const handleSign = ()=>{
    setProgress(10)
    navigate("/signi")
    setProgress(100)
   }
   const handlegoogle = async ()=>{
    //  let timer: NodeJS.Timeout | null = null;

    const url = "https://imdbbackend.herokuapp.com/google";

    const newWindow = window.open(url, "_blank", "width=600, height=700")
    console.log("first")
    let payload = {
      email: "kanhaiyasuthar0@gmail.com",
      password : "403"
    }
    localStorage.setItem("userdetails", JSON.stringify(payload));
    setTimeout(() => {
      navigate("/")
    }, 8000);
    // window.close()
   }
  return (
      <>
      
    <div style={{background:"rgba(200,200,196,255)"}}>

  
    <div style={{ display: "flex", flexDirection: "row", color: "black",background:"white", justifyContent:"space-evenly" ,height:"60vh", width:"75vw", margin:"auto" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        //   background:"white"
        
        }}
      >
        <h5> <AdminPanelSettingsIcon></AdminPanelSettingsIcon> Sign In</h5>
        <Button style={{textTransform:"capitalize", fontWeight:"bolder", color:"rgba(88,88,88,255)", border:"1px solid rgba(88,88,88,255)", display:"flex", justifyContent:"space-between"}}  variant="outlined">
          {" "}
          <LocalMoviesIcon sx={{ margin: "0 1rem" }}></LocalMoviesIcon> <div>  Sign In
          With IMDb  </div>
        </Button>
        <Button  style={{textTransform:"capitalize", fontWeight:"bolder", color:"rgba(88,88,88,255)", border:"1px solid rgba(88,88,88,255)", display:"flex", justifyContent:"space-between"}} variant="outlined">
          {" "}
          <i
            class="fa-brands fa-amazon"
            style={{ margin: "0 1rem", fontSize: "1.5rem" }}
          ></i>{" "}
          <div> Sign In With Amazon  </div>
          
        </Button>
        <Button  style={{textTransform:"capitalize", fontWeight:"bolder", color:"rgba(88,88,88,255)", border:"1px solid rgba(88,88,88,255)",display:"flex", justifyContent:"space-between"}} variant="outlined">
          {" "}
          <FacebookIcon sx={{ margin: "0 1rem" }}></FacebookIcon>  <div> Sign In With Facebook  </div> 
          
        </Button>
        <Button onClick={handlegoogle}  style={{textTransform:"capitalize", fontWeight:"bolder", color:"rgba(88,88,88,255)", border:"1px solid rgba(88,88,88,255)",display:"flex", justifyContent:"space-between"}} variant="outlined">
          {" "}
          <GoogleIcon sx={{ margin: "0 1rem" }}> </GoogleIcon> <div> Sign In With Google  </div> 
          
        </Button>
        <Button  style={{textTransform:"capitalize", fontWeight:"bolder", color:"rgba(88,88,88,255)", border:"1px solid rgba(88,88,88,255)",display:"flex", justifyContent:"space-between"}} variant="outlined">
          {" "}
          <AppleIcon sx={{ margin: "0 1rem" }}></AppleIcon> <div> Sign In With Apple </div>
        </Button>
        <h5>or</h5>
        <Link style={{textDecoration:"none"}} to="/registeri">
          <button style={{
              // background: "#f2c75e",
             
              fontSize: "12px",
              width:"200px",
              outline: "none",
              border: "none",
              borderRadius: "3px",
              height:"25px",
              fontWeight: "500",
              background: "#e4b721",
              
            }}variant="contained">
          {" "}
         Create A New
          Account
        </button></Link>
     
        <p style={{ maxWidth: "20vw", fontSize:"0.8rem" }}>
          By signing in, you agree to IMDb's Conditions of Use and Privacy
          Policy
        </p>
      </div>

      <div>
        <div>
          <h3   >Benefits of your free IMDb account </h3>
          <h5> Personalized Recommendations </h5>
          <p> Discover shows you'll love. </p>
          <h5> Your Watchlist </h5>
          <p>
            {" "}
            Track everything you want to watch and receive e-mail when movies
            open in theaters.
          </p>
          <h5> Your Ratings </h5>
          <p> Rate and remember everything you've seen. </p>
          <h5> Contribute to IMDb</h5>
          <p>
            {" "}
            Add data that will be seen by millions of people and get cool
            badges.{" "}
          </p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default SignIn;
