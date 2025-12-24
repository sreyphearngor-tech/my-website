import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Card = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={item.image} className="card-img" />
      <h3>{item.name}</h3>
      <p>${item.price}</p>

      <button className="btn" onClick={() => addToCart(item)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;