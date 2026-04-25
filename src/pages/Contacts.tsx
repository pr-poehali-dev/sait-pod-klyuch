import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";
import { useLang } from "@/i18n/LangContext";

export default function Contacts() {
  useReveal();
  const { t } = useLang();
  const { contacts } = t;
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#080612]">
      <Header />

      <section className="gradient-hero pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-float-delayed" />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <Badge className="mb-6 gradient-primary text-white border-0 px-4 py-1.5">{contacts.badge}</Badge>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 font-['Manrope']">
            {contacts.title1} <span className="gradient-text">{contacts.title2}</span>
          </h1>
          <p className="text-xl text-white/60 max-w-xl mx-auto">{contacts.subtitle}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contacts.info.map((item, i) => (
              <a key={item.title} href={item.href} className={`glass rounded-2xl p-6 card-hover group text-center reveal delay-${i * 100 + 100}`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={item.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-white font-bold mb-1 font-['Manrope']">{item.title}</h3>
                <p className="text-white text-sm mb-1">{item.value}</p>
                <p className="text-white/40 text-xs">{item.desc}</p>
              </a>
            ))}
          </div>

          <div className="max-w-2xl mx-auto reveal">
            <div className="glass rounded-2xl p-8 md:p-10">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 glow-primary">
                    <Icon name="CheckCheck" size={36} className="text-white" />
                  </div>
                  <h3 className="text-white text-2xl font-black mb-3 font-['Manrope']">{contacts.form.successTitle}</h3>
                  <p className="text-white/50 mb-6">{contacts.form.successDesc}</p>
                  <Button onClick={() => setSent(false)} className="gradient-primary text-white border-0">
                    {contacts.form.sendAnother}
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-white text-2xl font-black mb-2 font-['Manrope']">{contacts.form.title}</h2>
                  <p className="text-white/50 text-sm mb-8">{contacts.form.subtitle}</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/70 text-sm mb-2 block">{contacts.form.name}</label>
                        <Input placeholder={contacts.form.namePlaceholder} className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                      </div>
                      <div>
                        <label className="text-white/70 text-sm mb-2 block">{contacts.form.email}</label>
                        <Input type="email" placeholder={contacts.form.emailPlaceholder} className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                      </div>
                    </div>
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">{contacts.form.topic}</label>
                      <select
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        value={form.topic}
                        onChange={(e) => setForm({ ...form, topic: e.target.value })}
                      >
                        <option value="" className="bg-[#1a1330]">{contacts.form.topicPlaceholder}</option>
                        {contacts.form.topics.map((topic) => (
                          <option key={topic} value={topic} className="bg-[#1a1330]">{topic}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">{contacts.form.message}</label>
                      <Textarea placeholder={contacts.form.messagePlaceholder} rows={5} className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500 resize-none" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                    </div>
                    <Button type="submit" className="w-full gradient-primary text-white border-0 py-6 text-base font-bold hover:opacity-90 glow-primary">
                      {contacts.form.submit}
                      <Icon name="Send" size={18} className="ml-2" />
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
