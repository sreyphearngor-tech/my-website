const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h5>{product.name}</h5>
    <p>${product.price}</p>
  </div>
);

export default ProductCard;

