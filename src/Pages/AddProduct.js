import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const url = `http://localhost:5000/tsharts`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    reset();
  };

  return (
    <div>
      <div className="w-50 mx-auto">
        <h1>add product here</h1>

        <form
          className=" d-flex flex-column gap-3 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="tittle"
            {...register("tittle", { required: true })}
          />
          <input
            placeholder="price"
            type="number"
            {...register("price", { required: true })}
          />
          <input
            placeholder="rating"
            {...register("rating", { required: true })}
          />
          <textarea
            placeholder="description"
            type="text"
            {...register("description", { required: true })}
          />
          <input
            placeholder="Image-1"
            {...register("img1", { required: true })}
          />
          <input
            placeholder="Image-2"
            {...register("img2", { required: true })}
          />
          <input
            placeholder="Image-3"
            {...register("img3", { required: true })}
          />
          <input
            placeholder="Category"
            {...register("category", { required: true })}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
