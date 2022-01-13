import React, { useState } from "react";
import List from "./List";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return (
      <h4 style={{ fontWeight: "bold" }} className="text-center">
        Your cart is currently Empty
      </h4>
    );
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand" href="#" style={{ fontWeight: "bold" }}>
            TR Grocery Store
          </h1>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="List">
                <li className="nav-item">
                  <h4
                    className="navbar-brand"
                    style={{ textDecorationLine: "underline" }}
                  >
                    Go Back Shopping
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
      <br></br> */}
      {/* <div style={{ textAlign: "center" }} class="container">
        <div class="row align-items-start">
          <div style={{ textDecorationLine: "underline" }} class="col">
            <h5 style={{ fontWeight: "bold" }}>Mango</h5>
          </div>
          <div class="col">2.5kg</div>
          <div class="col">Rs 375/-</div>
        </div>
        <div class="row align-items-center">
          <div style={{ textDecorationLine: "underline" }} class="col">
            <h5 style={{ fontWeight: "bold" }}>Blueberries</h5>
          </div>
          <div class="col">3kg</div>
          <div class="col">Rs 360/-</div>
        </div>
        <div class="row align-items-end">
          <div style={{ textDecorationLine: "underline" }} class="col">
            <h5 style={{ fontWeight: "bold" }}>Garlic</h5>
          </div>
          <div class="col">1kg</div>
          <div class="col">Rs 300/-</div>
        </div>
      </div> */}
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12">
            {/* <h2 style={{fontWeight:"bold",marginBottom:"20px"}}>Cart Section</h2> */}
            <h4>
              <b style={{ textDecorationLine: "underline" }}>Cart :</b>{" "}
              <small style={{ fontSize: "20px" }}>({totalUniqueItems})</small>
            </h4>
            <h4>
              <b style={{ textDecorationLine: "underline" }}>Total Items :</b>{" "}
              <small style={{ fontSize: "20px" }}>({totalItems})</small>
            </h4>
            <table className="table table-light table-hover m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img src={item.img} style={{ height: "6rem" }} />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>Quantity ({item.quantity})</td>
                      <td>
                        <button
                          className="btn btn-primary ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button
                          className="btn btn-danger ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <button
                          className="btn btn-success ms-2"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h3 style={{ marginTop: "15px" }}>
              <b style={{ textDecorationLine: "underline" }}>Total Price :</b>{" "}
              <small style={{ fontSize: "20px" }}>Rs/- {cartTotal}</small>
            </h3>
          </div>
          {/* <div className="col-auto ms-auto">
            <h2 style={{ fontWeight: "bold" }}>
              Total Price: Rs/- {cartTotal}
            </h2>
          </div> */}
          <div style={{ textAlign: "center",marginBottom:"15px" }}>
            <button className="btn btn-danger" onClick={() => emptyCart()}>
              Clear Cart
            </button>
          </div>
          <Link to="Order" style={{ textAlign: "center" }}>
            <button className="btn btn-primary" type="submit" fontWeight="bold">
              Buy Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Cart;
