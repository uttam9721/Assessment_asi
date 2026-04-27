import { useState, useEffect } from "react";
import data from "../data/data";
import ProductCard from "../components/ProductCard";
import SkeletonCard from "../components/SkeletonCard";
console.log(data);


const Home = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const categories = ["All", ...new Set(data.map((i) => i.category))];

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const filtered = data.filter((item) => {
    const searchMatch = item.itemname
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || item.category === category;

    return searchMatch && categoryMatch;
  });

  return (
    <div className="p-6">

      {/* 🔍 Search + Category */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded w-full md:w-1/4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c, i) => (
            <option key={i}>{c}</option>
          ))}
        </select>
      </div>

      {/* 🧩 Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {loading
          ? Array(8)
              .fill(0)
              .map((_, i) => <SkeletonCard key={i} />)
          : filtered.map((item, index) => (
              <ProductCard key={index} item={item} index={index} />
            ))}
      </div>

      {!loading && filtered.length === 0 && (
        <p className="text-center mt-6 text-gray-500">
          No results found 😢
        </p>
      )}
    </div>
  );
};

export default Home;