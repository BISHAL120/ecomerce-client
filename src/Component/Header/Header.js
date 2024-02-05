import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="header" className="header-secion-1">
        <div className="header-top-strip d-flex justify-content-center align-items-center  py-2 ">
          <p className="text-white mb-0 ">
            Sign up and get 20% off to your first order.
          </p>
          <Link to="">Sing Up Now</Link>
        </div>
        <div className="">
          <div className="Navbar d-none d-lg-flex container-xxl">
            <div className="logo-menu col-6">
              <div className="logo">
                <Link to="/">
                  <h1>SHOP.CO</h1>
                </Link>
              </div>
              <div className="menu">
                <div class="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item" to="/tshart">
                        T-shirt & Polo
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/jeans">
                        Jeans
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/shoes">
                        Shoes
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/addproduct">
                        Add Product
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/manage">
                        Manage Product
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="/">On Sale</Link>
                <Link to="/">New Arrivals</Link>
                <Link to="/">Brands</Link>
              </div>
            </div>
            <div className="col-6 row justify-content-end ">
              <div className="search-card">
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <BsSearch />
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search for products..."
                    aria-label="Search for products..."
                    aria-describedby="basic-addon1"
                  />
                </div>
                <Link className="position-relative text-black py-1" to="card">
                  <PiShoppingCartSimpleBold />
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                    +99 <span class="visually-hidden">unread messages</span>
                  </span>
                </Link>
                <FaRegUserCircle />
              </div>
            </div>
          </div>
          <div className="Mobile-navbar d-lg-none">
            <div className="container-xxl">
              <div className="row align-items-center justify-content-between py-4">
                <div className="logo d-flex align-items-center col-6 text-start px-2">
                  <CgMenu
                    onClick={() => setOpen(!open)}
                    className="fs-2 me-2 "
                  />
                  <div className="logo">
                    <h1 className="mb-0 fs-2 ">SHOP.CO</h1>
                  </div>
                </div>
                <div className="icons col-6 text-end px-2">
                  <BsSearch className="fs-3 me-2 " />
                  <Link className="text-black" to="/card">
                    <PiShoppingCartSimpleBold className="fs-3 me-2" />
                  </Link>
                  <Link className="text-black" to="/profile">
                    <FaRegUserCircle className="fs-3" />
                  </Link>
                </div>
              </div>
            </div>

            <div
              className={`menus d-flex align-content-start flex-column ${
                open ? "active" : ""
              }`}
            >
              <Link className=" text-black" to="/">
                On Sale
              </Link>
              <Link className=" text-black" to="/">
                New Arrivals
              </Link>
              <Link className=" text-black" to="/">
                Brands
              </Link>
              <Link className=" text-black" to="/">
                Cart
              </Link>
              <Link className=" text-black" to="/">
                Profile
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
