

// src/components/Cart.jsx
import React, { useContext, useState } from "react";
import { productContext } from "../context/ProductContext";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdRemoveCircleOutline, IoMdAddCircleOutline } from "react-icons/io";

const Cart = () => {
  const { cart, setCart } = useContext(productContext);
  const navigate = useNavigate();
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Increase quantity
  const increaseQuantity = (item) => {
    setCart(
      cart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        )
      );
    } else {
      removeItem(item);
    }
  };

  // Remove item
  const removeItem = (item) => {
    setCart(cart.filter((i) => i.id !== item.id));
  };

  // Subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.new_price * item.quantity,
    0
  );

  const placeOrder = () => {
    setCart([]);
    setOrderSuccess(true);

    setTimeout(() => {
      navigate("/success");
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {orderSuccess && (
        <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-800 font-medium rounded-xl text-center shadow-sm">
          🎉 Order placed successfully!
        </div>
      )}

      {cart.length > 0 ? (
        <div className="flex flex-col gap-6">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-6 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="w-32 h-32 flex items-center justify-center bg-gray-50 rounded-xl">
                <img
                  src={product.image}
                  alt={product.brand}
                  className="w-28 h-28 object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col gap-2 flex-1">
                <p className="text-xl font-bold text-gray-900">{product.brand}</p>
                <p className="text-xl text-red-700">Price: ${product.new_price}</p>

                {/* Quantity control */}
                <div className="flex items-center gap-3 mt-2">
                  <IoMdRemoveCircleOutline
                    className="text-red-500 text-3xl cursor-pointer hover:text-red-700"
                    onClick={() => decreaseQuantity(product)}
                  />
                  <span className="text-base font-medium px-3 py-1 bg-gray-200 rounded-lg">
                    {product.quantity}
                  </span>
                  <IoMdAddCircleOutline
                    className="text-green-500 text-3xl cursor-pointer hover:text-green-700"
                    onClick={() => increaseQuantity(product)}
                  />
                </div>
              </div>

              {/* Price + Remove */}
              <div className="flex flex-col items-end gap-3">
                <p className="text-xl font-bold text-blue-900">
                  ${product.new_price * product.quantity}
                </p>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  onClick={() => removeItem(product)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Summary */}
          <div className="flex justify-between items-center mt-6 p-6 bg-white shadow-md rounded-2xl">
            <p className="text-xl font-semibold text-gray-800">
              Subtotal ({cart.length} items):{" "}
              <span className="text-blue-900 font-bold text-2xl">
                ${subtotal}
              </span>
            </p>

            <button
              className="bg-blue-600 text-white text-lg px-8 py-3 rounded-xl hover:bg-blue-700"
              onClick={placeOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-5 py-24">
          <FaShoppingCart className="text-7xl text-gray-300" />
          <p className="text-3xl font-semibold text-gray-600">Your cart is empty</p>
          <Link to="/" className="text-blue-600 text-lg font-medium hover:underline">
            Add Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
