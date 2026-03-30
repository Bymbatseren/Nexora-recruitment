"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, CheckCircle } from "lucide-react";

const responsibilities = [
  "UI/UX дизайнаас өндөр чанартай, хариу үйлдэл сайтай хамгийн сүүлийн үеийн React компонентуудыг чанарын өндөр түвшинд хөгжүүлэх.",
  "Вэб хуудасны гүйцэтгэлийг (performance) хамгийн дээд хурдтай байхаар оновчлох, хэрэглэгчийн туршлагыг (UX) сайжруулах.",
  "Багийн бусад гишүүд болох backend хөгжүүлэгчид болон дизайны багтай нягт хамтран ажиллах.",
  "Шинэ технологийн чиг хандлагыг нэвтрүүлж, багийн төслийн архитектурт үнэ цэнэтэй санал оруулах."
];

export function Role() {
  return (
    <section className="py-24 px-6 w-full flex justify-center relative">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Role Overview */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Ажлын байрны тойм</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-indigo-500/50 transition-colors">
              <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg group-hover:scale-110 transition-transform">
                <Briefcase size={24} />
              </div>
              <div>
                <p className="text-sm text-zinc-500">Албан тушаал</p>
                <p className="text-lg font-semibold">Frontend Хөгжүүлэгч</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-violet-500/50 transition-colors">
              <div className="p-3 bg-violet-500/10 text-violet-400 rounded-lg group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-zinc-500">Байршил</p>
                <p className="text-lg font-semibold">Улаанбаатар / Зайнаас ажиллах боломжтой</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-emerald-500/50 transition-colors">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg group-hover:scale-110 transition-transform">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-sm text-zinc-500">Төрөл</p>
                <p className="text-lg font-semibold">Бүтэн цагийн</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Responsibilities */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Үндсэн үүргүүд</h2>
          <div className="space-y-6 shrink-0">
            {responsibilities.map((req, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="flex items-start gap-4"
              >
                <CheckCircle size={24} className="text-indigo-400 shrink-0 mt-1" />
                <p className="text-zinc-300 leading-relaxed">{req}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
