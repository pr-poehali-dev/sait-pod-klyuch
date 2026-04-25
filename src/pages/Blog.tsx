import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const categories = ["Все", "Маркетинг", "Дизайн", "Интеграции", "SEO", "Кейсы"];

const posts = [
  { id: 1, title: "Как настроить Яндекс Бизнес за 10 минут", excerpt: "Пошаговое руководство по интеграции вашего сайта с Яндекс Бизнесом.", category: "Интеграции", date: "15 апреля 2024", readTime: "5 мин", featured: true },
  { id: 2, title: "5 трендов веб-дизайна в 2024 году", excerpt: "Glassmorphism, неоморфизм, 3D-элементы — разбираем актуальные тренды.", category: "Дизайн", date: "10 апреля 2024", readTime: "7 мин", featured: true },
  { id: 3, title: "Кейс: Пиццерия увеличила заказы на 230%", excerpt: "Как пиццерия «Дон» за 2 месяца утроила онлайн-заказы после запуска нового сайта.", category: "Кейсы", date: "5 апреля 2024", readTime: "10 мин", featured: false },
  { id: 4, title: "SEO для малого бизнеса: с чего начать", excerpt: "Простые шаги для улучшения позиций в поиске. Без технических знаний и больших бюджетов.", category: "SEO", date: "1 апреля 2024", readTime: "8 мин", featured: false },
  { id: 5, title: "ЮKassa vs Robokassa: что выбрать", excerpt: "Сравниваем две популярные платёжные системы: комиссии, функционал, простота подключения.", category: "Интеграции", date: "25 марта 2024", readTime: "6 мин", featured: false },
  { id: 6, title: "Как увеличить конверсию сайта на 40%", excerpt: "Проверенные техники: призывы к действию, доверительные элементы, скорость загрузки.", category: "Маркетинг", date: "20 марта 2024", readTime: "9 мин", featured: false },
  { id: 7, title: "Метрика vs Google Analytics: сравнение", excerpt: "Какую систему аналитики выбрать для российского бизнеса? Разбираем плюсы и минусы.", category: "Интеграции", date: "15 марта 2024", readTime: "7 мин", featured: false },
  { id: 8, title: "Цветовая психология в веб-дизайне", excerpt: "Как цвета влияют на решения покупателей. Научный подход к выбору цветовой палитры.", category: "Дизайн", date: "10 марта 2024", readTime: "6 мин", featured: false },
];

const catColor: Record<string, string> = {
  "Интеграции": "bg-[#f0ecff] text-[#7B2FE0]",
  "Дизайн": "bg-[#ffe8f8] text-[#c026a0]",
  "Кейсы": "bg-[#e8f8ff] text-[#0369a1]",
  "SEO": "bg-[#e8fff0] text-[#15803d]",
  "Маркетинг": "bg-[#fff8e8] text-[#92400e]",
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const featured = posts.filter((p) => p.featured);
  const filtered = activeCategory === "Все"
    ? posts.filter((p) => !p.featured)
    : posts.filter((p) => p.category === activeCategory && !p.featured);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero dark */}
      <section className="section-dark relative overflow-hidden pt-32 pb-20">
        <div className="absolute top-0 right-[-60px] w-[400px] h-[400px] glow-blob-blue rounded-full pointer-events-none animate-float" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#9B59F5] mb-4">Блог</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 font-['Manrope']">
            Знания для{" "}
            <span className="brand-gradient-text">роста бизнеса</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Практические статьи о дизайне, маркетинге, интеграциях и кейсы клиентов
          </p>
        </div>
      </section>

      {/* Featured light */}
      {activeCategory === "Все" && (
        <section className="section-light py-16">
          <div className="container mx-auto px-6">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#7B2FE0] mb-6">Популярное</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {featured.map((post) => (
                <div key={post.id} className="card-light overflow-hidden card-hover group cursor-pointer">
                  <div className="h-48 brand-gradient flex items-end p-5">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-white/15 text-white backdrop-blur-sm`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-[#0A0A0F] font-bold text-lg mb-2 font-['Manrope'] group-hover:text-[#7B2FE0] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-gray-400 text-xs">
                        <span className="flex items-center gap-1"><Icon name="Calendar" size={11} />{post.date}</span>
                        <span className="flex items-center gap-1"><Icon name="Clock" size={11} />{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#7B2FE0] text-sm font-medium group-hover:gap-2 transition-all">
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
      <section className={`py-16 pb-24 ${activeCategory === "Все" ? "section-light border-t border-gray-100" : "section-light pt-16"}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2.5 mb-10">
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
            {filtered.map((post) => (
              <div key={post.id} className="card-light overflow-hidden card-hover group cursor-pointer">
                <div className="h-32 brand-gradient flex items-end p-4">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/15 text-white backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-[#0A0A0F] font-bold text-base mb-2 font-['Manrope'] group-hover:text-[#7B2FE0] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Icon name="Clock" size={11} />{post.readTime}
                    </span>
                    <div className="flex items-center gap-1 text-[#7B2FE0] text-xs font-medium group-hover:gap-1.5 transition-all">
                      <span>Читать</span>
                      <Icon name="ArrowRight" size={12} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-full text-sm font-semibold border border-gray-200 text-gray-500 hover:border-[#7B2FE0] hover:text-[#7B2FE0] transition-colors bg-white">
              Загрузить ещё
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
