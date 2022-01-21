import React from "react";
import { productsList } from "./data";
import "./App.css";
import Item from "./item";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="conatiner">
      Items in cart: {count}
      {productsList.map((product: any, key: number) => {
        return (
          <Item
            {...product}
            addToCart={() => {
              setCount(count + 1);
            }}
          />
        );
      })}
    </div>
  );
}

export default App;
