import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Profile from "./components/Profile";
// import ProductCard from "./components/ProductCard";
import PostForm from "./components/PostForm";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [category, setCategory] = useState([]);
  const [productspost, setProductsPost] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }
    });
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
          setIsAuthenticated(true);
        });
        fetch("/categories")
          .then((res) => res.json())
          .then((data) => setCategory(data));
      }
    });
  }, []);

  if (!currentUser) return <LoginForm setCurrentUser={setCurrentUser} />;

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
  console.log(isAuthenticated);
  console.log(category);
  //Profile Components
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch("/users")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);

  // const allUsers = users.map((user) => {
  //   console.log(user);
  //   return <Profile users={users} key={user.id} setUsers={setUsers} />;
  // });
  function handleAddProducts(newProducts) {
    setProductsPost([...productspost, newProducts]);
  }

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
            <Profile />
          </Route>
          <Route path="/newpost">
            <PostForm onAddPost={handleAddProducts} currentUser={currentUser} />
          </Route>

          {/* <Route path="/mens">
            <MensPage />
          </Route>
          <Route path="/womens">
            <WomensPage />
          </Route>
          <Route path="/womenscard">
            <ProductCard />
          </Route>
          <Route path="/menscard">
            <ProductCard />
          </Route> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
