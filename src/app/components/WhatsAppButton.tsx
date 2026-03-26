import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export const WhatsAppButton: React.FC = () => {
  const whatsappNumber = "221771234567"; // Replace with actual WhatsApp number
  const message = "Bonjour! J'aimerais en savoir plus sur les produits Edmark.";

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <motion.span
        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        1
      </motion.span>
    </motion.button>
  );
};
