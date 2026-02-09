import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Building2, User, MessageSquare, CheckCircle2 } from "lucide-react";

export default function DevenirPartenaire() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    email: "",
    nom: "",
    entreprise: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ email: "", nom: "", entreprise: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent opacity-40"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                Partenariat Recruteurs
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Devenez Notre Partenaire
              </h1>
              
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Vous êtes un recruteur allemand ? Rejoignez notre réseau de partenaires et accédez à des talents qualifiés prêts à s'installer en Allemagne.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Talents Qualifiés</h3>
                <p className="text-sm text-slate-600">
                  Accédez à une base de candidats motivés et qualifiés
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Accompagnement</h3>
                <p className="text-sm text-slate-600">
                  Support dans le processus de recrutement international
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Visibilité</h3>
                <p className="text-sm text-slate-600">
                  Votre entreprise mise en avant auprès de nos candidats
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-200">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Demande Envoyée !
                  </h3>
                  <p className="text-slate-600">
                    Nous vous contacterons dans les plus brefs délais pour discuter de notre partenariat.
                  </p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">
                      Inscription Partenaire
                    </h2>
                    <p className="text-slate-600">
                      Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-700 font-medium flex items-center gap-2">
                          <Mail className="w-4 h-4 text-blue-600" />
                          Adresse E-Mail *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="votreemail@entreprise.de"
                          className="h-12 border-2 border-slate-200 focus:border-blue-500 rounded-xl"
                        />
                      </div>

                      {/* Nom */}
                      <div className="space-y-2">
                        <Label htmlFor="nom" className="text-slate-700 font-medium flex items-center gap-2">
                          <User className="w-4 h-4 text-blue-600" />
                          Nom Complet *
                        </Label>
                        <Input
                          id="nom"
                          name="nom"
                          type="text"
                          required
                          value={formData.nom}
                          onChange={handleChange}
                          placeholder="Prénom Nom"
                          className="h-12 border-2 border-slate-200 focus:border-blue-500 rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Entreprise */}
                    <div className="space-y-2">
                      <Label htmlFor="entreprise" className="text-slate-700 font-medium flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-blue-600" />
                        Nom de l'Entreprise
                      </Label>
                      <Input
                        id="entreprise"
                        name="entreprise"
                        type="text"
                        value={formData.entreprise}
                        onChange={handleChange}
                        placeholder="Votre entreprise"
                        className="h-12 border-2 border-slate-200 focus:border-blue-500 rounded-xl"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-700 font-medium flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-blue-600" />
                        Message (Optionnel)
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Parlez-nous de vos besoins en recrutement..."
                        rows={5}
                        className="border-2 border-slate-200 focus:border-blue-500 rounded-xl resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Envoi en cours...
                        </span>
                      ) : (
                        "Devenir Partenaire"
                      )}
                    </Button>

                    <p className="text-sm text-slate-500 text-center">
                      * Champs obligatoires
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info */}
            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-4">
                Des questions ? Contactez-nous directement :
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="mailto:partenaires@vivrenallemagne.com" className="text-blue-600 hover:text-blue-700 font-medium">
                  partenaires@vivrenallemagne.com
                </a>
                <span className="text-slate-400">•</span>
                <a href="tel:+33123456789" className="text-blue-600 hover:text-blue-700 font-medium">
                  +33 1 23 45 67 89
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}