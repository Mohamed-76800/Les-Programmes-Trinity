import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Clock, MapPin, Monitor, FileDown } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function NosFormations() {
  const formations = [
    {
      id: 1,
      type: "Formation en alternance",
      title: "Formation en Cybersécurité",
      description: "Dans un monde de plus en plus connecté, la cybersécurité est devenue une priorité absolue. Nos vies numériques sont devenues le foyer de nos informations les plus précieuses, et il est essentiel de les protéger contre les menaces en constante évolution. Notre formation est idéale pour ceux qui aspirent à jouer un rôle crucial dans la protection des infrastructures numériques des entreprises.",
      duration: "1 an",
      mode: "Hybride (en distanciel et présentiel)",
      location: "Région parisienne",
      image: "https://images.unsplash.com/photo-1614064642261-3ccbfafa481b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2VyJTIwcHJvdGVjdGlvbnxlbnwxfHx8fDE3NjU4MTA3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      type: "Formation en alternance",
      title: "Designer Concepteur UI",
      description: "À l'ère du tout digital, ce ne sont plus seulement les fonctionnalités qui séduisent, mais l'émotion que suscite une interface. Chaque écran est une opportunité de raconter une histoire, de créer une connexion, de transformer un simple clic en une expérience mémorable. Notre formation en conception UI s'adresse à celles et ceux qui veulent sublimer le lien entre l'humain et la technologie, en imaginant des parcours fluides, élégants et pensés dans les moindres détails.",
      duration: "1 an",
      mode: "Hybride (en distanciel et présentiel)",
      location: "France entière",
      image: "https://images.unsplash.com/photo-1699040309386-11c615ed64d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjU4MDc5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      type: "Formation en alternance",
      title: "Designer Concepteur UI dans le domaine du sport",
      description: "Le sport se vit, se ressent… et aujourd'hui, il se conçoit. Dans un univers où la performance rime avec innovation, les interfaces digitales deviennent les nouveaux terrains de jeu des passionnés de design. Applications d'entraînement, plateformes de coaching, équipements connectés… Chaque pixel peut booster la motivation, chaque interaction peut influencer la progression d'un athlète. Notre formation en design UI, spécialisée dans l'univers du sport, vous prépare à imaginer des expériences numériques dynamiques, immersives et au service du mouvement.",
      duration: "1 an",
      mode: "En présentiel",
      location: "Île de France",
      image: "https://images.unsplash.com/photo-1758521960348-90bc4203eb52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydCUyMGZpdG5lc3MlMjBkaWdpdGFsfGVufDF8fHx8MTc2NTgxMDc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      type: "Formation professionnelle",
      title: "Maîtrisez l'IA générative avec Trinity",
      description: "L'imagination humaine a trouvé un nouvel allié : l'intelligence artificielle. Et plus précisément, l'IA générative. Cette technologie révolutionne notre manière de créer, d'innover et même de penser. De la génération de contenus textuels à la création d'images, de musiques ou de lignes de code, elle ouvre un champ des possibles sans précédent. Notre formation professionnelle vous plonge au cœur de cette révolution. Conçue pour les esprits curieux et les bâtisseurs du futur, elle vous apprend à comprendre, maîtriser et exploiter les outils d'IA générative pour créer des solutions concrètes, intelligentes et éthiques.",
      duration: "70h",
      mode: "En entreprise ou dans nos locaux",
      location: null,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2NTczNzAzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 5,
      type: "Formation 100% en alternance",
      title: "Employé polyvalent de restauration",
      description: "Le secteur de la restauration est en constante évolution, offrant des opportunités passionnantes pour ceux qui souhaitent faire carrière dans ce domaine dynamique. Notre formation d'employé polyvalent de restauration vous prépare à exceller dans tous les aspects du service en restauration. Vous développerez des compétences pratiques essentielles, de la préparation des plats au service client, en passant par l'hygiène alimentaire et la gestion des stocks.",
      duration: "1 an",
      mode: "En présentiel",
      location: "Île de France",
      image: "https://images.unsplash.com/photo-1765728615045-42a7629c34b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwc2VydmljZSUyMGZvb2R8ZW58MXx8fHwxNzY1ODEwNzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
        className="relative min-h-[400px] sm:min-h-[500px] lg:h-[550px] mt-[70px] sm:mt-[75px] lg:mt-[80px] bg-gradient-to-r from-[#e3f2fd] to-[#bbdefb] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMGNvbGxhYm9yYXRpb24lMjBvZmZpY2V8ZW58MXx8fHwxNzY1NzM3MDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-12 sm:py-16 lg:py-20 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-black text-[26px] sm:text-[32px] lg:text-[38px] mb-4 sm:mb-6"
          >
            Nos formations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#1b1c33] text-sm sm:text-base lg:text-lg max-w-full lg:max-w-[965px] leading-relaxed"
          >
            Programmes Trinity offre des formations spécialisées pour exceller dans le monde digital. Conçues par des experts, adaptées à vos besoins.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8">
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3e5ecc] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-[47px] text-sm sm:text-base hover:bg-[#2d4aad] transition-colors flex items-center justify-center gap-2"
            >
              <FileDown className="size-4" />
              Vérifiez votre éligibilité
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#3e5ecc] px-6 sm:px-8 py-3 sm:py-3.5 rounded-[47px] text-sm sm:text-base hover:bg-gray-50 transition-colors border-2 border-[#3e5ecc]"
            >
              Prendre contact pour un financement public (OPCO, Région, CPF)
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Formations List */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {formations.map((formation, index) => (
              <motion.div
                key={formation.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[10px] shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image */}
                  <div className="lg:col-span-2 h-[200px] sm:h-[250px] lg:h-auto lg:min-h-[400px]">
                    <ImageWithFallback
                      src={formation.image}
                      alt={formation.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10 p-6 sm:p-8 lg:p-10">
                    {/* Header */}
                    <div className="mb-4 sm:mb-6">
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#3e5ecc] text-sm sm:text-base mb-2"
                      >
                        {formation.type}
                      </motion.p>
                      <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-black text-[20px] sm:text-[24px] lg:text-[28px]"
                      >
                        {formation.title}
                      </motion.h2>
                    </div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-black text-sm sm:text-base leading-relaxed sm:leading-[28px] mb-6 sm:mb-8"
                    >
                      {formation.description}
                    </motion.p>

                    {/* Info Tags */}
                    <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-2 text-black text-sm sm:text-base"
                      >
                        <Clock className="size-4 sm:size-5 text-[#3e5ecc] flex-shrink-0" />
                        <span>{formation.duration}</span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center gap-2 text-black text-sm sm:text-base"
                      >
                        <Monitor className="size-4 sm:size-5 text-[#3e5ecc] flex-shrink-0" />
                        <span>{formation.mode}</span>
                      </motion.div>

                      {formation.location && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 }}
                          className="flex items-center gap-2 text-black text-sm sm:text-base"
                        >
                          <MapPin className="size-4 sm:size-5 text-[#3e5ecc] flex-shrink-0" />
                          <span>{formation.location}</span>
                        </motion.div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                      whileHover={{ scale: 1.03, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-[#020f3d] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-[47px] text-sm sm:text-base hover:bg-[#051636] transition-colors flex items-center gap-2"
                    >
                      <FileDown className="size-4" />
                      Téléchargez la brochure
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
