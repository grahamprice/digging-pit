import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import MensPage from "./components/MensPage";
import MensProductCard from "./components/MensProductCard";
import WomensPage from "./components/WomensPage";
import WomensProductCard from "./components/WomensProductCard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const history = useHistory();

  // Me Fetch
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);

  //Logout
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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <LoginForm
              currentUser={currentUser}
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
          <Route path="/mens">
            <MensPage />
          </Route>
          <Route path="/womens">
            <WomensPage />
          </Route>
          <Route path="/womenscard">
            <WomensProductCard />
          </Route>
          <Route path="/menscard">
            <MensProductCard />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
