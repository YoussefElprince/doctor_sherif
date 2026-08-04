import { motion } from "framer-motion";
import { Award, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import VitalLine from "./VitalLine";

const icons = [Award, ShieldCheck, GraduationCap, Sparkles];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function WhyChoose() {
  const { content, isArabic } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            {content.ui.whyChoose}
          </span>
          <h2 className="mt-3 font-display text-balance text-4xl md:text-5xl text-primary-deep leading-tight">
            {content.ui.whyChoose} {content.doctor.name}{isArabic ? "؟" : "?"}
          </h2>
          <VitalLine className="mt-5 mx-auto" width={140} />
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.whyChoose.map(({ title, description }, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-primary/8 p-7 text-center hover:border-accent/30 hover:shadow-lift transition-all"
              >
                <span className="mx-auto grid place-items-center w-14 h-14 rounded-full bg-accent-soft text-accent">
                  <Icon size={24} />
                </span>
                <h3 className="mt-5 font-display text-lg text-primary-deep leading-snug">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
