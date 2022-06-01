import styled from "styled-components";
import React, { useState } from "react";
import Logo from "./Logo";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { auth } from "../firebase/firebase-config";
import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
const RegisterPage = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    username: "",
  });

  onAuthStateChanged(auth, (currentUSer) => {});
  const registerData = async (payload) => {
    payload = {
      email: userData.email,
      password: userData.password,
      username: userData.name,
    };

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );
      prompt("user is registered successfully");
      navigate("/signi");
      // axios.post("https://imdbbackend.herokuapp.com/register", payload).then((data)=>console.log(data))
      // axios
      //   .post("https://imdbbackend.herokuapp.com/register", payload)
      //   .then((data) => {
      //     if (data.status == 200) {
      //       navigate(`/signi`);
      //     }
      //   });
    } catch (error) {
      console.log(error, "error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name !== "name") {
      setUser({ ...user, [name]: value });
    }

    setUserData({ ...userData, [name]: value });
  };
  const sendData = () => {
    console.log(user);
    registerData(user);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        textAlign: "center",
        marginTop: "12px",
      }}
    >
      <div style={{ margin: "12px" }}>
        <Logo></Logo>

        <div
          style={{
            marginTop: "24px",
            display: "flex",
            flexDirection: "column",
            width: "20rem",
            margin: "auto",
            textAlign: "left",
            border: "1px solid #b0a7a7",
            padding: "12px",
            borderRadius: "6px",
          }}
          className="register-input"
        >
          <h4>Create account</h4>
          <label
            style={{ fontSize: "12px", fontWeight: "bold", marginTop: "12px" }}
            htmlFor="name"
          >
            Your name
          </label>
          <input
            onChange={handleChange}
            style={{ fontSize: "12px" }}
            type="text"
            name="name"
          />
          <label
            style={{ fontSize: "12px", fontWeight: "bold", marginTop: "12px" }}
            htmlFor="email"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            style={{ fontSize: "12px" }}
            type="email"
            name="email"
          />

          <label
            style={{ fontSize: "12px", fontWeight: "bold", marginTop: "12px" }}
            htmlFor="password"
          >
            Password
          </label>
          <input
            onChange={handleChange}
            name="password"
            style={{ fontSize: "12px" }}
            type="password"
            placeholder="at least 8 characters"
          />
          <p style={{ fontSize: "12px" }}>
            {" "}
            <span
              style={{
                color: "#4f99bd",
                fontSize: "16px",
                fontStyle: "italic",
                fontWeight: "500",
              }}
            >
              i
            </span>{" "}
            Passwords must be at least 8 characters.
          </p>
          <label
            style={{ fontSize: "12px", fontWeight: "bold", marginTop: "12px" }}
            htmlFor="password"
          >
            Re-enter password
          </label>
          <input
            style={{ fontSize: "12px" }}
            type="password"
            placeholder="********"
          />
          <button
            onClick={sendData}
            style={{
              fontSize: "12px",
              padding: "4px",
              outline: "none",
              borderRadius: "3px",
              margin: "6px 0px",
              fontWeight: "400",
              background: "rgb(240 193 75)",
              borderColor: "rgb(168 135 52) rgb(156 126 49) rgb(132 106 41)",
              color: " rgb(17 17 17)",
            }}
          >
            Create your IMDb account
          </button>
        </div>
        <p style={{ fontSize: "12px", fontWeight: "500" }}>
          Already have an account?{" "}
          <span style={{ color: "#56aee2" }}>
            {" "}
            <Link to="/signi">
              Sign-In <ArrowRightIcon></ArrowRightIcon>{" "}
            </Link>{" "}
          </span>{" "}
        </p>
      </div>
      <hr />
    </div>
  );
};

export default RegisterPage;
