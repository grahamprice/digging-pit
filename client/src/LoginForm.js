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
  const [isShown, setIsShown] = useState(false);
  const history = useHistory();

  const handleClick = (event) => {
    setIsShown((current) => !current);
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
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };

  return (
    <div id="login-container">
      <header id="login-header">The Digging Pit</header>
      <img
        className="mb-3 h-24 w-24 rounded-full shadow-lg"
        src="https://i.ebayimg.com/images/g/fNkAAOSwWHRhoud5/s-l140.webp"
        alt="Logo image"
        id="login-logo"
      />
      <div id="form-container">
        <form onSubmit={handleSubmit} id="login-form">
          <div class="mb-6">
            <label
              htmlFor="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Username:
            </label>
            <input
              id="username-input"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Username..."
            />
          </div>
          <div class="mb-6">
            <label
              htmlFor="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Password:
            </label>
            <input
              id="password-input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            id="profile-submit-button"
            class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Submit
          </button>
          <p>Don't have an account? </p>

          <button onClick={handleClick}>Click Here</button>
          {isShown && <SignupForm />}
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default LoginForm;
