import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { useHistory } from "react-router";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import AllUser from "./AllUser";
import Home from "./Home";
import SignUp from "./SignUp";
const validation = Yup.object().shape({
  firstName: Yup.string().required("First Name Is Required"),
  lastName: Yup.string().required("Last Name Is Required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .required("Password is Required")
    .min(5, "Can't be smaller than 5 characters"),
});

function Updation({ handleChange, data }) {
  const { id } = useParams();
  const [applicant, setApplicant] = useState([]);
  console.log(id);
  useEffect(() => {
    const data = axios
      .get(`http://localhost:1234/app/User/${id}`)
      .then((response) => {
        console.log(response);
        setApplicant(response.data);

        console.log(applicant);
      });
    return () => {};
  }, []);

  const history = useHistory();
  console.log("Applicant:", applicant);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand" href="#" style={{ fontWeight: "bold" }}>
            TR Grocery Store
          </h1>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <Link to="Home">
                <li className="nav-item">
                  <h4
                    className="navbar-brand"
                    style={{ textDecorationLine: "underline" }}
                  >
                    Home
                  </h4>
                </li>
              </Link>
              <Link to="SignUp">
                <li className="nav-item">
                  <h4
                    className="navbar-brand"
                    style={{ textDecorationLine: "underline" }}
                  >
                    Sign Up
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
              </Link> */}
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={validation}
          onSubmit={(values) => {
            axios
              .put(`http://localhost:1234/app/UpdateUser/${id}`, values)
              .then((response) => console.log(response.data));
            // window.location.reload();
          }}
        >
          <Form>
            <div
              className="container"
              style={{
                marginTop: "150px",
                width: "300px",
                border: "2px solid black",
              }}
            >
              <TextField label="First Name" name="firstName" type="text" />
              <TextField label="Last Name" name="lastName" type="text" />
              <TextField label="Email" name="email" type="text" />
              <TextField label="Password" name="password" type="text" />
              <button
                style={{
                  marginLeft: "65px",
                  width: "150px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
                className="btn btn-primary"
                type="submit"
                onClick={() => {
                  setTimeout(() => history.push("/SignUp"), 3000);
                }}
              >
                UPDATE
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default Updation;
