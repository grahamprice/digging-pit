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
    <div>
      <h3>Add a Post!</h3>
      <form onSubmit={handleSubmit}>
        <div widths="equal">
          <input
            label="Name"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            label="description"
            placeholder="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            label="price"
            placeholder="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />

          <input
            type="file"
            label="poster"
            placeholder="poster"
            name="poster"
            onChange={handlePoster}
          />
          <input
            label="size"
            placeholder="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
          />
          <input
            label="category_id"
            placeholder="category_id"
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={() => {
            alert("Post Added :)");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default PostForm;
