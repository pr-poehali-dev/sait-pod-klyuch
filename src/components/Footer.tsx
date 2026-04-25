import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const footerLinks = {
  Платформа: [
    { label: "О платформе", href: "/about" },
    { label: "Портфолио", href: "/portfolio" },
    { label: "Цены", href: "/pricing" },
    { label: "Блог", href: "/blog" },
  ],
  Интеграции: [
    { label: "Яндекс Бизнес", href: "#" },
    { label: "ЮKassa", href: "#" },
    { label: "Robokassa", href: "#" },
    { label: "Яндекс Метрика", href: "#" },
  ],
  Компания: [
    { label: "Контакты", href: "/contacts" },
    { label: "Политика конфиденциальности", href: "#" },
    { label: "Договор оферты", href: "#" },
    { label: "Партнёрам", href: "#" },
  ],
};

const socials = [
  { icon: "Send", href: "#", label: "Telegram" },
  { icon: "MessageCircle", href: "#", label: "VK" },
  { icon: "Youtube", href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0814] text-white border-t border-white/10">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
                <Icon name="Zap" size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold font-['Manrope']">
                Site<span className="gradient-text">Sphere</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Создавайте профессиональные сайты с мощными интеграциями. Быстро, красиво, без кода.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                  aria-label={s.label}
                >
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold text-sm text-white/90 mb-4 font-['Manrope']">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2024 SiteSphere. Все права защищены.
          </p>
          <div className="flex items-center gap-2 text-white/30 text-sm">
            <Icon name="Shield" size={14} />
            <span>Безопасные платежи · SSL шифрование</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
