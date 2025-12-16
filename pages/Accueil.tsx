import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { StatCard } from "../components/StatCard";
import { FeatureCard } from "../components/FeatureCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import imgRectangle4 from "figma:asset/df5360d4fe8983392b27c9f556134055f8a2c3d6.png";
import imgRectangle5 from "figma:asset/37e611b83d936e958e200f236b2aa206d4e32848.png";
import imgRectangle6 from "figma:asset/558b263cbf915d1945cd237cc2ba52b7eb47f711.png";
import imgRectangle7 from "figma:asset/35d7cbc274cc71a9b186f556cba4b5fa0e406209.png";

export default function Accueil() {
  const navigate = useNavigate();
  
  const formations = [
    {
      title: "Améliorez vos compétences en Marketing digital",
      description: "Optimisez stratégies web pour atteindre efficacement votre public cible en ligne.",
    },
    {
      title: "Maîtrisez les principes de l'intelligence artificielle",
      description: "Explorez les concepts clés et applications pratiques de l'IA moderne.",
    },
    {
      title: "Apprenez à créer des sites web dynamiques",
      description: "Apprenez à développer des sites web interactifs et réactifs.",
    },
  ];

  const programTypes = [
    {
      image: imgRectangle5,
      title: "Formation pour les formateurs",
      description: "Cette formation approfondie vous permettra de maîtriser les outils d'IA les plus innovants pour créer des supports de cours dynamiques, interactifs et adaptifs.",
    },
    {
      image: imgRectangle6,
      title: "Formation pour les entrepreneurs",
      description: "Apprenez à identifier les opportunités d'IA dans votre secteur, à comprendre les bases techniques, piloter des projets et gérer votre relation clientèle afin de propulser votre entreprise vers l'avant.",
    },
    {
      image: imgRectangle7,
      title: "La formation ingénierie pédagogique",
      description: "Ce cours vous dotera des connaissances techniques, des compétences pédagogiques et des outils nécessaires pour enseigner différemment.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[500px] sm:min-h-[550px] lg:h-[600px] mt-[70px] sm:mt-[75px] lg:mt-[80px] bg-[#072750] overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-12 sm:py-16 lg:py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#3351b9] text-[24px] sm:text-[32px] lg:text-[38px] mb-3 sm:mb-4"
          >
            Les programmes Trinity
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white text-[20px] sm:text-[26px] lg:text-[32px] mb-6 sm:mb-8 max-w-full lg:max-w-[960px] leading-tight"
          >
            Boostez votre carrière grâce à nos formations d'excellence.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white text-sm sm:text-base leading-relaxed sm:leading-[26px] max-w-full lg:max-w-[1313px] mb-6 sm:mb-8"
          >
            Entrez dans l'univers des Programmes Trinity et prenez une véritable longueur d'avance avec nos formations d'excellence. 
            Profitez d'un accès privilégié à des contenus exclusifs, échangez avec une communauté passionnée et active, et boostez vos 
            compétences dès maintenant. C'est le moment de vous démarquer et d'écrire votre propre histoire dans le monde du numérique !
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#3e5ecc] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-[47px] w-fit text-sm sm:text-base hover:bg-[#2d4aad] transition-colors"
            onClick={() => navigate("/formations")}
          >
            DÉCOUVREZ NOS FORMATIONS
          </motion.button>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="bg-[#3e5ecc] py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <StatCard number="+172" label="Personnes formées" delay={0} />
            <StatCard number="92%" label="de clients satisfaits" delay={0.1} />
            <StatCard number="89%" label="Taux d'insertion professionnelle" delay={0.2} />
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-[#072750] py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-full sm:max-w-[650px] lg:max-w-[726px] mx-auto"
          >
            <h2 className="text-white text-[24px] sm:text-[30px] lg:text-[34px] mb-4 sm:mb-6">
              <span>Qui </span>
              <span className="text-[#fffefe]">sommes-nous ?</span>
            </h2>
            <p className="text-[rgba(255,255,255,0.71)] text-sm sm:text-base leading-relaxed sm:leading-[27px] px-2">
              Animés par la passion du numérique, <span className="font-['Poppins:Bold',sans-serif]">Les Programmes Trinity</span> vous guident vers l'excellence
              digitale. Experts en intelligence artificielle, formation, et création web, nous vous donnons les clés
              pour évoluer dans un monde en perpétuelle transformation. Rejoignez-nous et façonnez l'avenir
              du digital dès aujourd'hui !
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <FeatureCard
            icon="📚"
            title="Évoluez en Continu"
            description="Nous mettons à jour nos formations en continu pour suivre les dernières tendances et évolutions de chaque domaine."
            delay={0}
          />
          <FeatureCard
            icon="🎯"
            title="FLEXIBILITÉ"
            description="Programmes Trinity propose des formations variées, adaptées à chaque besoin, pour développer vos compétences ou réussir votre reconversion professionnelle."
            delay={0.1}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <FeatureCard
            icon="💻"
            title="Intégration de la technologie dans l'apprentissage"
            description="Nous intégrons la technologie à nos méthodes d'enseignement pour enrichir votre expérience d'apprentissage."
            delay={0.2}
          />
          <FeatureCard
            icon="🎓"
            title="ENGAGEMENT ENVERS VOTRE RÉUSSITE"
            description="Votre réussite est notre priorité. Nous nous engageons à vous aider à atteindre vos objectifs, pour faire décoller votre carrière."
            delay={0.3}
          />
        </div>
      </section>

      {/* Trust Trinity Section */}
      <section className="py-12 sm:py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-black text-[22px] sm:text-[26px] lg:text-[30px] px-2">
            Faites confiance à <span className="text-[#3e5ecc]">Trinity</span>
          </h2>
          <p className="text-black text-sm sm:text-base mt-3 sm:mt-4 px-4">
            Les programmes Trinity sont là pour vous aider à atteindre vos objectifs.
          </p>
        </motion.div>

        <div className="space-y-4 max-w-full lg:max-w-[1090px] mx-auto">
          {formations.map((formation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white border-2 sm:border-[3px] border-black p-5 sm:p-6 lg:p-8 rounded-[10px]"
            >
              <h3 className="text-black text-base sm:text-lg mb-2">{formation.title}</h3>
              <p className="text-black text-sm sm:text-base leading-relaxed">{formation.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IA Section */}
      <section className="bg-[#072750] py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-full sm:max-w-[650px] lg:max-w-[726px] mx-auto"
          >
            <h2 className="text-white text-[20px] sm:text-[26px] lg:text-[31px] mb-3 sm:mb-4 px-2 leading-tight">
              Intelligence Artificielle: <span className="text-[#fffefe]">Implémentez l'IA dans votre entreprise</span>
            </h2>
            <p className="text-[rgba(255,255,255,0.71)] text-sm sm:text-base leading-relaxed sm:leading-[27px] px-2">
              Explorez le potentiel de l'IA pour révolutionner votre secteur et garder une longueur d'avance sur l'innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* IA Details Section */}
      <section className="bg-[#f6faff] py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <p className="text-black text-sm sm:text-base leading-relaxed sm:leading-[26px] mb-6 sm:mb-8">
                Chez <span>Programmes Trinity</span>, nous envisageons un avenir où l'intelligence artificielle est accessible à tous. 
                Que vous soyez entrepreneur, organisme de formation ou formateur, nos programmes sont conçus pour vous doter des 
                compétences essentielles afin d'optimiser votre productivité. Plongez dans l'univers de l'IA et découvrez comment 
                elle peut révolutionner votre secteur tout en vous maintenant à la pointe de l'innovation.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#3e5ecc] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-[47px] text-sm sm:text-base hover:bg-[#2d4aad] transition-colors"
                onClick={() => navigate("/formations")}
              >
                Découvrez nos formations
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 h-[250px] sm:h-[350px] lg:h-[427px] overflow-hidden rounded-[10px]"
            >
              <ImageWithFallback
                src={imgRectangle4}
                alt="Formation IA"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formation Types Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] px-2 mb-3 sm:mb-4">
              <span className="text-[#3e5ecc]">Les formations chez </span>
              <span className="text-black">Trinity</span>
            </h2>
            <p className="text-[rgba(0,0,0,0.71)] text-sm sm:text-base mt-3 sm:mt-4 max-w-full sm:max-w-[650px] lg:max-w-[726px] mx-auto px-4">
              Programmes Trinity offre des formations spécialisées pour exceller dans le monde digital. 
              Conçues par des experts et adaptées à vos besoins
            </p>
          </motion.div>

          <div className="space-y-10 sm:space-y-12 lg:space-y-16">
            {programTypes.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="h-[250px] sm:h-[350px] lg:h-[427px] overflow-hidden rounded-[10px] order-1">
                      <ImageWithFallback
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="order-2">
                      <h3 className="text-black text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4">{program.title}</h3>
                      <p className="text-black text-sm sm:text-base leading-relaxed sm:leading-[26px] mb-5 sm:mb-6">{program.description}</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-[5px] text-sm sm:text-base hover:bg-gray-800 transition-colors"
                      >
                        En savoir plus
                      </motion.button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">
                      <h3 className="text-black text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4">{program.title}</h3>
                      <p className="text-black text-sm sm:text-base leading-relaxed sm:leading-[26px] mb-5 sm:mb-6">{program.description}</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-[5px] text-sm sm:text-base hover:bg-gray-800 transition-colors"
                      >
                        En savoir plus
                      </motion.button>
                    </div>
                    <div className="h-[250px] sm:h-[350px] lg:h-[427px] overflow-hidden rounded-[10px] order-1 lg:order-2">
                      <ImageWithFallback
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}