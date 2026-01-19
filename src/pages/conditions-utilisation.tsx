import { Layout } from "@/components/layout/Layout";
import { FileCheck, Shield, AlertTriangle, Scale, CheckCircle2 } from "lucide-react";

export default function ConditionsUtilisation() {
  return (
    <Layout 
      title="Conditions d'Utilisation | Aventures Sans Frontières"
      description="Conditions générales d'utilisation du site Aventures Sans Frontières et de ses services."
    >
      <div className="min-h-screen bg-gradient-to-b from-soft-cream via-white to-soft-cream">
        <div className="relative bg-gradient-to-r from-coral via-gold to-ocean py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-white/20">
                <FileCheck className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Conditions Générales</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-heading">
                Conditions d'Utilisation
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Les règles et conditions régissant l'utilisation de nos services
              </p>
            </div>
          </div>
        </div>

        <div className="container py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <section className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-delay-1 border border-ocean/10">
              <div className="flex items-center gap-3 mb-6">
                <FileCheck className="h-8 w-8 text-ocean" />
                <h2 className="text-3xl font-bold text-navy font-heading">Acceptation des Conditions</h2>
              </div>
              <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
                <p>
                  En accédant et en utilisant le site web d'Aventures Sans Frontières (exploité par Aisso International Ltd), vous acceptez d'être lié par les présentes conditions d'utilisation, toutes les lois et réglementations applicables.
                </p>
                <p>
                  Si vous n'acceptez pas l'une de ces conditions, vous n'êtes pas autorisé à utiliser ou accéder à ce site.
                </p>
                <div className="bg-soft-cream/50 p-6 rounded-xl border-l-4 border-ocean">
                  <p className="font-semibold text-navy mb-2">Date d'entrée en vigueur</p>
                  <p>{new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-delay-2 border border-sage/10">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="h-8 w-8 text-sage" />
                <h2 className="text-3xl font-bold text-navy font-heading">Utilisation du Site</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-soft-cream/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-navy mb-4">Licence d'utilisation</h3>
                  <p className="text-navy/80 mb-4">
                    Nous vous accordons une licence limitée, non exclusive, non transférable pour :
                  </p>
                  <ul className="space-y-2 text-navy/80">
                    <li className="flex items-start gap-2">
                      <span className="text-sage mt-1">•</span>
                      <span>Accéder au site pour votre usage personnel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage mt-1">•</span>
                      <span>Consulter les informations disponibles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage mt-1">•</span>
                      <span>Utiliser nos services conformément à leur destination</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-coral/10 to-coral/5 p-6 rounded-xl border border-coral/20">
                  <h3 className="text-xl font-bold text-navy mb-4">Restrictions d'utilisation</h3>
                  <p className="text-navy/80 mb-4">
                    Vous vous engagez à ne pas :
                  </p>
                  <ul className="space-y-2 text-navy/80">
                    <li className="flex items-start gap-2">
                      <span className="text-coral mt-1">✕</span>
                      <span>Modifier ou copier les contenus du site</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-coral mt-1">✕</span>
                      <span>Utiliser le site à des fins commerciales sans autorisation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-coral mt-1">✕</span>
                      <span>Tenter d'accéder aux systèmes de manière non autorisée</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-coral mt-1">✕</span>
                      <span>Supprimer les mentions de droits d'auteur</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-coral mt-1">✕</span>
                      <span>Transmettre des virus ou codes malveillants</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-gold/10">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-gold" />
                <h2 className="text-3xl font-bold text-navy font-heading">Services Proposés</h2>
              </div>
              <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
                <p>
                  Aventures Sans Frontières propose des services d'accompagnement et de conseil pour :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-soft-cream/50 p-6 rounded-xl border-l-4 border-ocean">
                    <h4 className="font-bold text-navy mb-2">Volontariat International</h4>
                    <p className="text-sm text-navy/70">Programmes de volontariat à l'étranger</p>
                  </div>
                  <div className="bg-soft-cream/50 p-6 rounded-xl border-l-4 border-sage">
                    <h4 className="font-bold text-navy mb-2">Formations Professionnelles</h4>
                    <p className="text-sm text-navy/70">Opportunités de formation à l'international</p>
                  </div>
                  <div className="bg-soft-cream/50 p-6 rounded-xl border-l-4 border-coral">
                    <h4 className="font-bold text-navy mb-2">Études à l'Étranger</h4>
                    <p className="text-sm text-navy/70">Accompagnement pour études internationales</p>
                  </div>
                  <div className="bg-soft-cream/50 p-6 rounded-xl border-l-4 border-gold">
                    <h4 className="font-bold text-navy mb-2">Tourisme Éducatif</h4>
                    <p className="text-sm text-navy/70">Voyages culturels et linguistiques</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-navy/5 to-ocean/5 p-6 rounded-xl mt-4 border border-navy/10">
                  <p className="text-navy">
                    <strong>Important :</strong> Nos services sont des prestations de conseil et d'accompagnement. Nous ne garantissons pas l'obtention d'un visa, d'une admission ou d'une place dans un programme spécifique.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-coral/10">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-8 w-8 text-coral" />
                <h2 className="text-3xl font-bold text-navy font-heading">Limitation de Responsabilité</h2>
              </div>
              <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
                <div className="bg-coral/10 p-6 rounded-xl border-l-4 border-coral">
                  <h4 className="font-bold text-navy mb-3">Responsabilité limitée</h4>
                  <p className="mb-3">
                    Aisso International Ltd ne pourra être tenu responsable de :
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Décisions prises par les autorités (refus de visa, etc.)</li>
                    <li>• Changements de politique des pays d'accueil</li>
                    <li>• Annulations ou modifications de programmes par des tiers</li>
                    <li>• Événements de force majeure (pandémie, catastrophe naturelle, etc.)</li>
                    <li>• Dommages indirects ou consécutifs</li>
                  </ul>
                </div>

                <div className="bg-soft-cream/50 p-6 rounded-xl">
                  <h4 className="font-bold text-navy mb-3">Informations fournies</h4>
                  <p>
                    Les informations sur ce site sont fournies à titre indicatif. Nous nous efforçons de maintenir les informations à jour, mais ne pouvons garantir l'exactitude, l'exhaustivité ou la pertinence de toutes les informations à tout moment.
                  </p>
                </div>

                <div className="bg-soft-cream/50 p-6 rounded-xl">
                  <h4 className="font-bold text-navy mb-3">Liens externes</h4>
                  <p>
                    Notre site peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables du contenu, des politiques de confidentialité ou des pratiques de ces sites externes.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-ocean/10">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="h-8 w-8 text-ocean" />
                <h2 className="text-3xl font-bold text-navy font-heading">Propriété Intellectuelle</h2>
              </div>
              <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
                <p>
                  Tous les contenus présents sur ce site (textes, images, logos, graphiques, etc.) sont la propriété exclusive d'Aisso International Ltd ou de ses partenaires et sont protégés par les lois sur la propriété intellectuelle.
                </p>
                <div className="bg-soft-cream/50 p-6 rounded-xl">
                  <h4 className="font-bold text-navy mb-3">Droits d'auteur</h4>
                  <p className="mb-3">
                    Toute reproduction, distribution, modification ou utilisation commerciale du contenu sans autorisation écrite préalable est strictement interdite.
                  </p>
                  <p className="text-sm text-navy/70">
                    Les marques, logos et noms commerciaux affichés sur ce site sont des marques déposées d'Aisso International Ltd ou de leurs propriétaires respectifs.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-sage/10">
              <h2 className="text-3xl font-bold text-navy font-heading mb-6">Confidentialité</h2>
              <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
                <p>
                  L'utilisation de nos services implique la collecte et le traitement de données personnelles.
                </p>
                <div className="bg-gradient-to-br from-sage/10 to-ocean/10 p-6 rounded-xl border border-sage/20">
                  <p>
                    Pour plus d'informations sur la manière dont nous collectons, utilisons et protégeons vos données, veuillez consulter notre{" "}
                    <a href="/politique-confidentialite" className="text-ocean hover:text-coral transition-colors font-medium underline">
                      Politique de Confidentialité
                    </a>.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-gold/10">
              <h2 className="text-3xl font-bold text-navy font-heading mb-6">Modifications des Conditions</h2>
              <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
                <p>
                  Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Les modifications prennent effet immédiatement après leur publication sur cette page.
                </p>
                <p>
                  Votre utilisation continue du site après la publication des modifications constitue votre acceptation des nouvelles conditions.
                </p>
                <div className="bg-gold/10 p-6 rounded-xl border-l-4 border-gold">
                  <p className="font-semibold text-navy">
                    Nous vous recommandons de consulter régulièrement cette page pour rester informé des éventuelles modifications.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-navy/10">
              <h2 className="text-3xl font-bold text-navy font-heading mb-6">Droit Applicable et Juridiction</h2>
              <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
                <p>
                  Les présentes conditions d'utilisation sont régies par le droit anglais (United Kingdom), conformément au lieu d'établissement d'Aisso International Ltd.
                </p>
                <p>
                  Tout litige relatif à l'interprétation ou à l'exécution des présentes sera soumis aux tribunaux compétents du Royaume-Uni, sauf disposition légale impérative contraire.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-coral/10">
              <h2 className="text-3xl font-bold text-navy font-heading mb-6">Résiliation</h2>
              <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
                <p>
                  Nous nous réservons le droit de suspendre ou de résilier votre accès au site, sans préavis ni responsabilité, pour quelque raison que ce soit, notamment en cas de violation des présentes conditions d'utilisation.
                </p>
                <div className="bg-soft-cream/50 p-6 rounded-xl">
                  <p>
                    En cas de résiliation, les dispositions des présentes conditions qui, par leur nature, devraient survivre à la résiliation, resteront en vigueur.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-navy via-ocean to-sage text-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold font-heading mb-6">Contact</h2>
              <div className="space-y-4 text-white/90 text-lg leading-relaxed">
                <p>
                  Pour toute question concernant ces conditions d'utilisation, contactez-nous :
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