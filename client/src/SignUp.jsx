import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import vegetables from "./vegetables.jpeg";
import store from "./store.jpg";
import online from "./online.jpg";
import poster from "./poster.jpg";
import trolley from "./trolley.jpg";
import delivery from "./delivery.gif";
import List from "./List";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import img from "./img.png";
import mainposter from "./mainposter.png";
import axios from "axios";
import AllUser from "./AllUser";

const validation = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is Required")
    .max(15, "First Name can not be bigger than 15 characters")
    .min(5, "First Name can not be smaller than 5 characters"),
  lastName: Yup.string()
    .required("Last Name is Required")
    .max(15, "Last Name can not be bigger than 15 characters")
    .min(5, "Last Name can not be smaller than 5 characters"),
  email: Yup.string().email("Invalid Email").required("E-Mail is Required"),
  password: Yup.string()
    .required("Password is Required")
    .max(10, "Password can not be greater than 10 characters")
    .min(5, "Password can not be smaller than 5 characters"),
});

function SignUp({ transferData, data }) {
  const history = useHistory();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand" href="#" style={{ fontWeight: "bold" }}>
            TR Grocery Store
          </h1>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/">
                <li className="nav-item">
                  <h4
                    className="navbar-brand"
                    style={{ textDecorationLine: "underline" }}
                  >
                    Home
                  </h4>
                </li>
              </Link>
              <Link to="AllUser">
                <li className="nav-item">
                  <h4
                    className="navbar-brand"
                    style={{ textDecorationLine: "underline" }}
                  >
                    All Users
                  </h4>
                </li>
              </Link>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <div className="row">
        <div
          style={{ backgroundColor: "red", width: "50%", textAlign: "center" }}
        >
          <img
            src={mainposter}
            style={{
              // backgroundColor: "purple",
              height: "87vh",
              width: "30vw",
              borderBottomLeftRadius: "50px",
              borderBottomRightRadius: "50px",
              // border: "2px solid black ",
            }}
            alt="Main Poster"
          />
        </div>
        <div style={{ backgroundColor: "purple", width: "50%" }}>
          <h2
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: "darkblue",
            }}
          >
            Ready to Buy?
          </h2>
          <h4
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: "skyblue",
            }}
          >
            Register Yourself
          </h4>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={validation}
            onSubmit={(values) => {
              const temp = [...data];
              temp.push(values);
              console.log(values);
              transferData(temp);
              history.push("/List");
            }}
          >
            <Form
              style={{
                // margin: "auto",
                height: "80%",
                width: "60%",
                // marginTop: "-170px",
              }}
            >
              <div
                className="container-fluid"
                style={{
                  border: "3px solid",
                  borderRadius: "15px",
                  backgroundColor: "white",
                }}
              >
                <h4
                  style={{
                    fontWeight: "bold",
                    fontSize: 25,
                    marginTop: "8px",
                  }}
                >
                  Enter your Information
                </h4>
                <TextField
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  style={{ borderRadius: "10px", border: "2px solid" }}
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  style={{ borderRadius: "10px", border: "2px solid" }}
                />
                <TextField
                  label="E-Mail"
                  name="email"
                  type="text"
                  placeholder="E-Mail"
                  style={{ borderRadius: "10px", border: "2px solid" }}
                />
                <TextField
                  label="Password"
                  name="password"
                  type="text"
                  placeholder="Password"
                  style={{ borderRadius: "10px", border: "2px solid" }}
                />
                <div style={{ textAlign: "center", marginBottom: "8px" }}>
                  <button className="btn btn-primary" type="submit">
                    Sign Up
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div> */}

      {/* <div style={{ textAlign: "center" }}>
        <img
          src={store}
          style={{
            WebkitBackgroundSize: "cover",
            marginRight: "10px",
            borderRadius: "15px",
            height: "40vh",
            width: "50vw",
          }}
          alt="Store"
        />
      </div> */}
      {/* <img
        src={vegetables}
        style={{
          WebkitBackgroundSize: "cover",
          marginRight: "10px",
          borderRadius: "15px",
        }}
        alt="Vegetables"
      /> */}

      <div style={{ display: "flex" }}>
        <img
          src={mainposter}
          style={{
            // backgroundColor: "purple",
            height: "90vh",
            width: "30vw",
            margin: "auto",
            borderBottomLeftRadius: "50px",
            borderBottomRightRadius: "50px",
            // border: "2px solid black ",
          }}
          alt="Main Poster"
        />
        <div style={{ margin: "auto" }}>
          <h2
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: "darkblue",
            }}
          >
            Ready to Buy?
          </h2>
          <h4
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: "skyblue",
            }}
          >
            Register Yourself
          </h4>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={validation}
            onSubmit={(values) => {
              const temp = [...data];
              temp.push(values);
              console.log(values);
              transferData(temp);
              axios
                .post("http://localhost:1234/app/SignUp", values)
                .then((response) => console.log(response.data));
              //window.location.reload();

              history.push("/List");
            }}
          >
            <Form
              style={{
                // margin: "auto",
                height: "80%",
                width: "100%",
                // marginTop: "-170px",
              }}
            >
              <div
                className="container-fluid"
                style={{
                  border: "3px solid",
                  borderRadius: "15px",
                  backgroundColor: "white",
                }}
              >
                <h4
                  style={{
                    fontWeight: "bold",
                    fontSize: 25,
                    marginTop: "8px",
                  }}
                >
                  Enter your Information
                </h4>
                <TextField
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  style={{ borderRadius: "10px", border: "2px solid" }}
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  style={{ borderRadius: "10px", border: "2px solid" }}
                />
                <TextField
                  label="E-Mail"
                  name="email"
                  type="text"
                  placeholder="E-Mail"
                  style={{ borderRadius: "10px", border: "2px solid" }}
                />
                <TextField
                  label="Password"
                  name="password"
                  type="text"
                  placeholder="Password"
                  style={{ borderRadius: "10px", border: "2px solid" }}
                />
                <div style={{ textAlign: "center", marginBottom: "8px" }}>
                  <button className="btn btn-primary" type="submit">
                    Sign Up
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default SignUp;
