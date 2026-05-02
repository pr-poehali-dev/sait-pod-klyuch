import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

const categories = ["Все", "Маркетинг", "Дизайн", "Интеграции", "SEO", "Кейсы"];

const posts = [
  { id: 1, title: "Как настроить Яндекс Бизнес за 10 минут", excerpt: "Пошаговое руководство по интеграции вашего сайта с Яндекс Бизнесом. Привлекайте новых клиентов через Яндекс Карты.", category: "Интеграции", date: "15 апр 2024", readTime: "5 мин", color: "#f97316", featured: true },
  { id: 2, title: "5 трендов веб-дизайна в 2024 году", excerpt: "Glassmorphism, неоморфизм, 3D-элементы — разбираем актуальные тренды и как их применить на вашем сайте.", category: "Дизайн", date: "10 апр 2024", readTime: "7 мин", color: "#6c47ff", featured: true },
  { id: 3, title: "Кейс: Пиццерия увеличила заказы на 230%", excerpt: "Как пиццерия «Дон» за 2 месяца утроила онлайн-заказы после запуска нового сайта с интеграцией доставки.", category: "Кейсы", date: "5 апр 2024", readTime: "10 мин", color: "#ef4444", featured: false },
  { id: 4, title: "SEO для малого бизнеса: с чего начать", excerpt: "Простые шаги для улучшения позиций в поиске. Без технических знаний и больших бюджетов.", category: "SEO", date: "1 апр 2024", readTime: "8 мин", color: "#22c55e", featured: false },
  { id: 5, title: "ЮKassa vs Robokassa: что выбрать", excerpt: "Сравниваем две популярные платёжные системы: комиссии, функционал, простота подключения.", category: "Интеграции", date: "25 мар 2024", readTime: "6 мин", color: "#00d4ff", featured: false },
  { id: 6, title: "Как увеличить конверсию сайта на 40%", excerpt: "Проверенные техники: призывы к действию, доверительные элементы, скорость загрузки и мобильная версия.", category: "Маркетинг", date: "20 мар 2024", readTime: "9 мин", color: "#a855f7", featured: false },
  { id: 7, title: "Метрика vs Google Analytics: полное сравнение", excerpt: "Какую систему аналитики выбрать для российского бизнеса? Разбираем плюсы и минусы каждой.", category: "Интеграции", date: "15 мар 2024", readTime: "7 мин", color: "#eab308", featured: false },
  { id: 8, title: "Цветовая психология в веб-дизайне", excerpt: "Как цвета влияют на решения покупателей. Научный подход к выбору цветовой палитры для бизнеса.", category: "Дизайн", date: "10 мар 2024", readTime: "6 мин", color: "#ff3fa4", featured: false },
];

const delayMap = ["delay-100", "delay-200", "delay-300"];

export default function Blog() {
  useReveal();
  const [activeCategory, setActiveCategory] = useState("Все");
  const featured = posts.filter((p) => p.featured);
  const filtered = activeCategory === "Все"
    ? posts.filter((p) => !p.featured)
    : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--surface-0)" }}>
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ backgroundColor: "var(--surface-0)" }}>
        <div className="absolute top-1/2 right-1/4 w-[380px] h-[380px] rounded-full opacity-10 blur-[120px] pointer-events-none" style={{ background: "var(--brand-cyan)" }} />
        <div className="container mx-auto relative z-10 text-center">
          <div className="chip mb-6 mx-auto w-fit">Блог</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5 font-['Manrope'] tracking-tight">
            Знания для <span className="gradient-text">роста бизнеса</span>
          </h1>
          <p className="text-lg text-white/45 max-w-xl mx-auto">
            Практические статьи о дизайне, маркетинге, интеграциях и кейсы клиентов
          </p>
        </div>
      </section>

      {/* Featured */}
      {activeCategory === "Все" && (
        <section className="pb-10" style={{ backgroundColor: "var(--surface-0)" }}>
          <div className="container mx-auto">
            <h2 className="text-lg font-bold text-white/60 mb-6 font-['Manrope'] reveal uppercase tracking-widest text-sm">Популярное</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {featured.map((post, i) => (
                <div key={post.id} className={`glass rounded-2xl overflow-hidden card-hover group cursor-pointer reveal ${delayMap[i]}`}>
                  <div className="h-48 flex items-end p-5" style={{ background: `linear-gradient(135deg, ${post.color}30, ${post.color}08)`, borderBottom: `1px solid ${post.color}20` }}>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: `${post.color}25`, color: post.color, border: `1px solid ${post.color}30` }}>
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-white font-bold text-lg mb-2 font-['Manrope'] group-hover:text-purple-300 transition-colors leading-snug">{post.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-white/25 text-xs">
                        <span className="flex items-center gap-1"><Icon name="Calendar" size={11} />{post.date}</span>
                        <span className="flex items-center gap-1"><Icon name="Clock" size={11} />{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all" style={{ color: post.color }}>
                        <span>Читать</span>
                        <Icon name="ArrowRight" size={13} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All posts */}
      <section className="pb-28 pt-8" style={{ backgroundColor: "var(--surface-0)" }}>
        <div className="container mx-auto">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10 reveal">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "gradient-primary text-white"
                    : "glass text-white/50 hover:text-white hover:bg-white/8"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((post, i) => (
              <div key={post.id} className={`glass rounded-2xl overflow-hidden card-hover group cursor-pointer reveal ${delayMap[i % 3]}`}>
                <div className="h-32 flex items-end p-4" style={{ background: `linear-gradient(135deg, ${post.color}25, ${post.color}05)`, borderBottom: `1px solid ${post.color}18` }}>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: `${post.color}20`, color: post.color }}>
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-sm mb-2 font-['Manrope'] group-hover:text-purple-300 transition-colors leading-snug">{post.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/25 text-xs flex items-center gap-1">
                      <Icon name="Clock" size={11} />{post.readTime}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-medium group-hover:gap-2 transition-all" style={{ color: post.color }}>
                      <span>Читать</span>
                      <Icon name="ArrowRight" size={11} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Button variant="outline" className="border-white/12 text-white/55 bg-transparent hover:bg-white/6 hover:text-white px-8 h-10 text-sm">
              Загрузить ещё
              <Icon name="ChevronDown" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
