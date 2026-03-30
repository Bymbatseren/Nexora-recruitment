"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, UploadCloud, CheckCircle2 } from "lucide-react";

export function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API delay
    setTimeout(() => {
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="apply" className="py-24 px-6 w-full flex justify-center border-t border-white/5 bg-zinc-950/20">
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-16 items-center">

        <div className="flex-1 space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            Одоо <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">өргөдөл</span> гаргах
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg"
          >
            Хэрэв та манай багт нэгдэж, шилдэг вэб аппликэйшн бүтээлцэх сонирхолтой байгаа бол доорх формыг бөглөнө үү.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full bg-zinc-900/50 border border-white/10 rounded-3xl p-8 relative"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">Овог нэр</label>
                  <input type="text" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Батдорж" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">И-мэйл хаяг</label>
                  <input type="email" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">GitHub / Портфолио холбоос</label>
                  <input type="url" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="https://github.com/..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">Таны хүсэж буй цалин</label>
                  <input type="number" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="1,500,000₮" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">CV / Анкет хавсаргах</label>
                  <div className="relative">
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                    />
                    <div className="w-full bg-black/50 border border-dashed border-white/20 rounded-xl px-4 py-6 text-center hover:border-indigo-500 transition-colors flex flex-col items-center">
                      <UploadCloud size={24} className="text-zinc-500 mb-2" />
                      <span className="text-zinc-400 text-sm">{fileName ? fileName : "Энд дарж эсвэл чирж оруулна уу (PDF, DOCX)"}</span>
                    </div>
                  </div>
                </div>
                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl mt-4 flex justify-center items-center gap-2 transition-colors">
                  Илгээх <Send size={18} />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 h-full"
              >
                <CheckCircle2 size={64} className="text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold mb-2">Амжилттай илгээгдлээ!</h3>
                <p className="text-zinc-400">Таны мэдээллийг хүлээж авлаа. Бид удахгүй холбогдох болно.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
