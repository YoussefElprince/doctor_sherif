import { motion } from "framer-motion";
import { BadgeCheck, GraduationCap, Stethoscope, UserRound } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import VitalLine from "./VitalLine";
import AnimatedCounter from "./AnimatedCounter";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function About() {
  const { content } = useLanguage();
  const infoRows = [
    { icon: UserRound, label: content.ui.name, value: content.doctor.name },
    { icon: Stethoscope, label: content.ui.position, value: `${content.doctor.title}\n${content.doctor.affiliation}` },
    { icon: GraduationCap, label: content.ui.qualification, value: content.doctor.qualification },
    { icon: BadgeCheck, label: content.ui.experience, value: content.doctor.experienceLabel },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">{content.ui.about}</span>
          <h2 className="mt-3 font-display text-balance text-4xl md:text-5xl text-primary-deep leading-tight">
            {content.ui.aboutDoctor} {content.doctor.name}
          </h2>
          <VitalLine className="mt-5" width={140} />
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Info column */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-3 rounded-3xl bg-bg-light border border-primary/5 p-7 md:p-10 shadow-soft"
          >
            <dl className="divide-y divide-primary/8">
              {infoRows.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                  <span className="grid place-items-center w-11 h-11 shrink-0 rounded-xl bg-primary/8 text-primary">
                    <Icon size={19} />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                      {label}
                    </dt>
                    <dd className="mt-1 text-base md:text-lg text-primary-deep font-medium whitespace-pre-line">
                      {value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Stat cards */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 md:gap-5">
            {content.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-gradient-to-br from-primary to-primary-deep text-white p-6 shadow-soft hover:shadow-lift transition-shadow"
              >
                <p className="font-display text-3xl md:text-4xl">
                  <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-white/80 leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
