import { motion } from "framer-motion";
import { Car, Clock, MapPin, Navigation, Sofa } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import VitalLine from "./VitalLine";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Clinic() {
  const { content } = useLanguage();
  const amenities = [
    { icon: Car, label: content.ui.parking },
    { icon: Sofa, label: content.ui.waitingRoom },
    { icon: MapPin, label: content.ui.cairoLocation },
  ];
  const mapQuery = encodeURIComponent(`${content.clinic.name}, ${content.clinic.address}, Cairo`);

  return (
    <section id="clinic" className="relative py-24 md:py-32 bg-bg-light">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">{content.ui.clinic}</span>
          <h2 className="mt-3 font-display text-balance text-4xl md:text-5xl text-primary-deep leading-tight">
            {content.ui.visitClinic}
          </h2>
          <VitalLine className="mt-5" width={140} />
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8 items-start">
          {/* Info card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-2 rounded-3xl bg-white p-8 md:p-9 shadow-soft border border-primary/5"
          >
            <h3 className="font-display text-2xl text-primary-deep">{content.clinic.name}</h3>
            <div className="mt-6 flex gap-3.5">
              <span className="grid place-items-center w-10 h-10 shrink-0 rounded-xl bg-primary/8 text-primary">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-[15px] text-primary-deep font-medium">{content.clinic.address}</p>
              </div>
            </div>

            <a
              href={content.clinic.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-deep hover:-translate-y-0.5 transition-all"
            >
              <Navigation size={16} />
              {content.ui.openMaps}
            </a>

            <div className="mt-8 pt-7 border-t border-primary/8">
              <div className="flex items-center gap-2.5 text-primary-deep font-semibold">
                <Clock size={18} className="text-accent" />
                {content.ui.workingHours}
              </div>
              <ul className="mt-4 space-y-2.5">
                {content.workingHours.map((wh) => (
                  <li
                    key={wh.day}
                    className="flex items-center justify-between text-[15px] border-b border-dashed border-primary/8 pb-2.5 last:border-0"
                  >
                    <span className="text-ink-soft">{wh.day}</span>
                    <span
                      className={
                        wh.closed
                          ? "text-ink-soft/60 italic"
                          : "font-medium text-primary-deep"
                      }
                    >
                      {wh.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {amenities.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-bg-light px-3.5 py-1.5 text-xs font-medium text-ink-soft border border-primary/5"
                >
                  <Icon size={13} className="text-accent" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden shadow-soft border border-primary/5 h-[420px] md:h-full min-h-[420px]"
          >
            <iframe
              title={content.ui.clinicMap}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
