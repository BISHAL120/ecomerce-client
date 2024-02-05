import "./NewArraival.css";
import { useNavigate } from "react-router-dom";

const NewArraival = (props) => {
  const { _id, tittle, rating, price, img1 } = props.tshart;

  const navigate = useNavigate();
  const detail = (_id) => {
    navigate(`product/${_id}`);
  };

  return (
    <div>
      <section onClick={() => detail(_id)} className="Arraival-section1">
        <div className="container-xxl">
          <div className="row mx-auto">
            <div className="cart">
              <img src={img1} alt="t-shart-img" />
              <div className="cart-detail">
                <h2 className="tittle mt-4">{tittle}</h2>
                <p className="rating">Rating : {rating}</p>
                <p className="price">${price}</p>
                <button className="border-0 ">Add To Card</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewArraival;
