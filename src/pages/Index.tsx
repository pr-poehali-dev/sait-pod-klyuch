import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

const features = [
  { icon: "Zap", title: "Молниеносная скорость", desc: "Сайты загружаются за 0.5 сек. Оптимизация производительности под капотом.", color: "from-yellow-400 to-orange-500" },
  { icon: "Palette", title: "Дизайн без ограничений", desc: "Сотни современных шаблонов. Настраивай каждый пиксель под свой бренд.", color: "from-purple-500 to-pink-500" },
  { icon: "Plug", title: "Мощные интеграции", desc: "Яндекс Бизнес, ЮKassa, Robokassa, Метрика. Всё в одном месте.", color: "from-blue-500 to-cyan-400" },
  { icon: "Shield", title: "Безопасность", desc: "SSL-сертификат, защита от DDoS, резервные копии каждые 24 часа.", color: "from-green-400 to-emerald-600" },
  { icon: "BarChart2", title: "Аналитика", desc: "Понимай своих посетителей. Детальная статистика и A/B-тестирование.", color: "from-violet-500 to-purple-700" },
  { icon: "Headphones", title: "Поддержка 24/7", desc: "Живые специалисты всегда на связи. Ответ за 5 минут.", color: "from-pink-500 to-rose-600" },
];

const stats = [
  { value: "12 000+", label: "Сайтов создано" },
  { value: "98%", label: "Довольных клиентов" },
  { value: "4.9★", label: "Средняя оценка" },
  { value: "24/7", label: "Поддержка" },
];

const integrations = [
  { name: "Яндекс Бизнес", icon: "MapPin", color: "from-red-500 to-orange-500", desc: "Публикуйте компанию на картах и в поиске автоматически" },
  { name: "ЮKassa", icon: "CreditCard", color: "from-violet-500 to-purple-600", desc: "Принимайте оплату онлайн за 5 минут" },
  { name: "Robokassa", icon: "Wallet", color: "from-blue-500 to-indigo-600", desc: "Более 100 способов оплаты для ваших клиентов" },
  { name: "Яндекс Метрика", icon: "BarChart3", color: "from-yellow-500 to-orange-500", desc: "Детальная аналитика поведения посетителей" },
  { name: "Google Analytics", icon: "LineChart", color: "from-green-500 to-teal-500", desc: "Глубокая аналитика и конверсионные воронки" },
  { name: "Telegram Bot", icon: "Send", color: "from-sky-500 to-blue-600", desc: "Уведомления о заявках прямо в Telegram" },
];

const testimonials = [
  { name: "Анна Смирнова", role: "Владелец кофейни", text: "За 2 часа сделала сайт с онлайн-записью и интеграцией с Яндекс Бизнесом. Клиенты начали приходить уже на следующий день!", avatar: "АС" },
  { name: "Дмитрий Козлов", role: "Фитнес-тренер", text: "Подключил оплату через ЮKassa за 10 минут. Теперь продаю курсы прямо с сайта. Выручка выросла в 3 раза.", avatar: "ДК" },
  { name: "Марина Петрова", role: "Интернет-магазин", text: "Метрика показала, что 60% посетителей уходили на 2-й странице. Исправили дизайн — конверсия выросла на 40%.", avatar: "МП" },
];

const delayMap = ["delay-100", "delay-200", "delay-300", "delay-400", "delay-500", "delay-600"];

export default function Index() {
  useReveal();

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="gradient-hero min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto relative z-10 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 gradient-primary text-white border-0 px-4 py-1.5 text-sm font-medium animate-pulse-glow">
              🚀 Новый уровень создания сайтов
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 font-['Manrope']">Привлекайте первых клиентов</h1>
            <p className="max-w-2xl mx-auto mb-10 leading-relaxed text-[#ffffff] text-xl">Сайт для вашего бизнеса за 7 дней — соберем, наполним и научим управлять. Вы сможете принимать заявки клиентов уже на следующий день</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 text-lg px-8 py-6 font-bold glow-primary">
                Начать бесплатно
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white bg-transparent hover:bg-white/10 text-lg px-8 py-6">
                <Icon name="Play" size={18} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
            <p className="mt-6 text-white/30 text-sm">
              Бесплатно 14 дней · Без привязки карты · Отмена в любой момент
            </p>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`glass rounded-2xl p-6 text-center reveal ${delayMap[i]}`}>
                <div className="text-3xl font-black text-white mb-1 font-['Manrope']">{stat.value}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#080612]">
        <div className="container mx-auto">
          <div className="text-center mb-16 reveal">
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">Возможности</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 font-['Manrope']">
              Всё что нужно для{" "}
              <span className="gradient-text">успешного сайта</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Мы собрали лучшие инструменты в одной платформе, чтобы вы сосредоточились на бизнесе
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={f.title} className={`glass rounded-2xl p-6 card-hover group reveal ${delayMap[i % 3]}`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={f.icon} size={22} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2 font-['Manrope']">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-[#0a0814]">
        <div className="container mx-auto">
          <div className="text-center mb-16 reveal">
            <Badge className="mb-4 bg-pink-500/20 text-pink-300 border-pink-500/30">Интеграции</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 font-['Manrope']">
              Подключай <span className="gradient-text">любые сервисы</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Яндекс Бизнес, платёжные системы, аналитика — всё настраивается в пару кликов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((item, i) => (
              <div key={item.name} className={`glass rounded-2xl p-6 card-hover group cursor-pointer reveal ${delayMap[i % 3]}`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={item.icon} size={22} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2 font-['Manrope']">{item.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:gap-3 transition-all">
                  <span>Подробнее</span>
                  <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#080612]">
        <div className="container mx-auto">
          <div className="text-center mb-16 reveal">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 font-['Manrope']">
              Что говорят <span className="gradient-text">клиенты</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`glass rounded-2xl p-6 card-hover reveal ${delayMap[i]}`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Icon key={j} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 animated-gradient">
        <div className="container mx-auto text-center reveal">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-['Manrope']">
            Готов запустить сайт мечты?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto">
            Присоединись к 12 000+ предпринимателей, которые уже растут с SiteSphere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90 text-lg px-8 py-6 font-bold">
              Создать сайт бесплатно
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-white/40 text-white bg-transparent hover:bg-white/10 text-lg px-8 py-6">
                Посмотреть цены
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}