import React from "react";

export default function Item(props: any) {
  const [added, setAddedState] = React.useState(false);
  return (
    <div className="product-container">
      <img src={`${props.picture}`} className="product-image" alt="" />
      <div className="product-name">{props.name}</div>
      <div className="product-price"> {props.price + props.currency}</div>
      <div>
        <button
          onClick={() => {
            if (added) return;
            props.addToCart();
            setAddedState(true);
          }}
          className="product-button"
        >
          {added ? "Added" : "Add to cart"}{" "}
        </button>
      </div>
    </div>
  );
}
