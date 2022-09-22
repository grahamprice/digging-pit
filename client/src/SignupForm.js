import React, { useState } from "react";

const SignupForm = ({ setCurrentUser, setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  function handleSubmit(e) {
    e.preventDefault();

    const userCreds = { ...formData };

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="first-name">First Name:</label>
      <input
        id="first-name-signup-input"
        type="text"
        name="first-name"
        value={formData.first_name}
        onChange={handleChange}
      />
      <label htmlFor="last-name">Last Name:</label>
      <input
        id="last-name-signup-input"
        type="text"
        name="last-name"
        value={formData.last_name}
        onChange={handleChange}
      />
      <label htmlFor="username">Username:</label>
      <input
        id="username-signup-input"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email-signup-input"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password-signup-input"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
