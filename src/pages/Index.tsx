import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroIllustration from "@/components/HeroIllustration";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

const faq = [
  { q: "Сколько стоит сайт?", a: "Стоимость зависит от задачи. Лендинг или визитка — от 15 000 ₽, магазин под ключ — от 35 000 ₽. Продвижение в Яндексе обсуждается отдельно. Напишите нам — бесплатно рассчитаем цену под вашу задачу." },
  { q: "Сколько времени занимает разработка?", a: "Стандартный сайт — 7 рабочих дней. Интернет-магазин — до 14 дней. Срок фиксируется в договоре, и мы его соблюдаем." },
  { q: "Что если сайт мне не понравится?", a: "Перед началом работы мы согласовываем структуру и стиль. В процессе вы видите макет и вносите правки. Сдаём только то, что вам нравится." },
  { q: "Я не разбираюсь в технологиях — справлюсь?", a: "Именно для таких клиентов мы и работаем. После сдачи проекта проводим обучение и даём подробную инструкцию — как обновлять контент, смотреть статистику и управлять сайтом." },
  { q: "Вы занимаетесь продвижением сайта?", a: "Да. Мы настраиваем SEO, подключаем Яндекс Метрику и Яндекс Бизнес, а также запускаем рекламу в Яндексе. Это можно заказать отдельно или в составе пакета." },
  { q: "Что происходит после запуска?", a: "30 дней бесплатной поддержки: правки, вопросы, консультации. После — по договорённости. Вы не остаётесь один на один с сайтом." },
];

const services = [
  {
    href: "/services/landing",
    icon: "Layout",
    title: "Стандарт",
    subtitle: "Сайт под ключ",
    price: "",
    period: "7 дней",
    color: "#6c47ff",
    features: ["Готовый сайт за 7 дней: дизайн, наполнение и запуск — сделаем всё за вас, чтобы вы быстрее начали принимать заявки"],
  },
  {
    href: "/services/setup",
    icon: "TrendingUp",
    title: "Сайт под ключ + Яндекс Реклама",
    subtitle: "Продвижение в поиске",
    price: "",
    period: "7 дней + 1 год",
    color: "#00d4ff",
    popular: true,
    features: ["Чтобы вас находили в поиске: настроим SEO, соберём семантику, подготовим тексты и подключим автопродвижение на год."],
  },
  {
    href: "/services/shop",
    icon: "Rocket",
    title: "Максимум",
    subtitle: "Полный пакет",
    price: "",
    period: "14 дней",
    color: "#ff3fa4",
    features: ["Максимальный эффект: Сайт под ключ + SEO + продвижение. Клиенты ищут — находят, заходят — оставляют заявки и покупают."],
  },
];



const delayMap = ["delay-100", "delay-200", "delay-300", "delay-400", "delay-500", "delay-600"];

function FaqItem({ item }: { item: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <button
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="text-white font-medium text-sm leading-snug">{item.q}</span>
        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all" style={{ background: open ? "rgba(108,71,255,0.2)" : "rgba(255,255,255,0.05)" }}>
          <Icon name={open ? "Minus" : "Plus"} size={14} style={{ color: open ? "#a78bfa" : "rgba(255,255,255,0.4)" }} />
        </div>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-white/50 text-sm leading-relaxed">{item.a}</p>
        </div>
      )}
    </div>
  );
}

export default function Index() {
  useReveal();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--surface-0)" }}>
      <Header />

      {/* ── HERO ── */}
      <section className="relative flex items-center overflow-hidden" style={{ backgroundColor: "var(--surface-0)", minHeight: "calc(100vh - 160px)" }}>
        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[130px] pointer-events-none" style={{ background: "var(--brand-purple)" }} />
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] rounded-full opacity-10 blur-[100px] pointer-events-none" style={{ background: "var(--brand-pink)" }} />

        <div className="container mx-auto relative z-10 pt-28 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              <div className="chip mb-6 w-fit">
                <Icon name="Globe" size={12} />
                Студия веб-разработки
              </div>
              <h1 className="text-5xl md:text-[60px] font-black text-white leading-[1.08] mb-6 tracking-tight font-['Manrope']">
                Сайт, который<br />
                <span className="gradient-text">привлекает клиентов</span>
              </h1>
              <p className="text-white/50 text-lg max-w-md mb-10 leading-relaxed">
                Разрабатываем профессиональные сайты за 7 дней. Наполним контентом, подключим аналитику и платёжные системы.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 text-base px-8 h-12 font-semibold glow-primary">
                  Получить сайт
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="border-white/12 text-white/70 bg-transparent hover:bg-white/6 hover:text-white text-base px-8 h-12">
                    Смотреть работы
                  </Button>
                </Link>
              </div>
              <p className="text-white/25 text-sm">Бесплатная консультация · Фиксированная цена · Передаём все доступы</p>
            </div>

            {/* Right: illustration */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="absolute inset-0 rounded-3xl opacity-10" style={{ background: "radial-gradient(circle at 50% 50%, var(--brand-purple), transparent 70%)" }} />
              <div className="w-full max-w-[520px]">
                <HeroIllustration />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="pb-24 pt-0" style={{ backgroundColor: "var(--surface-0)" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <div
                key={s.href}
                className={`glass rounded-2xl p-7 flex flex-col relative card-hover reveal aspect-square ${delayMap[i]}`}
                style={s.popular ? { borderColor: `${s.color}40`, boxShadow: `0 0 32px ${s.color}20` } : {}}
              >
                {s.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="gradient-primary text-white text-xs font-bold px-4 py-1 rounded-full">Популярное</span>
                  </div>
                )}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}>
                  <Icon name={s.icon} size={18} style={{ color: s.color }} />
                </div>
                <div className="mb-1 text-white/40 text-xs font-medium uppercase tracking-widest">{s.subtitle}</div>
                <h3 className="text-white font-black text-xl mb-4 font-['Manrope']">{s.title}</h3>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/60">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${s.color}20` }}>
                        <Icon name="Check" size={10} style={{ color: s.color }} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="pt-5 border-t border-white/8">
                  {s.price && (
                    <div className="mb-4">
                      <div className="text-2xl font-black text-white font-['Manrope']">{s.price}</div>
                      <div className="text-white/35 text-xs mt-0.5">Срок: {s.period}</div>
                    </div>
                  )}
                  {!s.price && (
                    <div className="mb-4">
                      <div className="text-white/35 text-xs">Срок: {s.period}</div>
                    </div>
                  )}
                  <Link to={s.href} className="block">
                    <button className="w-full h-10 rounded-xl text-sm font-semibold transition-all hover:opacity-90" style={{ background: `${s.color}18`, color: s.color, border: `1px solid ${s.color}30` }}>
                      Подробнее
                      <Icon name="ArrowRight" size={14} className="inline ml-1.5" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28" style={{ backgroundColor: "var(--surface-1)" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div className="reveal-left lg:sticky lg:top-28">
              <div className="chip mb-5 w-fit">Вопрос — ответ</div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-5 font-['Manrope'] tracking-tight">
                Отвечаем на<br />
                <span className="gradient-text">частые вопросы</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed mb-8">
                Не нашли ответ? Напишите нам — ответим в течение 30 минут.
              </p>
              <Link to="/contacts">
                <Button className="gradient-primary text-white border-0 h-11 px-6 font-semibold glow-sm">
                  Задать вопрос
                  <Icon name="ArrowRight" size={15} className="ml-2" />
                </Button>
              </Link>
            </div>

            {/* Right: accordion */}
            <div className="space-y-3 reveal-right">
              {faq.map((item, idx) => (
                <FaqItem key={idx} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28" style={{ backgroundColor: "var(--surface-0)" }}>
        <div className="container mx-auto">
          <div className="relative glass-md rounded-3xl p-12 md:p-16 text-center overflow-hidden reveal">
            <div className="absolute inset-0 opacity-10 rounded-3xl" style={{ background: "linear-gradient(135deg, var(--brand-purple), var(--brand-pink))" }} />
            <div className="relative z-10">
              <div className="chip mb-6 mx-auto w-fit">Старт</div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 font-['Manrope']">
                Готовы запустить<br />
                <span className="gradient-text">ваш сайт?</span>
              </h2>
              <p className="text-white/45 text-lg mb-10 max-w-lg mx-auto">
                Оставьте заявку — перезвоним в течение 30 минут и расскажем, как это работает
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 text-base px-10 h-12 font-semibold glow-primary">
                  Оставить заявку
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
                <Link to="/contacts">
                  <Button size="lg" variant="outline" className="border-white/12 text-white/60 bg-transparent hover:bg-white/6 hover:text-white text-base px-8 h-12">
                    Написать нам
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}