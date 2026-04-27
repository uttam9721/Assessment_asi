const Footer = () => {
  return (
    <footer className="bg-green-700 text-white mt-12 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand + SEO Description */}
        <div>
          <h2 className="text-xl font-bold text-[#D7CCC8]">
            CatalogApp
          </h2>
          <p className="text-sm mt-3 text-gray-200 leading-relaxed">
            CatalogApp is a modern multi-category product catalog platform where users can explore 
            Cars, Bikes, Phones, and Computers in one place. Built with performance and usability in mind, 
            it offers a seamless browsing experience across devices.
          </p>
        </div>

        {/* Categories (SEO keywords) */}
        <div>
          <h3 className="font-semibold mb-3">Categories</h3>
          <ul className="text-sm space-y-2 text-gray-200">
            <li>Cars Collection</li>
            <li>Bikes Collection</li>
            <li>Latest Smartphones</li>
            <li>Computers & Laptops</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm space-y-2 text-gray-200">
            <li>Home</li>
            <li>About Us</li>
            <li>Product Catalog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* SEO Keywords Section */}
        <div>
          <h3 className="font-semibold mb-3">Explore More</h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            Discover top-quality products including electric cars, premium bikes, flagship smartphones, 
            and high-performance laptops. Stay updated with the latest technology trends and innovations.
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-500 mt-8 pt-4 text-center text-sm text-gray-300 px-6">
        <p>
          © {new Date().getFullYear()} CatalogApp. All rights reserved.
        </p>
        <p className="mt-1">
          Designed & Developed by Uttam Kumar 🚀
        </p>
      </div>
    </footer>
  );
};

export default Footer;