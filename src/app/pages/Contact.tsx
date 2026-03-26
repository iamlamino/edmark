import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast.success("Message envoyé avec succès! Nous vous contacterons bientôt.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+221 77 123 45 67", "+221 78 987 65 43"],
      link: "tel:+221771234567",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@edmarksenegal.com", "info@edmarksenegal.com"],
      link: "mailto:contact@edmarksenegal.com",
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Dakar, Sénégal", "Plateau, Avenue Lamine Gueye"],
      link: "#",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+221 77 123 45 67"],
      link: "https://wa.me/221771234567",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f0fdf4] via-white to-[#dcfce7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl mb-6 text-gray-900">
              Contactez <span className="text-[#10b981]">Nous</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous sommes là pour répondre à toutes vos questions sur nos produits et services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : undefined}
                rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-[#f0fdf4] to-white p-8 rounded-2xl border border-[#dcfce7] hover:shadow-lg transition-all"
              >
                <div className="bg-[#10b981] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-6 text-gray-900">
                Envoyez-nous un <span className="text-[#10b981]">message</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent"
                      placeholder="+221 77 123 45 67"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Sujet <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="product">Question sur un produit</option>
                    <option value="order">Commande</option>
                    <option value="distributor">Devenir distributeur</option>
                    <option value="support">Support technique</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#10b981] text-white px-8 py-4 rounded-xl hover:bg-[#16a34a] transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Envoyer le message</span>
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=80"
                alt="Contact us"
                className="rounded-3xl shadow-2xl"
              />
              
              <div className="mt-8 bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] p-8 rounded-2xl">
                <h3 className="text-xl mb-4 text-gray-900">Heures d'ouverture</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi:</span>
                    <span>8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi:</span>
                    <span>9h00 - 14h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche:</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl mb-4 text-gray-900">Contact rapide</h3>
                <p className="text-gray-600 mb-6">
                  Besoin d'une réponse rapide? Contactez-nous directement sur WhatsApp!
                </p>
                <a
                  href="https://wa.me/221771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#25D366] text-white px-6 py-3 rounded-xl hover:bg-[#20BA5A] transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-[#10b981] to-[#16a34a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 text-white">
              Restez informé de nos actualités
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir nos offres exclusives
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#10b981] px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  S'inscrire
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
