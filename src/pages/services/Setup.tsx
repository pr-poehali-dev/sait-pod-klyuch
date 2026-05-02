import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

const includes = [
  { icon: "Globe", title: "Домен", desc: "Подключим ваш домен или поможем выбрать и зарегистрировать подходящий." },
  { icon: "Shield", title: "SSL-сертификат", desc: "Сайт работает по HTTPS — доверие пользователей и плюс в SEO." },
  { icon: "BarChart2", title: "Яндекс Метрика", desc: "Настраиваем счётчик, цели и отчёты. Объясняем, как читать статистику." },
  { icon: "MapPin", title: "Яндекс Бизнес", desc: "Размещаем компанию на Яндекс Картах — клиенты найдут вас в поиске." },
  { icon: "Send", title: "Telegram-уведомления", desc: "Заявки с сайта мгновенно приходят в ваш Telegram." },
  { icon: "BookOpen", title: "Инструкция", desc: "Расскажем, как пользоваться всеми сервисами и что делать дальше." },
];

export default function ServiceSetup() {
  useReveal();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--surface-0)" }}>
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: "var(--surface-0)" }}>
        <div className="absolute top-1/3 right-1/4 w-[380px] h-[380px] rounded-full opacity-12 blur-[120px] pointer-events-none" style={{ background: "#00d4ff" }} />
        <div className="container mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors">
            <Icon name="ArrowLeft" size={14} />
            Назад
          </Link>
          <div className="max-w-2xl">
            <div className="chip mb-6 w-fit" style={{ borderColor: "rgba(0,212,255,0.3)", color: "#00d4ff", background: "rgba(0,212,255,0.08)" }}>
              Популярное
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-5 font-['Manrope'] tracking-tight">
              Всё подключено<br />
              <span style={{ background: "linear-gradient(135deg,#00d4ff,#6c47ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                и настроено
              </span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-lg">
              Домен, SSL, Яндекс Метрика и другие сервисы — подключим и расскажем, как пользоваться и что делать дальше.
            </p>
            <div className="flex items-center gap-6 mb-8">
              <div>
                <div className="text-3xl font-black text-white font-['Manrope']">от 5 000 ₽</div>
                <div className="text-white/35 text-sm">Срок: 2 дня</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-white/50 text-sm leading-relaxed">
                Работаем с любым сайтом<br />Не только с нашими
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contacts">
                <Button className="text-white border-0 hover:opacity-90 h-12 px-8 font-semibold text-base" style={{ background: "linear-gradient(135deg,#00d4ff,#6c47ff)", boxShadow: "0 0 24px rgba(0,212,255,0.25)" }}>
                  Заказать настройку
                  <Icon name="ArrowRight" size={16} className="ml-2" />
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
            <div className="chip mb-5 mx-auto w-fit" style={{ borderColor: "rgba(0,212,255,0.3)", color: "#00d4ff", background: "rgba(0,212,255,0.08)" }}>Что входит</div>
            <h2 className="text-4xl font-black text-white font-['Manrope'] tracking-tight">Всё включено в стоимость</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {includes.map((item, i) => (
              <div key={item.title} className={`glass rounded-2xl p-6 card-hover reveal delay-${(i % 3 + 1) * 100}`}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(0,212,255,0.12)", border: "1px solid rgba(0,212,255,0.22)" }}>
                  <Icon name={item.icon} size={16} style={{ color: "#00d4ff" }} />
                </div>
                <h3 className="text-white font-bold text-sm mb-1.5 font-['Manrope']">{item.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-20" style={{ backgroundColor: "var(--surface-0)" }}>
        <div className="container mx-auto max-w-2xl text-center reveal">
          <div className="glass rounded-2xl p-10">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(0,212,255,0.12)", border: "1px solid rgba(0,212,255,0.22)" }}>
              <Icon name="Info" size={22} style={{ color: "#00d4ff" }} />
            </div>
            <h3 className="text-white font-black text-2xl mb-3 font-['Manrope']">Работаем с любым сайтом</h3>
            <p className="text-white/45 text-sm leading-relaxed mb-7">
              Не важно, где сделан ваш сайт — на Tilda, Wix, WordPress или у нас. Подключим нужные сервисы и объясним, как всем этим пользоваться.
            </p>
            <Link to="/contacts">
              <Button className="text-white border-0 h-11 px-8 font-semibold" style={{ background: "linear-gradient(135deg,#00d4ff,#6c47ff)" }}>
                Оставить заявку
                <Icon name="ArrowRight" size={15} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
