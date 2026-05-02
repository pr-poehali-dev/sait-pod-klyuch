import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

const contactInfo = [
  { icon: "Send", title: "Telegram", value: "@altdel_support", desc: "Ответ за 5 минут", color: "#00d4ff", href: "#" },
  { icon: "Mail", title: "Email", value: "hello@altdel.ru", desc: "Ответ в течение часа", color: "#6c47ff", href: "mailto:hello@altdel.ru" },
  { icon: "Phone", title: "Телефон", value: "+7 (800) 123-45-67", desc: "Бесплатно, пн–пт 9:00–20:00", color: "#22c55e", href: "tel:+78001234567" },
  { icon: "MapPin", title: "Офис", value: "Москва, ул. Арбат, 1", desc: "По предварительной записи", color: "#ff3fa4", href: "#" },
];

const topics = ["Разработка сайта", "Вопрос по тарифам", "Интеграции", "Поддержка", "Другое"];

export default function Contacts() {
  useReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--surface-0)" }}>
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ backgroundColor: "var(--surface-0)" }}>
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 blur-[120px] pointer-events-none" style={{ background: "var(--brand-purple)" }} />
        <div className="container mx-auto relative z-10 text-center">
          <div className="chip mb-6 mx-auto w-fit">Контакты</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5 font-['Manrope'] tracking-tight">
            Мы всегда <span className="gradient-text">на связи</span>
          </h1>
          <p className="text-lg text-white/45 max-w-md mx-auto">
            Задайте вопрос или оставьте заявку — ответим в течение 30 минут
          </p>
        </div>
      </section>

      <section className="pb-28" style={{ backgroundColor: "var(--surface-0)" }}>
        <div className="container mx-auto">
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {contactInfo.map((item, i) => (
              <a
                key={item.title}
                href={item.href}
                className={`glass rounded-2xl p-5 card-hover group text-center reveal delay-${i * 100 + 100}`}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform group-hover:scale-110"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}>
                  <Icon name={item.icon} size={20} style={{ color: item.color }} />
                </div>
                <h3 className="text-white font-bold text-sm mb-1 font-['Manrope']">{item.title}</h3>
                <p className="text-white/70 text-sm mb-1">{item.value}</p>
                <p className="text-white/30 text-xs">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="max-w-xl mx-auto reveal">
            <div className="glass rounded-2xl p-8 md:p-10">
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-5 glow-primary">
                    <Icon name="CheckCheck" size={28} className="text-white" />
                  </div>
                  <h3 className="text-white text-2xl font-black mb-2 font-['Manrope']">Отправлено!</h3>
                  <p className="text-white/45 text-sm mb-6">Ответим в течение часа в рабочее время.</p>
                  <Button onClick={() => setSent(false)} className="gradient-primary text-white border-0 h-10 px-6 text-sm font-semibold">
                    Отправить ещё
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-white text-xl font-black mb-1 font-['Manrope']">Написать нам</h2>
                  <p className="text-white/40 text-sm mb-7">Заполните форму — свяжемся в ближайшее время</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/50 text-xs mb-1.5 block font-medium">Имя</label>
                        <Input
                          placeholder="Иван Иванов"
                          className="bg-white/4 border-white/10 text-white placeholder:text-white/25 focus:border-purple-500 h-10 text-sm"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-white/50 text-xs mb-1.5 block font-medium">Email</label>
                        <Input
                          type="email"
                          placeholder="ivan@company.ru"
                          className="bg-white/4 border-white/10 text-white placeholder:text-white/25 focus:border-purple-500 h-10 text-sm"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-white/50 text-xs mb-1.5 block font-medium">Тема</label>
                      <select
                        className="w-full bg-white/4 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        value={form.topic}
                        onChange={(e) => setForm({ ...form, topic: e.target.value })}
                        style={{ colorScheme: "dark" }}
                      >
                        <option value="" className="bg-[#13112a]">Выберите тему</option>
                        {topics.map((t) => <option key={t} value={t} className="bg-[#13112a]">{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-white/50 text-xs mb-1.5 block font-medium">Сообщение</label>
                      <Textarea
                        placeholder="Опишите ваш вопрос..."
                        rows={4}
                        className="bg-white/4 border-white/10 text-white placeholder:text-white/25 focus:border-purple-500 resize-none text-sm"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full gradient-primary text-white border-0 h-11 text-sm font-semibold hover:opacity-90 glow-sm"
                    >
                      Отправить сообщение
                      <Icon name="Send" size={15} className="ml-2" />
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
