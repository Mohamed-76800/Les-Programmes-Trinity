import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Calendar, User, Hash } from "lucide-react";
import imgHero from "figma:asset/64a97de2c4173ab303025c7ee61f3c4920204d31.png";
import imgRelated1 from "figma:asset/a176e3bea1af230fb1e86bdadab6d3e4198ec28a.png";
import imgRelated2 from "figma:asset/7015a09177eedd8e05a8369a77bbec98ee518f24.png";
import imgRelated3 from "figma:asset/9e9de87067136043eb8d76f2281312b6010a700e.png";
import imgRelated4 from "figma:asset/68768ce1f2259172258124eb1788df6dfe78d26b.png";

export default function BlogArticle() {
  const relatedArticles = [
    {
      image: imgRelated1,
      title: "L'intelligence artificielle (IA) au service de la formation",
      date: "10/03/2024",
    },
    {
      image: imgRelated2,
      title: "L'Intelligence Artificielle : Comprendre les bases",
      date: "28/03/2024",
    },
    {
      image: imgRelated3,
      title: "L'Intelligence Artificielle au Service de l'Environnement",
      date: "10/03/2024",
    },
    {
      image: imgRelated4,
      title: "L'IA au Volant : Comment l'Intelligence",
      date: "31/03/2024",
    },
  ];

  const tableOfContents = [
    "Construction automobile et chaîne d'approvisionnement :",
    "Conduite autonome et sécurité :",
    "Évaluation des risques et maintenance prédictive :",
    "Expérience client et services de mobilité :",
    "Conclusion :",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Image */}
      <section className="mt-[80px]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="h-[400px] rounded-[20px] overflow-hidden"
          >
            <img
              src={imgHero}
              alt="L'IA au Volant"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-[900px]">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-black text-[42px] mb-6"
          >
            L'IA au Volant : Comment l'Intelligence Artificielle Transforme l'Industrie Automobile
          </motion.h1>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-6 text-gray-600 mb-8"
          >
            <div className="flex items-center gap-2">
              <Calendar className="size-5" />
              <span>31/03/2024</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="size-5" />
              <span>Trinity</span>
            </div>
            <div className="flex items-center gap-2">
              <Hash className="size-5" />
              <span>Intelligence Artificielle, Automobile</span>
            </div>
          </motion.div>

          {/* Article Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-[#3c36a4] text-[32px] mt-12 mb-6">Construction automobile et chaîne d'approvisionnement :</h2>
            <p className="text-black leading-[32px] mb-6">
              L'IA est déjà largement utilisée dans la conception, la fabrication et la postproduction des véhicules. Les constructeurs automobiles utilisent l'apprentissage automatique pour accélérer la conception de nouveaux véhicules et mener des simulations de tests dans différents scénarios pour améliorer les performances.
            </p>
            <p className="text-black leading-[32px] mb-6">
              Les systèmes d'IA prédictive jouent également un rôle crucial dans la maintenance des chaînes de production, réduisant les temps d'arrêt et augmentant l'efficacité. Dans la chaîne d'approvisionnement, l'IA permet une meilleure prévision de la demande et une gestion optimisée des stocks.
            </p>

            <h2 className="text-[#3c36a4] text-[32px] mt-12 mb-6">Conduite autonome et sécurité :</h2>
            <p className="text-black leading-[32px] mb-6">
              L'impact le plus visible de l'IA dans l'industrie automobile est sans doute le développement de véhicules autonomes. Les systèmes de conduite autonome utilisent l'apprentissage en profondeur, la vision par ordinateur et les capteurs pour naviguer et prendre des décisions en temps réel.
            </p>
            <p className="text-black leading-[32px] mb-6">
              Les algorithmes d'IA permettent aux véhicules de détecter les obstacles, de reconnaître les panneaux de signalisation, de suivre les marquages au sol et de réagir instantanément aux changements de l'environnement routier. Cette technologie promet non seulement de révolutionner notre façon de nous déplacer, mais aussi de réduire considérablement le nombre d'accidents causés par l'erreur humaine.
            </p>

            <h2 className="text-[#3c36a4] text-[32px] mt-12 mb-6">Évaluation des risques et maintenance prédictive :</h2>
            <p className="text-black leading-[32px] mb-6">
              L'IA joue un rôle essentiel dans la prédiction et la prévention des pannes de véhicules. Les systèmes de maintenance prédictive utilisent l'apprentissage automatique pour analyser les données des capteurs embarqués et identifier les signes avant-coureurs de défaillances potentielles.
            </p>
            <p className="text-black leading-[32px] mb-6">
              Cette approche permet aux constructeurs et aux propriétaires de véhicules d'effectuer la maintenance au moment optimal, réduisant les coûts et évitant les pannes imprévues.
            </p>

            <h2 className="text-[#3c36a4] text-[32px] mt-12 mb-6">Expérience client et services de mobilité :</h2>
            <p className="text-black leading-[32px] mb-6">
              L'IA transforme également l'expérience client dans l'industrie automobile. Les assistants vocaux intelligents dans les véhicules offrent une interface naturelle pour contrôler diverses fonctions, de la navigation au divertissement.
            </p>
            <p className="text-black leading-[32px] mb-6">
              Les systèmes de recommandation basés sur l'IA personnalisent l'expérience de conduite en fonction des préférences et des habitudes du conducteur. Dans le domaine des services de mobilité, l'IA optimise les itinéraires, gère les flottes de véhicules et améliore l'efficacité des services de covoiturage et de transport à la demande.
            </p>

            <h2 className="text-[#3c36a4] text-[32px] mt-12 mb-6">Conclusion :</h2>
            <p className="text-black leading-[32px] mb-6">
              L'intelligence artificielle est en train de transformer l'industrie automobile de manière profonde et durable. De la conception à la conduite, en passant par la maintenance et l'expérience client, l'IA apporte des innovations qui promettent de rendre nos véhicules plus sûrs, plus efficaces et plus agréables à utiliser.
            </p>
            <p className="text-black leading-[32px] mb-6">
              Alors que nous nous dirigeons vers un avenir où les véhicules autonomes et connectés deviendront la norme, l'IA continuera à jouer un rôle central dans la façon dont nous concevons, fabriquons et utilisons nos automobiles.
            </p>
          </motion.div>

          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#3c36a4] rounded-[16px] p-8 mt-12"
          >
            <h3 className="text-white text-[24px] mb-6">Sommaire de l'article</h3>
            <ul className="space-y-3">
              {tableOfContents.map((item, index) => (
                <li key={index} className="text-white flex items-start gap-3">
                  <span className="text-white mt-1">{index + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-[#3c36a4]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-white text-[36px] text-center mb-12"
          >
            Articles en relation
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedArticles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[16px] overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="h-[200px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[#3c36a4] text-[14px] mb-2">{article.date}</p>
                  <h3 className="text-black text-[16px] leading-[24px]">{article.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Comment Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-black text-[32px] mb-8">Laisser un commentaire</h2>
            
            <form className="space-y-6">
              <div>
                <label className="text-black block mb-2">Nom *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-[8px] focus:border-[#3c36a4] outline-none"
                />
              </div>

              <div>
                <label className="text-black block mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-[8px] focus:border-[#3c36a4] outline-none"
                />
              </div>

              <div>
                <label className="text-black block mb-2">Message *</label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-[8px] focus:border-[#3c36a4] outline-none resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-[#3c36a4] text-white px-8 py-3 rounded-[10px]"
              >
                Publier le commentaire
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
