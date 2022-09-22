import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import NavBar from "./components/NavBar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);

  const history = { useHistory };

  console.log(currentUser);

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
        setIsLoggedIn(false);
        history.push("/");
      }
    });
  };

  return (
    <BrowserRouter>
      <NavBar handleLogout={handleLogout} isLoggedIn={isLoggedIn} />

      <div className="App">
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/login">
            <LoginForm
              // isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              setCurrentUser={setCurrentUser}
              handleLogout={handleLogout}
            />
          </Route>
          <Route path="/signup">
            <SignupForm
              setCurrentUser={setCurrentUser}
              setIsLoggedIn={setIsLoggedIn}
            />
          </Route>
          <Route path="/profile">
            <h1>Profile</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
