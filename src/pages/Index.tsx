import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroIllustration from "@/components/HeroIllustration";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

const features = [
  { icon: "Zap", title: "Быстрый старт", desc: "Запускаем сайт за 7 дней. Никаких технических знаний не нужно.", color: "#6c47ff" },
  { icon: "Palette", title: "Уникальный дизайн", desc: "Разрабатываем под ваш бренд. Без шаблонов — всё с нуля.", color: "#ff3fa4" },
  { icon: "Plug", title: "Интеграции", desc: "Яндекс Бизнес, ЮKassa, Telegram-боты — подключим всё нужное.", color: "#00d4ff" },
  { icon: "Shield", title: "Надёжность", desc: "SSL, защита от атак, резервные копии каждые 24 часа.", color: "#22c55e" },
  { icon: "BarChart2", title: "Аналитика", desc: "Яндекс.Метрика и Google Analytics — знаете каждый шаг клиента.", color: "#a855f7" },
  { icon: "Headphones", title: "Поддержка 24/7", desc: "Живые специалисты на связи. Ответим за 5 минут.", color: "#f97316" },
];

const stats = [
  { value: "Быстрый старт", label: "Запуск за 7 дней" },
  { value: "Уникальность", label: "Без шаблонов" },
  { value: "Продвижение", label: "Яндекс Реклама" },
  { value: "7 дней", label: "Средний срок" },
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
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "var(--surface-0)" }}>
        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[130px] pointer-events-none" style={{ background: "var(--brand-purple)" }} />
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] rounded-full opacity-10 blur-[100px] pointer-events-none" style={{ background: "var(--brand-pink)" }} />

        <div className="container mx-auto relative z-10 pt-28 pb-20">
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

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`glass rounded-2xl p-5 text-center reveal ${delayMap[i]}`}>
                <div className="text-2xl md:text-3xl font-black text-white mb-1 font-['Manrope']">{stat.value}</div>
                <div className="text-white/40 text-xs font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, var(--surface-0))" }} />
      </section>

      {/* ── FEATURES ── */}
      <section className="py-28" style={{ backgroundColor: "var(--surface-1)" }}>
        <div className="container mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="chip mb-5 mx-auto w-fit">Что входит</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 font-['Manrope']">
              Всё для вашего бизнеса
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Подготовим и настроим всё необходимое — от дизайна до аналитики
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={f.title} className={`glass rounded-2xl p-6 card-hover group reveal ${delayMap[i % 3]}`}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${f.color}18`, border: `1px solid ${f.color}30` }}
                >
                  <Icon name={f.icon} size={18} style={{ color: f.color }} />
                </div>
                <h3 className="text-white font-bold text-base mb-2 font-['Manrope']">{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
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