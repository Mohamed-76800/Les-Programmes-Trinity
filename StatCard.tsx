import { motion } from "motion/react";
import { ReactNode } from "react";

interface StatCardProps {
  number: string;
  label: string;
  delay?: number;
}

export function StatCard({ number, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center justify-center p-4 sm:p-6"
    >
      <div className="flex items-center gap-1 mb-2">
        <span className="text-white text-[28px] sm:text-[36px] lg:text-[42px]">{number}</span>
      </div>
      <p className="text-white text-center text-[14px] sm:text-[16px] lg:text-[20px] leading-tight px-2">{label}</p>
    </motion.div>
  );
}