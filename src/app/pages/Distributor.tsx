import React from "react";
import { motion } from "motion/react";
import { TrendingUp, Users, Award, DollarSign, Target, Briefcase, Check } from "lucide-react";
import { Link } from "react-router";

export const Distributor: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Revenus illimités",
      description: "Construisez votre propre entreprise avec un potentiel de revenus sans limites",
    },
    {
      icon: Users,
      title: "Équipe & Formation",
      description: "Formation complète et support continu pour votre succès",
    },
    {
      icon: Award,
      title: "Reconnaissance",
      description: "Système de récompenses et voyages d'incentive pour les meilleurs performers",
    },
    {
      icon: DollarSign,
      title: "Investissement minimal",
      description: "Commencez votre business avec un investissement abordable",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Inscription",
      description: "Inscrivez-vous en tant que distributeur Edmark",
    },
    {
      number: "02",
      title: "Formation",
      description: "Suivez notre programme de formation complet sur les produits",
    },
    {
      number: "03",
      title: "Vente & Partage",
      description: "Commencez à vendre et à partager les produits",
    },
    {
      number: "04",
      title: "Construisez votre équipe",
      description: "Développez votre réseau et augmentez vos revenus",
    },
  ];

  const packages = [
    {
      name: "Starter",
      price: "75,000",
      features: [
        "Kit de démarrage",
        "Formation de base",
        "Support en ligne",
        "Commission 25%",
      ],
    },
    {
      name: "Business",
      price: "150,000",
      features: [
        "Kit de démarrage avancé",
        "Formation complète",
        "Support prioritaire",
        "Commission 30%",
        "Bonus de démarrage",
        "Outils marketing",
      ],
      popular: true,
    },
    {
      name: "Executive",
      price: "300,000",
      features: [
        "Kit premium",
        "Formation VIP",
        "Support dédié",
        "Commission 35%",
        "Bonus de démarrage double",
        "Outils marketing premium",
        "Voyages d'incentive",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f0fdf4] via-white to-[#dcfce7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-gray-900">
                Devenez{" "}
                <span className="text-[#10b981]">Distributeur</span> Edmark
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transformez votre vie en rejoignant l'opportunité d'affaires Edmark. Gagnez des revenus illimités en aidant les autres à améliorer leur santé.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#10b981] text-white px-8 py-4 rounded-xl hover:bg-[#16a34a] transition-colors shadow-lg shadow-[#10b981]/30"
                >
                  Commencer maintenant
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                alt="Business opportunity"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Pourquoi devenir <span className="text-[#10b981]">distributeur</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profitez d'une opportunité exceptionnelle dans le secteur du bien-être
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#f0fdf4] to-white p-8 rounded-2xl border border-[#dcfce7] hover:shadow-lg transition-all"
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

      {/* Steps Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f9fafb]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Comment <span className="text-[#10b981]">démarrer</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              4 étapes simples pour lancer votre business Edmark
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all h-full">
                  <div className="text-6xl text-[#dcfce7] mb-4">{step.number}</div>
                  <h3 className="text-xl mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-[#10b981]"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Choisissez votre <span className="text-[#10b981]">package</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sélectionnez le package qui correspond à vos ambitions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 border-2 transition-all ${
                  pkg.popular
                    ? "border-[#10b981] shadow-xl scale-105"
                    : "border-gray-200 hover:border-[#10b981] hover:shadow-lg"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#10b981] text-white px-4 py-1 rounded-full text-sm">
                      Plus populaire
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl mb-2 text-gray-900">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl text-gray-900">{pkg.price}</span>
                  <span className="text-gray-600"> FCFA</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-xl transition-colors ${
                      pkg.popular
                        ? "bg-[#10b981] text-white hover:bg-[#16a34a]"
                        : "bg-gray-100 text-gray-900 hover:bg-[#dcfce7]"
                    }`}
                  >
                    Choisir ce package
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f9fafb]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Histoires de <span className="text-[#10b981]">réussite</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez comment nos distributeurs ont transformé leur vie
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&q=80"
                  alt="Distributeur"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg text-gray-900">Aminata Ndiaye</p>
                  <p className="text-sm text-[#10b981]">Distributeur Diamant</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Edmark a changé ma vie. En 2 ans, j'ai construit une équipe de 50 distributeurs et je gagne maintenant plus que mon ancien salaire. La liberté financière est devenue une réalité!"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80"
                  alt="Distributeur"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg text-gray-900">Ibrahima Sarr</p>
                  <p className="text-sm text-[#10b981]">Distributeur Platine</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Le business Edmark m'a permis de quitter mon travail 9-17 et de devenir mon propre patron. Le système de formation et le soutien de l'équipe sont exceptionnels!"
              </p>
            </motion.div>
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
              Prêt à démarrer votre business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous aujourd'hui pour en savoir plus sur l'opportunité Edmark
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#10b981] px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Nous contacter
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
