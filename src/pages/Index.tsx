import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroIllustration from "@/components/HeroIllustration";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

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


const steps = [
  { num: "01", title: "Заявка", desc: "Оставляете заявку — менеджер свяжется в течение 30 минут и уточнит детали." },
  { num: "02", title: "Разработка", desc: "Создаём дизайн, верстаем, подключаем нужные сервисы. Вы видите прогресс каждый день." },
  { num: "03", title: "Запуск", desc: "Публикуем сайт, настраиваем SEO, передаём все доступы. Вы уже принимаете заявки." },
];

const testimonials = [
  { name: "Анна Смирнова", role: "Владелец кофейни", text: "За 7 дней получила сайт с онлайн-записью и Яндекс.Картами. Клиенты нашли нас уже на следующий день.", avatar: "АС" },
  { name: "Дмитрий Козлов", role: "Фитнес-тренер", text: "Подключили оплату через ЮKassa за один день. Продаю курсы прямо с сайта — выручка выросла в 3 раза.", avatar: "ДК" },
  { name: "Марина Петрова", role: "Интернет-магазин", text: "Метрика показала узкое место — исправили за день. Конверсия выросла на 40% за неделю.", avatar: "МП" },
];

const delayMap = ["delay-100", "delay-200", "delay-300", "delay-400", "delay-500", "delay-600"];

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

      {/* ── HOW IT WORKS ── */}
      <section className="py-28" style={{ backgroundColor: "var(--surface-0)" }}>
        <div className="container mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="chip mb-5 mx-auto w-fit">Процесс</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 font-['Manrope']">
              Как мы работаем
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Прозрачный процесс без лишних слов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.num} className={`reveal ${delayMap[i]}`}>
                <div className="glass rounded-2xl p-7 h-full relative">
                  <span className="text-5xl font-black font-['Manrope'] gradient-text opacity-30 mb-4 block leading-none">{step.num}</span>
                  <h3 className="text-white font-bold text-lg mb-3 font-['Manrope']">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center reveal">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 text-base px-8 h-12 font-semibold glow-primary">
              Начать проект
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28" style={{ backgroundColor: "var(--surface-1)" }}>
        <div className="container mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="chip mb-5 mx-auto w-fit">Отзывы</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 font-['Manrope']">
              Что говорят клиенты
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Реальные результаты от реальных людей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`glass rounded-2xl p-6 reveal ${delayMap[i]}`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Icon key={j} name="Star" size={14} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold font-['Manrope']">{t.name}</div>
                    <div className="text-white/35 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
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