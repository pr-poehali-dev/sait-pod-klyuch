import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useLang } from "@/i18n/LangContext";

const footerHrefs = {
  platform: ["/about", "/portfolio", "/pricing", "/blog"],
  integrations: ["#", "#", "#", "#"],
  company: ["/contacts", "#", "#", "#"],
};

export default function Footer() {
  const { t } = useLang();
  const { footer } = t;

  const sections = [
    { key: "platform", title: footer.sections.platform, links: footer.links.platform, hrefs: footerHrefs.platform },
    { key: "integrations", title: footer.sections.integrations, links: footer.links.integrations, hrefs: footerHrefs.integrations },
    { key: "company", title: footer.sections.company, links: footer.links.company, hrefs: footerHrefs.company },
  ];

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
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">{footer.desc}</p>
            <div className="flex items-center gap-3">
              {[
                { icon: "Send", label: "Telegram" },
                { icon: "MessageCircle", label: "VK" },
                { icon: "Youtube", label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                  aria-label={s.label}
                >
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.key}>
              <h4 className="font-semibold text-sm text-white/90 mb-4 font-['Manrope']">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((label, i) => (
                  <li key={label}>
                    <Link to={section.hrefs[i]} className="text-sm text-white/50 hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">{footer.copyright}</p>
          <div className="flex items-center gap-2 text-white/30 text-sm">
            <Icon name="Shield" size={14} />
            <span>{footer.security}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
