import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${item.itemname}`)}
      className="
      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      cursor-pointer"
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.itemname}
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="p-3">
        <h3 className="font-semibold text-sm truncate">
          {item.itemname}
        </h3>

        <p className="text-xs text-gray-500">
          {item.category}
        </p>

        <button className="mt-3 w-full bg-green-600 text-white text-sm py-1.5 rounded hover:bg-green-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;