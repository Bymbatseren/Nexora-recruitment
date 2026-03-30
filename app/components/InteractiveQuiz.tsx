"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Check, X, RefreshCw } from "lucide-react";

const questions = [
  {
    question: "React-д төлөв удирдах (state management) хамгийн энгийн hook аль нь вэ?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    correct: 1
  },
  {
    question: "Component хэзээ дахин render (re-render) хийгддэг вэ?",
    options: ["Хулганаар дарах үед", "Хөтчийн цонхыг жижигрүүлэх үед", "Props эсвэл State өөрчлөгдөх үед", "Хэзээ ч үгүй"],
    correct: 2
  },
  {
    question: "Үнэн (True) эсвэл Худал (False): Tailwind CSS нь зөвхөн inline style бичдэг framework юм.",
    options: ["Үнэн", "Худал"],
    correct: 1
  }
];

export function InteractiveQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSelect = (idx: number) => {
    if (showAnswer) return;
    setSelected(idx);
    setShowAnswer(true);

    if (idx === questions[current].correct) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      setSelected(null);
      setShowAnswer(false);
      if (current < questions.length - 1) {
        setCurrent(cur => cur + 1);
      } else {
        setFinished(true);
      }
    }, 1200);
  };

  return (
    <section className="py-24 px-6 w-full flex justify-center border-t border-white/5">
      <div className="max-w-3xl w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <div className="flex justify-center text-rose-400 mb-4">
            <Target size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Та тэнцэх үү? (Богино сорил)</h2>
          <p className="text-zinc-400">Өөрийнхөө ур чадварыг энгийн 3 асуултаар шалгаад үзээрэй.</p>
        </motion.div>

        <div className="bg-zinc-900/80 border border-white/10 rounded-3xl p-8 min-h-[300px] flex flex-col justify-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!finished ? (
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full text-left"
              >
                <div className="text-sm font-semibold text-rose-400 mb-2">Асуулт {current + 1} / {questions.length}</div>
                <h3 className="text-xl md:text-2xl font-medium mb-8 select-none">
                  {questions[current].question}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {questions[current].options.map((opt, i) => {
                    const isCorrect = i === questions[current].correct;
                    const isSelected = selected === i;

                    let btnClass = "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20";
                    if (showAnswer) {
                      if (isCorrect) btnClass = "bg-emerald-500/20 border-emerald-500 text-emerald-300";
                      else if (isSelected) btnClass = "bg-rose-500/20 border-rose-500 text-rose-300";
                      else btnClass = "bg-white/5 border border-white/10 opacity-50";
                    }

                    return (
                      <button 
                        key={i}
                        onClick={() => handleSelect(i)}
                        className={`p-4 rounded-xl text-left transition-all flex justify-between items-center ${btnClass}`}
                      >
                        <span>{opt}</span>
                        {showAnswer && isSelected && (isCorrect ? <Check size={18} /> : <X size={18} />)}
                        {showAnswer && !isSelected && isCorrect && <Check size={18} />}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <h3 className="text-3xl font-bold">Таны оноо: <span className={score === questions.length ? "text-emerald-400" : "text-amber-400"}>{score} / {questions.length}</span></h3>
                <p className="text-zinc-400 max-w-md mx-auto">
                  {score === questions.length 
                    ? "Гайхалтай! Та яг бидний хайж буй хүн мөн байна. Доорх формыг бөглөөрэй!" 
                    : "Сайн байна! Гэхдээ зарим зүйлийг сэргээж харах хэрэгтэй юм байна. Гэсэн хэдий ч бид сонирхсон хүн бүрт нээлттэй!"}
                </p>
                <button 
                  onClick={() => {setCurrent(0); setScore(0); setFinished(false)}}
                  className="mt-4 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 text-sm hover:bg-white/10 transition-colors"
                >
                  <RefreshCw size={16} /> Дахин нэг оролдох
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
