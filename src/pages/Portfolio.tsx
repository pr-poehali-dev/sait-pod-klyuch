import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

const categories = ["Все", "Рестораны", "Медицина", "Образование", "Услуги", "Интернет-магазин"];

const projects = [
  { id: 1, title: "La Bella Cucina", category: "Рестораны", desc: "Итальянский ресторан с онлайн-бронированием и меню", tags: ["Онлайн-запись", "ЮKassa", "Метрика"], color: "#f97316", stats: { visitors: "2 400", conversion: "8.2%" } },
  { id: 2, title: "Клиника Здоровья", category: "Медицина", desc: "Медицинский центр с записью к врачу и оплатой", tags: ["Запись к врачу", "Robokassa", "Яндекс Бизнес"], color: "#00d4ff", stats: { visitors: "5 100", conversion: "12.4%" } },
  { id: 3, title: "Академия Pro", category: "Образование", desc: "Онлайн-школа с продажей курсов и сертификатами", tags: ["Курсы", "ЮKassa", "Аналитика"], color: "#6c47ff", stats: { visitors: "8 700", conversion: "6.8%" } },
  { id: 4, title: "CleanMaster", category: "Услуги", desc: "Клининговая компания с онлайн-расчётом стоимости", tags: ["Калькулятор", "Telegram Bot", "Метрика"], color: "#22c55e", stats: { visitors: "1 200", conversion: "15.3%" } },
  { id: 5, title: "МодаПлюс", category: "Интернет-магазин", desc: "Магазин одежды с каталогом и корзиной покупок", tags: ["Каталог", "Robokassa", "Яндекс Бизнес"], color: "#ff3fa4", stats: { visitors: "11 300", conversion: "4.1%" } },
  { id: 6, title: "FitLife Studio", category: "Услуги", desc: "Фитнес-студия с расписанием и абонементами", tags: ["Расписание", "ЮKassa", "Google Analytics"], color: "#eab308", stats: { visitors: "3 500", conversion: "9.7%" } },
  { id: 7, title: "Зубная Фея", category: "Медицина", desc: "Стоматология с онлайн-записью и отзывами пациентов", tags: ["Онлайн-запись", "Яндекс Бизнес", "Метрика"], color: "#14b8a6", stats: { visitors: "4 200", conversion: "11.1%" } },
  { id: 8, title: "Пиццерия Дон", category: "Рестораны", desc: "Доставка пиццы с конструктором заказа и трекингом", tags: ["Доставка", "Robokassa", "Telegram Bot"], color: "#ef4444", stats: { visitors: "6 800", conversion: "18.5%" } },
  { id: 9, title: "КидсЛэнд", category: "Образование", desc: "Детский развивающий центр с расписанием занятий", tags: ["Расписание", "ЮKassa", "Аналитика"], color: "#a855f7", stats: { visitors: "2 900", conversion: "10.2%" } },
];

const delayMap = ["delay-100", "delay-200", "delay-300"];

export default function Portfolio() {
  useReveal();
  const [activeCategory, setActiveCategory] = useState("Все");
  const filtered = activeCategory === "Все" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--surface-0)" }}>
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ backgroundColor: "var(--surface-0)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-[140px] pointer-events-none" style={{ background: "var(--brand-purple)" }} />
        <div className="container mx-auto relative z-10 text-center">
          <div className="chip mb-6 mx-auto w-fit">Портфолио</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5 font-['Manrope'] tracking-tight">
            Сайты, которые <span className="gradient-text">работают</span>
          </h1>
          <p className="text-lg text-white/45 max-w-xl mx-auto">
            Реальные проекты с измеримыми результатами
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 pb-28" style={{ backgroundColor: "var(--surface-0)" }}>
        <div className="container mx-auto">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12 reveal">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "gradient-primary text-white glow-sm"
                    : "glass text-white/55 hover:text-white hover:bg-white/8"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <div key={project.id} className={`glass rounded-2xl overflow-hidden card-hover group reveal ${delayMap[i % 3]}`}>
                {/* Preview */}
                <div className="h-44 relative flex items-center justify-center" style={{ background: `${project.color}15`, borderBottom: `1px solid ${project.color}20` }}>
                  <span className="text-[72px] font-black opacity-10 font-['Manrope'] select-none" style={{ color: project.color }}>{project.title[0]}</span>
                  <div className="absolute top-3 right-3 glass rounded-lg px-2.5 py-1 text-white/60 text-xs">{project.category}</div>
                  <div className="absolute bottom-3 left-3 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${project.color}30` }}>
                    <Icon name="Globe" size={14} style={{ color: project.color }} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-base mb-1.5 font-['Manrope']">{project.title}</h3>
                  <p className="text-white/45 text-sm mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md text-xs font-medium" style={{ background: `${project.color}12`, color: project.color, border: `1px solid ${project.color}25` }}>{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <div>
                      <div className="text-white/30 text-[11px] mb-0.5">Посетителей/мес</div>
                      <div className="text-white font-bold text-sm">{project.stats.visitors}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/30 text-[11px] mb-0.5">Конверсия</div>
                      <div className="text-green-400 font-bold text-sm">{project.stats.conversion}</div>
                    </div>
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center transition-all text-white/30 hover:text-white" style={{ background: "rgba(255,255,255,0.05)" }}>
                      <Icon name="ExternalLink" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--surface-1)" }}>
        <div className="container mx-auto text-center reveal">
          <div className="chip mb-5 mx-auto w-fit">Ваш проект</div>
          <h2 className="text-4xl font-black text-white mb-4 font-['Manrope'] tracking-tight">
            Твой проект может быть <span className="gradient-text">следующим</span>
          </h2>
          <p className="text-white/40 mb-8 max-w-md mx-auto">Запустим профессиональный сайт за 7 дней с полным сопровождением</p>
          <Button className="gradient-primary text-white border-0 text-base px-8 h-12 font-semibold glow-primary">
            Начать проект
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
