import React, { useState } from "react";
// import { Form } from "semantic-ui-react";

function PostForm({ onAddPost, currentUser }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    size: "",
    category_id: "",
    user_id: "",
    poster: null,
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handlePoster(e) {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("image", formData.image);
    data.append("size", formData.size);
    data.append("category_id", formData.category_id);
    data.append("user_id", currentUser.id);
    data.append("poster", formData.poster);
    fetch("/products", {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: data,
    })
      .then((r) => r.json())
      .then(onAddPost);
  }

  return (
    <div className="flex flex-col items-center  border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div class="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit} class="space-y-6">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            Add a Post!
          </h3>
          <div widths="equal">
            <input
              label="Name"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <input
              label="description"
              placeholder="description"
              name="description"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              value={formData.description}
              onChange={handleChange}
            />
            <input
              label="price"
              placeholder="price"
              name="price"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              value={formData.price}
              onChange={handleChange}
            />

            <input
              type="file"
              label="poster"
              placeholder="poster"
              name="poster"
              className="flex items-center"
              onChange={handlePoster}
            />
            <input
              label="size"
              placeholder="size"
              name="size"
              value={formData.size}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={handleChange}
            />
            <input
              label="category_id"
              placeholder="category_id"
              name="category_id"
              value={formData.category_id}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={handleChange}
            />
          </div>
          <button
            class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => {
              alert("Post Added :)");
            }}
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
