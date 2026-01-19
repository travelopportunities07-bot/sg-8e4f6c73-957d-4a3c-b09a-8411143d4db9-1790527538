import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Building2, Calendar, Video, Users, ArrowRight } from "lucide-react";
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
  const [calendlyUrl, setCalendlyUrl] = useState("");

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

  const openCalendly = () => {
    if (calendlyUrl) {
      window.open(calendlyUrl, "_blank");
    }
  };

  return (
    <Layout 
      title={`${t("nav.contact")} | Aventures Sans Frontières`}
      description={t("contact.meta.description")}
    >
      <div className="bg-gradient-to-br from-deep-navy via-ocean to-deep-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <Mail className="inline-block w-4 h-4 mr-2" />
            Nous Contacter
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">{t("contact.hero.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            {t("contact.hero.subtitle")}
          </p>
        </div>
      </div>

      {/* Section Prise de Rendez-vous Calendly */}
      <section className="py-20 bg-gradient-to-br from-sage/5 via-white to-ocean/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-vibrant-coral to-warm-gold text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                <Calendar className="inline-block w-4 h-4 mr-2" />
                Consultation Personnalisée
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-deep-navy via-ocean to-sage bg-clip-text text-transparent">
                Réservez Votre Consultation Gratuite
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Échangez avec nos experts pour concrétiser votre projet international. 30 minutes pour transformer vos ambitions en plan d'action.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Avantages de la consultation */}
              <Card className="border-2 border-sage/20 hover:border-sage hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-sage to-ocean w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4 text-deep-navy">Ce que vous obtiendrez :</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-sage mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Analyse personnalisée</strong> de votre profil et objectifs</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-ocean mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Recommandations sur mesure</strong> de destinations et programmes</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-vibrant-coral mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Feuille de route claire</strong> pour concrétiser votre projet</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-warm-gold mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Réponses immédiates</strong> à toutes vos questions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Formulaire de lien Calendly */}
              <Card className="border-2 border-ocean/20 hover:border-ocean hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-ocean to-deep-navy w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-6 text-deep-navy">Prendre Rendez-vous</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="calendly-url" className="block text-sm font-semibold text-gray-700 mb-3">
                        Lien Calendly de l'Expert
                      </label>
                      <Input
                        id="calendly-url"
                        type="url"
                        value={calendlyUrl}
                        onChange={(e) => setCalendlyUrl(e.target.value)}
                        placeholder="https://calendly.com/votre-lien"
                        className="border-2 border-gray-200 focus:border-ocean transition-colors"
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        Entrez votre lien Calendly personnel pour permettre aux visiteurs de réserver un créneau
                      </p>
                    </div>

                    <Button 
                      onClick={openCalendly}
                      disabled={!calendlyUrl}
                      className="w-full bg-gradient-to-r from-ocean to-sage hover:from-ocean/90 hover:to-sage/90 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Ouvrir le Calendrier
                    </Button>

                    <div className="bg-gradient-to-r from-warm-gold/10 to-vibrant-coral/10 border-l-4 border-warm-gold rounded-r-lg p-4">
                      <p className="text-sm text-gray-700 flex items-start">
                        <Clock className="w-5 h-5 text-warm-gold mr-2 flex-shrink-0 mt-0.5" />
                        <span><strong>Durée :</strong> 30 minutes · <strong>Format :</strong> Visio ou Téléphone · <strong>Gratuit</strong></span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Témoignages consultation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-sage/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-sage" />
                  </div>
                  <p className="text-4xl font-bold text-deep-navy mb-2">500+</p>
                  <p className="text-gray-600 font-medium">Consultations réalisées</p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-ocean/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-ocean" />
                  </div>
                  <p className="text-4xl font-bold text-deep-navy mb-2">24h</p>
                  <p className="text-gray-600 font-medium">Délai de réponse moyen</p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-vibrant-coral/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-6 h-6 text-vibrant-coral" />
                  </div>
                  <p className="text-4xl font-bold text-deep-navy mb-2">95%</p>
                  <p className="text-gray-600 font-medium">Taux de satisfaction</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-deep-navy">
                {t("contact.form.title")}
              </h2>
              
              {isSubmitted ? (
                <Card className="border-sage/20 shadow-xl">
                  <CardContent className="p-8">
                    <div className="text-center py-8">
                      <div className="bg-sage/10 text-sage p-4 rounded-full inline-block mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-deep-navy">{t("contact.form.success.title")}</h3>
                      <p className="text-gray-600 mb-6">
                        {t("contact.form.success.message")}
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} className="bg-sage hover:bg-sage/90">
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
                  
                  <Button type="submit" className="w-full bg-sage hover:bg-sage/90" disabled={isSubmitting}>
                    {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
                  </Button>
                </form>
              )}
            </div>
            
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-deep-navy">
                {t("contact.info.title")}
              </h2>
              
              <div className="space-y-6">
                <Card className="border-deep-navy/20 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Building2 className="h-6 w-6 text-deep-navy mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-deep-navy">{t("contact.info.company")}</h3>
                      <p className="text-gray-700 font-semibold mb-1">Aisso International Ltd</p>
                      <p className="text-gray-600 text-sm">Private Limited Company (UK)</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-deep-navy/20 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-ocean mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-deep-navy">{t("contact.info.address")}</h3>
                      <p className="text-gray-600">
                        71–75 Shelton Street<br />
                        Covent Garden<br />
                        London WC2H 9JQ<br />
                        United Kingdom
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-deep-navy/20 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-sage mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-deep-navy">{t("contact.info.email")}</h3>
                      <a 
                        href="mailto:successprocompany@gmail.com" 
                        className="text-gray-600 hover:text-sage transition-colors"
                      >
                        successprocompany@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-deep-navy/20 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-vibrant-coral mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-deep-navy">{t("contact.info.hours")}</h3>
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

      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-deep-navy">
            {t("contact.faq.title")}
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-deep-navy/20 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-deep-navy">{t("contact.faq.q1.question")}</h3>
                <p className="text-gray-600">
                  {t("contact.faq.q1.answer")}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-deep-navy/20 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-deep-navy">{t("contact.faq.q2.question")}</h3>
                <p className="text-gray-600">
                  {t("contact.faq.q2.answer")}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-deep-navy/20 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-deep-navy">{t("contact.faq.q3.question")}</h3>
                <p className="text-gray-600">
                  {t("contact.faq.q3.answer")}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-deep-navy/20 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-deep-navy">{t("contact.faq.q4.question")}</h3>
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