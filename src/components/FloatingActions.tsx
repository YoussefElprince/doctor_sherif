import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function FloatingActions() {
  const { content } = useLanguage();

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3 rtl:left-5 rtl:right-auto md:bottom-8 md:right-8 md:rtl:left-8 md:rtl:right-auto">
      <motion.a
        href={`tel:+20${content.doctor.phoneNumbers[0].slice(1)}`}
        aria-label={content.ui.callClinic}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="grid place-items-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-white shadow-lift"
      >
        <Phone size={22} />
      </motion.a>
      <motion.a
        href={`https://wa.me/20${content.doctor.whatsappNumbers[0].slice(1)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={content.ui.messageWhatsapp}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="grid place-items-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-lift"
      >
        <MessageCircle size={24} />
      </motion.a>
    </div>
  );
}
