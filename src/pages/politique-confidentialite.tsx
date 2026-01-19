import { Layout } from "@/components/layout/Layout";
import { Shield, Lock, Eye, UserCheck, Database, Cookie, FileText, AlertCircle } from "lucide-react";

export default function PolitiqueConfidentialite() {
  return (
    <Layout 
      title="Politique de Confidentialité | Aventures Sans Frontières"
      description="Découvrez comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD."
    >
      <div className="min-h-screen bg-gradient-to-b from-soft-cream via-white to-soft-cream">
        <div className="relative bg-gradient-to-r from-sage via-ocean to-navy py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-white/20">
                <Shield className="h-5 w-5 text-gold" />
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
          <div className="max-w-4xl mx-auto space-y-12">
            <section className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-delay-1 border border-ocean/10">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-8 w-8 text-ocean" />
                <h2 className="text-3xl font-bold text-navy font-heading">Introduction</h2>
              </div>
              <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
                <p>
                  Aisso International Ltd (ci-après "Aventures Sans Frontières", "nous", "notre" ou "nos") s'engage à protéger la confidentialité et la sécurité de vos données personnelles.
                </p>
                <p>
                  Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles lorsque vous utilisez notre site web et nos services, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
                </p>
                <div className="bg-soft-cream/50 p-6 rounded-xl border-l-4 border-ocean">
                  <p className="font-semibold text-navy mb-2">Date d'entrée en vigueur</p>
                  <p>{new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-delay-2 border border-sage/10">
              <div className="flex items-center gap-3 mb-6">
                <Database className="h-8 w-8 text-sage" />
                <h2 className="text-3xl font-bold text-navy font-heading">Données Collectées</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-soft-cream/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-navy mb-4">Données d'identification</h3>
                  <ul className="space-y-2 text-navy/80">
                    <li className="flex items-start gap-2">
                      <span className="text-ocean mt-1">•</span>
                      <span>Nom et prénom</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ocean mt-1">•</span>
                      <span>Adresse email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ocean mt-1">•</span>
                      <span>Numéro de téléphone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ocean mt-1">•</span>
                      <span>Pays de résidence</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-soft-cream/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-navy mb-4">Données de navigation</h3>
                  <ul className="space-y-2 text-navy/80">
                    <li className="flex items-start gap-2">
                      <span className="text-sage mt-1">•</span>
                      <span>Adresse IP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage mt-1">•</span>
                      <span>Type et version du navigateur</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage mt-1">•</span>
                      <span>Pages visitées et temps passé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage mt-1">•</span>
                      <span>Source de référence</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-soft-cream/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-navy mb-4">Données de projet</h3>
                  <ul className="space-y-2 text-navy/80">
                    <li className="flex items-start gap-2">
                      <span className="text-coral mt-1">•</span>
                      <span>Type d'opportunité recherchée (volontariat, formation, études, tourisme)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-coral mt-1">•</span>
                      <span>Destination souhaitée</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-coral mt-1">•</span>
                      <span>Informations fournies lors de consultations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-delay-3 border border-coral/10">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="h-8 w-8 text-coral" />
                <h2 className="text-3xl font-bold text-navy font-heading">Utilisation des Données</h2>
              </div>
              <div className="space-y-4">
                <p className="text-navy/80 text-lg">Nous utilisons vos données personnelles pour :</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-soft-cream/50 p-6 rounded-xl border-l-4 border-ocean">
                    <h4 className="font-bold text-navy mb-2">Services principaux</h4>
                    <ul className="space-y-2 text-navy/80 text-sm">
                      <li>• Traiter vos demandes de consultation</li>
                      <li>• Vous accompagner dans vos projets</li>
                      <li>• Gérer vos rendez-vous</li>
                    </ul>
                  </div>
                  
                  <div className="bg-soft-cream/50 p-6 rounded-xl border-l-4 border-sage">
                    <h4 className="font-bold text-navy mb-2">Communication</h4>
                    <ul className="space-y-2 text-navy/80 text-sm">
                      <li>• Répondre à vos questions</li>
                      <li>• Vous envoyer des informations pertinentes</li>
                      <li>• Newsletters (avec votre consentement)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-soft-cream/50 p-6 rounded-xl border-l-4 border-coral">
                    <h4 className="font-bold text-navy mb-2">Amélioration</h4>
                    <ul className="space-y-2 text-navy/80 text-sm">
                      <li>• Améliorer nos services</li>
                      <li>• Analyser l'utilisation du site</li>
                      <li>• Développer de nouvelles fonctionnalités</li>
                    </ul>
                  </div>
                  
                  <div className="bg-soft-cream/50 p-6 rounded-xl border-l-4 border-gold">
                    <h4 className="font-bold text-navy mb-2">Conformité</h4>
                    <ul className="space-y-2 text-navy/80 text-sm">
                      <li>• Respecter nos obligations légales</li>
                      <li>• Prévenir la fraude</li>
                      <li>• Assurer la sécurité du site</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-gold/10">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="h-8 w-8 text-gold" />
                <h2 className="text-3xl font-bold text-navy font-heading">Protection des Données</h2>
              </div>
              <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
                <p>
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre :
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-sage/10 to-sage/5 p-6 rounded-xl text-center">
                    <Shield className="h-12 w-12 text-sage mx-auto mb-3" />
                    <h4 className="font-bold text-navy mb-2">Accès non autorisé</h4>
                    <p className="text-sm text-navy/70">Contrôles d'accès stricts</p>
                  </div>
                  <div className="bg-gradient-to-br from-ocean/10 to-ocean/5 p-6 rounded-xl text-center">
                    <Lock className="h-12 w-12 text-ocean mx-auto mb-3" />
                    <h4 className="font-bold text-navy mb-2">Perte de données</h4>
                    <p className="text-sm text-navy/70">Sauvegardes régulières</p>
                  </div>
                  <div className="bg-gradient-to-br from-coral/10 to-coral/5 p-6 rounded-xl text-center">
                    <AlertCircle className="h-12 w-12 text-coral mx-auto mb-3" />
                    <h4 className="font-bold text-navy mb-2">Divulgation</h4>
                    <p className="text-sm text-navy/70">Chiffrement des données sensibles</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-ocean/10">
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="h-8 w-8 text-ocean" />
                <h2 className="text-3xl font-bold text-navy font-heading">Vos Droits</h2>
              </div>
              <div className="space-y-4">
                <p className="text-navy/80 text-lg mb-6">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                
                <div className="space-y-3">
                  {[
                    { title: "Droit d'accès", desc: "Obtenir une copie de vos données personnelles" },
                    { title: "Droit de rectification", desc: "Corriger vos données inexactes ou incomplètes" },
                    { title: "Droit à l'effacement", desc: "Demander la suppression de vos données" },
                    { title: "Droit à la limitation", desc: "Limiter le traitement de vos données" },
                    { title: "Droit à la portabilité", desc: "Recevoir vos données dans un format structuré" },
                    { title: "Droit d'opposition", desc: "Vous opposer au traitement de vos données" },
                    { title: "Droit de retrait", desc: "Retirer votre consentement à tout moment" }
                  ].map((right, index) => (
                    <div key={index} className="bg-soft-cream/50 p-4 rounded-xl border-l-4 border-ocean hover:border-coral transition-colors">
                      <h4 className="font-bold text-navy mb-1">{right.title}</h4>
                      <p className="text-navy/70 text-sm">{right.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-coral/10 to-gold/10 p-6 rounded-xl mt-6 border border-coral/20">
                  <p className="text-navy/80 text-lg">
                    <strong className="text-navy">Pour exercer vos droits :</strong> Contactez-nous à{" "}
                    <a href="mailto:successprocompany@gmail.com" className="text-ocean hover:text-coral transition-colors font-medium">
                      successprocompany@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-sage/10">
              <div className="flex items-center gap-3 mb-6">
                <Cookie className="h-8 w-8 text-sage" />
                <h2 className="text-3xl font-bold text-navy font-heading">Cookies</h2>
              </div>
              <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
                <p>
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site. Les cookies sont de petits fichiers texte stockés sur votre appareil.
                </p>
                <div className="bg-soft-cream/50 p-6 rounded-xl">
                  <h4 className="font-bold text-navy mb-3">Types de cookies utilisés :</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-sage mt-1">•</span>
                      <span><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage mt-1">•</span>
                      <span><strong>Cookies analytiques :</strong> Pour comprendre comment vous utilisez le site</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage mt-1">•</span>
                      <span><strong>Cookies de préférence :</strong> Pour mémoriser vos choix (langue, etc.)</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm">
                  Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-navy/10">
              <h2 className="text-3xl font-bold text-navy font-heading mb-6">Partage des Données</h2>
              <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
                <p>
                  Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers à des fins commerciales.
                </p>
                <p>
                  Nous pouvons partager vos données uniquement dans les cas suivants :
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-ocean mt-1">•</span>
                    <span><strong>Prestataires de services :</strong> Pour le fonctionnement technique du site (hébergement, emails)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ocean mt-1">•</span>
                    <span><strong>Obligations légales :</strong> Si la loi l'exige</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ocean mt-1">•</span>
                    <span><strong>Avec votre consentement :</strong> Pour des services spécifiques que vous demandez</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-coral/10">
              <h2 className="text-3xl font-bold text-navy font-heading mb-6">Conservation des Données</h2>
              <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
                <p>
                  Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
                </p>
                <div className="bg-soft-cream/50 p-6 rounded-xl">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-coral mt-1">•</span>
                      <span><strong>Données de compte :</strong> Jusqu'à la suppression de votre compte</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-coral mt-1">•</span>
                      <span><strong>Données de consultation :</strong> 3 ans après la dernière interaction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-coral mt-1">•</span>
                      <span><strong>Données de navigation :</strong> 13 mois maximum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-coral mt-1">•</span>
                      <span><strong>Données légales :</strong> Selon les obligations légales applicables</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-gold/10">
              <h2 className="text-3xl font-bold text-navy font-heading mb-6">Modifications</h2>
              <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications entreront en vigueur dès leur publication sur cette page.
                </p>
                <p>
                  Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques en matière de protection des données.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-navy via-ocean to-sage text-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold font-heading mb-6">Contact</h2>
              <div className="space-y-4 text-white/90 text-lg leading-relaxed">
                <p>
                  Pour toute question concernant cette politique de confidentialité ou l'utilisation de vos données personnelles, contactez-nous :
                </p>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <p className="mb-2"><strong className="text-white">Email :</strong></p>
                  <a 
                    href="mailto:successprocompany@gmail.com" 
                    className="text-gold hover:text-coral transition-colors text-xl font-medium"
                  >
                    successprocompany@gmail.com
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <p className="mb-2"><strong className="text-white">Adresse :</strong></p>
                  <address className="not-italic text-white/90">
                    Aisso International Ltd<br />
                    71–75 Shelton Street<br />
                    Covent Garden<br />
                    London WC2H 9JQ<br />
                    United Kingdom
                  </address>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-ocean/10">
              <p className="text-navy/60 text-sm text-center">
                <strong className="text-navy">Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}