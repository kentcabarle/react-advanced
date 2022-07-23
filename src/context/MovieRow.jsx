import React, { useContext } from "react";
import CartContext from "./cartContext";
import UserContext from "./userContext";

const MovieRow = (props) => {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  console.log("User context", userContext);
  console.log("Cart context", cartContext);
  return (
    <React.Fragment>
      <div>Movie row - {userContext.currentUser ? userContext.currentUser.name : ""}</div>
      <div>Cart items</div>
      {
        <ul>
          {cartContext.cart.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      }
    </React.Fragment>
  );
};

export default MovieRow;
