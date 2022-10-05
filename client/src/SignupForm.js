import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const SignupForm = ({ setCurrentUser, setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const history = useHistory();

  // const toLoginForm = () => {
  //   history.push("/login");
  // };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    console.log("in hadnle submit");

    fetch("/users", {
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
  }

  return (
    <div class="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form onSubmit={handleSubmit} class="space-y-6">
        <label
          htmlFor="first-name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          First Name:
        </label>
        <input
          id="first-name-signup-input"
          type="text"
          name="first-name"
          placeholder="First Name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          value={formData.first_name}
          onChange={handleChange}
        />
        <label
          htmlFor="last-name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Last Name:
        </label>
        <input
          id="last-name-signup-input"
          type="text"
          name="last-name"
          placeholder="Last Name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          value={formData.last_name}
          onChange={handleChange}
        />
        <label
          htmlFor="username"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Username:
        </label>
        <input
          id="username-signup-input"
          type="text"
          name="username"
          placeholder="Username"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          value={formData.username}
          onChange={handleChange}
        />
        <label
          htmlFor="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Email:
        </label>
        <input
          id="email-signup-input"
          type="text"
          name="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="name@email.com"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <label
          htmlFor="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Password:
        </label>
        <input
          id="password-signup-input"
          type="password"
          name="password"
          placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
