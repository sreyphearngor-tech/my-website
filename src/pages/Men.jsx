import product_data from "../data/products";
import ProductCard from "../components/ProductCard";

const Men = () => {
  const menProducts = product_data.filter((p) => p.category === "men");

  return (
    <div className="px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Men's Collection</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Men;