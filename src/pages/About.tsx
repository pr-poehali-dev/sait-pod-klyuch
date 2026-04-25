import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const team = [
  { name: "Алексей Волков", role: "Основатель & CEO", initials: "АВ" },
  { name: "Екатерина Морозова", role: "Директор по продукту", initials: "ЕМ" },
  { name: "Иван Новиков", role: "Технический директор", initials: "ИН" },
  { name: "Ольга Соколова", role: "Директор по маркетингу", initials: "ОС" },
];

const values = [
  { icon: "Heart", title: "Клиент на первом месте", desc: "Каждое решение принимается с мыслью о вашем успехе." },
  { icon: "Rocket", title: "Скорость и качество", desc: "Не жертвуем качеством ради скорости." },
  { icon: "Globe", title: "Открытость", desc: "Прозрачные цены, честная коммуникация, без скрытых условий." },
  { icon: "TrendingUp", title: "Постоянный рост", desc: "Регулярно обновляем платформу по запросам клиентов." },
];

const milestones = [
  { year: "2020", title: "Основание", desc: "Начали с идеи сделать создание сайтов доступным для каждого." },
  { year: "2021", title: "1000 клиентов", desc: "Первая тысяча предпринимателей доверила нам свои сайты." },
  { year: "2022", title: "Интеграции", desc: "Запустили Яндекс Бизнес и платёжные системы." },
  { year: "2023", title: "10 000 сайтов", desc: "Отметка 10 000 активных сайтов на платформе." },
  { year: "2024", title: "ИИ-конструктор", desc: "Запуск интеллектуального помощника по созданию сайтов." },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero dark */}
      <section className="section-dark relative overflow-hidden pt-32 pb-20">
        <div className="absolute top-0 left-[-100px] w-[500px] h-[500px] glow-blob-purple rounded-full pointer-events-none animate-float" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#9B59F5] mb-4">О нас</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 font-['Manrope']">
            Мы делаем интернет{" "}
            <span className="brand-gradient-text">доступным</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Sitesphere — платформа, которая даёт малому бизнесу инструменты крупных корпораций. Без кода, без сложностей, с максимальным результатом.
          </p>
        </div>
      </section>

      {/* Mission light */}
      <section className="section-light py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-[#7B2FE0] mb-4">Миссия</p>
              <h2 className="text-4xl font-black text-[#0A0A0F] mb-6 font-['Manrope']">
                Почему мы это делаем
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Миллионы предпринимателей теряют клиентов из-за отсутствия качественного сайта. Мы верим, что каждый бизнес заслуживает профессионального онлайн-присутствия.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Наша платформа позволяет создать сайт с нуля за 30 минут, подключить оплату, настроить аналитику и синхронизировать данные с Яндекс Бизнесом — без разработчиков.
              </p>
              <Link
                to="/contacts"
                className="btn-purple inline-block px-7 py-3 rounded-full text-sm font-semibold"
              >
                Начать бесплатно
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="card-light-gray p-5 card-hover">
                  <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center mb-3">
                    <Icon name={v.icon} size={18} className="text-white" />
                  </div>
                  <h3 className="text-[#0A0A0F] font-bold text-sm mb-1.5 font-['Manrope']">{v.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline dark */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#9B59F5] mb-3">История</p>
            <h2 className="text-4xl font-black text-white font-['Manrope']">Наш путь</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {milestones.map((m, idx) => (
              <div key={m.year} className="flex gap-5 mb-6 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full brand-gradient flex items-center justify-center text-white font-bold text-xs flex-shrink-0 font-['Manrope']">
                    {m.year}
                  </div>
                  {idx < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-white/8 mt-2" />
                  )}
                </div>
                <div className="card-dark p-4 flex-1 mb-2">
                  <h3 className="text-white font-bold mb-1 font-['Manrope'] text-sm">{m.title}</h3>
                  <p className="text-white/40 text-sm">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team light */}
      <section className="section-light py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#7B2FE0] mb-3">Команда</p>
            <h2 className="text-4xl font-black text-[#0A0A0F] font-['Manrope']">
              Люди за <span className="brand-gradient-text">Sitesphere</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member) => (
              <div key={member.name} className="card-light p-6 text-center card-hover">
                <div className="w-16 h-16 rounded-full brand-gradient flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="text-[#0A0A0F] font-bold text-sm font-['Manrope']">{member.name}</h3>
                <p className="text-gray-400 text-xs mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
