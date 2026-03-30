"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Star } from "lucide-react";

const mustHaves = [
  "HTML5, CSS3, болон орчин үеийн JavaScript (ES6+)-ын маш сайн мэдлэг.",
  "React.js болон түүний экосистемийн (Hooks, Context) гүнзгий туршлага.",
  "Tailwind CSS гэх мэт хэрэгслийг ашиглан хуудасны загвар гаргах чадвар.",
  "Git хувилбарын удирдлагын систем дээр багаар ажиллах мэдлэг.",
  "Уншихад ойлгомжтой, цэвэр, дахин ашиглагдахуйц код бичих ур чадвар."
];

const niceToHaves = [
  "Next.js фреймворк болон Server-Side Rendering (SSR)-ийн тухай ойлголт.",
  "TypeScript ашиглах туршлага.",
  "Framer Motion эсвэл ижил төстэй хэрэгсэл ашиглан UI хөдөлгөөн оруулах.",
  "Figma эсвэл ижил төстэй дизайн хэрэгсэлтэй ажиллаж байсан."
];

export function Requirements() {
  return (
    <section className="py-24 px-6 w-full flex justify-center bg-zinc-950/30 border-y border-white/5">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-bold"
          >
            Тавигдах шаардлага
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 mt-4 max-w-2xl mx-auto"
          >
            Хэрэв та дараах шаардлагуудын ихэнхэд нийцэж байгаа бол бидэнд яг одоо өргөдлөө илгээнэ үү.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-3xl bg-indigo-950/20 border border-indigo-500/20 shadow-[0_0_80px_-20px_rgba(99,102,241,0.1)]"
          >
            <div className="flex items-center gap-3 mb-8">
              <ShieldAlert className="text-indigo-400" />
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-200">Заавал байх шаардлага (Must-have)</h3>
            </div>
            <ul className="space-y-4">
              {mustHaves.map((text, i) => (
                <li key={i} className="flex gap-4 text-zinc-300">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.5 }}
            className="p-8 rounded-3xl bg-violet-950/20 border border-violet-500/20 shadow-[0_0_80px_-20px_rgba(139,92,246,0.1)]"
          >
            <div className="flex items-center gap-3 mb-8">
              <Star className="text-violet-400" />
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-200">Давуу тал (Nice-to-have)</h3>
            </div>
            <ul className="space-y-4">
              {niceToHaves.map((text, i) => (
                <li key={i} className="flex gap-4 text-zinc-300">
                  <div className="w-2 h-2 rounded-full bg-violet-500 mt-2 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
