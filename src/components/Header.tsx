import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useLang } from "@/i18n/LangContext";
import { Lang } from "@/i18n/translations";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLang();

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.portfolio, href: "/portfolio" },
    { label: t.nav.pricing, href: "/pricing" },
    { label: t.nav.blog, href: "/blog" },
    { label: t.nav.contacts, href: "/contacts" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  const toggleLang = () => setLang(lang === "ru" ? "zh" : "ru");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-dark shadow-2xl py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center glow-primary">
            <Icon name="Zap" size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold font-['Manrope'] text-white">
            Site<span className="gradient-text">Sphere</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === link.href
                  ? "text-white bg-white/10"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* Language switcher */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all text-sm font-medium"
            title={lang === "ru" ? "Switch to Chinese" : "切换到俄语"}
          >
            <span className="text-base leading-none">{lang === "ru" ? "🇨🇳" : "🇷🇺"}</span>
            <span>{lang === "ru" ? "中文" : "RU"}</span>
          </button>
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
            {t.nav.login}
          </Button>
          <Button className="gradient-primary text-white border-0 hover:opacity-90 glow-primary font-semibold">
            {t.nav.start}
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="text-white/70 hover:text-white p-1.5 text-sm border border-white/15 rounded-lg"
          >
            {lang === "ru" ? "🇨🇳" : "🇷🇺"}
          </button>
          <button
            className="text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-dark mt-2 mx-4 rounded-2xl p-4">
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === link.href
                    ? "text-white bg-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2">
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 w-full">
              {t.nav.login}
            </Button>
            <Button className="gradient-primary text-white border-0 w-full font-semibold">
              {t.nav.start}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
