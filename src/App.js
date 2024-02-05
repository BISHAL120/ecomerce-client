import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import MyState from "./context/data/MyState";
import Home from "./Component/Home/Home";
import Product from "./Product/Product";
import TshartPage from "./Component/Tshart Page/TshartPage";
import AddProduct from "./Pages/AddProduct";
import Footer from "./Component/Footer/Footer";
import Manag from "./Pages/Manage Page/Manag";

function App() {
  return (
    <MyState>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tshart" element={<TshartPage />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/manage" element={<Manag />} />
          <Route path="/tshart/product/:id" element={<Product />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </MyState>
  );
}

export default App;
