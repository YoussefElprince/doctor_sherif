import { motion } from "framer-motion";
import { Activity, ClipboardList, HeartPulse, Siren, Stethoscope } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import VitalLine from "./VitalLine";

const icons = [Stethoscope, Activity, ClipboardList, HeartPulse, Siren];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Services() {
  const { content } = useLanguage();

  return (
    <section id="services" className="relative py-24 md:py-32 bg-bg-light">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">{content.ui.services}</span>
          <h2 className="mt-3 font-display text-balance text-4xl md:text-5xl text-primary-deep leading-tight">
            {content.ui.areasOfCare}
          </h2>
          <VitalLine className="mt-5" width={140} />
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            {content.ui.servicesIntro}
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ delay: (i % 3) * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl bg-white p-8 shadow-soft border border-primary/5 hover:shadow-lift transition-shadow"
              >
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-primary/8 text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-xl text-primary-deep">{service.title}</h3>
                <p className="mt-2.5 text-[15px] text-ink-soft leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}

          {/* Why choose — inline compact card to close the grid rhythm */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ delay: 0.24 }}
            className="rounded-3xl bg-gradient-to-br from-primary to-primary-deep text-white p-8 shadow-lift flex flex-col justify-center"
          >
            <p className="font-display text-xl leading-snug">
              {content.ui.notSure}
            </p>
            <p className="mt-2 text-sm text-white/75">
              {content.ui.consultationGuidance}
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex w-fit items-center rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-primary-deep hover:bg-white transition-colors"
            >
              {content.ui.bookAppointment}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
