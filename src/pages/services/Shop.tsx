import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

const includes = [
  { icon: "CreditCard", title: "Приём оплаты", desc: "Подключаем ЮKassa или Robokassa. Клиенты платят картой прямо на сайте." },
  { icon: "ShoppingBag", title: "Каталог товаров", desc: "Удобный каталог с фото, описаниями, ценами и фильтрами." },
  { icon: "Globe", title: "Домен в подарок", desc: "Регистрируем домен .ru или .com на первый год за наш счёт." },
  { icon: "Sparkles", title: "Логотип", desc: "Разрабатываем логотип в фирменном стиле вашего бизнеса." },
  { icon: "Search", title: "SEO-настройка", desc: "Настраиваем структуру, мета-теги и карту сайта для поисковиков." },
  { icon: "BarChart2", title: "Аналитика", desc: "Яндекс Метрика + Google Analytics — отслеживайте продажи и поведение." },
];

const steps = [
  { num: "01", title: "Бриф", desc: "Рассказываете про товары, целевую аудиторию и пожелания к дизайну." },
  { num: "02", title: "Дизайн и каталог", desc: "Разрабатываем дизайн и заполняем каталог вашими товарами." },
  { num: "03", title: "Оплата и запуск", desc: "Подключаем оплату, тестируем, публикуем. Вы начинаете продавать." },
];

export default function ServiceShop() {
  useReveal();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--surface-0)" }}>
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: "var(--surface-0)" }}>
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full opacity-12 blur-[120px] pointer-events-none" style={{ background: "#ff3fa4" }} />
        <div className="container mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors">
            <Icon name="ArrowLeft" size={14} />
            Назад
          </Link>
          <div className="max-w-2xl">
            <div className="chip mb-6 w-fit" style={{ borderColor: "rgba(255,63,164,0.3)", color: "#ff3fa4", background: "rgba(255,63,164,0.08)" }}>
              Услуга
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-5 font-['Manrope'] tracking-tight">
              Магазин<br />
              <span style={{ background: "linear-gradient(135deg,#ff3fa4,#6c47ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                под ключ
              </span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-lg">
              Интернет-магазин с приёмом оплаты, каталогом товаров и логотипом. Готов к продажам через 14 дней.
            </p>
            <div className="flex items-center gap-6 mb-8">
              <div>
                <div className="text-3xl font-black text-white font-['Manrope']">от 35 000 ₽</div>
                <div className="text-white/35 text-sm">Срок: 14 дней</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-white/50 text-sm leading-relaxed">
                Домен в подарок<br />Логотип включён
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contacts">
                <Button className="text-white border-0 hover:opacity-90 h-12 px-8 font-semibold text-base" style={{ background: "linear-gradient(135deg,#ff3fa4,#6c47ff)", boxShadow: "0 0 24px rgba(255,63,164,0.25)" }}>
                  Заказать магазин
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" className="border-white/12 text-white/60 bg-transparent hover:bg-white/6 hover:text-white h-12 px-8 text-base">
                  Смотреть примеры
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="py-24" style={{ backgroundColor: "var(--surface-1)" }}>
        <div className="container mx-auto">
          <div className="text-center mb-14 reveal">
            <div className="chip mb-5 mx-auto w-fit" style={{ borderColor: "rgba(255,63,164,0.3)", color: "#ff3fa4", background: "rgba(255,63,164,0.08)" }}>Что входит</div>
            <h2 className="text-4xl font-black text-white font-['Manrope'] tracking-tight">Всё включено в стоимость</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {includes.map((item, i) => (
              <div key={item.title} className={`glass rounded-2xl p-6 card-hover reveal delay-${(i % 3 + 1) * 100}`}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(255,63,164,0.12)", border: "1px solid rgba(255,63,164,0.22)" }}>
                  <Icon name={item.icon} size={16} style={{ color: "#ff3fa4" }} />
                </div>
                <h3 className="text-white font-bold text-sm mb-1.5 font-['Manrope']">{item.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24" style={{ backgroundColor: "var(--surface-0)" }}>
        <div className="container mx-auto">
          <div className="text-center mb-14 reveal">
            <div className="chip mb-5 mx-auto w-fit">Процесс</div>
            <h2 className="text-4xl font-black text-white font-['Manrope'] tracking-tight">Как проходит работа</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.num} className={`glass rounded-2xl p-7 reveal delay-${(i + 1) * 100}`}>
                <span className="text-4xl font-black font-['Manrope'] mb-4 block leading-none opacity-30" style={{ background: "linear-gradient(135deg,#ff3fa4,#6c47ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{step.num}</span>
                <h3 className="text-white font-bold text-lg mb-2 font-['Manrope']">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--surface-1)" }}>
        <div className="container mx-auto text-center reveal">
          <h2 className="text-4xl font-black text-white mb-4 font-['Manrope'] tracking-tight">
            Начните продавать <span style={{ background: "linear-gradient(135deg,#ff3fa4,#6c47ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>онлайн</span>
          </h2>
          <p className="text-white/40 mb-8 max-w-md mx-auto">Оставьте заявку — перезвоним через 30 минут</p>
          <Link to="/contacts">
            <Button className="text-white border-0 h-12 px-10 font-semibold text-base" style={{ background: "linear-gradient(135deg,#ff3fa4,#6c47ff)", boxShadow: "0 0 24px rgba(255,63,164,0.25)" }}>
              Оставить заявку
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
