import { useParams, useNavigate } from "react-router-dom";
import data from "../data/data";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();

  const product = data.find(
    (item) => item.itemname === name
  );

  if (!product) return <p className="p-6">Not Found</p>;

  // check if already in cart
  const isInCart = cart.some(
    (item) => item.itemname === product.itemname
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">

      <div className="grid md:grid-cols-2 gap-6">

        {/* Image */}
        <img
          src={product.image}
          alt={product.itemname}
          className="w-full rounded-lg shadow"
        />

        {/* Details */}
        <div>
          <h2 className="text-2xl font-bold">
            {product.itemname}
          </h2>

          <p className="text-gray-500 mb-4">
            {product.category}
          </p>

          {/* Price (if exists) */}
          {product.price && (
            <p className="text-xl font-semibold text-green-600 mb-4">
              ₹ {product.price}
            </p>
          )}

          {/* Dynamic Props */}
          <div className="space-y-2 mb-6">
            {product.itemprops.map((prop, i) => (
              <div
                key={i}
                className="flex justify-between border-b py-2"
              >
                <span className="font-medium">
                  {prop.label}
                </span>
                <span className="text-gray-600">
                  {prop.value}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">

            {!isInCart ? (
              <button
                onClick={() => addToCart(product)}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              >
                Add to Cart 🛒
              </button>
            ) : (
              <button
                onClick={() => navigate("/cart")}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Go to Cart →
              </button>
            )}

          </div>

        </div>
      </div>

    </div>
  );
};

export default ProductDetail;