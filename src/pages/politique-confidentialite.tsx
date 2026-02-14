import { Layout } from "@/components/layout/Layout";
import { Shield, Lock, Eye, UserCheck, Database, Cookie, FileText, AlertCircle, Mail } from "lucide-react";

export default function PolitiqueConfidentialite() {
  return (
    <Layout 
      title="Politique de Confidentialité | VivrEnAllemagne"
      description="Découvrez comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD."
    >
      <div className="min-h-screen bg-gradient-to-b from-soft-cream via-white to-soft-cream">
        <div className="relative bg-gradient-to-br from-sage via-ocean to-deep-navy py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-white/20">
                <Shield className="h-5 w-5 text-warm-gold" />
                <span className="text-white font-medium">Vos Données, Notre Priorité</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-heading">
                Politique de Confidentialité
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Comment nous protégeons et utilisons vos informations personnelles
              </p>
            </div>
          </div>
        </div>

        <div className="container py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 animate-fade-in-delay-1 border-l-4 border-ocean hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-ocean/10 rounded-xl">
                  <FileText className="h-8 w-8 text-ocean" />
                </div>
                <h2 className="text-3xl font-bold text-deep-navy font-heading">Introduction</h2>
              </div>
              <div className="space-y-4 text-deep-navy/80 text-lg leading-relaxed">
                <p className="bg-ocean/5 p-5 rounded-xl border border-ocean/10">
                  Aisso International Ltd (ci-après "VivrEnAllemagne", "nous", "notre" ou "nos"), propriété de Monsieur Mahuton Isaac Aisso, promoteur et propriétaire du site VivrEnAllemagne.de, s'engage à protéger la confidentialité et la sécurité de vos données personnelles.
                </p>
                <p className="bg-sage/5 p-5 rounded-xl border border-sage/10">
                  Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles lorsque vous utilisez notre site web et nos services, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
                </p>
                <div className="bg-gradient-to-br from-ocean/10 to-sage/10 p-6 rounded-xl border-l-4 border-ocean">
                  <p className="font-semibold text-ocean mb-2 text-sm uppercase tracking-wide">Date d'entrée en vigueur</p>
                  <p className="text-deep-navy text-lg">{new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 animate-fade-in-delay-2 border-l-4 border-sage hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-sage/10 rounded-xl">
                  <Database className="h-8 w-8 text-sage" />
                </div>
                <h2 className="text-3xl font-bold text-deep-navy font-heading">Données Collectées</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-ocean/5 to-ocean/10 p-6 rounded-xl border border-ocean/20">
                  <h3 className="text-xl font-bold text-ocean mb-4 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-ocean"></div>
                    Données d'identification
                  </h3>
                  <ul className="space-y-2 text-deep-navy/80">
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                      <span className="text-ocean mt-1 font-bold">•</span>
                      <span>Nom et prénom</span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                      <span className="text-ocean mt-1 font-bold">•</span>
                      <span>Adresse email</span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                      <span className="text-ocean mt-1 font-bold">•</span>
                      <span>Numéro de téléphone</span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                      <span className="text-ocean mt-1 font-bold">•</span>
                      <span>Pays de résidence</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-sage/5 to-sage/10 p-6 rounded-xl border border-sage/20">
                  <h3 className="text-xl font-bold text-sage mb-4 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sage"></div>
                    Données de navigation
                  </h3>
                  <ul className="space-y-2 text-deep-navy/80">
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                      <span className="text-sage mt-1 font-bold">•</span>
                      <span>Adresse IP</span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                      <span className="text-sage mt-1 font-bold">•</span>
                      <span>Type et version du navigateur</span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                      <span className="text-sage mt-1 font-bold">•</span>
                      <span>Pages visitées et temps passé</span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                      <span className="text-sage mt-1 font-bold">•</span>
                      <span>Source de référence</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-vibrant-coral/5 to-vibrant-coral/10 p-6 rounded-xl border border-vibrant-coral/20">
                  <h3 className="text-xl font-bold text-vibrant-coral mb-4 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-vibrant-coral"></div>
                    Données de projet
                  </h3>
                  <ul className="space-y-2 text-deep-navy/80">
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                      <span className="text-vibrant-coral mt-1 font-bold">•</span>
                      <span>Type d'opportunité recherchée (volontariat, formation, études, tourisme)</span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                      <span className="text-vibrant-coral mt-1 font-bold">•</span>
                      <span>Destination souhaitée</span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                      <span className="text-vibrant-coral mt-1 font-bold">•</span>
                      <span>Informations fournies lors de consultations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 animate-fade-in-delay-3 border-l-4 border-vibrant-coral hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-vibrant-coral/10 rounded-xl">
                  <Eye className="h-8 w-8 text-vibrant-coral" />
                </div>
                <h2 className="text-3xl font-bold text-deep-navy font-heading">Utilisation des Données</h2>
              </div>
              <div className="space-y-4">
                <p className="text-deep-navy/80 text-lg bg-vibrant-coral/5 p-4 rounded-xl border border-vibrant-coral/10">
                  Nous utilisons vos données personnelles pour :
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-ocean/10 to-ocean/5 p-6 rounded-xl border-l-4 border-ocean hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-ocean mb-3 text-lg">Services principaux</h4>
                    <ul className="space-y-2 text-deep-navy/80 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-ocean mt-1">✓</span>
                        <span>Traiter vos demandes de consultation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-ocean mt-1">✓</span>
                        <span>Vous accompagner dans vos projets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-ocean mt-1">✓</span>
                        <span>Gérer vos rendez-vous</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-sage/10 to-sage/5 p-6 rounded-xl border-l-4 border-sage hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-sage mb-3 text-lg">Communication</h4>
                    <ul className="space-y-2 text-deep-navy/80 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-sage mt-1">✓</span>
                        <span>Répondre à vos questions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sage mt-1">✓</span>
                        <span>Vous envoyer des informations pertinentes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sage mt-1">✓</span>
                        <span>Newsletters (avec votre consentement)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-vibrant-coral/10 to-vibrant-coral/5 p-6 rounded-xl border-l-4 border-vibrant-coral hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-vibrant-coral mb-3 text-lg">Amélioration</h4>
                    <ul className="space-y-2 text-deep-navy/80 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-vibrant-coral mt-1">✓</span>
                        <span>Améliorer nos services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-vibrant-coral mt-1">✓</span>
                        <span>Analyser l'utilisation du site</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-vibrant-coral mt-1">✓</span>
                        <span>Développer de nouvelles fonctionnalités</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-warm-gold/10 to-warm-gold/5 p-6 rounded-xl border-l-4 border-warm-gold hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-warm-gold mb-3 text-lg">Conformité</h4>
                    <ul className="space-y-2 text-deep-navy/80 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-warm-gold mt-1">✓</span>
                        <span>Respecter nos obligations légales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-gold mt-1">✓</span>
                        <span>Prévenir la fraude</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-gold mt-1">✓</span>
                        <span>Assurer la sécurité du site</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border-l-4 border-warm-gold hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-warm-gold/10 rounded-xl">
                  <Lock className="h-8 w-8 text-warm-gold" />
                </div>
                <h2 className="text-3xl font-bold text-deep-navy font-heading">Protection des Données</h2>
              </div>
              <div className="space-y-4">
                <p className="text-deep-navy/80 text-lg bg-warm-gold/5 p-5 rounded-xl border border-warm-gold/10">
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre :
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-sage/10 to-sage/5 p-6 rounded-xl text-center border border-sage/20 hover:border-sage/40 transition-all hover:scale-105">
                    <Shield className="h-14 w-14 text-sage mx-auto mb-4" />
                    <h4 className="font-bold text-deep-navy mb-2 text-lg">Accès non autorisé</h4>
                    <p className="text-sm text-deep-navy/70">Contrôles d'accès stricts</p>
                  </div>
                  <div className="bg-gradient-to-br from-ocean/10 to-ocean/5 p-6 rounded-xl text-center border border-ocean/20 hover:border-ocean/40 transition-all hover:scale-105">
                    <Lock className="h-14 w-14 text-ocean mx-auto mb-4" />
                    <h4 className="font-bold text-deep-navy mb-2 text-lg">Perte de données</h4>
                    <p className="text-sm text-deep-navy/70">Sauvegardes régulières</p>
                  </div>
                  <div className="bg-gradient-to-br from-vibrant-coral/10 to-vibrant-coral/5 p-6 rounded-xl text-center border border-vibrant-coral/20 hover:border-vibrant-coral/40 transition-all hover:scale-105">
                    <AlertCircle className="h-14 w-14 text-vibrant-coral mx-auto mb-4" />
                    <h4 className="font-bold text-deep-navy mb-2 text-lg">Divulgation</h4>
                    <p className="text-sm text-deep-navy/70">Chiffrement des données sensibles</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border-l-4 border-ocean hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-ocean/10 rounded-xl">
                  <UserCheck className="h-8 w-8 text-ocean" />
                </div>
                <h2 className="text-3xl font-bold text-deep-navy font-heading">Vos Droits</h2>
              </div>
              <div className="space-y-4">
                <p className="text-deep-navy/80 text-lg bg-ocean/5 p-5 rounded-xl border border-ocean/10 mb-6">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                
                <div className="space-y-3">
                  {[
                    { title: "Droit d'accès", desc: "Obtenir une copie de vos données personnelles", color: "ocean" },
                    { title: "Droit de rectification", desc: "Corriger vos données inexactes ou incomplètes", color: "sage" },
                    { title: "Droit à l'effacement", desc: "Demander la suppression de vos données", color: "vibrant-coral" },
                    { title: "Droit à la limitation", desc: "Limiter le traitement de vos données", color: "warm-gold" },
                    { title: "Droit à la portabilité", desc: "Recevoir vos données dans un format structuré", color: "ocean" },
                    { title: "Droit d'opposition", desc: "Vous opposer au traitement de vos données", color: "sage" },
                    { title: "Droit de retrait", desc: "Retirer votre consentement à tout moment", color: "vibrant-coral" }
                  ].map((right, index) => (
                    <div key={index} className={`bg-gradient-to-r from-${right.color}/5 to-${right.color}/10 p-5 rounded-xl border-l-4 border-${right.color} hover:shadow-md transition-all`}>
                      <h4 className={`font-bold text-${right.color} mb-1 text-lg`}>{right.title}</h4>
                      <p className="text-deep-navy/70">{right.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-vibrant-coral/10 via-warm-gold/10 to-ocean/10 p-6 rounded-xl mt-6 border-2 border-vibrant-coral/30">
                  <p className="text-deep-navy text-lg">
                    <strong className="text-vibrant-coral text-xl">Pour exercer vos droits :</strong> Contactez-nous à{" "}
                    <a href="mailto:successprocompany@gmail.com" className="text-ocean hover:text-vibrant-coral transition-colors font-bold underline decoration-2">
                      successprocompany@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border-l-4 border-sage hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-sage/10 rounded-xl">
                  <Cookie className="h-8 w-8 text-sage" />
                </div>
                <h2 className="text-3xl font-bold text-deep-navy font-heading">Cookies</h2>
              </div>
              <div className="space-y-4">
                <p className="text-deep-navy/80 text-lg bg-sage/5 p-5 rounded-xl border border-sage/10">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site. Les cookies sont de petits fichiers texte stockés sur votre appareil.
                </p>
                <div className="bg-gradient-to-br from-sage/10 to-ocean/10 p-6 rounded-xl border border-sage/20">
                  <h4 className="font-bold text-sage mb-4 text-lg">Types de cookies utilisés :</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 bg-white/50 p-4 rounded-lg">
                      <span className="text-sage mt-1 font-bold text-xl">•</span>
                      <span className="text-deep-navy/80"><strong className="text-deep-navy">Cookies essentiels :</strong> Nécessaires au fonctionnement du site</span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-4 rounded-lg">
                      <span className="text-ocean mt-1 font-bold text-xl">•</span>
                      <span className="text-deep-navy/80"><strong className="text-deep-navy">Cookies analytiques :</strong> Pour comprendre comment vous utilisez le site</span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-4 rounded-lg">
                      <span className="text-vibrant-coral mt-1 font-bold text-xl">•</span>
                      <span className="text-deep-navy/80"><strong className="text-deep-navy">Cookies de préférence :</strong> Pour mémoriser vos choix (langue, etc.)</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-deep-navy/70 bg-warm-gold/5 p-4 rounded-xl border border-warm-gold/10">
                  Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-deep-navy via-ocean to-sage text-white rounded-2xl shadow-2xl p-8 lg:p-10">
              <h2 className="text-3xl font-bold font-heading mb-6">Contact</h2>
              <div className="space-y-4">
                <p className="text-white/90 text-lg leading-relaxed">
                  Pour toute question concernant cette politique de confidentialité ou l'utilisation de vos données personnelles, contactez-nous :
                </p>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                  <p className="mb-2 text-warm-gold font-semibold uppercase tracking-wide text-sm">Email</p>
                  <a 
                    href="mailto:successprocompany@gmail.com" 
                    className="text-white hover:text-warm-gold transition-colors text-xl font-medium flex items-center gap-2 group"
                  >
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    successprocompany@gmail.com
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                  <p className="mb-2 text-warm-gold font-semibold uppercase tracking-wide text-sm">Téléphone</p>
                  <a 
                    href="https://wa.me/4917969092800" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-warm-gold transition-colors text-xl font-medium flex items-center gap-2 group"
                  >
                    <svg className="h-5 w-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    +49 179 6909 280
                  </a>
                  <p className="text-sm text-white/70 mt-2">WhatsApp uniquement</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                  <p className="mb-3 text-warm-gold font-semibold uppercase tracking-wide text-sm">Adresse</p>
                  <address className="not-italic text-white/90 leading-relaxed">
                    <strong className="text-white">Aisso International Ltd</strong><br />
                    71–75 Shelton Street<br />
                    Covent Garden<br />
                    London WC2H 9JQ<br />
                    United Kingdom
                  </address>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-warm-gold via-vibrant-coral to-ocean text-white rounded-2xl shadow-2xl p-8 lg:p-10">
              <p className="text-center text-lg backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
                <strong className="text-white">Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}