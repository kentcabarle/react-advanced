import React, { Component } from "react";
import UserContext from "./context/userContext";
import CartContext from "./context/cartContext";
import MoviesPage from "./context/MoviesPage";
import Login from "./context/Login";
import "./App.css";

class App extends Component {
  handleLogin = (username) => {
    console.log("Getting username " + username);
    const user = { name: username };
    this.setState({ currentUser: user });
  };

  state = { currentUser: null };

  render() {
    return (
      <CartContext.Provider value={{ cart: ["Apples", "Bananas"] }}>
        <UserContext.Provider
          value={{ currentUser: this.state.currentUser, onLogin: this.handleLogin }}
        >
          <div>
            <MoviesPage />
          </div>
          <Login />
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}

export default App;

// import "./App.css";
// import MoviesPage from "./context/MoviesPage";
// // import Counter from "./hooks/Counter";
// // import Movie from "./hoc/Movie";
// // import Users from "./hoc/Users";
// import UserContext from "./context/userContext";
// import Login from "./context/Login";

// function App() {
//   return (
//     <div className="App">
//       <MoviesPage />
//     </div>
//   );
// }

// export default App;
