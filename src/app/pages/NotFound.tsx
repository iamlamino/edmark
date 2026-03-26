import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f9fafb] flex items-center justify-center">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-8">
            <h1 className="text-9xl text-[#10b981] mb-4">404</h1>
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Page non trouvée
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#10b981] text-white px-8 py-4 rounded-xl hover:bg-[#16a34a] transition-colors inline-flex items-center space-x-2"
              >
                <Home className="h-5 w-5" />
                <span>Retour à l'accueil</span>
              </motion.button>
            </Link>
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl border-2 border-gray-200 hover:bg-gray-50 transition-colors inline-flex items-center space-x-2"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Voir les produits</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
