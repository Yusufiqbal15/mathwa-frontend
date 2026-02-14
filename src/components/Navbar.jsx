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
  Heart,
  HeartHandshake,
} from "lucide-react";

const NAV_ITEMS = [
  { to: "/", icon: Home, key: "home" },
  { to: "/about", icon: Building2, key: "about" },
  { to: "/news", icon: Newspaper, key: "news" },
  { to: "/beneficiary-services", icon: Users, key: "beneficiary_services" },
  { to: "/annual-reports", icon: FileText, key: "reports" },
  { to: "/contact", icon: MessageCircle, key: "contact" },
];

const CONTRIBUTE_DROPDOWN_ITEMS = [
  { to: "/volunteering", icon: Heart, key: "volunteering" },
  { to: "/donate", icon: Coins, key: "donations" },
  { to: "/partnership", icon: HeartHandshake, key: "partnerships" },
];

const Navbar = ({ language, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contributeOpen, setContributeOpen] = useState(false);
  const [contributeMobileOpen, setContributeMobileOpen] = useState(false);

  const translations = {
    en: {
      home: "Home",
      about: "About the Association",
      news: "News",
      donate: "Donate now",
      contact: "Contact Us",
      beneficiary_services: "Beneficiary Services",
      reports: "Reports",
      contribute_with_us: "Contribute with us",
      volunteering: "Volunteering",
      donations: "Donations",
      partnerships: "Partnerships",
    },
    ar: {
      home: "الرئيسية",
      about: "عن الجمعية",
      news: "الأخبار",
      donate: "ساهم",
      contact: "اتصل بنا",
      beneficiary_services: "خدمات المستفيدين",
      reports: "التقارير",
      contribute_with_us: "ساهم معنا",
      volunteering: "التطوع",
      donations: "التبرعات",
      partnerships: "الشراكات",
    },
  };

  const t = translations[language];

  return (
    <>
      {/* ===== TOP INFO BAR (official green) ===== */}
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
            {/* Social media icons */}
            <div className="flex items-center gap-2 border-l border-white/30 pl-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded hover:opacity-80 transition-opacity"
                style={{ color: "#C89B3C" }}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded hover:opacity-80 transition-opacity"
                style={{ color: "#C89B3C" }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded hover:opacity-80 transition-opacity"
                style={{ color: "#C89B3C" }}
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Admin login */}
            <Link
              to="/admin"
              className="flex items-center gap-1.5 px-2 py-1 rounded text-sm font-medium transition-opacity hover:opacity-90"
              style={{ color: "#C89B3C" }}
              title="Admin Login"
            >
              <LogIn size={16} />
              <span className="hidden sm:inline">Admin</span>
            </Link>
            <span className="h-4 w-px bg-white/30" aria-hidden />
            <button
              onClick={() => onLanguageChange("en")}
              className="px-2 py-1 rounded text-sm font-medium transition-colors"
              style={{
                backgroundColor: language === "en" ? "#C89B3C" : "rgba(255,255,255,0.2)",
                color: "#FFFFFF",
              }}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange("ar")}
              className="px-2 py-1 rounded text-sm font-medium transition-colors"
              style={{
                backgroundColor: language === "ar" ? "#C89B3C" : "rgba(255,255,255,0.2)",
                color: "#FFFFFF",
              }}
            >
              AR
            </button>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAVBAR (white, all options visible) ===== */}
      <nav
        className="sticky top-0 z-50"
        style={{
          backgroundColor: "#FFFFFF",
          borderBottom: "2px solid #0E4B33",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20 gap-4">
            {/* Logo - left */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <img
                src="/public/Jamiyah 2.png"
                alt="Mathwaa Logo"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop: nav links + Contribute with us dropdown - center */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-1 justify-center px-2 max-w-4xl">
              {NAV_ITEMS.map(({ to, icon: Icon, key }) => (
                <Link
                  key={key}
                  to={to}
                  className="flex items-center gap-1 px-2 py-2 rounded-lg font-medium transition-colors hover:opacity-80 font-body text-lg xl:text-sm whitespace-nowrap"
                  style={{ color: "#0E4B33" }}
                >
                  <Icon size={16} style={{ color: "#C89B3C", flexShrink: 0 }} />
                  <span>{t[key]}</span>
                </Link>
              ))}

              {/* Contribute with us - dropdown */}
              <div className="relative">
                <button
                  onClick={() => setContributeOpen(!contributeOpen)}
                  onBlur={() => setTimeout(() => setContributeOpen(false), 150)}
                  className="flex items-center gap-1 px-2 py-2 rounded-lg font-medium transition-colors hover:opacity-80 font-body text-lg xl:text-sm whitespace-nowrap"
                  style={{ color: "#0E4B33" }}
                >
                  <Coins size={16} style={{ color: "#C89B3C", flexShrink: 0 }} />
                  <span>{t.contribute_with_us}</span>
                  <ChevronDown size={14} className={contributeOpen ? "rotate-180" : ""} />
                </button>
                {contributeOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 min-w-[180px] rounded-lg shadow-lg py-1 z-50"
                    style={{ backgroundColor: "#FFFFFF", border: "1px solid #e5e7eb" }}
                  >
                    {CONTRIBUTE_DROPDOWN_ITEMS.map(({ to, icon: Icon, key }) => (
                      <Link
                        key={key}
                        to={to}
                        onClick={() => setContributeOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 rounded mx-1 font-body"
                        style={{ color: "#0E4B33" }}
                      >
                        <Icon size={18} style={{ color: "#C89B3C" }} />
                        {t[key]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Donate now button - right side desktop */}
            <div className="hidden lg:flex items-center flex-shrink-0 pl-4">
              <Link
                to="/donate"
                className="px-5 py-2.5 rounded-full font-semibold transition-all shadow-md hover:opacity-90 whitespace-nowrap text-center text-sm"
                style={{ backgroundColor: "#0E4B33", color: "#FFFFFF" }}
              >
                {t.donate}
              </Link>
            </div>

            {/* Mobile: hamburger opens full menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg"
              style={{ color: "#0E4B33" }}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile menu: vertical list + Contribute with us expandable */}
          {isOpen && (
            <div
              className="lg:hidden pb-4 pt-2 space-y-1"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              {NAV_ITEMS.map(({ to, icon: Icon, key }) => (
                <Link
                  key={key}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-colors border border-gray-200 hover:bg-gray-50"
                  style={{ color: "#000000" }}
                >
                  <span
                    className="flex-shrink-0 rounded-lg p-1.5"
                    style={{ backgroundColor: "rgba(200,155,60,0.15)" }}
                  >
                    <Icon size={20} style={{ color: "#C89B3C" }} />
                  </span>
                  <span className="font-body">{t[key]}</span>
                </Link>
              ))}
              {/* Contribute with us - mobile expandable */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setContributeMobileOpen(!contributeMobileOpen)}
                  className="flex items-center gap-3 w-full px-4 py-3 text-left font-body"
                  style={{ color: "#000000" }}
                >
                  <span
                    className="flex-shrink-0 rounded-lg p-1.5"
                    style={{ backgroundColor: "rgba(200,155,60,0.15)" }}
                  >
                    <Coins size={20} style={{ color: "#C89B3C" }} />
                  </span>
                  <span>{t.contribute_with_us}</span>
                  <ChevronDown size={18} className={`ml-auto ${contributeMobileOpen ? "rotate-180" : ""}`} />
                </button>
                {contributeMobileOpen && (
                  <div className="bg-gray-50 border-t border-gray-200">
                    {CONTRIBUTE_DROPDOWN_ITEMS.map(({ to, icon: Icon, key }) => (
                      <Link
                        key={key}
                        to={to}
                        onClick={() => { setIsOpen(false); setContributeMobileOpen(false); }}
                        className="flex items-center gap-3 w-full px-4 py-2.5 pl-12 font-body text-sm"
                        style={{ color: "#0E4B33" }}
                      >
                        <Icon size={18} style={{ color: "#C89B3C" }} />
                        {t[key]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Donate now - mobile */}
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full mt-3 px-4 py-3 rounded-full font-semibold"
                style={{ backgroundColor: "#0E4B33", color: "#FFFFFF" }}
              >
                <Coins size={20} />
                {t.donate}
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
