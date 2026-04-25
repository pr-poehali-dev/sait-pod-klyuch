import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

const categories = ["Все", "Рестораны", "Медицина", "Образование", "Услуги", "Интернет-магазин"];

const projects = [
  { id: 1, title: "La Bella Cucina", category: "Рестораны", desc: "Итальянский ресторан с онлайн-бронированием и меню", tags: ["Онлайн-запись", "ЮKassa", "Метрика"], color: "from-orange-500 to-red-600", stats: { visitors: "2 400", conversion: "8.2%" } },
  { id: 2, title: "Клиника Здоровья", category: "Медицина", desc: "Медицинский центр с записью к врачу и оплатой", tags: ["Запись к врачу", "Robokassa", "Яндекс Бизнес"], color: "from-blue-500 to-cyan-400", stats: { visitors: "5 100", conversion: "12.4%" } },
  { id: 3, title: "Академия Pro", category: "Образование", desc: "Онлайн-школа с продажей курсов и сертификатами", tags: ["Курсы", "ЮKassa", "Аналитика"], color: "from-purple-500 to-violet-600", stats: { visitors: "8 700", conversion: "6.8%" } },
  { id: 4, title: "CleanMaster", category: "Услуги", desc: "Клининговая компания с онлайн-расчётом стоимости", tags: ["Калькулятор", "Telegram Bot", "Метрика"], color: "from-green-500 to-emerald-600", stats: { visitors: "1 200", conversion: "15.3%" } },
  { id: 5, title: "МодаПлюс", category: "Интернет-магазин", desc: "Магазин одежды с каталогом и корзиной покупок", tags: ["Каталог", "Robokassa", "Яндекс Бизнес"], color: "from-pink-500 to-rose-600", stats: { visitors: "11 300", conversion: "4.1%" } },
  { id: 6, title: "FitLife Studio", category: "Услуги", desc: "Фитнес-студия с расписанием и абонементами", tags: ["Расписание", "ЮKassa", "Google Analytics"], color: "from-yellow-500 to-orange-500", stats: { visitors: "3 500", conversion: "9.7%" } },
  { id: 7, title: "Зубная Фея", category: "Медицина", desc: "Стоматология с онлайн-записью и отзывами пациентов", tags: ["Онлайн-запись", "Яндекс Бизнес", "Метрика"], color: "from-teal-400 to-cyan-600", stats: { visitors: "4 200", conversion: "11.1%" } },
  { id: 8, title: "Пиццерия Дон", category: "Рестораны", desc: "Доставка пиццы с конструктором заказа и трекингом", tags: ["Доставка", "Robokassa", "Telegram Bot"], color: "from-red-500 to-orange-600", stats: { visitors: "6 800", conversion: "18.5%" } },
  { id: 9, title: "КидсЛэнд", category: "Образование", desc: "Детский развивающий центр с расписанием занятий", tags: ["Расписание", "ЮKassa", "Аналитика"], color: "from-violet-500 to-purple-700", stats: { visitors: "2 900", conversion: "10.2%" } },
];

const delayMap = ["delay-100", "delay-200", "delay-300"];

export default function Portfolio() {
  useReveal();
  const [activeCategory, setActiveCategory] = useState("Все");
  const filtered = activeCategory === "Все" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#080612]">
      <Header />

      <section className="gradient-hero pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl animate-float-delayed" />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <Badge className="mb-6 gradient-primary text-white border-0 px-4 py-1.5">Портфолио</Badge>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 font-['Manrope']">
            Сайты, которые <span className="gradient-text">работают</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Реальные проекты наших клиентов с впечатляющими результатами
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-12 reveal">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "gradient-primary text-white glow-primary"
                    : "glass text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <div key={project.id} className={`glass rounded-2xl overflow-hidden card-hover group reveal ${delayMap[i % 3]}`}>
                <div className={`h-48 bg-gradient-to-br ${project.color} relative flex items-center justify-center`}>
                  <div className="text-white text-6xl font-black opacity-20 font-['Manrope']">{project.title[0]}</div>
                  <div className="absolute top-4 right-4 glass rounded-lg px-3 py-1 text-white/80 text-xs">{project.category}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-2 font-['Manrope']">{project.title}</h3>
                  <p className="text-white/50 text-sm mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded-lg bg-purple-500/20 text-purple-300 text-xs">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <div className="text-white/40 text-xs mb-1">Посетителей/мес</div>
                      <div className="text-white font-bold">{project.stats.visitors}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/40 text-xs mb-1">Конверсия</div>
                      <div className="text-green-400 font-bold">{project.stats.conversion}</div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-purple-400 hover:text-white hover:bg-purple-500/20">
                      <Icon name="ExternalLink" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0814]">
        <div className="container mx-auto text-center reveal">
          <h2 className="text-4xl font-black text-white mb-4 font-['Manrope']">
            Твой проект может быть <span className="gradient-text">следующим</span>
          </h2>
          <p className="text-white/50 mb-8">Создай сайт за 30 минут и попади в наше портфолио</p>
          <Button className="gradient-primary text-white border-0 text-lg px-8 py-6 font-bold glow-primary">
            Создать сайт бесплатно
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
