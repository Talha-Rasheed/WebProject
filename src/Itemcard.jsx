import React from "react";

import { useCart } from "react-use-cart";

const Itemcard = (props) => {
  const { addItem } = useCart();
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div class="card p-1 overflow-hidden h-100 shadow" style={{border:"2px solid blue", borderTopLeftRadius:"50px",borderBottomRightRadius:"50px"}}>
        <img src={props.img} class="card-img-top img-fluid" style={{height:"200px", borderTopLeftRadius:"45px"}}/>
        <div class="card-body text-center">
          <h4
            class="card-title"
            style={{ fontWeight: "bold", textDecorationLine: "underline" }}
          >
            {props.title}
          </h4>
          <h5 class="card-title" style={{fontWeight:"bold"}}>Rs/- {props.price}</h5>
          <p class="card-text">{props.desc}</p>
          <button class="btn btn-primary" onClick={() => addItem(props.item)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Itemcard;
