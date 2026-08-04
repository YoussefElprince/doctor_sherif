/**
 * Displays /public/doctor.jpg if present. Until a real photo is added, an
 * intentional, on-brand silhouette placeholder renders instead — never a
 * broken image icon. Drop a portrait at public/doctor.jpg (transparent or
 * light background works best) to replace it.
 */
import { useState } from "react";
import { useLanguage } from "../LanguageContext";

export default function DoctorPortrait({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  const { content } = useLanguage();

  if (failed) {
    return (
      <div className={`grid place-items-center bg-gradient-to-b from-[#EAF3FA] to-[#DCEBF5] ${className}`}>
        <svg viewBox="0 0 240 300" className="w-2/5 h-2/5 text-secondary/60" fill="none">
          <path
            d="M120 18c-30 0-52 24-52 56 0 24 12 44 30 54-42 14-70 46-78 96a6 6 0 0 0 6 7h188a6 6 0 0 0 6-7c-8-50-36-82-78-96 18-10 30-30 30-54 0-32-22-56-52-56Z"
            fill="currentColor"
          />
          <path
            d="M98 118c7 9 15 13 22 13s15-4 22-13"
            stroke="#F6FAFD"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    );
  }

  return (
    <img
      src="https://cdn.builder.io/api/v1/image/assets%2F2d2fe8f89a534e4d9f6a016a4839c6da%2Ffd35546d76954f44a6e371caa0b92c38?format=webp&width=800&height=1200"
      alt={content.ui.portraitAlt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
