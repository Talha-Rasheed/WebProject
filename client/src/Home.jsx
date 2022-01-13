import React from "react";
import { Link } from "react-router-dom";
import img from "./img.png";
import poster from "./poster.jpg";
function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand" href="#" style={{ fontWeight: "bold" }}>
            TR Grocery Store
          </h1>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
      <div
        style={{
          textAlign: "center",
        }}
      >
        <img
          src={img}
          style={{
            height: "200px",
            width: "200px",
          }}
          alt="Logo"
        />
      </div>

      <div id="row1">
        <div id="column">
          <h1
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 40,
              textDecorationLine: "overline",
            }}
          >
            Welcome!
          </h1>
          <div id="decor">
            <h3 style={{ fontWeight: "bold" }}>Now Buy Groceries Online</h3>
            <h5>And get your groceries delivered at your gate</h5>
            <div>
              <img
                src={poster}
                style={{
                  margin: "5px",
                  borderRadius: "20px",
                  height: 400,
                  width: 500,
                }}
                alt="Poster"
              />
            </div>
            <h5 style={{ fontWeight: "bold" }}>Enjoy Shopping!</h5>
          </div>
          <div
            style={{
              marginTop: "7px",
            }}
          >
            <Link to="SignUp">
              <button
                className="btn btn-primary"
                type="submit"
                fontWeight="bold"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
