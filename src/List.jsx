import React, { useState } from "react";
import { Link } from "react-router-dom";
import Itemcard from "./Itemcard";
import Data from "./Data";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
import blue from "./blue.jpg";
import cart from "./cart.png";
function List({ people }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand" href="#" style={{ fontWeight: "bold" }}>
            TR Grocery Store
          </h1>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
      <CartProvider>
        <div>
          {people.map((value) => {
            return (
              <div
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  textAlign: "center",
                }}
              >
                <h2 style={{ fontWeight: "bold" }}>Hello!</h2>
                <h4
                  style={{
                    fontWeight: "bold",
                    textDecorationLine: "underline",
                  }}
                >
                  {value.firstName} {value.lastName}
                </h4>
                {/* <h5>First Name : {value.firstName}</h5>
                <h5>Last Name : {value.lastName}</h5>
                <h5>E-Mail : {value.email}</h5>
                <h5>Password : {value.password}</h5> */}
              </div>
            );
          })}
        </div>

        <h2
          className="text-center mt-3"
          style={{ fontWeight: "bold", textDecorationLine: "underline" }}
        >
          Available Items
        </h2>
        <section className="py-4 container">
          {/* <h2
            style={{ fontWeight: "bold",marginBottom:"20px" }}
          >
            Available Items
          </h2> */}
          <div className="row justify-content-center">
            {Data.productData.map((item, index) => {
              return (
                <Itemcard
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  price={item.price}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
          <h2
            className="text-center"
            style={{ fontWeight: "bold", textDecorationLine: "underline" }}
          >
            Cart Section
          </h2>
        </section>
        <Cart />
      </CartProvider>
      {/* <Link to="Cart">
        <h3
          style={{
            fontWeight: "bold",
            color: "black",
            textDecorationLine: "underline",
            textAlign: "end",
            marginRight: "5px",
          }}
        >
          Go to Cart
        </h3>
      </Link> */}
    </>
  );
}

export default List;
