import { motion } from "framer-motion";
import { HeartPulse, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import VitalLine from "./VitalLine";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Contact() {
  const { content } = useLanguage();
  const contactCards = [
    ...content.doctor.phoneNumbers.map((number) => ({ icon: Phone, label: content.ui.phone, value: number, href: `tel:${number}` })),
    ...content.doctor.whatsappNumbers.map((number) => ({ icon: MessageCircle, label: content.ui.whatsapp, value: number, href: `https://wa.me/20${number.slice(1)}` })),
    { icon: Mail, label: content.ui.email, value: content.doctor.email, href: `mailto:${content.doctor.email}` },
    { icon: MapPin, label: content.ui.clinicAddress, value: content.clinic.address, href: content.clinic.mapsUrl },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">{content.ui.contact}</span>
          <h2 className="mt-3 font-display text-balance text-4xl md:text-5xl text-primary-deep leading-tight">
            {content.ui.getInTouch}
          </h2>
          <VitalLine className="mt-5" width={140} />
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          {/* Contact cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {contactCards.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={`${label}-${value}`}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 rounded-2xl border border-primary/5 bg-bg-light p-4 transition-all hover:border-accent/30 hover:shadow-soft sm:gap-4 sm:p-5"
              >
                <span className="grid place-items-center w-11 h-11 shrink-0 rounded-xl bg-primary/8 text-primary">
                  <Icon size={19} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                    {label}
                  </p>
                  <p className="mt-0.5 break-words text-[15px] font-medium text-primary-deep">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.a
            href={`mailto:${content.doctor.email}`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="email-contact-card lg:col-span-3"
            aria-label={content.ui.emailDoctor}
          >
            <span className="email-contact-card__decor" />
            <span className="email-contact-card__content">
              <HeartPulse size={34} strokeWidth={1.8} aria-hidden="true" />
              <span className="email-contact-card__title">{content.ui.healthPriority}</span>
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
