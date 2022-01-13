import React from "react";
import axios from "axios";
import Home from "./Home";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const AllUser = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const data = axios
      .get("http://localhost:1234/app/users")
      .then((response) => {
        console.log(response);
        setUser(response.data);
      });
    return () => {};
  }, []);

  const handleDelete = (id) => {
    //alert(id);
    axios
      .delete(`http://localhost:1234/app/User/${id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
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
          </div>
        </div>
      </nav>
      {user.map((call) => {
        return (
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">E-Mail</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{call.firstName}</td>
                <td>{call.email}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => handleDelete(call._id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`/UpdateUser/${call._id}`}>
                    <button className="btn btn-danger">Update</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default AllUser;
