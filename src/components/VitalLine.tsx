import { motion } from "framer-motion";

/**
 * Signature motif: a line that reads as a heartbeat trace resolving into a
 * single clean incision stroke — the page's recurring signature element,
 * used as section dividers and headline accents.
 */
export default function VitalLine({
  className = "",
  width = 220,
  color = "var(--color-accent)",
}: {
  className?: string;
  width?: number;
  color?: string;
}) {
  const h = 28;
  const path = `M0,${h / 2}
    L${width * 0.32},${h / 2}
    L${width * 0.38},${h * 0.15}
    L${width * 0.44},${h * 0.9}
    L${width * 0.5},${h * 0.5}
    L${width * 0.56},${h / 2}
    L${width},${h / 2}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${h}`}
      width={width}
      height={h}
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d={path}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
    </svg>
  );
}
