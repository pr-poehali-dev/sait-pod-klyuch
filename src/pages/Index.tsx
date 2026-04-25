import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Zap",
    title: "Молниеносная скорость",
    desc: "Сайты загружаются за 0.5 сек. Оптимизация производительности под капотом.",
  },
  {
    icon: "Palette",
    title: "Дизайн без ограничений",
    desc: "Сотни современных шаблонов. Настраивай каждый пиксель под свой бренд.",
  },
  {
    icon: "Plug",
    title: "Мощные интеграции",
    desc: "Яндекс Бизнес, ЮKassa, Robokassa, Метрика. Всё в одном месте.",
  },
  {
    icon: "Shield",
    title: "Безопасность",
    desc: "SSL-сертификат, защита от DDoS, резервные копии каждые 24 часа.",
  },
  {
    icon: "BarChart2",
    title: "Аналитика",
    desc: "Понимай своих посетителей. Детальная статистика и A/B-тестирование.",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    desc: "Живые специалисты всегда на связи. Ответ за 5 минут.",
  },
];

const stats = [
  { value: "12 000+", label: "Сайтов создано" },
  { value: "98%", label: "Довольных клиентов" },
  { value: "4.9★", label: "Средняя оценка" },
  { value: "24/7", label: "Поддержка" },
];

const integrations = [
  { name: "Яндекс Бизнес", icon: "MapPin", desc: "Публикуйте компанию на картах и в поиске автоматически" },
  { name: "ЮKassa", icon: "CreditCard", desc: "Принимайте оплату онлайн за 5 минут" },
  { name: "Robokassa", icon: "Wallet", desc: "Более 100 способов оплаты для ваших клиентов" },
  { name: "Яндекс Метрика", icon: "BarChart3", desc: "Детальная аналитика поведения посетителей" },
  { name: "Google Analytics", icon: "LineChart", desc: "Глубокая аналитика и конверсионные воронки" },
  { name: "Telegram Bot", icon: "Send", desc: "Уведомления о заявках прямо в Telegram" },
];

const testimonials = [
  {
    name: "Анна Смирнова",
    role: "Владелец кофейни",
    text: "За 2 часа сделала сайт с онлайн-записью и интеграцией с Яндекс Бизнесом. Клиенты начали приходить уже на следующий день!",
    initials: "АС",
  },
  {
    name: "Дмитрий Козлов",
    role: "Фитнес-тренер",
    text: "Подключил оплату через ЮKassa за 10 минут. Теперь продаю курсы прямо с сайта. Выручка выросла в 3 раза.",
    initials: "ДК",
  },
  {
    name: "Марина Петрова",
    role: "Интернет-магазин",
    text: "Метрика показала, что 60% посетителей уходили на 2-й странице. Исправили дизайн — конверсия выросла на 40%.",
    initials: "МП",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* ── HERO (dark) ── */}
      <section className="section-dark relative overflow-hidden pt-32 pb-24">
        {/* Glow blobs */}
        <div className="absolute top-10 left-[-100px] w-[500px] h-[500px] glow-blob-purple rounded-full pointer-events-none animate-float" />
        <div className="absolute bottom-0 right-[-80px] w-[380px] h-[380px] glow-blob-blue rounded-full pointer-events-none animate-float-delayed" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="logo-s w-14 h-14 text-2xl mx-auto mb-4">S</div>
          </div>
          <p className="text-center text-white/60 text-sm font-semibold tracking-widest uppercase mb-6">
            Sitesphere
          </p>

          <h1 className="text-5xl md:text-7xl font-black text-white text-center leading-tight mb-6 font-['Manrope']">
            Сайты, которые{" "}
            <span className="brand-gradient-text">продают</span>
          </h1>
          <p className="text-center text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Профессиональная платформа с интеграцией Яндекс Бизнеса, платёжных систем и аналитики. Запусти сайт за 30 минут — без кода.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link
              to="/contacts"
              className="btn-purple px-8 py-3.5 rounded-full text-base font-semibold text-center"
            >
              Начать бесплатно
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-3.5 rounded-full text-base font-semibold text-center border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition-colors bg-transparent"
            >
              Смотреть портфолио
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="card-dark text-center py-5 px-4">
                <div className="text-3xl font-black text-white mb-1 font-['Manrope']">{stat.value}</div>
                <div className="text-white/40 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES (light) ── */}
      <section className="section-light py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#7B2FE0] mb-3">Возможности</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0A0A0F] mb-4 font-['Manrope']">
              Всё что нужно для{" "}
              <span className="brand-gradient-text">успешного сайта</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Мы собрали лучшие инструменты в одной платформе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="card-light-gray p-6 card-hover">
                <div className="w-11 h-11 rounded-xl brand-gradient flex items-center justify-center mb-4">
                  <Icon name={f.icon} size={20} className="text-white" />
                </div>
                <h3 className="text-[#0A0A0F] font-bold text-base mb-2 font-['Manrope']">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS (dark) ── */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#9B59F5] mb-3">Интеграции</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 font-['Manrope']">
              Подключай <span className="brand-gradient-text">любые сервисы</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Яндекс Бизнес, платёжные системы, аналитика — всё настраивается в пару кликов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {integrations.map((item) => (
              <div key={item.name} className="card-dark p-6 card-hover group cursor-pointer">
                <div className="w-11 h-11 rounded-xl brand-gradient flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon name={item.icon} size={20} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-base mb-2 font-['Manrope']">{item.name}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="flex items-center gap-1.5 text-[#9B59F5] text-sm font-medium group-hover:gap-2.5 transition-all">
                  <span>Подробнее</span>
                  <Icon name="ArrowRight" size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS (light) ── */}
      <section className="section-light py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#7B2FE0] mb-3">Отзывы</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0A0A0F] font-['Manrope']">
              Что говорят <span className="brand-gradient-text">клиенты</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-light p-6 card-hover">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={15} className="text-[#7B2FE0] fill-[#7B2FE0]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full brand-gradient flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[#0A0A0F] font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (dark gradient) ── */}
      <section className="cta-dark py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 font-['Manrope']">
            Готов запустить сайт мечты?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Присоединись к 12 000+ предпринимателей, которые уже растут с Sitesphere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacts"
              className="btn-purple px-8 py-3.5 rounded-full text-base font-semibold text-center"
            >
              Создать сайт бесплатно
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-3.5 rounded-full text-base font-semibold text-center border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-colors bg-transparent"
            >
              Посмотреть цены
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
