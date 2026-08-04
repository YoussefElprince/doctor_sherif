import { motion } from "framer-motion";
import { Award, CalendarCheck, GraduationCap, PhoneCall, ShieldCheck } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import VitalLine from "./VitalLine";
import DoctorPortrait from "./DoctorPortrait";

const floatCard = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
  },
};

export default function Hero() {
  const { content } = useLanguage();

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden grain-bg bg-bg-light"
    >
      {/* Ambient background shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-primary/10 to-accent/5 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-[380px] h-[380px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-primary shadow-soft border border-primary/10">
            <ShieldCheck size={15} className="text-accent" />
            {content.doctor.experience}
          </span>

          <h1 className="mt-6 font-display text-balance text-[2.6rem] leading-[1.08] sm:text-5xl md:text-6xl text-primary-deep">
            {content.doctor.name}
          </h1>

          <p className="mt-5 text-lg md:text-xl text-ink-soft max-w-lg leading-relaxed">
            {content.doctor.title}
            <br />
            {content.doctor.affiliation}
          </p>

          <p className="mt-4 text-lg text-primary-deep/90 max-w-lg leading-loose">
            {content.doctor.qualification}
          </p>

          <VitalLine className="mt-7" width={180} />

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[15px] font-semibold text-white shadow-lift hover:bg-primary-deep transition-all hover:-translate-y-0.5"
            >
              <CalendarCheck size={18} />
              {content.ui.bookAppointment}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 backdrop-blur px-7 py-3.5 text-[15px] font-semibold text-primary-deep hover:border-primary/40 hover:bg-white transition-all"
            >
              <PhoneCall size={17} />
              {content.ui.contact}
            </a>
          </div>
        </motion.div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-lg"
        >
          {/* Surgical-light arch frame */}
          <div className="relative aspect-[4/5] rounded-[3rem] rounded-tr-[7rem] overflow-hidden bg-gradient-to-b from-primary/8 to-accent/10 shadow-lift ring-1 ring-primary/10">
            <div className="absolute inset-0 noise-dots opacity-40" />
            <DoctorPortrait className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/25 via-transparent to-transparent" />
          </div>

          {/* Floating credential cards */}
          <motion.div
            variants={floatCard}
            animate="animate"
            className="absolute -left-6 top-10 flex items-center gap-1.5 rounded-2xl border border-white bg-white/90 px-2.5 py-2 shadow-lift backdrop-blur sm:gap-2.5 sm:px-4 sm:py-3"
          >
            <span className="grid place-items-center h-7 w-7 rounded-full bg-accent/15 text-accent sm:h-9 sm:w-9">
              <Award size={17} />
            </span>
            <span className="text-xs font-semibold leading-tight text-primary-deep sm:text-sm">
              15+ {content.ui.years}
              <br />
              <span className="font-normal text-ink-soft">{content.ui.experienceWord}</span>
            </span>
          </motion.div>

          <motion.div
            variants={floatCard}
            animate="animate"
            transition={{ delay: 1 }}
            className="absolute -right-4 top-[52%] flex items-center sm:top-[52%] gap-1.5 rounded-2xl border border-white bg-white/90 px-2.5 py-2 shadow-lift backdrop-blur sm:gap-2.5 sm:px-4 sm:py-3"
          >
            <span className="grid place-items-center h-7 w-7 rounded-full bg-primary/10 text-primary sm:h-9 sm:w-9">
              <ShieldCheck size={17} />
            </span>
            <span className="text-xs font-semibold leading-tight text-primary-deep sm:text-sm">
              {content.ui.consultant}
              <br />
              <span className="font-normal text-ink-soft">{content.ui.generalSurgeon}</span>
            </span>
          </motion.div>

          <motion.div
            variants={floatCard}
            animate="animate"
            transition={{ delay: 2 }}
            className="absolute -left-4 bottom-6 flex items-center gap-1.5 rounded-2xl border border-white bg-white/90 px-2.5 py-2 shadow-lift backdrop-blur sm:gap-2.5 sm:px-4 sm:py-3"
          >
            <span className="grid place-items-center h-7 w-7 rounded-full bg-secondary/15 text-secondary sm:h-9 sm:w-9">
              <GraduationCap size={17} />
            </span>
            <span className="text-xs font-semibold leading-tight text-primary-deep sm:text-sm">
              {content.ui.assistant}
              <br />
              <span className="font-normal text-ink-soft">{content.ui.professor}</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
