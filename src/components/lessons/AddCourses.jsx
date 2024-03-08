import React, { useEffect, useState } from "react";
import { useLesson } from "../../context/LessonContextProvider";

const AddProduct = () => {
  const { createLesson, categories, getCategories } = useLesson();
  useEffect(() => {
    getCategories();
  }, []);
  console.log(categories);
  const [title, setTitle] = useState("");
  const [desciption, setDesciption] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");
  const [vid, setVid] = useState("");
  const handleCLick = () => {
    const newLesson = new FormData();
    newLesson.append("title", title);
    newLesson.append("description", desciption);
    newLesson.append("price", price);
    newLesson.append("image", img);
    newLesson.append("category", category);
    newLesson.append("video", vid);
    createLesson(newLesson);
  };
  return (
    <div>
      <h2>Add Lesson</h2>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => setDesciption(e.target.value)}
      />
      <input
        type="text"
        placeholder="price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="file"
        placeholder="img"
        onChange={(e) => setImg(e.target.files[0])}
        accept="image/"
      />
      <input
        type="text"
        placeholder="video"
        onChange={(e) => setVid(e.target.files[0])}
        accept="vid/"
      />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option>Choose category</option>
        {categories.map((elem) => (
          <option value={elem.id} key={elem.id}>
            {elem.title}
          </option>
        ))}
      </select>
      <button onClick={handleCLick}>Add Product</button>
    </div>
  );
};

export default AddProduct;
