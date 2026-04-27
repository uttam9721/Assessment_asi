import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCart();

  // total price (if price exists)
  const totalPrice = cart.reduce(
    (acc, item) => acc + (item.price || 0) * item.qty,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center text-gray-500">
        <h2 className="text-2xl font-semibold mb-2">Your Cart is Empty 🛒</h2>
        <p>Add some products to see them here.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">

      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      <div className="grid md:grid-cols-3 gap-6">

        {/* LEFT: Items */}
        <div className="md:col-span-2 space-y-4">

          {cart.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row gap-4 border rounded-lg p-4 shadow-sm"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.itemname}
                className="w-full sm:w-32 h-32 object-cover rounded"
              />

              {/* Info */}
              <div className="flex-1">

                <h3 className="font-semibold text-lg">
                  {item.itemname}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.category}
                </p>

                {/* Price */}
                <p className="mt-2 font-bold text-green-600">
                  ₹ {item.price || "N/A"}
                </p>

                {/* Qty Controls */}
                <div className="flex items-center gap-3 mt-3">

                  <button
                    onClick={() => updateQty(item.itemname, "dec")}
                    className="px-2 py-1 border rounded hover:bg-gray-100"
                  >
                    -
                  </button>

                  <span className="font-semibold">{item.qty}</span>

                  <button
                    onClick={() => updateQty(item.itemname, "inc")}
                    className="px-2 py-1 border rounded hover:bg-gray-100"
                  >
                    +
                  </button>

                </div>

              </div>

              {/* Right Side */}
              <div className="flex flex-col justify-between items-end">

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.itemname)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>

                {/* Item Total */}
                <p className="font-semibold text-gray-700">
                  ₹ {(item.price || 0) * item.qty}
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* RIGHT: Summary */}
        <div className="border rounded-lg p-4 h-fit shadow-sm">

          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

          <div className="flex justify-between mb-2">
            <span>Total Items</span>
            <span>
              {cart.reduce((acc, item) => acc + item.qty, 0)}
            </span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Total Price</span>
            <span className="font-bold text-green-600">
              ₹ {totalPrice}
            </span>
          </div>

          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
            Checkout
          </button>

        </div>

      </div>
    </div>
  );
};

export default Cart;