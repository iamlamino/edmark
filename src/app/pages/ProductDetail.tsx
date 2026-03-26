import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { ShoppingCart, Check, Minus, Plus, ArrowLeft, Heart } from "lucide-react";
import { getProductBySlug, getRelatedProducts } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4 text-gray-900">Produit non trouvé</h1>
          <Link to="/products" className="text-[#10b981] hover:underline">
            Retour aux produits
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, product.category);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${quantity} × ${product.name} ajouté au panier!`);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-[#f9fafb] py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 hover:text-[#10b981] transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Retour</span>
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="sticky top-24">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.featured && (
                  <div className="absolute top-4 right-4 bg-[#10b981] text-white px-4 py-2 rounded-full text-sm">
                    Populaire
                  </div>
                )}
              </div>
              
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? "border-[#10b981] scale-105"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="mb-4">
              <span className="inline-block bg-[#dcfce7] text-[#166534] px-4 py-2 rounded-full text-sm">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              {product.name}
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              {product.shortDescription}
            </p>

            <div className="mb-8">
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl text-gray-900">
                  {product.price.toLocaleString()}
                </span>
                <span className="text-xl text-gray-600">{product.currency}</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-gray-700 mb-3">Quantité</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center bg-gray-100 rounded-xl">
                  <button
                    onClick={decrementQuantity}
                    className="p-3 hover:bg-gray-200 rounded-l-xl transition-colors"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="px-6 text-lg">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="p-3 hover:bg-gray-200 rounded-r-xl transition-colors"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-[#10b981] text-white px-8 py-4 rounded-xl hover:bg-[#16a34a] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>{product.inStock ? "Ajouter au panier" : "Rupture de stock"}</span>
                </motion.button>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8 p-6 bg-[#f9fafb] rounded-2xl">
              <h3 className="text-xl mb-4 text-gray-900">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="text-xl mb-4 text-gray-900">Bienfaits</h3>
              <ul className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="bg-[#dcfce7] p-1 rounded-full mt-0.5">
                      <Check className="h-4 w-4 text-[#10b981]" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Ingredients */}
            <div className="mb-8">
              <h3 className="text-xl mb-4 text-gray-900">Ingrédients</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="bg-white border border-[#10b981] text-[#166534] px-4 py-2 rounded-full text-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* How to Use */}
            <div className="p-6 bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-2xl">
              <h3 className="text-xl mb-3 text-gray-900">Mode d'emploi</h3>
              <p className="text-gray-700">{product.howToUse}</p>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl mb-8 text-gray-900 text-center">
              Produits <span className="text-[#10b981]">similaires</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
