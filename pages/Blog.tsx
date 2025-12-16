import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Calendar, MessageCircle, Eye, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import imgRectangle1 from "figma:asset/ddc227200277f8549b79dc416b68030646e085fe.png";
import imgRectangle2 from "figma:asset/7a2455ce5b17123eabc1c90f18a5c158ac03d230.png";
import imgRectangle3 from "figma:asset/d290950db1f124d55ca63eaf54a70fdfc85dc76c.png";
import imgRectangle4 from "figma:asset/89271572e3336204f99527ee2f7afe6dfceb9e82.png";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  comments: number;
  views: number;
  excerpt: string;
  image: string;
  imagePosition: "left" | "right";
  slug?: string;
}

export default function Blog() {
  const navigate = useNavigate();

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "L'IA au Volant : Comment l'Intelligence",
      date: "31/03/2024",
      comments: 0,
      views: 607,
      excerpt:
        "Construction automobile et chaîne d'approvisionnement : L'IA est déjà largement utilisée dans la conception, la fabrication et la postproduction des véhicules. Les constructeurs automobiles",
      image: imgRectangle2,
      imagePosition: "left",
      slug: "/blog/ia-au-volant",
    },
    {
      id: 2,
      title: "L'Intelligence Artificielle : Comprendre les",
      date: "28/03/2024",
      comments: 0,
      views: 788,
      excerpt:
        "L'intelligence artificielle (IA) est un domaine passionnant qui associe l'informatique et des ensembles de données pour faciliter la résolution de problèmes. Elle vise",
      image: imgRectangle3,
      imagePosition: "right",
    },
    {
      id: 3,
      title: "L'Intelligence Artificielle au Service de",
      date: "10/03/2024",
      comments: 0,
      views: 379,
      excerpt:
        "L'IA, ce domaine fascinant où la machine apprend à penser comme un être humain, a un rôle crucial à jouer dans la préservation",
      image: imgRectangle4,
      imagePosition: "left",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with background */}
      <section
        className="mt-[80px] relative py-8 sm:py-12 lg:py-16 overflow-hidden"
        style={{
          backgroundImage: `url(${imgRectangle1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-[32px] sm:text-[40px] lg:text-[48px] text-center mb-3 sm:mb-4"
          >
            Notre Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white text-center text-[16px] sm:text-[18px] lg:text-[20px]"
          >
            Découvrez nos derniers articles sur l'IA, la formation et le digital
          </motion.p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#f6faff]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col lg:grid lg:grid-cols-2 gap-0"
              >
                {/* Image */}
                <div
                  className={`h-[250px] sm:h-[350px] lg:h-[461px] overflow-hidden order-1 ${
                    post.imagePosition === "left"
                      ? "lg:rounded-l-[52px]"
                      : "lg:rounded-r-[52px] lg:order-2"
                  } ${
                    post.imagePosition === "left" 
                      ? "rounded-t-[25px] lg:rounded-t-[52px] lg:rounded-tr-none" 
                      : "rounded-t-[25px] lg:rounded-t-[52px] lg:rounded-tl-none"
                  }`}
                >
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Card */}
                <div
                  className={`bg-[#3e5ecc] border-[10px] sm:border-[15px] lg:border-[20px] border-[#efefef] rounded-b-[25px] lg:rounded-[45px] p-6 sm:p-10 lg:p-[65px] flex flex-col justify-between order-2 ${
                    post.imagePosition === "right" ? "lg:order-1" : ""
                  } ${
                    post.imagePosition === "left" 
                      ? "lg:rounded-bl-[45px] lg:rounded-br-none" 
                      : "lg:rounded-br-[45px] lg:rounded-bl-none"
                  }`}
                >
                  <div>
                    <h2 className="text-white text-[18px] sm:text-[19px] lg:text-[21px] leading-[24px] sm:leading-[26px] lg:leading-[28px] mb-4 sm:mb-5 lg:mb-6">
                      {post.title}
                    </h2>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-5 lg:mb-6 text-[rgba(255,255,255,0.74)]">
                      <div className="flex items-center gap-2">
                        <Calendar className="size-3.5 sm:size-4" aria-hidden="true" />
                        <span className="text-[11px] sm:text-[12px]">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="size-3.5 sm:size-4" aria-hidden="true" />
                        <span className="text-[11px] sm:text-[12px]">
                          {post.comments === 0 ? "No Comment" : `${post.comments} Comments`}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="size-3.5 sm:size-4" aria-hidden="true" />
                        <span className="text-[11px] sm:text-[12px]">{post.views} Views</span>
                      </div>
                    </div>

                    <p className="text-black leading-[20px] sm:leading-[22px] lg:leading-[24px] mb-6 sm:mb-7 lg:mb-8 text-sm sm:text-base">
                      {post.excerpt}
                    </p>
                  </div>

                  <button
                    className="border-2 border-[#1d1436] rounded-[11px] px-5 sm:px-6 py-2 text-white uppercase tracking-wider text-[10px] sm:text-[11px] w-fit hover:bg-[#1d1436] transition-colors flex items-center gap-2"
                    aria-label={`Lire la suite de ${post.title}`}
                    onClick={() => navigate(post.slug || "/blog")}
                  >
                    En savoir plus
                    <ChevronRight className="size-3.5 sm:size-4" aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-10 lg:mt-12"
            role="navigation"
            aria-label="Pagination du blog"
          >
            <button
              className="bg-[#031140] border border-[#121212] rounded-[3px] size-[40px] sm:size-[45px] lg:size-[49px] flex items-center justify-center text-white text-sm sm:text-base"
              aria-label="Page 1"
              aria-current="page"
            >
              1
            </button>
            <button
              className="bg-[#3e5ecc] border border-[#121212] rounded-[3px] size-[40px] sm:size-[45px] lg:size-[49px] flex items-center justify-center text-white hover:bg-[#031140] transition-colors text-sm sm:text-base"
              aria-label="Page 2"
            >
              2
            </button>
            <button
              className="bg-[#3e5ecc] border border-[#121212] rounded-[3px] size-[40px] sm:size-[45px] lg:size-[49px] flex items-center justify-center text-white hover:bg-[#031140] transition-colors"
              aria-label="Page suivante"
            >
              <ChevronRight className="size-4 sm:size-5" aria-hidden="true" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}