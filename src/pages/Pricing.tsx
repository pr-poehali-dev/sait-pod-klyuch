import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Старт",
    price: { monthly: 0, yearly: 0 },
    desc: "Для тех, кто только начинает",
    features: ["1 сайт", "5 страниц", "1 GB хранилища", "SSL-сертификат", "Поддомен sitesphere.ru", "Базовая аналитика"],
    missing: ["Свой домен", "Яндекс Бизнес", "Платёжные системы", "Приоритетная поддержка"],
    cta: "Начать бесплатно",
    popular: false,
  },
  {
    name: "Бизнес",
    price: { monthly: 1490, yearly: 990 },
    desc: "Для растущего бизнеса",
    features: ["5 сайтов", "Неограниченные страницы", "20 GB хранилища", "SSL-сертификат", "Свой домен включён", "Яндекс Бизнес", "ЮKassa и Robokassa", "Яндекс Метрика + GA", "Telegram уведомления", "Приоритетная поддержка"],
    missing: [],
    cta: "Попробовать 14 дней",
    popular: true,
  },
  {
    name: "Про",
    price: { monthly: 3990, yearly: 2490 },
    desc: "Для серьёзных проектов",
    features: ["Неограниченные сайты", "Неограниченные страницы", "100 GB хранилища", "SSL-сертификат", "До 5 доменов", "Все интеграции", "Белый лейбл", "API доступ", "Персональный менеджер", "SLA 99.9%"],
    missing: [],
    cta: "Связаться с нами",
    popular: false,
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
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero dark */}
      <section className="section-dark relative overflow-hidden pt-32 pb-20">
        <div className="absolute top-0 left-[-60px] w-[420px] h-[420px] glow-blob-purple rounded-full pointer-events-none animate-float" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#9B59F5] mb-4">Цены</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 font-['Manrope']">
            Прозрачные цены,{" "}
            <span className="brand-gradient-text">без сюрпризов</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
            Выбери подходящий план. Отмена в любой момент.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!yearly ? "text-white" : "text-white/40"}`}>Ежемесячно</span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-12 h-6 rounded-full transition-all ${yearly ? "brand-gradient" : "bg-white/15"}`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${yearly ? "left-7" : "left-1"}`} />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${yearly ? "text-white" : "text-white/40"}`}>
              Годовой
              <span className="text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full">−33%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Plans light */}
      <section className="section-light py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-7 relative ${
                  plan.popular
                    ? "brand-gradient text-white"
                    : "card-light"
                }`}
                style={plan.popular ? { boxShadow: "0 8px 40px rgba(123,47,224,0.35)" } : {}}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-white text-[#7B2FE0] text-xs font-bold px-4 py-1 rounded-full">
                      Популярный
                    </span>
                  </div>
                )}

                <h3 className={`text-xl font-bold mb-1 font-['Manrope'] ${plan.popular ? "text-white" : "text-[#0A0A0F]"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? "text-white/70" : "text-gray-400"}`}>{plan.desc}</p>

                <div className="mb-6">
                  {plan.price.monthly === 0 ? (
                    <div className={`text-4xl font-black font-['Manrope'] ${plan.popular ? "text-white" : "text-[#0A0A0F]"}`}>
                      Бесплатно
                    </div>
                  ) : (
                    <div className="flex items-end gap-1">
                      <span className={`text-4xl font-black font-['Manrope'] ${plan.popular ? "text-white" : "text-[#0A0A0F]"}`}>
                        {yearly ? plan.price.yearly : plan.price.monthly} ₽
                      </span>
                      <span className={`text-sm mb-2 ${plan.popular ? "text-white/60" : "text-gray-400"}`}>/мес</span>
                    </div>
                  )}
                </div>

                <Link
                  to="/contacts"
                  className={`block text-center w-full mb-7 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-white text-[#7B2FE0] hover:bg-white/90"
                      : "btn-purple"
                  }`}
                >
                  {plan.cta}
                </Link>

                <ul className="space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2.5 text-sm ${plan.popular ? "text-white/90" : "text-gray-700"}`}>
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? "bg-white/20" : "bg-[#f0ecff]"}`}>
                        <Icon name="Check" size={10} className={plan.popular ? "text-white" : "text-[#7B2FE0]"} />
                      </div>
                      {f}
                    </li>
                  ))}
                  {plan.missing.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <Icon name="X" size={10} className="text-gray-300" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ dark */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#9B59F5] mb-3">FAQ</p>
            <h2 className="text-3xl font-black text-white font-['Manrope']">Частые вопросы</h2>
          </div>
          <div className="space-y-3">
            {faq.map((item, idx) => (
              <div key={idx} className="card-dark overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-white font-medium text-sm">{item.q}</span>
                  <Icon
                    name={openFaq === idx ? "ChevronUp" : "ChevronDown"}
                    size={16}
                    className="text-white/40 flex-shrink-0 ml-4"
                  />
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
