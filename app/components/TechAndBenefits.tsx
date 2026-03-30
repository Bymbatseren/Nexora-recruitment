"use client";

import { motion } from "framer-motion";
import { Code, Gift, Laptop, Banknote, Map, Cpu } from "lucide-react";

const techs = ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux/Zustand", "Framer Motion", "Git", "Figma"];

export function TechStack() {
  return (
    <section className="py-24 px-6 w-full flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Технологийн стек</h2>
        <p className="text-zinc-400">Бидний өдөр тутмын хөгжүүлэлтэнд ашиглагддаг технологиуд.</p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="flex flex-wrap justify-center gap-4 max-w-4xl"
      >
        {techs.map((t, i) => (
          <motion.div 
            key={t}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-zinc-200 hover:border-indigo-500 hover:bg-indigo-500/10 transition-colors cursor-default"
          >
            <Code size={18} className="text-indigo-400" />
            <span className="font-medium">{t}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const benefits = [
  { icon: Banknote, title: "Өндөр цалингийн санал", desc: "Ур чадварт тулгуурласан уян хатан бөгөөд өрсөлдөхүйц цалин." },
  { icon: Map, title: "Зайнаас ажиллах боломж", desc: "Улаанбаатар хотын оффис эсвэл хүссэн газраасаа уян хатан цагаар ажиллах." },
  { icon: Laptop, title: "Нэмэлт төхөөрөмж", desc: "Шаардлагатай Macbook Pro зэргийг компьютер төхөөрөмжөөр хангана." },
  { icon: Cpu, title: "Тасралтгүй суралцах", desc: "Төлбөртэй курс, сургалтууд авах жилийн төсөв багтсан байгаа." },
];

export function Benefits() {
  return (
    <section className="py-24 px-6 w-full flex justify-center bg-zinc-950/50">
      <div className="max-w-6xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="flex justify-center text-emerald-400 mb-4">
            <Gift size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">Бидний санал болгох урамшуулал</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center mb-6">
                <b.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
