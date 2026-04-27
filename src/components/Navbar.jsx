import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const Navbar = () => {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  // total quantity
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="bg-green-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-xl font-bold tracking-wide text-[#D7CCC8]">
            CatalogApp
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "hover:text-[#A1887F]"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/"
            className="hover:text-[#A1887F]"
          >
            Categories
          </NavLink>

          <NavLink
            to="/"
            className="hover:text-[#A1887F]"
          >
            About
          </NavLink>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <FaShoppingCart size={20} />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-1.5 rounded-full font-bold animate-bounce">
                {totalItems}
              </span>
            )}
          </Link>

        </div>

        {/* Mobile Icon */}
        <div className="md:hidden flex items-center gap-4">

          {/* Cart */}
          <Link to="/cart" className="relative">
            <FaShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-1.5 rounded-full font-bold">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Menu Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-700 px-6 pb-4 space-y-3 text-sm">

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-yellow-300"
          >
            Home
          </NavLink>

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-yellow-300"
          >
            Categories
          </NavLink>

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-yellow-300"
          >
            About
          </NavLink>

        </div>
      )}
    </nav>
  );
};

export default Navbar;