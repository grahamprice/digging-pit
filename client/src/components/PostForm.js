import React, { useState } from "react";
// import { Form } from "semantic-ui-react";

function PostForm({ onAddPost, currentUser }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category_id: "",
    user_id: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Semantic UI React's Form component handles the preventDefault automatically!
    const newPost = {
      ...formData,
      user_id: currentUser.id,
    };
    // const newPosts = {
    //   name: formData.name,
    //   description: formData.description,
    //   price: formData.price,
    //   image: formData.image,
    //   category_id: formData.category_id,
    // };

    fetch("/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
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
            type="text"
            label="image"
            placeholder="image"
            name="image"
            value={formData.image}
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
        <button>Submit</button>
      </form>
    </div>
  );
}

export default PostForm;
