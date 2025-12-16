import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Calendar, MessageCircle, Eye, ChevronRight } from "lucide-react";
import imgRectangle1 from "figma:asset/ddc227200277f8549b79dc416b68030646e085fe.png";
import imgRectangle2 from "figma:asset/05fe7ac5d64c921e51285b104a3b66b6755ae264.png";
import imgRectangle3 from "figma:asset/1fa5eb8c54500346cae86eba0fbc9c9504048dc1.png";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  comments: number;
  views: number;
  excerpt: string;
  image: string;
  imagePosition: "left" | "right";
}

export default function BlogPage2() {
  const navigate = useNavigate();
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "L'Intelligence Artificielle et le Développement",
      date: "02/03/2024",
      comments: 0,
      views: 445,
      excerpt:
        "L'intelligence artificielle (IA) est en train de révolutionner de nombreux domaines, et le secteur du développement web ne fait pas exception. Les développeurs",
      image: imgRectangle2,
      imagePosition: "left",
    },
    {
      id: 2,
      title: "L'IA et la Vie Privée : Entre Avancées et",
      date: "28/02/2024",
      comments: 0,
      views: 405,
      excerpt:
        "1. L'IA et la Vie Privée : Un Équilibre Délicat L'IA offre des avantages considérables, mais elle peut également compromettre la vie privée",
      image: imgRectangle3,
      imagePosition: "right",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with background */}
      <section
        className="mt-[80px] relative py-16 overflow-hidden"
        style={{
          backgroundImage: `url(${imgRectangle1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-[48px] text-center mb-4"
          >
            Notre Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white text-center text-[20px]"
          >
            Découvrez nos derniers articles sur l'IA, la formation et le digital
          </motion.p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-[#f6faff]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="space-y-16">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                  post.imagePosition === "right" ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`h-[461px] overflow-hidden ${
                    post.imagePosition === "left"
                      ? "rounded-l-[52px]"
                      : "rounded-r-[52px] lg:order-2"
                  }`}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Card */}
                <div
                  className={`bg-[#3e5ecc] border-[20px] border-[#efefef] rounded-[45px] p-[65px] flex flex-col justify-between ${
                    post.imagePosition === "right" ? "lg:order-1" : ""
                  }`}
                >
                  <div>
                    <h2 className="text-white text-[21px] leading-[28px] mb-6">
                      {post.title}
                    </h2>

                    {/* Meta Info */}
                    <div className="flex items-center gap-6 mb-6 text-[rgba(255,255,255,0.74)]">
                      <div className="flex items-center gap-2">
                        <Calendar className="size-4" aria-hidden="true" />
                        <span className="text-[12px]">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="size-4" aria-hidden="true" />
                        <span className="text-[12px]">
                          {post.comments === 0 ? "No Comment" : `${post.comments} Comments`}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="size-4" aria-hidden="true" />
                        <span className="text-[12px]">{post.views} Views</span>
                      </div>
                    </div>

                    <p className="text-black leading-[24px] mb-8">
                      {post.excerpt}
                    </p>
                  </div>

                  <button
                    className="border-2 border-[#1d1436] rounded-[11px] px-6 py-2 text-white uppercase tracking-wider text-[11px] w-fit hover:bg-[#1d1436] transition-colors flex items-center gap-2"
                    aria-label={`Lire la suite de ${post.title}`}
                  >
                    En savoir plus
                    <ChevronRight className="size-4" aria-hidden="true" />
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
            className="flex justify-center items-center gap-4 mt-12"
            role="navigation"
            aria-label="Pagination du blog"
          >
            <button
              onClick={() => navigate("/blog")}
              className="bg-[#3e5ecc] border border-[#121212] rounded-[3px] size-[49px] flex items-center justify-center text-white hover:bg-[#031140] transition-colors"
              aria-label="Page précédente"
            >
              <ChevronRight className="size-5 rotate-180" aria-hidden="true" />
            </button>
            <button
              onClick={() => navigate("/blog")}
              className="bg-[#3e5ecc] border border-[#121212] rounded-[3px] size-[49px] flex items-center justify-center text-white hover:bg-[#031140] transition-colors"
              aria-label="Page 1"
            >
              1
            </button>
            <button
              className="bg-[#031140] border border-[#121212] rounded-[3px] size-[49px] flex items-center justify-center text-white"
              aria-label="Page 2"
              aria-current="page"
            >
              2
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
