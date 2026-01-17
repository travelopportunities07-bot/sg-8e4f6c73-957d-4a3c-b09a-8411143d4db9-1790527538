import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Building2 } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <Layout 
      title={`${t("nav.contact")} | AllemagneMobilité`}
      description={t("contact.meta.description")}
    >
      <div className="bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t("contact.hero.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            {t("contact.hero.subtitle")}
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">{t("contact.form.title")}</h2>
              
              {isSubmitted ? (
                <Card className="border-success/20">
                  <CardContent className="p-8">
                    <div className="text-center py-8">
                      <div className="bg-success/10 text-success p-4 rounded-full inline-block mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-primary">{t("contact.form.success.title")}</h3>
                      <p className="text-gray-600 mb-6">
                        {t("contact.form.success.message")}
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} className="bg-success hover:bg-success/90">
                        {t("contact.form.success.button")}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.name")}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t("contact.form.name.placeholder")}
                      className="border-gray-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.email")}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t("contact.form.email.placeholder")}
                      className="border-gray-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.subject")}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder={t("contact.form.subject.placeholder")}
                      className="border-gray-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.message")}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder={t("contact.form.message.placeholder")}
                      rows={6}
                      className="border-gray-300"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-success hover:bg-success/90" disabled={isSubmitting}>
                    {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
                  </Button>
                </form>
              )}
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">{t("contact.info.title")}</h2>
              
              <div className="space-y-6">
                <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Building2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-primary">{t("contact.info.company")}</h3>
                      <p className="text-gray-700 font-semibold mb-1">Aisso International Ltd</p>
                      <p className="text-gray-600 text-sm">Private Limited Company (UK)</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-primary">{t("contact.info.address")}</h3>
                      <p className="text-gray-600">
                        71–75 Shelton Street<br />
                        Covent Garden<br />
                        London WC2H 9JQ<br />
                        United Kingdom
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-primary">{t("contact.info.email")}</h3>
                      <a 
                        href="mailto:successprocompany@gmail.com" 
                        className="text-gray-600 hover:text-success transition-colors"
                      >
                        successprocompany@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-primary">{t("contact.info.hours")}</h3>
                      <p className="text-gray-600">
                        {t("contact.info.hours.weekdays")}<br />
                        {t("contact.info.hours.weekend")}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">{t("contact.faq.title")}</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">{t("contact.faq.q1.question")}</h3>
                <p className="text-gray-600">
                  {t("contact.faq.q1.answer")}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">{t("contact.faq.q2.question")}</h3>
                <p className="text-gray-600">
                  {t("contact.faq.q2.answer")}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">{t("contact.faq.q3.question")}</h3>
                <p className="text-gray-600">
                  {t("contact.faq.q3.answer")}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">{t("contact.faq.q4.question")}</h3>
                <p className="text-gray-600">
                  {t("contact.faq.q4.answer")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}