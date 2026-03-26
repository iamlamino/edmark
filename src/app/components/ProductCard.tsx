import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Product } from "../data/products";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} ajouté au panier!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link to={`/product/${product.slug}`}>
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
          {/* Image Container */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm">
                  Rupture de stock
                </span>
              </div>
            )}
            {product.featured && (
              <div className="absolute top-3 right-3 bg-[#10b981] text-white px-3 py-1 rounded-full text-xs">
                Populaire
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="mb-2">
              <span className="text-xs text-[#10b981] bg-[#dcfce7] px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
            <h3 className="text-lg mb-2 text-gray-900 line-clamp-1">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {product.shortDescription}
            </p>
            
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl text-gray-900">
                  {product.price.toLocaleString()}
                </span>
                <span className="text-sm text-gray-600 ml-1">{product.currency}</span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="bg-[#10b981] text-white p-2 rounded-lg hover:bg-[#16a34a] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
