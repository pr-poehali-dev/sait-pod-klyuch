import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const team = [
  { name: "Алексей Волков", role: "Основатель & CEO", initials: "АВ", color: "from-purple-500 to-pink-500" },
  { name: "Екатерина Морозова", role: "Директор по продукту", initials: "ЕМ", color: "from-blue-500 to-cyan-400" },
  { name: "Иван Новиков", role: "Технический директор", initials: "ИН", color: "from-green-400 to-teal-500" },
  { name: "Ольга Соколова", role: "Директор по маркетингу", initials: "ОС", color: "from-orange-400 to-red-500" },
];

const values = [
  { icon: "Heart", title: "Клиент на первом месте", desc: "Каждое решение принимается с мыслью о вашем успехе и удобстве." },
  { icon: "Rocket", title: "Скорость и качество", desc: "Не жертвуем качеством ради скорости. Оба критерия одинаково важны." },
  { icon: "Globe", title: "Открытость", desc: "Прозрачные цены, честная коммуникация, без скрытых условий." },
  { icon: "TrendingUp", title: "Постоянный рост", desc: "Мы регулярно обновляем платформу, добавляем функции по запросам." },
];

const milestones = [
  { year: "2020", title: "Основание компании", desc: "Начали с идеи сделать создание сайтов доступным для каждого." },
  { year: "2021", title: "1000 клиентов", desc: "Первая тысяча предпринимателей доверила нам свои сайты." },
  { year: "2022", title: "Интеграции", desc: "Запустили интеграции с Яндекс Бизнесом и платёжными системами." },
  { year: "2023", title: "10 000 сайтов", desc: "Отметка 10 000 активных сайтов на платформе." },
  { year: "2024", title: "ИИ-конструктор", desc: "Запуск интеллектуального помощника по созданию сайтов." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#080612]">
      <Header />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-float-delayed" />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <Badge className="mb-6 gradient-primary text-white border-0 px-4 py-1.5">
            О нас
          </Badge>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 font-['Manrope']">
            Мы делаем интернет{" "}
            <span className="gradient-text">доступным</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            SitePro — платформа, которая даёт малому бизнесу инструменты крупных корпораций. Без кода, без сложностей, с максимальным результатом.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#0a0814]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">Миссия</Badge>
              <h2 className="text-4xl font-black text-white mb-6 font-['Manrope']">
                Почему мы это делаем
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Миллионы предпринимателей теряют клиентов из-за отсутствия качественного сайта. Мы верим, что каждый бизнес заслуживает профессионального онлайн-присутствия.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Наша платформа позволяет создать сайт с нуля за 30 минут, подключить оплату, настроить аналитику и синхронизировать данные с Яндекс Бизнесом — всё без привлечения разработчиков.
              </p>
              <Button className="gradient-primary text-white border-0 font-semibold">
                Начать бесплатно
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="glass rounded-2xl p-5 card-hover">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center mb-3">
                    <Icon name={v.icon} size={18} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2 font-['Manrope']">{v.title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#080612]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">История</Badge>
            <h2 className="text-4xl font-black text-white font-['Manrope']">
              Наш путь
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, idx) => (
              <div key={m.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    {m.year}
                  </div>
                  {idx < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-purple-500/50 to-transparent mt-2" />
                  )}
                </div>
                <div className="glass rounded-2xl p-5 flex-1 mb-4">
                  <h3 className="text-white font-bold mb-1 font-['Manrope']">{m.title}</h3>
                  <p className="text-white/50 text-sm">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#0a0814]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink-500/20 text-pink-300 border-pink-500/30">Команда</Badge>
            <h2 className="text-4xl font-black text-white font-['Manrope']">
              Люди за <span className="gradient-text">SitePro</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="glass rounded-2xl p-6 text-center card-hover">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4`}>
                  {member.initials}
                </div>
                <h3 className="text-white font-bold font-['Manrope']">{member.name}</h3>
                <p className="text-white/50 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
