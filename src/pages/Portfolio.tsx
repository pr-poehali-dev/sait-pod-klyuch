import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const categories = ["Все", "Рестораны", "Медицина", "Образование", "Услуги", "Интернет-магазин"];

const projects = [
  { id: 1, title: "La Bella Cucina", category: "Рестораны", desc: "Итальянский ресторан с онлайн-бронированием", tags: ["Онлайн-запись", "ЮKassa", "Метрика"], visitors: "2 400", conversion: "8.2%", letter: "L" },
  { id: 2, title: "Клиника Здоровья", category: "Медицина", desc: "Медицинский центр с записью к врачу", tags: ["Запись к врачу", "Robokassa", "Яндекс Бизнес"], visitors: "5 100", conversion: "12.4%", letter: "К" },
  { id: 3, title: "Академия Pro", category: "Образование", desc: "Онлайн-школа с продажей курсов", tags: ["Курсы", "ЮKassa", "Аналитика"], visitors: "8 700", conversion: "6.8%", letter: "А" },
  { id: 4, title: "CleanMaster", category: "Услуги", desc: "Клининговая компания с онлайн-расчётом", tags: ["Калькулятор", "Telegram Bot", "Метрика"], visitors: "1 200", conversion: "15.3%", letter: "C" },
  { id: 5, title: "МодаПлюс", category: "Интернет-магазин", desc: "Магазин одежды с каталогом", tags: ["Каталог", "Robokassa", "Яндекс Бизнес"], visitors: "11 300", conversion: "4.1%", letter: "М" },
  { id: 6, title: "FitLife Studio", category: "Услуги", desc: "Фитнес-студия с расписанием", tags: ["Расписание", "ЮKassa", "Google Analytics"], visitors: "3 500", conversion: "9.7%", letter: "F" },
  { id: 7, title: "Зубная Фея", category: "Медицина", desc: "Стоматология с онлайн-записью", tags: ["Онлайн-запись", "Яндекс Бизнес", "Метрика"], visitors: "4 200", conversion: "11.1%", letter: "З" },
  { id: 8, title: "Пиццерия Дон", category: "Рестораны", desc: "Доставка пиццы с конструктором заказа", tags: ["Доставка", "Robokassa", "Telegram Bot"], visitors: "6 800", conversion: "18.5%", letter: "П" },
  { id: 9, title: "КидсЛэнд", category: "Образование", desc: "Детский развивающий центр", tags: ["Расписание", "ЮKassa", "Аналитика"], visitors: "2 900", conversion: "10.2%", letter: "К" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered = activeCategory === "Все"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero dark */}
      <section className="section-dark relative overflow-hidden pt-32 pb-20">
        <div className="absolute top-0 right-[-80px] w-[420px] h-[420px] glow-blob-purple rounded-full pointer-events-none animate-float" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#9B59F5] mb-4">Портфолио</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 font-['Manrope']">
            Сайты, которые{" "}
            <span className="brand-gradient-text">работают</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Реальные проекты наших клиентов с впечатляющими результатами
          </p>
        </div>
      </section>

      {/* Grid light */}
      <section className="section-light py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2.5 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "brand-gradient text-white"
                    : "border border-gray-200 text-gray-500 hover:border-[#7B2FE0] hover:text-[#7B2FE0] bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <div key={project.id} className="card-light overflow-hidden card-hover group">
                <div className="h-44 brand-gradient relative flex items-center justify-center">
                  <span className="text-white text-7xl font-black opacity-20 font-['Manrope']">
                    {project.letter}
                  </span>
                  <span className="absolute top-3 right-3 bg-white/15 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-[#0A0A0F] font-bold text-lg mb-1.5 font-['Manrope']">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg bg-[#f0ecff] text-[#7B2FE0] text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-gray-400 text-xs mb-0.5">Посетителей/мес</div>
                      <div className="text-[#0A0A0F] font-bold text-sm">{project.visitors}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-400 text-xs mb-0.5">Конверсия</div>
                      <div className="text-[#7B2FE0] font-bold text-sm">{project.conversion}</div>
                    </div>
                    <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#7B2FE0] hover:text-[#7B2FE0] transition-colors">
                      <Icon name="ExternalLink" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA dark */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-3 font-['Manrope']">
            Твой проект может быть <span className="brand-gradient-text">следующим</span>
          </h2>
          <p className="text-white/40 mb-8">Создай сайт за 30 минут и попади в наше портфолио</p>
          <Link
            to="/contacts"
            className="btn-purple inline-block px-8 py-3.5 rounded-full text-base font-semibold"
          >
            Создать сайт бесплатно
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
