import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const footerLinks = {
  Компания: [
    { label: "О нас", href: "/about" },
    { label: "Портфолио", href: "/portfolio" },
    { label: "Блог", href: "/blog" },
    { label: "Контакты", href: "/contacts" },
  ],
  Услуги: [
    { label: "Разработка сайтов", href: "#" },
    { label: "Интеграции", href: "#" },
    { label: "Поддержка", href: "#" },
    { label: "Цены", href: "/pricing" },
  ],
  Правовое: [
    { label: "Политика конфиденциальности", href: "#" },
    { label: "Договор оферты", href: "#" },
    { label: "Партнёрам", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--surface-1)", borderTop: "1px solid var(--border-subtle)" }}>
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center glow-sm">
                <Icon name="Globe" size={16} className="text-white" />
              </div>
              <span className="text-[17px] font-extrabold font-['Manrope'] text-white tracking-tight">
                Alt<span className="gradient-text">Del</span>
              </span>
            </Link>
            <p className="text-white/35 text-sm leading-relaxed mb-6 max-w-xs">
              Создаём профессиональные сайты для бизнеса. Быстро, качественно, с полным сопровождением.
            </p>
            <div className="flex items-center gap-2">
              {[
                { icon: "Send", label: "Telegram" },
                { icon: "MessageCircle", label: "VK" },
                { icon: "Youtube", label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/35 hover:text-white hover:bg-white/10 transition-all"
                  aria-label={s.label}
                >
                  <Icon name={s.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold text-xs text-white/40 mb-4 font-['Manrope'] uppercase tracking-widest">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <p className="text-white/25 text-sm">© 2024 AltDel. Все права защищены.</p>
          <div className="flex items-center gap-1.5 text-white/25 text-sm">
            <Icon name="Shield" size={13} />
            <span>SSL · Безопасные платежи</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
