import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Mail,
  Phone,
  Home,
  Building2,
  Newspaper,
  Coins,
  Users,
  FileText,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  LogIn,
  ChevronDown,
  UserCircle,
  Image,
  Video,
  Heart,
  UserPlus,
  ClipboardList,
  HeartHandshake,
  UserCheck,
  FileCheck,
  LayoutList,
  Scale,
} from "lucide-react";

// Menu structure with icons per item
const ABOUT_ITEMS = [
  { to: "/about", key: "about_us_sub", icon: Building2 },
  { to: "/board-members", key: "board_members", icon: UserCircle },
  { to: "/organization-members", key: "organization_members", icon: Users },
  { to: "/board-establishment-decision", key: "board_establishment_decision", icon: FileCheck },
  { to: "/organization-certificate", key: "organization_certificate", icon: FileText },
  { to: "/basic-standards", key: "basic_standards", icon: LayoutList },
];
const NEWS_ITEMS = [
  { to: "/news", key: "latest_news", icon: Newspaper },
  { to: "/photo-albums", key: "photo_albums", icon: Image },
  { to: "/video-albums", key: "video_albums", icon: Video },
];
const CONTRIBUTE_ITEMS = [
  { to: "/donate", key: "donate", icon: Coins },
  { to: "/sponsor-register", key: "sponsor_registration", icon: UserPlus },
  { to: "/volunteer-register", key: "volunteer_registration", icon: UserCheck },
  { to: "/volunteer-opportunities", key: "volunteer_opportunity", icon: Heart },
  { to: "/volunteer-opportunity-register", key: "volunteer_opportunity_register", icon: ClipboardList },
  { to: "/membership", key: "membership", icon: Users },
  { to: "/partnership", key: "partnership", icon: HeartHandshake },
];
const BENEFICIARY_ITEMS = [
  { to: "/beneficiary-register", key: "beneficiary_registration", icon: UserCheck },
  { to: "/service-request", key: "service_request", icon: FileCheck },
  { to: "/available-services", key: "available_services", icon: LayoutList },
];
const REPORTS_ITEMS = [
  { to: "/annual-reports", key: "annual_reports", icon: FileText },
  { to: "/governance", key: "governance", icon: Scale },
];

const Navbar = ({ language, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState({ about: false, news: false, contribute: false, beneficiary: false, reports: false });
  const hoverTimeoutRef = React.useRef(null);

  const closeAll = () => {
    setOpenDropdown(null);
    setIsOpen(false);
  };

  const handleDropdownEnter = (id) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setOpenDropdown(id);
  };
  const handleDropdownLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const translations = {
    en: {
      home: "Home",
      about_us: "About us",
      about_us_sub: "About us",
      board_members: "Board Members",
      organization_members: "Organization Members",
      board_establishment_decision: "Board Establishment Decision",
      organization_certificate: "Organization Certificate",
      basic_standards: "Basic Standards",
      news: "News",
      latest_news: "Latest News",
      photo_albums: "Photo Albums",
      video_albums: "Video Albums",
      contribute_with_us: "Contribute with Us",
      donate: "Donate",
      sponsor_registration: "Sponsor Registration",
      volunteer_registration: "Volunteer Registration",
      volunteer_opportunity: "Volunteer Opportunity",
      volunteer_opportunity_register: "Volunteering Opportunity Registration",
      membership: "Membership",
      partnership: "Partnership",
      beneficiary_services: "Beneficiary Services",
      beneficiary_registration: "Beneficiary Registration",
      service_request: "Service Request",
      available_services: "Available Services",
      reports: "Reports",
      annual_reports: "Annual Reports",
      governance: "Governance",
      contact_us: "Contact Us",
      donate_now: "Donate now",
    },
    ar: {
      home: "الرئيسية",
      about_us: "عنا",
      about_us_sub: "عن الجمعية",
      board_members: "أعضاء مجلس الإدارة",
      organization_members: "أعضاء الجمعية",
      board_establishment_decision: "قرار تشكيل المجلس",
      organization_certificate: "شهادة تسجيل الجمعية",
      basic_standards: "المعايير الأساسية",
      news: "الأخبار",
      latest_news: "آخر الأخبار",
      photo_albums: "ألبوم الصور",
      video_albums: "ألبوم الفيديو",
      contribute_with_us: "ساهم معنا",
      donate: "تبرع معنا",
      sponsor_registration: "تسجيل المحسنين",
      volunteer_registration: "تسجيل المتطوعين",
      volunteer_opportunity: "فرص التطوع",
      volunteer_opportunity_register: "تسجيل فرصة تطوع",
      membership: "العضوية",
      partnership: "الشراكة",
      beneficiary_services: "خدمات المستفيدين",
      beneficiary_registration: "تسجيل مستفيد",
      service_request: "طلب خدمة",
      available_services: "الخدمات المتوفرة",
      reports: "التقارير",
      annual_reports: "التقارير السنوية",
      governance: "الحوكمة",
      contact_us: "تواصل معنا",
      donate_now: "تبرع الآن",
    },
  };

  const t = translations[language];

  const renderDropdown = (id, labelKey, items, Icon) => (
    <div
      className="relative"
      onMouseEnter={() => handleDropdownEnter(id)}
      onMouseLeave={handleDropdownLeave}
    >
      <button
        onClick={() => setOpenDropdown(openDropdown === id ? null : id)}
        className="flex items-center gap-1 px-2 py-2 rounded-lg font-medium transition-colors hover:opacity-80 font-body text-sm xl:text-lg whitespace-nowrap"
        style={{ color: "#0E4B33" }}
      >
        <Icon size={16} style={{ color: "#C89B3C", flexShrink: 0 }} />
        <span>{t[labelKey]}</span>
        <ChevronDown size={14} className={openDropdown === id ? "rotate-180" : ""} />
      </button>
      {openDropdown === id && (
        <div
          className="absolute top-full left-0 mt-1 min-w-[220px] rounded-lg shadow-lg py-1 z-50 max-h-[70vh] overflow-y-auto"
          style={{ backgroundColor: "#FFFFFF", border: "1px solid #e5e7eb" }}
        >
          {items.map(({ to, key, icon: ItemIcon }) => (
            <Link
              key={key}
              to={to}
              onClick={closeAll}
              className="flex items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 font-body"
              style={{ color: "#0E4B33" }}
            >
              <ItemIcon size={18} style={{ color: "#C89B3C", flexShrink: 0 }} />
              {t[key]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  const renderMobileSection = (id, labelKey, items, Icon) => {
    const isExpanded = mobileOpen[id];
    return (
      <div key={id} className="border border-gray-200 rounded-lg overflow-hidden">
        <button
          onClick={() => setMobileOpen((s) => ({ ...s, [id]: !s[id] }))}
          className="flex items-center gap-3 w-full px-4 py-3 text-left font-body"
          style={{ color: "#000000" }}
        >
          <span className="flex-shrink-0 rounded-lg p-1.5" style={{ backgroundColor: "rgba(200,155,60,0.15)" }}>
            <Icon size={20} style={{ color: "#C89B3C" }} />
          </span>
          <span>{t[labelKey]}</span>
          <ChevronDown size={18} className={`ml-auto ${isExpanded ? "rotate-180" : ""}`} />
        </button>
        {isExpanded && (
          <div className="bg-gray-50 border-t border-gray-200">
            {items.map(({ to, key, icon: ItemIcon }) => (
              <Link
                key={key}
                to={to}
                onClick={closeAll}
                className="flex items-center gap-2 px-4 py-2.5 pl-12 font-body text-sm"
                style={{ color: "#0E4B33" }}
              >
                <ItemIcon size={18} style={{ color: "#C89B3C" }} />
                {t[key]}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="text-sm" style={{ backgroundColor: "#0E4B33", color: "#FFFFFF" }}>
        <div className="container mx-auto px-6 py-2 flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-4 md:gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <Mail size={16} style={{ color: "#C89B3C" }} />
              <span>info@mathwaa.org</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} style={{ color: "#C89B3C" }} />
              <span>+966 53 962 6662</span>
            </div>
            <div className="flex items-center gap-2 border-l border-white/30 pl-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:opacity-80 transition-opacity" style={{ color: "#C89B3C" }} aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:opacity-80 transition-opacity" style={{ color: "#C89B3C" }} aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:opacity-80 transition-opacity" style={{ color: "#C89B3C" }} aria-label="YouTube"><Youtube size={18} /></a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/admin" className="flex items-center gap-1.5 px-2 py-1 rounded text-sm font-medium transition-opacity hover:opacity-90" style={{ color: "#C89B3C" }} title="Admin Login">
              <LogIn size={16} />
              <span className="hidden sm:inline"><UserCircle size={18} /></span>
            </Link>
            <span className="h-4 w-px bg-white/30" aria-hidden />
            <button onClick={() => onLanguageChange("en")} className="px-2 py-1 rounded text-sm font-medium transition-colors" style={{ backgroundColor: language === "en" ? "#C89B3C" : "rgba(255,255,255,0.2)", color: "#FFFFFF" }}>EN</button>
            <button onClick={() => onLanguageChange("ar")} className="px-2 py-1 rounded text-sm font-medium transition-colors" style={{ backgroundColor: language === "ar" ? "#C89B3C" : "rgba(255,255,255,0.2)", color: "#FFFFFF" }}>AR</button>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50" style={{ backgroundColor: "#FFFFFF", borderBottom: "2px solid #0E4B33" }}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20 gap-4">
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <img
                src={`${(import.meta.env.BASE_URL || "").replace(/\/$/, "")}/Jamiyah%202.png`}
                alt="Mathwaa Logo"
                className="h-12 md:h-14 w-auto object-contain"
                onError={(e) => { e.target.onerror = null; const base = (import.meta.env.BASE_URL || "").replace(/\/$/, ""); e.target.src = `${base}/logo.png`; }}
              />
            </Link>

            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-1 justify-center px-2 max-w-4xl">
              <Link to="/" className="flex items-center gap-1 px-2 py-2 rounded-lg font-medium transition-colors hover:opacity-80 font-body text-sm xl:text-lg whitespace-nowrap" style={{ color: "#0E4B33" }}>
                <Home size={16} style={{ color: "#C89B3C", flexShrink: 0 }} />
                <span>{t.home}</span>
              </Link>
              {renderDropdown("about", "about_us", ABOUT_ITEMS, Building2)}
              {renderDropdown("news", "news", NEWS_ITEMS, Newspaper)}
              {renderDropdown("contribute", "contribute_with_us", CONTRIBUTE_ITEMS, Coins)}
              {renderDropdown("beneficiary", "beneficiary_services", BENEFICIARY_ITEMS, Users)}
              {renderDropdown("reports", "reports", REPORTS_ITEMS, FileText)}
              <Link to="/contact" className="flex items-center gap-1 px-2 py-2 rounded-lg font-medium transition-colors hover:opacity-80 font-body text-sm xl:text-lg whitespace-nowrap" style={{ color: "#0E4B33" }}>
                <MessageCircle size={16} style={{ color: "#C89B3C", flexShrink: 0 }} />
                <span>{t.contact_us}</span>
              </Link>
            </div>

            <div className="hidden lg:flex items-center flex-shrink-0 pl-4">
              <Link to="/donate" className="px-5 py-2.5 rounded-full font-semibold transition-all shadow-md hover:opacity-90 whitespace-nowrap text-center text-sm" style={{ backgroundColor: "#0E4B33", color: "#FFFFFF" }}>
                {t.donate_now}
              </Link>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg" style={{ color: "#0E4B33" }}>
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {isOpen && (
            <div className="lg:hidden pb-4 pt-2 space-y-1 px-2">
              <Link to="/" onClick={closeAll} className="flex items-center gap-3 w-full px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 font-body" style={{ color: "#000000" }}>
                <span className="rounded-lg p-1.5" style={{ backgroundColor: "rgba(200,155,60,0.15)" }}><Home size={20} style={{ color: "#C89B3C" }} /></span>
                {t.home}
              </Link>
              {renderMobileSection("about", "about_us", ABOUT_ITEMS, Building2)}
              {renderMobileSection("news", "news", NEWS_ITEMS, Newspaper)}
              {renderMobileSection("contribute", "contribute_with_us", CONTRIBUTE_ITEMS, Coins)}
              {renderMobileSection("beneficiary", "beneficiary_services", BENEFICIARY_ITEMS, Users)}
              {renderMobileSection("reports", "reports", REPORTS_ITEMS, FileText)}
              <Link to="/contact" onClick={closeAll} className="flex items-center gap-3 w-full px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 font-body" style={{ color: "#000000" }}>
                <span className="rounded-lg p-1.5" style={{ backgroundColor: "rgba(200,155,60,0.15)" }}><MessageCircle size={20} style={{ color: "#C89B3C" }} /></span>
                {t.contact_us}
              </Link>
              <Link to="/donate" onClick={closeAll} className="flex items-center justify-center gap-2 w-full mt-3 px-4 py-3 rounded-full font-semibold" style={{ backgroundColor: "#0E4B33", color: "#FFFFFF" }}>
                <Coins size={20} />
                {t.donate_now}
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
