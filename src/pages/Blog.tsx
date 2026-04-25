import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const categories = ["Все", "Маркетинг", "Дизайн", "Интеграции", "SEO", "Кейсы"];

const posts = [
  {
    id: 1,
    title: "Как настроить Яндекс Бизнес за 10 минут",
    excerpt: "Пошаговое руководство по интеграции вашего сайта с Яндекс Бизнесом. Привлекайте новых клиентов через Яндекс Карты.",
    category: "Интеграции",
    date: "15 апреля 2024",
    readTime: "5 мин",
    color: "from-red-500 to-orange-500",
    featured: true,
  },
  {
    id: 2,
    title: "5 трендов веб-дизайна в 2024 году",
    excerpt: "Glassmorphism, неоморфизм, 3D-элементы — разбираем актуальные тренды и как их применить на вашем сайте.",
    category: "Дизайн",
    date: "10 апреля 2024",
    readTime: "7 мин",
    color: "from-purple-500 to-pink-500",
    featured: true,
  },
  {
    id: 3,
    title: "Кейс: Пиццерия увеличила заказы на 230%",
    excerpt: "Как пиццерия «Дон» за 2 месяца утроила онлайн-заказы после запуска нового сайта с интеграцией доставки.",
    category: "Кейсы",
    date: "5 апреля 2024",
    readTime: "10 мин",
    color: "from-orange-400 to-red-600",
    featured: false,
  },
  {
    id: 4,
    title: "SEO для малого бизнеса: с чего начать",
    excerpt: "Простые шаги для улучшения позиций в поиске. Без технических знаний и больших бюджетов.",
    category: "SEO",
    date: "1 апреля 2024",
    readTime: "8 мин",
    color: "from-green-500 to-teal-500",
    featured: false,
  },
  {
    id: 5,
    title: "ЮKassa vs Robokassa: что выбрать",
    excerpt: "Сравниваем две популярные платёжные системы: комиссии, функционал, простота подключения.",
    category: "Интеграции",
    date: "25 марта 2024",
    readTime: "6 мин",
    color: "from-blue-500 to-indigo-600",
    featured: false,
  },
  {
    id: 6,
    title: "Как увеличить конверсию сайта на 40%",
    excerpt: "Проверенные техники: призывы к действию, доверительные элементы, скорость загрузки и мобильная версия.",
    category: "Маркетинг",
    date: "20 марта 2024",
    readTime: "9 мин",
    color: "from-violet-500 to-purple-700",
    featured: false,
  },
  {
    id: 7,
    title: "Метрика vs Google Analytics: полное сравнение",
    excerpt: "Какую систему аналитики выбрать для российского бизнеса? Разбираем плюсы и минусы каждой.",
    category: "Интеграции",
    date: "15 марта 2024",
    readTime: "7 мин",
    color: "from-yellow-500 to-orange-500",
    featured: false,
  },
  {
    id: 8,
    title: "Цветовая психология в веб-дизайне",
    excerpt: "Как цвета влияют на решения покупателей. Научный подход к выбору цветовой палитры для бизнеса.",
    category: "Дизайн",
    date: "10 марта 2024",
    readTime: "6 мин",
    color: "from-pink-500 to-rose-600",
    featured: false,
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const featured = posts.filter((p) => p.featured);
  const filtered = activeCategory === "Все"
    ? posts.filter((p) => !p.featured)
    : posts.filter((p) => p.category === activeCategory && !p.featured);

  return (
    <div className="min-h-screen bg-[#080612]">
      <Header />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-float-delayed" />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <Badge className="mb-6 gradient-primary text-white border-0 px-4 py-1.5">
            Блог
          </Badge>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 font-['Manrope']">
            Знания для{" "}
            <span className="gradient-text">роста бизнеса</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Практические статьи о дизайне, маркетинге, интеграциях и кейсы наших клиентов
          </p>
        </div>
      </section>

      {/* Featured */}
      {activeCategory === "Все" && (
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 font-['Manrope']">Популярное</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((post) => (
                <div key={post.id} className="glass rounded-2xl overflow-hidden card-hover group cursor-pointer">
                  <div className={`h-52 bg-gradient-to-br ${post.color} flex items-end p-6`}>
                    <Badge className="bg-white/20 text-white border-0">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-white font-bold text-xl mb-3 font-['Manrope'] group-hover:text-purple-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-white/30 text-xs">
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={12} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={12} />
                          {post.readTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-purple-400 text-sm group-hover:gap-2 transition-all">
                        <span>Читать</span>
                        <Icon name="ArrowRight" size={14} />
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
      <section className="py-10 pb-24">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "gradient-primary text-white"
                    : "glass text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <div key={post.id} className="glass rounded-2xl overflow-hidden card-hover group cursor-pointer">
                <div className={`h-36 bg-gradient-to-br ${post.color} flex items-end p-4`}>
                  <Badge className="bg-white/20 text-white border-0 text-xs">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-base mb-2 font-['Manrope'] group-hover:text-purple-300 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-white/30 text-xs flex items-center gap-1">
                      <Icon name="Clock" size={11} />
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-1 text-purple-400 text-xs group-hover:gap-2 transition-all">
                      <span>Читать</span>
                      <Icon name="ArrowRight" size={12} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-white/20 text-white bg-transparent hover:bg-white/10 px-8">
              Загрузить ещё
              <Icon name="ChevronDown" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}