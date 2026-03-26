import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

export const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  const handleRemove = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast.success(`${productName} retiré du panier`);
  };

  const handleCheckout = () => {
    // Redirect to WhatsApp with order details
    const orderDetails = cart
      .map((item) => `${item.quantity}x ${item.name} - ${(item.price * item.quantity).toLocaleString()} FCFA`)
      .join("\n");
    
    const message = `Bonjour! Je souhaite commander:\n\n${orderDetails}\n\nTotal: ${getCartTotal().toLocaleString()} FCFA`;
    const whatsappUrl = `https://wa.me/221771234567?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-[#f9fafb] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="bg-[#f0fdf4] w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="h-16 w-16 text-[#10b981]" />
          </div>
          <h1 className="text-3xl mb-4 text-gray-900">Votre panier est vide</h1>
          <p className="text-lg text-gray-600 mb-8">
            Découvrez nos produits et commencez votre parcours bien-être
          </p>
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#10b981] text-white px-8 py-4 rounded-xl hover:bg-[#16a34a] transition-colors inline-flex items-center space-x-2"
            >
              <span>Voir les produits</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f9fafb]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl mb-4 text-gray-900">
              Votre <span className="text-[#10b981]">Panier</span>
            </h1>
            <p className="text-lg text-gray-600">
              {cart.length} article{cart.length !== 1 ? "s" : ""} dans votre panier
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex gap-6">
                  {/* Product Image */}
                  <Link to={`/product/${item.slug}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-xl bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7]"
                    />
                  </Link>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <Link to={`/product/${item.slug}`}>
                          <h3 className="text-lg text-gray-900 hover:text-[#10b981] transition-colors">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-gray-600">{item.category}</p>
                      </div>
                      <button
                        onClick={() => handleRemove(item.id, item.name)}
                        className="text-red-500 hover:text-red-600 transition-colors p-2"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center bg-gray-100 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-200 rounded-l-lg transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-200 rounded-r-lg transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-lg text-gray-900">
                          {(item.price * item.quantity).toLocaleString()} FCFA
                        </p>
                        <p className="text-sm text-gray-600">
                          {item.price.toLocaleString()} FCFA × {item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Clear Cart Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => {
                clearCart();
                toast.success("Panier vidé");
              }}
              className="w-full text-red-500 hover:text-red-600 py-3 transition-colors"
            >
              Vider le panier
            </motion.button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24"
            >
              <h2 className="text-2xl mb-6 text-gray-900">Résumé de la commande</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Sous-total</span>
                  <span>{getCartTotal().toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Livraison</span>
                  <span className="text-[#10b981]">Calculée à la caisse</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between text-xl text-gray-900">
                    <span>Total</span>
                    <span>{getCartTotal().toLocaleString()} FCFA</span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCheckout}
                className="w-full bg-[#10b981] text-white px-6 py-4 rounded-xl hover:bg-[#16a34a] transition-colors mb-4 flex items-center justify-center space-x-2"
              >
                <span>Commander via WhatsApp</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>

              <Link to="/products">
                <button className="w-full bg-gray-100 text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors">
                  Continuer les achats
                </button>
              </Link>

              <div className="mt-6 p-4 bg-[#f0fdf4] rounded-xl">
                <p className="text-sm text-gray-700">
                  <span className="text-[#10b981]">💚</span> Livraison gratuite pour les commandes de plus de 100,000 FCFA
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
