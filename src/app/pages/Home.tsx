import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Leaf, ShieldCheck, Heart, Star, ArrowRight } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { getFeaturedProducts } from "../data/products";

export const Home: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  const benefits = [
    {
      icon: Leaf,
      title: "100% Naturel",
      description: "Ingrédients naturels soigneusement sélectionnés pour votre bien-être",
    },
    {
      icon: ShieldCheck,
      title: "Qualité Certifiée",
      description: "Produits testés et certifiés selon les normes internationales",
    },
    {
      icon: Heart,
      title: "Soutien Digestif",
      description: "Améliore la digestion et favorise la santé intestinale",
    },
  ];

  const testimonials = [
    {
      name: "Fatou Diop",
      location: "Dakar",
      rating: 5,
      text: "Les produits Edmark ont transformé ma santé. Je me sens plus énergique et en meilleure forme!",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&q=80",
    },
    {
      name: "Moussa Seck",
      location: "Thiès",
      rating: 5,
      text: "Le Splina Chlorophyll a vraiment amélioré ma digestion. Je recommande vivement!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    },
    {
      name: "Aïssatou Fall",
      location: "Saint-Louis",
      rating: 5,
      text: "Service excellent et produits de qualité. Edmark Senegal est ma référence bien-être!",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f0fdf4] via-white to-[#dcfce7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-gray-900">
                Votre Santé,{" "}
                <span className="text-[#10b981]">Notre Priorité</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Découvrez les produits de bien-être Edmark au Sénégal. Des solutions naturelles pour une vie plus saine, plus énergique et plus épanouie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-[#10b981] text-white px-8 py-4 rounded-xl hover:bg-[#16a34a] transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-[#10b981]/30"
                  >
                    <span>Découvrir nos produits</span>
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </Link>
                <Link to="/distributor">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-white text-[#10b981] px-8 py-4 rounded-xl border-2 border-[#10b981] hover:bg-[#f0fdf4] transition-colors"
                  >
                    Devenir distributeur
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80"
                alt="Wellness products"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#dcfce7] p-3 rounded-xl">
                    <Heart className="h-6 w-6 text-[#10b981]" />
                  </div>
                  <div>
                    <p className="text-2xl text-gray-900">1000+</p>
                    <p className="text-sm text-gray-600">Clients satisfaits</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -z-10 opacity-20">
          <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
            <defs>
              <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#10b981" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#grid)" />
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Pourquoi choisir <span className="text-[#10b981]">Edmark</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des produits de qualité supérieure pour votre bien-être quotidien
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#f0fdf4] to-white p-8 rounded-2xl border border-[#dcfce7] hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#10b981] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f9fafb]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Nos Produits <span className="text-[#10b981]">Populaires</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez nos best-sellers pour votre santé et votre bien-être
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#10b981] text-white px-8 py-4 rounded-xl hover:bg-[#16a34a] transition-colors inline-flex items-center space-x-2"
              >
                <span>Voir tous les produits</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Ce que disent nos <span className="text-[#10b981]">clients</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des milliers de clients satisfaits à travers le Sénégal
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#fbbf24] fill-[#fbbf24]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#10b981] to-[#16a34a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl mb-6 text-white">
              Prêt à transformer votre santé?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers de personnes qui ont fait confiance à Edmark pour leur bien-être
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-white text-[#10b981] px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Commencer maintenant
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-transparent text-white px-8 py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-colors"
                >
                  Nous contacter
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
