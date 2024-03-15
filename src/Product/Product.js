import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineMinus } from "react-icons/ai";
import "./Product.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Product = () => {
  const { id } = useParams();

  const [tsharts, setTsharts] = useState({});

  useEffect(() => {
    const url = `https://ecomerve-app-server.vercel.app/tsharts/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setTsharts(data));
  }, [id]);

  // const product = tsharts.find((tshart) => tshart.id === id);
  const [discount, setDiscount] = useState(20);
  const [size, setSize] = useState(false);
  const [size2, setSize2] = useState(false);
  const [size3, setSize3] = useState(false);
  const [size4, setSize4] = useState(false);
  const [number, setNumber] = useState(0);

  const Discount = tsharts.price * (discount / 100);
  let DiscountPrice = tsharts.price - Discount;
  const sizeReset = () => {
    setSize(false);
    setSize2(false);
    setSize3(false);
    setSize4(false);
  };

  const minus = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div className="Product">
      <div className="container-xxl">
        <div className="row py-4">
          <div className="product">
            <div className="product-img-div w-50 ">
              <Carousel
                showArrows={false}
                showIndicators={false}
                showStatus={false}
              >
                <div>
                  <img src={tsharts.img1} alt="Product Images" />
                </div>
                <div>
                  <img src={tsharts.img2} alt="Product Images" />
                </div>
                <div>
                  <img src={tsharts.img3} alt="Product Images" />
                </div>
              </Carousel>
            </div>
            <div className="product-detail-div w-50 ">
              <div className="heading">
                <h1>{tsharts.tittle}</h1>
              </div>
              <div>
                <p>Ratting: {tsharts.rating}/5</p>
              </div>
              <div className="price">
                <div className="curentPrice">
                  <p>${DiscountPrice.toFixed(2)}</p>
                </div>
                <div className="PreviousPrice">
                  <p>${tsharts.price}</p>
                </div>
                <div className="discount">
                  <p>-{discount}%</p>
                </div>
              </div>
              <div className="description">
                <p>{tsharts.discription}</p>
              </div>
              <div className="size">
                <p>Choose Size</p>
                <div className="choseSize">
                  <div
                    onClick={() => {
                      sizeReset();
                      setSize(!size);
                    }}
                    className={`${size ? "sizeActice" : ""}`}
                  >
                    <p>Small</p>
                  </div>
                  <div
                    onClick={() => {
                      sizeReset();
                      setSize2(!size2);
                    }}
                    className={`${size2 ? "sizeActice" : ""}`}
                  >
                    <p>Medium</p>
                  </div>
                  <div
                    onClick={() => {
                      sizeReset();
                      setSize3(!size3);
                    }}
                    className={`${size3 ? "sizeActice" : ""}`}
                  >
                    <p>Large</p>
                  </div>
                  <div
                    onClick={() => {
                      sizeReset();
                      setSize4(!size4);
                    }}
                    className={`${size4 ? "sizeActice" : ""}`}
                  >
                    <p>X-Large</p>
                  </div>
                </div>
              </div>
              <div className="Quantity-cart">
                <div className="quantity">
                  <div className=" d-flex gap-4 justify-content-between ">
                    <button onClick={() => minus()} className="minus">
                      <AiOutlineMinus />
                    </button>
                    <p className="number">{number}</p>
                    <button
                      onClick={() => setNumber(number + 1)}
                      className="plus"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="AddTocart">
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
