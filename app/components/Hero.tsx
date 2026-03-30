"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 bg-black pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[128px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[128px] mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium"
        >
          <Code2 size={16} />
          <span>Nexora Labs - Web & Digital Product Development</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          Бид <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Frontend Хөгжүүлэгч</span> хайж байна
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl"
        >
          Та орчин үеийн, хурдтай, хэрэглэгчдэд ээлтэй вэб аппликэйшн бүтээх сонирхолтой юу? Бидний шинийг эрэлхийлэгч, эрч хүчтэй багт нэгдээрэй.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <a href="#apply" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2">
            Одоо өргөдөл гаргах
          </a>
          <a href="#about" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2">
            Дэлгэрэнгүй <ArrowDown size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
