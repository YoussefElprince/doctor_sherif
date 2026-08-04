import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { doctor, clinic, services, stats, whyChoose, workingHours, navLinks } from "./data/content";

const translations = {
  en: {
    doctor: {
      ...doctor,
      qualification: doctor.qualificationEn,
      experienceLabel: "More than 25 years",
    },
    clinic: {
      ...clinic,
      name: clinic.nameEn,
      address: clinic.addressEn,
    },
    stats,
    services,
    whyChoose,
    workingHours,
    navLinks,
    ui: {
      language: "العربية",
      english: "English",
      bookAppointment: "Book Appointment",
      contact: "Contact",
      about: "About",
      services: "Services",
      whyChoose: "Why Choose",
      clinic: "Clinic",
      getInTouch: "Get in Touch",
      areasOfCare: "Areas of Surgical Care",
      servicesIntro: "A focused surgical practice built around precision, careful diagnosis, and attentive recovery — from routine consultation to complex procedures.",
      notSure: "Not sure which service fits your case?",
      consultationGuidance: "Book a consultation and get clear, direct guidance.",
      visitClinic: "Visit the Clinic",
      openMaps: "Open in Google Maps",
      workingHours: "Working Hours",
      parking: "On-street Parking",
      waitingRoom: "Comfortable Waiting Room",
      cairoLocation: "Central Cairo Location",
      clinicMap: "Clinic location map",
      phone: "Phone",
      secretary: "Clinic Secretary",
      whatsapp: "WhatsApp",
      email: "Email",
      clinicAddress: "Clinic Address",
      healthPriority: "Your health and satisfaction are our highest priorities.",
      quickLinks: "Quick Links",
      clinicInformation: "Clinic Information",
      footerDescription: "Board-certified surgical care built on precision and trust.",
      allRightsReserved: "All rights reserved.",
      callClinic: "Call the clinic",
      messageWhatsapp: "Message on WhatsApp",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      name: "Name",
      position: "Position",
      qualification: "Qualification",
      experience: "Experience",
      moreThan15: "More than 25 years",
      aboutDoctor: "About",
      years: "Years",
      experienceWord: "Experience",
      consultant: "Consultant",
      generalSurgeon: "Onco & General Surgeon",
      assistant: "Assistant",
      professor: "Professor",
      portraitAlt: "Portrait of Dr. Sherif Elprince, Consultant Onco & General Surgeon",
      emailDoctor: "Email Dr. Sherif Elprince",
      clickHere: "Click here",
    },
  },
  ar: {
    doctor: {
      ...doctor,
      name: "د. شريف البرنس",
      title: "استشاري جراحات الأورام والجراحة العامة",
      affiliation: "أستاذ مساعد بجامعة بني سويف",
      qualification: "دكتوراه في جراحات الأورام والجراحة العامة والزمالة البريطانية (FRCS)",
      experience: "أكثر من 25 عاماً من الخبرة",
      experienceLabel: "أكثر من 25 عاماً",
    },
    clinic: {
      ...clinic,
      name: "عيادة د. شريف البرنس",
      address: "أمام معهد الأورام، 5 شارع قصر العيني",
    },
    stats: [
      { value: 25, prefix: "", suffix: "+", label: "عاماً من الخبرة" },
      { value: 1000, prefix: "", suffix: "+", label: "عملية ناجحة" },
      { value: 100, prefix: "", suffix: "%", label: "رعاية احترافية" },
      { value: 10, prefix: "+", suffix: "", label: "التدريس" },
    ],
    services: [
      { title: "جراحات الأورام والجراحة العامة", description: "رعاية جراحية متكاملة لمجموعة واسعة من عمليات أورام الرأس والرقبة والجهاز الهضمي والرحم والمبايض وعنق الرحم، بالإضافة إلى حالات الأنسجة الرخوة وسرطان الثدي، من التشخيص حتى التعافي، إلى جانب عمليات الجراحة العامة مثل الفتق والعمليات الشرجية والزائدة والمرارة والناسور العصعصي." },
      { title: "جراحات المنظار", description: "تقنيات جراحية بسيطة بالمنظار تقلل الندبات وتقصّر فترة الإقامة في المستشفى وتسرّع وقت التعافي." },
      { title: "الاستشارات الجراحية", description: "تقييم شامل واستشارات للرأي الثاني لمساعدة المرضى على فهم التشخيص وخيارات العلاج." },
      { title: "متابعة ما بعد الجراحة", description: "متابعة منظمة للتعافي وإرشادات للعناية بالجرح لضمان شفاء آمن ومدار بشكل جيد." },
      { title: "التقييم الجراحي الطارئ", description: "تقييم سريع للحالات الجراحية الحادة مع إرشادات واضحة للخطوات العاجلة التالية." },
    ],
    whyChoose: [
      { title: "أكثر من 25 عاماً من الخبرة", description: "خبرة واسعة في جراحات الأورام والجراحة العامة وجراحات المنظار." },
      { title: "استشاري جراحات الأورام والجراحة العامة", description: "خبرة متقدمة في الحالات الجراحية المعقدة." },
      { title: "أستاذ مساعد", description: "دور أكاديمي نشط في جامعة بني سويف." },
      { title: "الزمالة البريطانية", description: "تدريب معتمد من FRCS ومعايير عالمية للرعاية." },
    ],
    workingHours: [
      { day: "السبت", hours: "4:00 م – 6:00 م", closed: false },
      { day: "الأحد", hours: "4:00 م – 6:00 م", closed: false },
      { day: "الاثنين", hours: "4:00 م – 6:00 م", closed: false },
      { day: "الثلاثاء", hours: "مغلق", closed: true },
      { day: "الأربعاء", hours: "4:00 م – 6:00 م", closed: false },
      { day: "الخميس", hours: "مغلق", closed: true },
      { day: "الجمعة", hours: "مغلق", closed: true },
    ],
    navLinks: [
      { label: "الرئيسية", href: "#home" },
      { label: "عن الطبيب", href: "#about" },
      { label: "الخدمات", href: "#services" },
      { label: "العيادة", href: "#clinic" },
      { label: "تواصل معنا", href: "#contact" },
    ],
    ui: {
      language: "English",
      english: "English",
      bookAppointment: "احجز موعداً",
      contact: "تواصل معنا",
      about: "عن الطبيب",
      services: "الخدمات",
      whyChoose: "لماذا تختارنا",
      clinic: "العيادة",
      getInTouch: "تواصل معنا",
      areasOfCare: "مجالات الرعاية الجراحية",
      servicesIntro: "رعاية جراحية متخصصة تقوم على الدقة والتشخيص المتأني والمتابعة المستمرة للتعافي، من الاستشارة الروتينية إلى الإجراءات المعقدة.",
      notSure: "لست متأكداً من الخدمة المناسبة لحالتك؟",
      consultationGuidance: "احجز استشارة واحصل على إرشادات واضحة ومباشرة.",
      visitClinic: "قم بزيارة العيادة",
      openMaps: "افتح الموقع على خرائط جوجل",
      workingHours: "مواعيد العمل",
      parking: "موقف سيارات في الشارع",
      waitingRoom: "غرفة انتظار مريحة",
      cairoLocation: "موقع مركزي في القاهرة",
      clinicMap: "خريطة موقع العيادة",
      phone: "الهاتف",
      secretary: "سكرتير العيادة",
      whatsapp: "واتساب",
      email: "البريد الإلكتروني",
      clinicAddress: "عنوان العيادة",
      healthPriority: "صحتكم ورضاكم هما أولويتنا القصوى.",
      quickLinks: "روابط سريعة",
      clinicInformation: "معلومات العيادة",
      footerDescription: "رعاية جراحية معتمدة تقوم على الدقة والثقة.",
      allRightsReserved: "جميع الحقوق محفوظة.",
      callClinic: "اتصل بالعيادة",
      messageWhatsapp: "راسلنا عبر واتساب",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      name: "الاسم",
      position: "المنصب",
      qualification: "المؤهلات",
      experience: "الخبرة",
      moreThan15: "أكثر من 25 عاماً",
      aboutDoctor: "عن",
      years: "عاماً",
      experienceWord: "من الخبرة",
      consultant: "استشاري",
      generalSurgeon: "جراحات الأورام والجراحة العامة",
      assistant: "أستاذ",
      professor: "مساعد",
      portraitAlt: "صورة د. شريف البرنس، استشاري جراحات الأورام والجراحة العامة",
      emailDoctor: "راسل د. شريف البرنس",
      clickHere: "اضغط هنا",
    },
  },
} as const;

type Language = keyof typeof translations;
type LanguageContent = (typeof translations)[Language];
type LanguageContextValue = {
  language: Language;
  isArabic: boolean;
  content: LanguageContent;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    return window.localStorage.getItem("site-language") === "ar" ? "ar" : "en";
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.title = language === "ar"
      ? "د. شريف البرنس | استشاري جراحات الأورام والجراحة العامة"
      : "Dr. Sherif Elprince | Consultant Onco & General Surgeon";
    window.localStorage.setItem("site-language", language);
  }, [language]);

  const value = useMemo(() => ({
    language,
    isArabic: language === "ar",
    content: translations[language],
    toggleLanguage: () => setLanguage((current) => current === "en" ? "ar" : "en"),
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
