import { motion } from "motion/react";
import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Phone, Mail, MapPin } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Contact() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    message: "",
    gdpr: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-[80px]">
        {/* Hero Section */}
        <section className="bg-[#3e5ecc] py-6 sm:py-8">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-white text-[26px] sm:text-[30px] lg:text-[34px]">
                  Nous contacter
                </h1>
                <p className="text-white mt-2 text-sm sm:text-base">
                  Pour toute question, nous vous invitons à remplir le formulaire ci-dessous :
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="h-[150px] sm:h-[180px] lg:h-[200px] rounded-[10px] overflow-hidden"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1653212883731-4d5bc66e0181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjB0ZWFtfGVufDF8fHx8MTc2MzQ1NjMzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Support client Trinity"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-[#3e5ecc] pb-8 sm:pb-12 lg:pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-[10px] p-6 sm:p-8 lg:p-12 max-w-[1140px] mx-auto"
            >
              <p className="text-black mb-4 sm:mb-6 text-sm sm:text-base">Veuillez activer JavaScript dans votre navigateur pour remplir ce formulaire.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Layout Section */}
                <div>
                  <h3 className="text-[#1a1a1a] mb-3 sm:mb-4 text-base sm:text-lg">Layout</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="text-[#1a1a1a] block mb-2 text-sm sm:text-base">Prénom *</label>
                      <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        required
                        className="w-full h-[37px] px-3 sm:px-4 bg-neutral-50 border-2 border-[#dee2e6] text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="text-[#1a1a1a] block mb-2 text-sm sm:text-base">Nom *</label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        className="w-full h-[37px] px-3 sm:px-4 bg-neutral-50 border-2 border-[#dee2e6] text-sm sm:text-base"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="text-[#1a1a1a] block mb-2 text-sm sm:text-base">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-[37px] px-3 sm:px-4 bg-neutral-50 border-2 border-[#dee2e6] text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="text-[#1a1a1a] block mb-2 text-sm sm:text-base">Téléphone *</label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      className="w-full h-[37px] px-3 sm:px-4 bg-neutral-50 border-2 border-[#dee2e6] text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-[#1a1a1a] block mb-2 text-sm sm:text-base">Votre Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 bg-neutral-50 border border-[#dee2e6] text-sm sm:text-base"
                  />
                </div>

                {/* GDPR Agreement */}
                <div>
                  <label className="text-[#1a1a1a] block mb-2 text-sm sm:text-base">GDPR Agreement *</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="gdpr"
                      checked={formData.gdpr}
                      onChange={handleChange}
                      required
                      className="size-4"
                    />
                    <span className="text-[#1a1a1a] text-sm sm:text-base">
                      J'accepte la <span className="text-[#3e5ecc]">politique de confidentialité</span> de ce site. *
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-2 sm:pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#3e5ecc] text-black px-6 sm:px-8 py-2 border-2 border-black text-sm sm:text-base"
                  >
                    Envoyer
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-[1140px] mx-auto">
              {/* Phone Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-[10px] p-6 sm:p-8 text-center shadow-lg"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="size-[60px] sm:size-[66px] lg:size-[73px] bg-[#3e5ecc] rounded-full flex items-center justify-center">
                    <Phone className="size-6 sm:size-7 lg:size-8 text-white" />
                  </div>
                </div>
                <h3 className="text-[#151515] mb-3 sm:mb-4 text-base sm:text-lg">Téléphone</h3>
                <p className="text-[#151515] text-sm sm:text-base">03 65 67 08 59</p>
              </motion.div>

              {/* Email Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-[10px] p-6 sm:p-8 text-center shadow-lg"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="size-[60px] sm:size-[66px] lg:size-[73px] bg-[#3e5ecc] rounded-full flex items-center justify-center">
                    <Mail className="size-6 sm:size-7 lg:size-8 text-white" />
                  </div>
                </div>
                <h3 className="text-[#151515] mb-3 sm:mb-4 text-base sm:text-lg">Email</h3>
                <p className="text-[#151515] text-sm sm:text-base break-all">contact@programmes-trinity.fr</p>
              </motion.div>

              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-[10px] p-6 sm:p-8 text-center shadow-lg sm:col-span-2 lg:col-span-1"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="size-[60px] sm:size-[66px] lg:size-[73px] bg-[#3e5ecc] rounded-full flex items-center justify-center">
                    <MapPin className="size-6 sm:size-7 lg:size-8 text-white" />
                  </div>
                </div>
                <h3 className="text-[#151515] mb-3 sm:mb-4 text-base sm:text-lg">Nos bureaux</h3>
                <div className="text-[#151515] text-sm sm:text-base">
                  <p>Les programmes Trinity</p>
                  <p>Red Pill Consulting</p>
                  <p>4 avenue de la libération</p>
                  <p>60160 Montataire</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-white py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[10px] h-[250px] sm:h-[320px] lg:h-[386px] overflow-hidden max-w-[1140px] mx-auto"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1590921401384-aa02f1a981f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBsb2NhdGlvbiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MzQ1NjMzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Bureaux Trinity - 4 avenue de la libération, Montataire"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}