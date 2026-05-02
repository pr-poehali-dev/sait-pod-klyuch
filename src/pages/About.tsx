import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

const team = [
  { name: "Алексей Волков", role: "Основатель & CEO", initials: "АВ", color: "#6c47ff" },
  { name: "Екатерина Морозова", role: "Директор по продукту", initials: "ЕМ", color: "#00d4ff" },
  { name: "Иван Новиков", role: "Технический директор", initials: "ИН", color: "#22c55e" },
  { name: "Ольга Соколова", role: "Директор по маркетингу", initials: "ОС", color: "#f97316" },
];

const values = [
  { icon: "Heart", title: "Клиент на первом месте", desc: "Каждое решение принимается с мыслью о вашем успехе и удобстве.", color: "#ff3fa4" },
  { icon: "Rocket", title: "Скорость и качество", desc: "Не жертвуем качеством ради скорости. Оба критерия одинаково важны.", color: "#6c47ff" },
  { icon: "Globe", title: "Открытость", desc: "Прозрачные цены, честная коммуникация, без скрытых условий.", color: "#00d4ff" },
  { icon: "TrendingUp", title: "Постоянный рост", desc: "Регулярно совершенствуем подходы и следим за трендами отрасли.", color: "#22c55e" },
];

const milestones = [
  { year: "2020", title: "Основание компании", desc: "Начали с идеи делать профессиональные сайты доступными для малого бизнеса." },
  { year: "2021", title: "100 проектов", desc: "Первая сотня предпринимателей доверила нам разработку своих сайтов." },
  { year: "2022", title: "Интеграции", desc: "Запустили подключение Яндекс Бизнеса и популярных платёжных систем." },
  { year: "2023", title: "1 000 сайтов", desc: "Отметка 1000 успешно запущенных проектов." },
  { year: "2024", title: "Команда 20+ человек", desc: "Расширили команду, сократили сроки разработки до 7 дней." },
];

const delayMap = ["delay-100", "delay-200", "delay-300", "delay-400", "delay-500"];

export default function About() {
  useReveal();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--surface-0)" }}>
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: "var(--surface-0)" }}>
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full opacity-12 blur-[120px] pointer-events-none" style={{ background: "var(--brand-purple)" }} />
        <div className="container mx-auto relative z-10 text-center">
          <div className="chip mb-6 mx-auto w-fit">О нас</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 font-['Manrope'] tracking-tight">
            Делаем сайты, которые<br />
            <span className="gradient-text">приносят клиентов</span>
          </h1>
          <p className="text-lg text-white/45 max-w-xl mx-auto leading-relaxed">
            AltDel — студия веб-разработки для малого и среднего бизнеса. Без шаблонов, без лишних слов, с фиксированными сроками.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24" style={{ backgroundColor: "var(--surface-1)" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div className="chip mb-5 w-fit">Миссия</div>
              <h2 className="text-4xl font-black text-white mb-6 font-['Manrope'] tracking-tight">Почему мы это делаем</h2>
              <p className="text-white/50 leading-relaxed mb-5 text-[15px]">
                Большинство малых предприятий теряют клиентов из-за устаревшего или некачественного сайта. Мы исправляем это — делаем разработку быстрой, понятной и доступной.
              </p>
              <p className="text-white/50 leading-relaxed mb-8 text-[15px]">
                Наш подход: фиксированный срок 7 дней, прозрачное ценообразование, передача всех доступов после сдачи проекта.
              </p>
              <Link to="/contacts">
                <Button className="gradient-primary text-white border-0 font-semibold h-11 px-6 glow-sm">
                  Обсудить проект
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 reveal-right">
              {values.map((v) => (
                <div key={v.title} className="glass rounded-2xl p-5 card-hover">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: `${v.color}18`, border: `1px solid ${v.color}30` }}>
                    <Icon name={v.icon} size={16} style={{ color: v.color }} />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1.5 font-['Manrope']">{v.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24" style={{ backgroundColor: "var(--surface-0)" }}>
        <div className="container mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="chip mb-5 mx-auto w-fit">История</div>
            <h2 className="text-4xl font-black text-white font-['Manrope'] tracking-tight">Наш путь</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {milestones.map((m, idx) => (
              <div key={m.year} className={`flex gap-5 reveal ${delayMap[idx]}`}>
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-11 h-11 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-[11px]">
                    {m.year}
                  </div>
                  {idx < milestones.length - 1 && (
                    <div className="w-px flex-1 mt-2" style={{ background: "linear-gradient(to bottom, rgba(108,71,255,0.4), transparent)" }} />
                  )}
                </div>
                <div className="glass rounded-2xl p-5 flex-1 mb-2">
                  <h3 className="text-white font-bold mb-1 font-['Manrope'] text-sm">{m.title}</h3>
                  <p className="text-white/40 text-sm">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24" style={{ backgroundColor: "var(--surface-1)" }}>
        <div className="container mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="chip mb-5 mx-auto w-fit">Команда</div>
            <h2 className="text-4xl font-black text-white font-['Manrope'] tracking-tight">
              Люди за <span className="gradient-text">AltDel</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <div key={member.name} className={`glass rounded-2xl p-6 text-center card-hover reveal ${delayMap[i]}`}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-black mx-auto mb-4 font-['Manrope']"
                  style={{ background: `${member.color}30`, border: `2px solid ${member.color}50` }}>
                  {member.initials}
                </div>
                <h3 className="text-white font-bold text-sm font-['Manrope']">{member.name}</h3>
                <p className="text-white/40 text-xs mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
