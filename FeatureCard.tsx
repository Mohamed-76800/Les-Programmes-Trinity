import { motion } from "motion/react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
      className="min-h-[280px] sm:min-h-[300px] lg:h-[320px] rounded-[16px] p-6 sm:p-8 text-center relative overflow-hidden flex flex-col items-center justify-center"
      style={{
        backgroundImage: "linear-gradient(rgb(62, 94, 204) 0%, rgb(18, 48, 151) 100%)",
      }}
    >
      <div className="flex justify-center mb-4 sm:mb-6">
        <div className="size-[60px] sm:size-[72px] bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-[28px] sm:text-[32px]">{icon}</span>
        </div>
      </div>
      <h3 className="text-[rgba(255,255,255,0.85)] uppercase mb-3 sm:mb-4 text-sm sm:text-base px-2">{title}</h3>
      <p className="text-[rgba(255,255,255,0.7)] leading-relaxed sm:leading-[25px] text-sm sm:text-base px-2">{description}</p>
    </motion.div>
  );
}