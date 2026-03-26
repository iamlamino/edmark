import React from "react";
import { motion } from "motion/react";
import { Heart, Award, Users, Leaf, Globe, ShieldCheck } from "lucide-react";

export const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion pour la santé",
      description: "Nous croyons que chacun mérite d'avoir accès à des produits de santé naturels de qualité.",
    },
    {
      icon: Award,
      title: "Excellence & Qualité",
      description: "Nos produits sont certifiés et testés selon les normes internationales les plus strictes.",
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Nous construisons une communauté de personnes engagées pour un mode de vie plus sain.",
    },
    {
      icon: Leaf,
      title: "100% Naturel",
      description: "Tous nos produits sont formulés à partir d'ingrédients naturels soigneusement sélectionnés.",
    },
  ];

  const stats = [
    { number: "20+", label: "Années d'expérience" },
    { number: "1000+", label: "Clients satisfaits" },
    { number: "15+", label: "Produits de qualité" },
    { number: "50+", label: "Distributeurs actifs" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f0fdf4] via-white to-[#dcfce7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl mb-6 text-gray-900">
              À Propos d'<span className="text-[#10b981]">Edmark Senegal</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leader dans la distribution de produits de bien-être naturels au Sénégal
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80"
                alt="Notre mission"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl mb-6 text-gray-900">
                Notre <span className="text-[#10b981]">Mission</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Edmark Senegal est dédiée à améliorer la santé et le bien-être des Sénégalais en offrant des produits naturels de la plus haute qualité. Nous croyons que la santé est la richesse la plus précieuse.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Notre mission est de rendre accessible à tous des solutions de bien-être naturelles, efficaces et scientifiquement prouvées. Nous travaillons avec Edmark International, une entreprise reconnue mondialement pour ses produits de santé innovants.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-[#10b981] p-4 rounded-2xl">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-gray-900">Présent dans plus de</p>
                  <p className="text-2xl text-[#10b981]">20 pays</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#10b981] to-[#16a34a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Nos <span className="text-[#10b981]">Valeurs</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre engagement envers votre santé
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-10 w-10 text-[#10b981]" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f9fafb]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl mb-6 text-gray-900">
                Qualité et <span className="text-[#10b981]">Certification</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Tous nos produits sont certifiés par des organismes internationaux reconnus. Nous respectons les normes les plus strictes en matière de production, de qualité et de sécurité.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <ShieldCheck className="h-8 w-8 text-[#10b981] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg text-gray-900 mb-2">Certifications GMP</h3>
                    <p className="text-gray-600">
                      Bonnes pratiques de fabrication garantissant la qualité et la sécurité
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <ShieldCheck className="h-8 w-8 text-[#10b981] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg text-gray-900 mb-2">Tests de laboratoire</h3>
                    <p className="text-gray-600">
                      Chaque lot est testé pour garantir pureté et efficacité
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <ShieldCheck className="h-8 w-8 text-[#10b981] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg text-gray-900 mb-2">Ingrédients naturels</h3>
                    <p className="text-gray-600">
                      Source responsable et durable de tous nos ingrédients
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1582719366554-a5d362a9c70f?w=800&q=80"
                alt="Qualité et certification"
                className="rounded-3xl shadow-2xl"
              />
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
              Prêt à commencer votre parcours santé?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Découvrez nos produits et rejoignez notre communauté de bien-être
            </p>
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-[#10b981] px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Voir nos produits
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
