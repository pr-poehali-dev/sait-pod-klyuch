import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const contactInfo = [
  { icon: "MessageCircle", title: "Telegram", value: "@sitesphere_support", desc: "Ответ за 5 минут", href: "#" },
  { icon: "Mail", title: "Email", value: "hello@sitesphere.ru", desc: "Ответ в течение часа", href: "mailto:hello@sitesphere.ru" },
  { icon: "Phone", title: "Телефон", value: "+7 (800) 123-45-67", desc: "Бесплатно, пн–пт 9:00–20:00", href: "tel:+78001234567" },
  { icon: "MapPin", title: "Офис", value: "Москва, ул. Арбат, 1", desc: "По предварительной записи", href: "#" },
];

const topics = ["Технический вопрос", "Вопрос по тарифам", "Предложение о партнёрстве", "Вопрос по интеграциям", "Другое"];

export default function Contacts() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero dark */}
      <section className="section-dark relative overflow-hidden pt-32 pb-20">
        <div className="absolute top-0 left-[-60px] w-[400px] h-[400px] glow-blob-purple rounded-full pointer-events-none animate-float" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#9B59F5] mb-4">Контакты</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 font-['Manrope']">
            Мы всегда{" "}
            <span className="brand-gradient-text">на связи</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Задай вопрос, сообщи о проблеме или просто поздоровайся — мы рады каждому обращению.
          </p>
        </div>
      </section>

      {/* Contact cards + form light */}
      <section className="section-light py-20">
        <div className="container mx-auto px-6">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {contactInfo.map((item) => (
              <a key={item.title} href={item.href} className="card-light-gray p-5 card-hover group text-center block">
                <div className="w-12 h-12 rounded-xl brand-gradient flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                  <Icon name={item.icon} size={20} className="text-white" />
                </div>
                <h3 className="text-[#0A0A0F] font-bold text-sm mb-1 font-['Manrope']">{item.title}</h3>
                <p className="text-[#0A0A0F] text-sm font-medium mb-0.5">{item.value}</p>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto card-light p-8 md:p-10">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full brand-gradient flex items-center justify-center mx-auto mb-5">
                  <Icon name="CheckCheck" size={28} className="text-white" />
                </div>
                <h3 className="text-[#0A0A0F] text-2xl font-black mb-2 font-['Manrope']">Сообщение отправлено!</h3>
                <p className="text-gray-400 mb-6 text-sm">Мы ответим в течение часа в рабочее время.</p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-purple px-6 py-2.5 rounded-full text-sm font-semibold"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-[#0A0A0F] text-2xl font-black mb-1 font-['Manrope']">Написать нам</h2>
                <p className="text-gray-400 text-sm mb-7">Заполни форму и мы свяжемся с тобой в ближайшее время</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#0A0A0F] text-sm mb-1.5 block font-medium">Имя</label>
                      <Input
                        placeholder="Иван Иванов"
                        className="border-gray-200 focus:border-[#7B2FE0] focus:ring-[#7B2FE0]"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[#0A0A0F] text-sm mb-1.5 block font-medium">Email</label>
                      <Input
                        type="email"
                        placeholder="ivan@company.ru"
                        className="border-gray-200 focus:border-[#7B2FE0] focus:ring-[#7B2FE0]"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#0A0A0F] text-sm mb-1.5 block font-medium">Тема</label>
                    <select
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#7B2FE0] transition-colors text-[#0A0A0F]"
                      value={form.topic}
                      onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    >
                      <option value="">Выберите тему</option>
                      {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[#0A0A0F] text-sm mb-1.5 block font-medium">Сообщение</label>
                    <Textarea
                      placeholder="Опишите ваш вопрос..."
                      rows={5}
                      className="border-gray-200 focus:border-[#7B2FE0] resize-none"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-purple w-full py-3 rounded-full text-sm font-semibold"
                  >
                    Отправить сообщение
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
