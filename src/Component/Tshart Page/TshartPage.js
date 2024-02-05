import React, { useEffect } from "react";
import './TshartPage.css'
import { useState } from "react";
import NewArraival from "../New Arraival/NewArraival";
import { useLocation } from "react-router-dom";


const TshartPage = () => {

  const { tshart } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on route change
  }, [tshart]);

  // const Tsharts = useContext(myContext);

  const [Tsharts, setTsharts] = useState([]);

  useEffect( () => {
    fetch(`http://localhost:5000/tsharts`)
    .then(res => res.json())
    .then(data => setTsharts(data));
  },[])

  const [curentPage, setCurentPage] = useState(1);
  const productPerPage = 9;
  const lastIndex = curentPage * productPerPage;
  const firstIndex = lastIndex - productPerPage;
  const products = Tsharts.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(Tsharts.length / productPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const prevPage = () => {
    if (curentPage !== firstIndex) {
      setCurentPage(curentPage - 1);
    }
  };

  const changePage = (id) => {
    setCurentPage(id);
  };

  const nextPage = () => {
    if (curentPage !== lastIndex) {
      setCurentPage(curentPage + 1);
    }
  };

  return (
    <div>
      <section>
        <div className="container-xxl">
          <div className="row">
            <h1 id="arraival" className="py-3">
              <span style={{color:'#ffc107'}}>T</span>
              <span style={{color: '#ffc107'}}>-</span>
              <span style={{color:'#20c997'}}>S</span>
              <span style={{color:'#75b798'}}>H</span>
              <span style={{color: '#e0cffc'}}>I</span>
              <span style={{color: '#c29ffa'}}>R</span>
              <span style={{color: '#a370f7'}}>T</span>
              <span> </span>
              <span style={{color: '#8540f5'}}>&</span>
              <span> </span>
              <span style={{color: '#6610f2'}}>P</span>
              <span style={{color: '#520dc2'}}>O</span>
              <span style={{color: '#0d6efd'}}>L</span>
              <span style={{color: '#0a58ca'}}>O</span>
              {/* <span style={{color: '#6ea8fe'}}>s</span> */}
            </h1>
            <div className="carts">
              {products.map((tshart) => (
                <NewArraival key={tshart.id} tshart={tshart}></NewArraival>
              ))}
            </div>
          </div>
        </div>
        <div className="container-xxl">
          <div className="row py-5 px-5  ">
            <nav className="">
              <ul className="pagination mb-0">
                <li className="page-item">
                  <a href="#arraival" className="page-link" onClick={prevPage}>
                    Prev
                  </a>
                </li>
                {numbers.map((n, i) => (
                  <li
                    className={`page-item ${curentPage === n ? "active" : ""}`}
                    key={i}
                  >
                    <a
                      className="page-link"
                      href="#arraival"
                      onClick={() => changePage(n)}
                    >
                      {n}
                    </a>
                  </li>
                ))}

                <li className="page-item">
                  <a href="#arraival" className="page-link" onClick={nextPage}>
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TshartPage;
