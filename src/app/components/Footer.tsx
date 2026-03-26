import React from "react";
import { Link } from "react-router";
import { Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-[#10b981] fill-[#10b981]" />
              <span className="ml-2 text-xl font-semibold">Edmark Senegal</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Votre partenaire bien-être au Sénégal. Produits de santé naturels de qualité premium.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#10b981] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#10b981] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#10b981] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#10b981] transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-[#10b981] transition-colors">
                  Produits
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#10b981] transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/distributor" className="text-gray-400 hover:text-[#10b981] transition-colors">
                  Devenir Distributeur
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#10b981] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Catégories</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Detox & Nettoyage</li>
              <li className="text-gray-400">Immunité & Bien-être</li>
              <li className="text-gray-400">Énergie & Vitalité</li>
              <li className="text-gray-400">Anti-âge & Cellules</li>
              <li className="text-gray-400">Santé Digestive</li>
              <li className="text-gray-400">Santé Cardiaque</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2 text-gray-400">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#10b981]" />
                <span>Dakar, Sénégal</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#10b981]" />
                <span>+221 77 123 45 67</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#10b981]" />
                <span>contact@edmarksenegal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Edmark Senegal. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
