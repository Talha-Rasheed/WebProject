import React from 'react'
import { useState, Alert } from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import List from "./List";
import { Link } from "react-router-dom";
import Modal from './Modal';

const validation = Yup.object().shape({
  myaddress: Yup.string()
    .required("Address is Required")
    .max(70, "Address can not be bigger than 70 characters")
    .min(10, "Address can not be smaller than 10 characters"),
  number: Yup.string()
    .required("Number is Required")
    .max(15, "Number can not be bigger than 15 characters")
    .min(5, "Number can not be smaller than 5 characters"),
});

function Order() {
    const[myaddress,setMyaddress]=useState();
    const[number,setNumber]=useState();
    const [openModal, setOpenModal] = useState(false);
    const popupalert=()=>{
      alert("Thank You for Shopping");
    }
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <h1
              className="navbar-brand"
              href="#"
              style={{ fontWeight: "bold" }}
            >
              TR Grocery Store
            </h1>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link to="Home">
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
                <Link to="List">
                  <li className="nav-item">
                    <h4
                      className="navbar-brand"
                      style={{ textDecorationLine: "underline" }}
                    >
                      Cart
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

        <Formik
          initialValues={{
            myaddress: "",
            number: "",
          }}
          validationSchema={validation}
        >
          <Form
            style={{
              margin: "auto",
              height: "80%",
              width: "40%",
              marginTop: "70px",
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
                label="Address"
                name="myaddress"
                type="text"
                placeholder="Address"
                style={{ borderRadius: "10px", border: "2px solid" }}
              />
              <TextField
                label="Number"
                name="number"
                type="text"
                placeholder="Number"
                style={{ borderRadius: "10px", border: "2px solid" }}
              />
            </div>
          </Form>
        </Formik>
        <div
          className="openModalBtn"
          style={{ textAlign: "center", marginBottom: "8px" }}
        >
          <button
            onClick={() => {
              setOpenModal(true);
              // setMyaddress(myaddress);
            }}
          >
            Place Order
          </button>
          {openModal && <Modal closeModal={setOpenModal} />}
        </div>

        {/* <div
          style={{
            height: "50vh",
            width: "80vh",
            margin: "auto",
            marginTop: "70px",
          }}
        >
          <form style={{ border: "2px solid black", borderRadius: "15px" }}>
            <label
              style={{
                fontWeight: "bold",
                fontSize: "26px",
                textAlign: "center",
              }}
            >
              Enter Address
              <input
                type="text"
                placeholder="Address"
                value={myaddress}
                style={{ margin: "15px", borderRadius: "7px" }}
                onChange={(e) => setMyaddress(e.target.value)}
              />
            </label>
            <label
              style={{
                fontWeight: "bold",
                fontSize: "26px",
                textAlign: "center",
              }}
            >
              Enter Phone Number
              <input
                type="text"
                placeholder="Phone Number"
                value={number}
                style={{ margin: "15px", borderRadius: "7px" }}
                onChange={(e) => setNumber(e.target.value)}
              />
            </label>
          </form>
        </div>
        <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
          Your order will be delievered at
        </h3>
        <h4 style={{ textAlign: "center" }}>{myaddress}</h4>
        <div style={{ textAlign: "center" }}>
          <Link to="/">
            <button className="btn btn-primary" type="submit" fontWeight="bold">
              Place Order
            </button>
          </Link>
        </div> */}
      </div>
    );
}

export default Order
