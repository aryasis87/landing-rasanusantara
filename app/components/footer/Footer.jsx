"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-bark text-rice py-4"
    >
      <div className="container text-rice/90 mx-auto px-6 text-sm md:text-base text-center">
        <p>© {new Date().getFullYear()} Rasa Nusantara. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
