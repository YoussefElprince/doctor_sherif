import { motion } from "framer-motion";

/**
 * Full-width section separator: the same heartbeat-to-incision motif as
 * VitalLine, stretched edge-to-edge, used in place of a generic decorative
 * wave. Keeps the "precision" signature consistent across the page.
 */
export default function SectionPulse({
  flip = false,
  tone = "light",
}: {
  flip?: boolean;
  tone?: "light" | "primary";
}) {
  const stroke = tone === "primary" ? "rgba(255,255,255,0.35)" : "var(--color-secondary)";
  const path =
    "M0,40 L560,40 L610,10 L660,70 L710,40 L1440,40";

  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1440 80" className="w-full h-10 md:h-16" preserveAspectRatio="none">
        <motion.path
          d={path}
          fill="none"
          stroke={stroke}
          strokeWidth={1.5}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
