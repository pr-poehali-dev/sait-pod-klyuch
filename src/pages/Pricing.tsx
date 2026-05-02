import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

const plans = [
  {
    name: "Старт", price: { monthly: 0, yearly: 0 }, desc: "Для тех, кто только начинает",
    iconName: "Sprout",
    features: ["1 сайт", "5 страниц", "1 GB хранилища", "SSL-сертификат", "Поддомен", "Базовая аналитика"],
    missing: ["Свой домен", "Яндекс Бизнес", "Платёжные системы", "Приоритетная поддержка"],
    cta: "Начать бесплатно", popular: false, accentColor: "#6b7280",
  },
  {
    name: "Бизнес", price: { monthly: 1490, yearly: 990 }, desc: "Для растущего бизнеса",
    iconName: "Star",
    features: ["5 сайтов", "Неограниченные страницы", "20 GB хранилища", "SSL-сертификат", "Свой домен включён", "Яндекс Бизнес", "ЮKassa и Robokassa", "Яндекс Метрика + GA", "Telegram уведомления", "Приоритетная поддержка"],
    missing: [], cta: "Попробовать 14 дней", popular: true, accentColor: "#6c47ff",
  },
  {
    name: "Про", price: { monthly: 3990, yearly: 2490 }, desc: "Для серьёзных проектов",
    iconName: "Crown",
    features: ["Неограниченные сайты", "Неограниченные страницы", "100 GB хранилища", "SSL-сертификат", "До 5 доменов", "Все интеграции", "Белый лейбл", "API доступ", "Персональный менеджер", "SLA 99.9%"],
    missing: [], cta: "Связаться с нами", popular: false, accentColor: "#00d4ff",
  },
];

const faq = [
  { q: "Нужна ли кредитная карта для бесплатного плана?", a: "Нет! Бесплатный план доступен без привязки карты. Вы можете начать прямо сейчас." },
  { q: "Могу ли я сменить тариф в любое время?", a: "Да, вы можете повысить или понизить тариф в любой момент. Разница в стоимости будет пересчитана пропорционально." },
  { q: "Как работает пробный период?", a: "14 дней бесплатно без ограничений. После этого вы выбираете план или переходите на бесплатный." },
  { q: "Включён ли домен в стоимость?", a: "В планах Бизнес и Про домен .ru включён в стоимость. В плане Старт предоставляется поддомен." },
  { q: "Как настроить Яндекс Бизнес?", a: "После подключения плана Бизнес перейдите в Настройки → Интеграции. Синхронизация займёт 5 минут." },
];

export default function Pricing() {
  useReveal();
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--surface-0)" }}>
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ backgroundColor: "var(--surface-0)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full opacity-10 blur-[130px] pointer-events-none" style={{ background: "var(--brand-purple)" }} />
        <div className="container mx-auto relative z-10 text-center">
          <div className="chip mb-6 mx-auto w-fit">Цены</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5 font-['Manrope'] tracking-tight">
            Прозрачные цены,{" "}
            <span className="gradient-text">без сюрпризов</span>
          </h1>
          <p className="text-lg text-white/45 max-w-md mx-auto mb-10">
            Выбери подходящий план. Отмена в любой момент.
          </p>
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium transition-colors ${!yearly ? "text-white" : "text-white/35"}`}>Ежемесячно</span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-12 h-6 rounded-full transition-all ${yearly ? "gradient-primary" : "bg-white/15"}`}
            >
              <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all shadow ${yearly ? "left-6.5" : "left-0.5"}`} style={{ left: yearly ? "26px" : "2px" }} />
            </button>
            <span className={`text-sm font-medium transition-colors flex items-center gap-2 ${yearly ? "text-white" : "text-white/35"}`}>
              Годовой
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(34,197,94,0.15)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.25)" }}>−33%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-24" style={{ backgroundColor: "var(--surface-0)" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`glass rounded-2xl p-7 relative reveal delay-${i * 150 + 100} ${plan.popular ? "ring-1" : ""}`}
                style={plan.popular ? { ringColor: plan.accentColor, boxShadow: `0 0 32px ${plan.accentColor}25`, borderColor: `${plan.accentColor}40` } : {}}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="gradient-primary text-white text-xs font-bold px-4 py-1 rounded-full">Популярный</span>
                  </div>
                )}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${plan.accentColor}18`, border: `1px solid ${plan.accentColor}30` }}>
                  <Icon name={plan.iconName} size={18} style={{ color: plan.accentColor }} />
                </div>
                <h3 className="text-white text-lg font-bold mb-1 font-['Manrope']">{plan.name}</h3>
                <p className="text-white/40 text-sm mb-5">{plan.desc}</p>
                <div className="mb-6">
                  {plan.price.monthly === 0 ? (
                    <div className="text-3xl font-black text-white font-['Manrope']">Бесплатно</div>
                  ) : (
                    <div className="flex items-end gap-1">
                      <span className="text-3xl font-black text-white font-['Manrope']">
                        {yearly ? plan.price.yearly : plan.price.monthly} ₽
                      </span>
                      <span className="text-white/35 text-sm mb-1">/мес</span>
                    </div>
                  )}
                </div>
                <Button
                  className={`w-full mb-7 font-semibold h-10 text-sm ${plan.popular ? "gradient-primary text-white border-0 hover:opacity-90 glow-sm" : "border-white/12 text-white bg-transparent hover:bg-white/8"}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
                <div className="space-y-2.5">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-white/75">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(34,197,94,0.15)" }}>
                        <Icon name="Check" size={10} className="text-green-400" />
                      </div>
                      {f}
                    </div>
                  ))}
                  {plan.missing.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-white/25">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.05)" }}>
                        <Icon name="X" size={10} className="text-white/25" />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "var(--surface-1)" }}>
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 reveal">
            <div className="chip mb-5 mx-auto w-fit">FAQ</div>
            <h2 className="text-3xl font-black text-white font-['Manrope'] tracking-tight">Частые вопросы</h2>
          </div>
          <div className="space-y-3">
            {faq.map((item, idx) => (
              <div key={idx} className={`glass rounded-2xl overflow-hidden reveal delay-${idx * 100 + 100}`}>
                <button
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-white text-sm font-medium">{item.q}</span>
                  <Icon name={openFaq === idx ? "ChevronUp" : "ChevronDown"} size={16} className="text-white/40 shrink-0" />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4">
                    <p className="text-white/50 text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
