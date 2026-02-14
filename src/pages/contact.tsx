import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneInput } from "@/components/ui/phone-input";
import { Mail, Phone, MapPin, Calendar, Video, Users, Clock, ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  const [calendlyUrl, setCalendlyUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOpenCalendly = () => {
    if (calendlyUrl) {
      window.open(calendlyUrl, "_blank");
    }
  };

  return (
    <Layout>
      {/* Section Hero */}
      <section className="relative py-20 bg-gradient-to-br from-deep-navy via-ocean to-sage overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/Gemini_Generated_Image_7fq8687fq8687fq8.png"
            alt="Contact et communication"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              <Mail className="w-5 h-5 text-deep-navy" />
              <span className="text-deep-navy font-medium">Parlons de Votre Projet</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-deep-navy mb-6">
              Contactez-Nous
            </h1>
            <p className="text-xl text-ocean mb-8 leading-relaxed">
              Que vous ayez des questions sur nos services, que vous souhaitiez discuter d'un projet spécifique, 
              ou simplement en savoir plus sur les opportunités internationales, notre équipe est là pour vous aider.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                <Clock className="w-4 h-4 text-deep-navy" />
                <span className="text-deep-navy text-sm">Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                <Users className="w-4 h-4 text-deep-navy" />
                <span className="text-deep-navy text-sm">Accompagnement personnalisé</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Prise de Rendez-vous Calendly */}
      <section className="py-20 bg-gradient-to-br from-sage/5 via-ocean/5 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-vibrant-coral to-warm-gold text-white px-4 py-2 rounded-full mb-6">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Consultation Personnalisée</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-deep-navy via-ocean to-sage bg-clip-text text-transparent mb-4">
                Réservez Votre Consultation Gratuite
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discutez avec nos experts pour clarifier votre projet et obtenir des recommandations personnalisées
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Avantages de la consultation */}
              <Card className="border-2 border-sage/20 hover:border-sage/40 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage to-ocean rounded-2xl flex items-center justify-center mb-6">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-deep-navy mb-4">
                    Pourquoi Réserver une Consultation ?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Analyse personnalisée de votre profil",
                      "Recommandations sur mesure de destinations",
                      "Feuille de route claire pour votre projet",
                      "Réponses immédiates à vos questions"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-sage mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Accès Calendly */}
              <Card className="border-2 border-ocean/20 hover:border-ocean/40 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-ocean to-deep-navy rounded-2xl flex items-center justify-center mb-6">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-deep-navy mb-4">
                    Accédez au Calendrier
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Choisissez un créneau qui vous convient et réservez votre consultation gratuite en quelques clics.
                  </p>
                  <div className="space-y-4">
                    <Link href="/rendez-vous">
                      <Button className="w-full bg-gradient-to-r from-ocean to-sage hover:from-ocean/90 hover:to-sage/90 text-white font-semibold py-6 text-lg">
                        <Calendar className="w-5 h-5 mr-2" />
                        Planifiez votre aventure internationale
                      </Button>
                    </Link>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        30 min
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Video className="w-4 h-4" />
                        Visioconférence
                      </span>
                      <span>•</span>
                      <span className="text-sage font-semibold">Gratuit</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Statistiques de confiance */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Users, label: "Consultations réalisées", value: "500+", color: "text-ocean" },
                { icon: Clock, label: "Délai de réponse moyen", value: "24h", color: "text-sage" },
                { icon: ArrowRight, label: "Taux de satisfaction", value: "95%", color: "text-vibrant-coral" }
              ].map((stat, index) => (
                <Card key={index} className="border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                    <div className="text-3xl font-bold text-deep-navy mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Formulaire de Contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-deep-navy mb-4">
                Ou Envoyez-Nous un Message
              </h2>
              <p className="text-lg text-gray-600">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Formulaire */}
              <div>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom
                      </label>
                      <Input
                        type="text"
                        placeholder="Votre prénom"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom
                      </label>
                      <Input
                        type="text"
                        placeholder="Votre nom"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adresse Email
                    </label>
                    <Input
                      type="email"
                      placeholder="votre.email@exemple.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone (optionnel)
                    </label>
                    <PhoneInput
                      value={phoneNumber}
                      onChange={setPhoneNumber}
                      placeholder="X XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet
                    </label>
                    <Input
                      type="text"
                      placeholder="En quoi pouvons-nous vous aider ?"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Décrivez votre projet ou posez vos questions..."
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-ocean to-sage hover:from-ocean/90 hover:to-sage/90 text-white font-semibold py-6 text-lg">
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le Message
                  </Button>
                </form>
              </div>

              {/* Informations de contact */}
              <div className="space-y-6">
                <Card className="border-2 border-ocean/20 hover:border-ocean/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-ocean to-sage rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-deep-navy mb-2">Email</h3>
                        <p className="text-gray-600">contact@vivrenallemagne.de</p>
                        <p className="text-sm text-gray-500 mt-1">Réponse sous 24h ouvrées</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-sage/20 hover:border-sage/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-sage to-ocean rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-deep-navy mb-2">Téléphone / WhatsApp</h3>
                        <a href="tel:+4917969090280" className="text-gray-600 hover:text-ocean transition-colors font-semibold">
                          📞 +49 179 6909 280
                        </a>
                        <p className="text-sm text-gray-500 mt-1">Uniquement via WhatsApp</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-vibrant-coral/20 hover:border-vibrant-coral/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-vibrant-coral to-warm-gold rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-deep-navy mb-2">Adresse</h3>
                        <p className="text-gray-600">71-75 Shelton Street</p>
                        <p className="text-gray-600">Covent Garden</p>
                        <p className="text-gray-600">London WC2H 9JQ</p>
                        <p className="text-gray-600">Royaume-Uni</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-deep-navy to-ocean text-white">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold text-xl mb-3">Horaires d'Ouverture</h3>
                    <div className="space-y-2 text-white/90">
                      <div className="flex justify-between">
                        <span>Lundi - Vendredi</span>
                        <span className="font-semibold">9h - 18h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Samedi</span>
                        <span className="font-semibold">10h - 16h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dimanche</span>
                        <span className="font-semibold">Fermé</span>
                      </div>
                    </div>
                    <p className="text-xs text-white/70 mt-4 pt-4 border-t border-white/20">
                      * Fuseau horaire : GMT (Londres)
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}