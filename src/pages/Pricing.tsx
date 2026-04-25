import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Старт",
    price: { monthly: 0, yearly: 0 },
    desc: "Для тех, кто только начинает",
    color: "from-slate-500 to-slate-700",
    features: [
      "1 сайт",
      "5 страниц",
      "1 GB хранилища",
      "SSL-сертификат",
      "Поддомен sitesphere.ru",
      "Базовая аналитика",
    ],
    missing: ["Свой домен", "Яндекс Бизнес", "Платёжные системы", "Приоритетная поддержка"],
    cta: "Начать бесплатно",
    popular: false,
  },
  {
    name: "Бизнес",
    price: { monthly: 1490, yearly: 990 },
    desc: "Для растущего бизнеса",
    color: "from-purple-500 to-pink-500",
    features: [
      "5 сайтов",
      "Неограниченные страницы",
      "20 GB хранилища",
      "SSL-сертификат",
      "Свой домен включён",
      "Яндекс Бизнес",
      "ЮKassa и Robokassa",
      "Яндекс Метрика + GA",
      "Telegram уведомления",
      "Приоритетная поддержка",
    ],
    missing: [],
    cta: "Попробовать 14 дней",
    popular: true,
  },
  {
    name: "Про",
    price: { monthly: 3990, yearly: 2490 },
    desc: "Для серьёзных проектов",
    color: "from-blue-500 to-cyan-400",
    features: [
      "Неограниченные сайты",
      "Неограниченные страницы",
      "100 GB хранилища",
      "SSL-сертификат",
      "До 5 доменов",
      "Все интеграции",
      "Белый лейбл",
      "API доступ",
      "Персональный менеджер",
      "SLA 99.9%",
    ],
    missing: [],
    cta: "Связаться с нами",
    popular: false,
  },
];

const faq = [
  {
    q: "Нужна ли кредитная карта для бесплатного плана?",
    a: "Нет! Бесплатный план доступен без привязки карты. Вы можете начать прямо сейчас.",
  },
  {
    q: "Могу ли я сменить тариф в любое время?",
    a: "Да, вы можете повысить или понизить тариф в любой момент. Разница в стоимости будет пересчитана пропорционально.",
  },
  {
    q: "Как работает пробный период?",
    a: "14 дней бесплатно без ограничений. После этого вы выбираете план или переходите на бесплатный.",
  },
  {
    q: "Включён ли домен в стоимость?",
    a: "В планах Бизнес и Про домен .ru включён в стоимость. В плане Старт предоставляется поддомен.",
  },
  {
    q: "Как настроить Яндекс Бизнес?",
    a: "После подключения плана Бизнес перейдите в Настройки → Интеграции. Синхронизация займёт 5 минут.",
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#080612]">
      <Header />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/3 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl animate-float-delayed" />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <Badge className="mb-6 gradient-primary text-white border-0 px-4 py-1.5">
            Цены
          </Badge>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 font-['Manrope']">
            Прозрачные цены,{" "}
            <span className="gradient-text">без сюрпризов</span>
          </h1>
          <p className="text-xl text-white/60 max-w-xl mx-auto mb-10">
            Выбери подходящий план. Отмена в любой момент.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!yearly ? "text-white" : "text-white/40"}`}>
              Ежемесячно
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-14 h-7 rounded-full transition-all ${yearly ? "gradient-primary" : "bg-white/20"}`}
            >
              <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${yearly ? "left-8" : "left-1"}`} />
            </button>
            <span className={`text-sm font-medium ${yearly ? "text-white" : "text-white/40"}`}>
              Годовой
              <Badge className="ml-2 bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                −33%
              </Badge>
            </span>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 -mt-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`glass rounded-2xl p-8 relative ${plan.popular ? "ring-2 ring-purple-500 glow-primary" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="gradient-primary text-white border-0 px-4 py-1 font-semibold">
                      Популярный
                    </Badge>
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                  <Icon name={plan.popular ? "Star" : plan.name === "Старт" ? "Sprout" : "Crown"} size={20} className="text-white" />
                </div>
                <h3 className="text-white text-xl font-bold mb-1 font-['Manrope']">{plan.name}</h3>
                <p className="text-white/50 text-sm mb-6">{plan.desc}</p>

                <div className="mb-6">
                  {plan.price.monthly === 0 ? (
                    <div className="text-4xl font-black text-white font-['Manrope']">
                      Бесплатно
                    </div>
                  ) : (
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-black text-white font-['Manrope']">
                        {yearly ? plan.price.yearly : plan.price.monthly} ₽
                      </span>
                      <span className="text-white/40 text-sm mb-2">/мес</span>
                    </div>
                  )}
                </div>

                <Button
                  className={`w-full mb-8 font-semibold ${
                    plan.popular
                      ? "gradient-primary text-white border-0 hover:opacity-90"
                      : "border-white/20 text-white hover:bg-white/10"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={12} className="text-green-400" />
                      </div>
                      {f}
                    </li>
                  ))}
                  {plan.missing.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/30">
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                        <Icon name="X" size={12} className="text-white/30" />
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

      {/* FAQ */}
      <section className="py-20 bg-[#0a0814]">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">FAQ</Badge>
            <h2 className="text-3xl font-black text-white font-['Manrope']">
              Частые вопросы
            </h2>
          </div>
          <div className="space-y-4">
            {faq.map((item, idx) => (
              <div key={idx} className="glass rounded-2xl overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-white font-medium">{item.q}</span>
                  <Icon
                    name={openFaq === idx ? "ChevronUp" : "ChevronDown"}
                    size={18}
                    className="text-white/50 flex-shrink-0 ml-4"
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5">
                    <p className="text-white/60 text-sm leading-relaxed">{item.a}</p>
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