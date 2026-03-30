"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative w-full flex justify-center border-t border-white/5 bg-zinc-950/50">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl text-center space-y-8"
      >
        <div className="flex justify-center text-indigo-400 mb-6">
          <Info size={40} />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold">Nexora Labs-ийн тухай</h2>
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
          Nexora Labs нь орчин үеийн, өргөтгөх боломжтой (scalable), хэрэглэгчдэд ээлтэй вэб аппликэйшн бүтээхэд төвлөрсөн, хурдацтай хөгжиж буй технологийн стартап компани юм. Бид <strong>цэвэр код, цоо шинэ инноваци, болон багийн байнгын суралцах эрмэлзлийг</strong> эрхэмлэн ажилладаг. Бидний алсын хараа бол дижитал ертөнцөд бодит үнэ цэнэ бүтээх явдал юм.
        </p>
      </motion.div>
    </section>
  );
}
