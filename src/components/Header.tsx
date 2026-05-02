import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "О нас", href: "/about" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "Открытие бизнеса", href: "/pricing" },
  { label: "Блог", href: "/blog" },
  { label: "Контакты", href: "/contacts" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-dark py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center glow-sm">
            <Icon name="Globe" size={16} className="text-white" />
          </div>
          <span className="text-[17px] font-extrabold font-['Manrope'] text-white tracking-tight">
            Alt<span className="gradient-text">Del</span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                location.pathname === link.href
                  ? "text-white bg-white/10"
                  : "text-white/55 hover:text-white hover:bg-white/8"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/8 text-[13px] h-9">
            Войти
          </Button>
          <Button className="gradient-primary text-white border-0 hover:opacity-90 text-[13px] h-9 px-4 font-semibold glow-sm">
            Получить сайт
            <Icon name="ArrowRight" size={14} className="ml-1.5" />
          </Button>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-white/80 hover:text-white p-1.5 rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-dark mt-2 mx-4 rounded-2xl p-4 border border-white/8">
          <nav className="flex flex-col gap-0.5 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === link.href
                    ? "text-white bg-white/10"
                    : "text-white/60 hover:text-white hover:bg-white/8"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2">
            <Button variant="ghost" className="text-white/60 hover:text-white w-full text-sm">
              Войти
            </Button>
            <Button className="gradient-primary text-white border-0 w-full font-semibold text-sm">
              Получить сайт
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}