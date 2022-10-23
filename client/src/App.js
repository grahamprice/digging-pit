import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import PostForm from "./components/PostForm";
import ShoppingCart from "./components/ShoppingCart";
import { UserContext } from "./index";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [productspost, setProductsPost] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  // useEffect(() => {
  //   fetch("/me").then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => {
  //         setCurrentUser(user);
  //         setIsLoggedIn(true);
  //         setIsAuthenticated(true);
  //       });
  //     }
  //   });
  // }, []);

  const handleSignUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => alert(error.message))
      .then((authUser) => {
        return authUser;
      });
  };

  const handleLogin = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    fetch("/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  // Authorization;
  // if (currentUser === null)
  //   return <LoginForm setCurrentUser={setCurrentUser} />;

  //Search Products
  const productsToDisplay = products.filter((prod) =>
    prod.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Delete Products
  // function handleDeleteProduct(productToDelete) {
  //   const updatedProduct = products.filter(
  //     (prod) => prod.id !== productToDelete
  //   );
  //   setProducts(updatedProduct);
  // }

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

  //Products Post
  function handleAddProducts(newProducts) {
    setProductsPost([...productspost, newProducts]);
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={currentUser}>
        <NavBar
          // handleLogout={handleLogout}
          isLoggedIn={isLoggedIn}
          setCart={setCart}
          cart={cart}
          product={products}
          onChangeSearch={setSearchTerm}
          searchTerm={searchTerm}
          setProducts={setProducts}
          currentUser={currentUser}
        />

        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home
                cart={cart}
                setCart={setCart}
                products={productsToDisplay}
                setProducts={setProducts}
                searchTerm={searchTerm}
              />
            </Route>
            <Route path="/login">
              <LoginForm
                currentUser={currentUser}
                setIsLoggedIn={setIsLoggedIn}
                setCurrentUser={setCurrentUser}
                handleLogout={handleLogout}
                handleLogin={handleLogin}
                password={password}
                email={email}
                setPassword={setPassword}
                setEmail={setEmail}
              />
            </Route>
            <Route path="/signup">
              <SignupForm
                setCurrentUser={setCurrentUser}
                setIsLoggedIn={setIsLoggedIn}
                handleSignUp={handleSignUp}
                password={password}
                email={email}
                setPassword={setPassword}
                setEmail={setEmail}
              />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/newpost">
              <PostForm
                onAddPost={handleAddProducts}
                currentUser={currentUser}
              />
            </Route>
            <Route path="/cart">
              <ShoppingCart
                // onDeleteProduct={handleDeleteProduct}
                product={products}
              />
            </Route>
            {/* <Route path="/checkout">
            <Checkout />
          </Route> */}

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
      </UserContext.Provider>
    </BrowserRouter>
  );
}
export default App;
