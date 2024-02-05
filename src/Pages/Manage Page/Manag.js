import React, { useState } from "react";
import "./Manage.css";
import useTsharts from "../../Component/Hook/UseTsharts";

const Manag = () => {
  const [tsharts, setTsharts] = useTsharts();

  const handleDelete = (id) => {
    const confirm = window.confirm('are you sure. You want to delete ??');
    if(confirm) {
        const url = `http://localhost:5000/tsharts/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = tsharts.filter(tshart => tshart._id !== id);
            setTsharts(remaining);
        })
    }
  }

  return (
    <div>
      <div className="container-xxl">
        <div className="row">
          <div className="Manage">
            <h1>This Is Tsharts Manage Page</h1>
          </div>
          <div className="full-product">
            {tsharts.map((tshart) => (
              <div className="single-product" key={tshart._id}>
                <img src={tshart.img1} alt="" />
                <div>
                  <h5>{tshart.tittle}</h5>
                  <p>{tshart.rating}</p>
                  <span>{tshart.price}</span>
                </div>
                <button onClick={() => handleDelete(tshart._id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manag;
