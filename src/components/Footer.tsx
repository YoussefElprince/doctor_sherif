import { Stethoscope } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const socialIcons = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1LNhPhUTBC/?mibextid=wwXIfr",
    path: "M13 9h3V6h-3c-1.66 0-3 1.34-3 3v2H8v3h2v7h3v-7h3l1-3h-4V9c0-.55.45-1 1-1Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sherif-prince-8559ab12/",
    path: "M6.94 8.5H4V19h2.94V8.5ZM5.47 7.2a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM20 12.9c0-3-1.6-4.4-3.75-4.4-1.73 0-2.5.95-2.94 1.62V8.5H10.4c.04.85 0 10.5 0 10.5h2.91v-5.86c0-.31.02-.63.11-.85.25-.63.82-1.28 1.77-1.28 1.25 0 1.75.95 1.75 2.34V19H20v-6.1Z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const { content } = useLanguage();

  return (
    <footer className="bg-primary-deep text-white/80">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-white/10 text-white">
              <Stethoscope size={16} />
            </span>
            <span className="font-display text-lg text-white">{content.doctor.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            {content.doctor.title} — {content.doctor.affiliation}. {content.ui.footerDescription}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">
            {content.ui.quickLinks}
          </h4>
          <ul className="mt-4 space-y-2.5">
            {content.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm hover:text-accent transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">
            {content.ui.clinicInformation}
          </h4>
          <p className="mt-4 text-sm leading-relaxed">{content.clinic.address}</p>
          <p className="mt-1 text-sm">{content.doctor.phoneNumbers.join(" / ")}</p>
          <div className="mt-5 flex items-center gap-3">
            {socialIcons.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-accent hover:text-white transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {year} {content.doctor.name}. {content.ui.allRightsReserved}
      </div>
    </footer>
  );
}
