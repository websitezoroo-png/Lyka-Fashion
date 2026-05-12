import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Search, Filter, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  imageUrl: string;
  stock: number;
}

interface CollectionsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (productId: number) => void;
  favorites: number[];
}

export default function Collections({ products, onAddToCart, onToggleFavorite, favorites }: CollectionsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showProductModal, setShowProductModal] = useState(false);

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight text-[#B8860B]">
            LYKA FASHION
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider text-gray-600">
            <a href="/" className="hover:text-black transition">Home</a>
            <a href="/collections" className="hover:text-black transition text-black font-semibold">Collections</a>
            <a href="/about" className="hover:text-black transition">About</a>
            <a href="/contact" className="hover:text-black transition">Contact</a>
          </div>
          <div className="flex gap-5 items-center text-gray-600">
            <a href="https://instagram.com/lyka.fashion" target="_blank" rel="noreferrer" className="hover:text-black transition">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#FDFBF7] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Collections
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our carefully curated collections of luxury fashion pieces, each crafted with meticulous attention to detail and traditional artistry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="py-8 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-lg px-10 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-[#B8860B] transition shadow-sm"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg transition flex items-center gap-2 text-gray-700 shadow-sm"
            >
              <Filter size={18} /> Filters
            </button>
          </div>

          {/* Category Filter */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <h3 className="font-semibold mb-4 text-black">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                      className={`px-4 py-2 rounded-lg transition ${
                        (selectedCategory === null && category === 'All') || selectedCategory === category
                          ? 'bg-[#B8860B] text-white font-semibold'
                          : 'bg-white hover:bg-gray-100 border border-gray-200 text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Count */}
          <div className="mt-4 text-gray-600 text-sm">
            Showing {filteredProducts.length} of {products.length} products
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  onClick={() => {
                    setSelectedProduct(product);
                    setShowProductModal(true);
                  }}
                  className="group cursor-pointer"
                >
                  <div className="relative h-80 bg-white rounded-md overflow-hidden mb-4 shadow-sm border border-gray-100">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    <div className="absolute top-3 right-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(product.id);
                        }}
                        className="p-2 bg-white/80 hover:bg-white rounded-full transition shadow-sm"
                      >
                        <Heart size={18} fill={favorites.includes(product.id) ? '#B8860B' : 'none'} color={favorites.includes(product.id) ? '#B8860B' : '#666'} />
                      </button>
                    </div>
                    {product.originalPrice && (
                      <div className="absolute top-3 left-3 bg-red-500 px-3 py-1 rounded text-sm font-semibold text-white">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>
                  <h3 className="font-medium text-lg mb-1 text-gray-900">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg font-semibold text-[#B8860B]">₹{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through text-xs">₹{product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  <p className="text-gray-500 text-xs mb-4">{product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    className="w-full bg-white border border-gray-200 text-gray-800 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition shadow-sm"
                  >
                    Add to Cart
                  </button>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No products found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {showProductModal && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowProductModal(false)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg max-w-2xl w-full overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <div className="flex items-center justify-center bg-gray-100 rounded-lg h-96">
                  <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-full object-cover rounded" />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2 text-black">{selectedProduct.name}</h2>
                    <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                    <div className="flex gap-3 items-center mb-6">
                      <span className="text-3xl font-bold text-black">₹{selectedProduct.price.toLocaleString()}</span>
                      {selectedProduct.originalPrice && (
                        <span className="text-gray-500 line-through">₹{selectedProduct.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-6">Stock: {selectedProduct.stock} available</p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        onAddToCart(selectedProduct);
                        setShowProductModal(false);
                      }}
                      className="flex-1 bg-[#B8860B] text-white py-3 rounded-lg font-semibold hover:bg-[#966d09] transition flex items-center justify-center gap-2"
                    >
                      <ShoppingBag size={20} /> Add to Cart
                    </button>
                    <button
                      onClick={() => onToggleFavorite(selectedProduct.id)}
                      className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                    >
                      <Heart size={20} fill={favorites.includes(selectedProduct.id) ? 'currentColor' : 'none'} color={favorites.includes(selectedProduct.id) ? '#B8860B' : '#666'} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-20 px-4 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 tracking-tight text-[#B8860B]">LYKA FASHION</h3>
            <p className="text-gray-500 max-w-sm leading-relaxed">Elevating traditional Kashmiri craftsmanship for the modern world. Our pieces are designed for eternity, blending heritage with contemporary style.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-black uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><a href="/" className="hover:text-[#B8860B] transition">Home</a></li>
              <li><a href="/collections" className="hover:text-[#B8860B] transition">Collections</a></li>
              <li><a href="/about" className="hover:text-[#B8860B] transition">Our Story</a></li>
              <li><a href="/contact" className="hover:text-[#B8860B] transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-black uppercase tracking-wider text-sm">Connect With Us</h4>
            <div className="flex gap-5">
              <a href="https://instagram.com/lyka.fashion" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#B8860B] transition"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#B8860B] transition"><MessageCircle size={20} /></a>
            </div>
            <div className="mt-8">
              <p className="text-gray-500 text-sm">Bandipora, Jammu & Kashmir</p>
              <p className="text-gray-500 text-sm mt-1">contact@lykafashion.com</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-100 text-center text-gray-400 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} LYKA FASHION. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
