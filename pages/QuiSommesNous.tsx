import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { StatCard } from "../components/StatCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import imgRectangle1 from "figma:asset/f351ee63151bae5839b6ca3b876701b4641fe1d4.png";
import imgRectangle2 from "figma:asset/8ffb904f9ed7252dce6bba1d08616c2201ae8f15.png";
import imgRectangle3 from "figma:asset/d8dc8fa00b54cbfc0fee177e9207ac199f11a6c3.png";

export default function QuiSommesNous() {
  const values = [
    {
      icon: imgRectangle1,
      title: "RÉSILIENCE",
      description: "La résilience est bien plus qu'une qualité chez nous, c'est un véritable pilier que nous nourrissons et développons chaque jour au sein de notre communauté. Nous croyons qu'en affrontant les défis avec détermination et en apprenant de chaque expérience, nous devenons plus forts, plus unis et prêts à aller encore plus loin.",
    },
    {
      icon: imgRectangle2,
      title: "INNOVATION",
      description: "Innover, c'est repousser les limites de ce que l'on fait déjà, en le réinventant pour l'améliorer sans cesse. C'est trouver de nouvelles façons de faire mieux, d'aller plus loin et de surprendre à chaque étape.",
    },
    {
      icon: imgRectangle3,
      title: "PASSION",
      description: "Nous sommes avant tout des passionnés de technologie et d'éducation. Ce qui nous anime, c'est de connecter ces deux mondes pour créer des expériences enrichissantes et transformer l'avenir.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="mt-[80px] bg-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-black text-[24px] sm:text-[28px] lg:text-[33px] mb-4 sm:mb-6 capitalize">Les programmes Trinity</h1>
              <p className="text-[rgba(0,0,0,0.82)] leading-[24px] sm:leading-[26px] lg:leading-[28px] mb-6 sm:mb-8 text-sm sm:text-base">
                Chez les Programmes Trinity, nous croyons fermement en la transformation numérique et aux opportunités qu'elle peut offrir. 
                Notre mission est simple : vous aider à réussir dans ce monde numérique en constante évolution. En tant qu'experts passionnés 
                d'intelligence artificielle, de marketing digital, de création de sites web et de digitalisation, nous sommes là pour vous 
                accompagner à chaque étape. Rejoignez-nous pour découvrir de nouvelles compétences, développer des talents spécifiques et 
                explorer tout ce que le numérique peut offrir. Ensemble, nous allons façonner votre avenir digital.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#3e5ecc] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-[47px] text-sm sm:text-base"
              >
                Contactez-Nous
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-[300px] sm:h-[400px] lg:h-[604px] rounded-[10px] overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGVkdWNhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1ODExOTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Étudiants en formation Trinity"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center max-w-[1230px] mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[250px] sm:h-[350px] lg:h-[400px] rounded-[10px] overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1654366698665-e6d611a9aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2NTY1MDg1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Étudiants en formation Trinity"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-black text-[22px] sm:text-[25px] lg:text-[28px] mb-4 sm:mb-6">Notre approche pédagogique</h2>
              <p className="text-black leading-[22px] sm:leading-[24px] lg:leading-[26px] mb-4 sm:mb-6 text-sm sm:text-base">
                Nous croyons fermement en une pédagogie innovante et centrée sur l'apprenant. Nos formations allient théorie et pratique 
                pour garantir une montée en compétences rapide et efficace. Chaque apprenant bénéficie d'un accompagnement personnalisé 
                tout au long de son parcours.
              </p>
              <p className="text-black leading-[22px] sm:leading-[24px] lg:leading-[26px] text-sm sm:text-base">
                Notre équipe pédagogique expérimentée met tout en œuvre pour créer un environnement d'apprentissage stimulant 
                et propice à la réussite de chacun.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Discover Trinity Section */}
      <section className="bg-[#142355] py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center max-w-[1230px] mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-white text-[22px] sm:text-[25px] lg:text-[28px] mb-4 sm:mb-6">Découvrez les Programmes Trinity !</h2>
              <p className="text-white leading-[22px] sm:leading-[24px] lg:leading-[26px] mb-4 sm:mb-6 text-sm sm:text-base">
                Nous sommes fermement convaincus que l'apprentissage devient l'occupation principale de l'humanité. Dans cette ère de 
                technologie en évolution, le secteur de la tech fait face à des pénuries de talents et à de nombreux défis. Qu'ils soient 
                novices ou passionnés, nos élèves bénéficient de la motivation et de l'encadrement nécessaires pour assurer un avenir 
                professionnel prometteur.
              </p>
              <p className="text-white leading-[22px] sm:leading-[24px] lg:leading-[26px] mb-6 sm:mb-8 text-sm sm:text-base">
                Notre approche pédagogique, centrée sur des projets concrets, favorise une progression rapide des compétences et encourage 
                l'autonomie. Nos bootcamps intensifs et programmes en alternance préparent nos apprenants à être opérationnels en entreprise 
                dès la fin de leur formation, répondant ainsi aux besoins du marché de la tech. Ceci est particulièrement bénéfique pour ceux 
                qui se reconvertissent professionnellement que nous aidons à exploiter pleinement leur potentiel dans ce secteur en expansion.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#3e5ecc] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-[47px] text-sm sm:text-base"
              >
                DÉCOUVREZ NOTRE CATALOGUE
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[250px] sm:h-[350px] lg:h-[400px] rounded-[10px] overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzMzgwMDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Salle de formation moderne Trinity"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#3e5ecc] py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <StatCard number="+172" label="Personnes formées" delay={0} />
            <StatCard number="92%" label="de clients satisfaits" delay={0.1} />
            <StatCard number="89%" label="Taux d'insertion professionnelle" delay={0.2} />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#142355] py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white text-[22px] sm:text-[25px] lg:text-[28px] text-center mb-8 sm:mb-10 lg:mb-12"
          >
            Nos valeurs
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="min-h-[400px] sm:min-h-[420px] lg:h-[470px] rounded-[16px] p-6 sm:p-7 lg:p-8 text-center"
                style={{
                  backgroundImage: "linear-gradient(rgb(62, 94, 204) 0%, rgb(18, 48, 151) 100%)",
                }}
              >
                <div className="flex justify-center mb-4 sm:mb-5 lg:mb-6">
                  <div className="size-[60px] sm:size-[66px] lg:size-[72px] rounded-full overflow-hidden">
                    <img src={value.icon} alt={value.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className="text-[rgba(255,255,255,0.85)] text-[18px] sm:text-[19px] lg:text-[20px] mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-[rgba(255,255,255,0.7)] leading-[22px] sm:leading-[23px] lg:leading-[25px] text-sm sm:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}