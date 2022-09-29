import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import SignupForm from "./SignupForm";

const LoginForm = ({
  currentUser,
  setCurrentUser,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const history = useHistory();

  const toSignUpForm = () => {
    history.push("/signup");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
          history.push("/");
          // console.log(isLoggedIn);
          // console.log(currentUser);
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username-input"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      {/* <label htmlFor="email">Email:</label>
      <input
        id="email-input"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      /> */}
      <label htmlFor="password">Password:</label>
      <input
        id="password-input"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      <p>Don't have an account? </p>
      <button onClick={toSignUpForm}>Click Here</button>
    </form>
  );
};

export default LoginForm;
