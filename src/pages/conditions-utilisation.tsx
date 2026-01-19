import { Layout } from "@/components/layout/Layout";
import { FileCheck, Shield, AlertTriangle, Scale, CheckCircle2 } from "lucide-react";

export default function ConditionsUtilisation() {
  return (
    <Layout 
      title="Conditions d'Utilisation | Aventures Sans Frontières"
      description="Conditions générales d'utilisation du site Aventures Sans Frontières et de ses services."
    >
      <div className="min-h-screen bg-gradient-to-b from-soft-cream via-white to-soft-cream">
        <div className="relative bg-gradient-to-br from-vibrant-coral via-warm-gold to-ocean py-24 overflow-hidden">
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
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 animate-fade-in-delay-1 border-l-4 border-ocean hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-ocean/10 rounded-xl">
                  <FileCheck className="h-8 w-8 text-ocean" />
                </div>
                <h2 className="text-3xl font-bold text-deep-navy font-heading">Acceptation des Conditions</h2>
              </div>
              <div className="space-y-4">
                <p className="text-deep-navy/80 text-lg bg-ocean/5 p-5 rounded-xl border border-ocean/10 leading-relaxed">
                  En accédant et en utilisant le site web d'Aventures Sans Frontières (exploité par Aisso International Ltd), vous acceptez d'être lié par les présentes conditions d'utilisation, toutes les lois et réglementations applicables.
                </p>
                <p className="text-deep-navy/80 text-lg bg-sage/5 p-5 rounded-xl border border-sage/10 leading-relaxed">
                  Si vous n'acceptez pas l'une de ces conditions, vous n'êtes pas autorisé à utiliser ou accéder à ce site.
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
                  <CheckCircle2 className="h-8 w-8 text-sage" />
                </div>
                <h2 className="text-3xl font-bold text-deep-navy font-heading">Utilisation du Site</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-sage/5 to-sage/10 p-6 rounded-xl border border-sage/20">
                  <h3 className="text-xl font-bold text-sage mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6" />
                    Licence d'utilisation
                  </h3>
                  <p className="text-deep-navy/80 mb-4 bg-white/50 p-4 rounded-lg">
                    Nous vous accordons une licence limitée, non exclusive, non transférable pour :
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-deep-navy/80 bg-white/50 p-3 rounded-lg">
                      <span className="text-sage mt-1 font-bold text-lg">✓</span>
                      <span>Accéder au site pour votre usage personnel</span>
                    </li>
                    <li className="flex items-start gap-3 text-deep-navy/80 bg-white/50 p-3 rounded-lg">
                      <span className="text-sage mt-1 font-bold text-lg">✓</span>
                      <span>Consulter les informations disponibles</span>
                    </li>
                    <li className="flex items-start gap-3 text-deep-navy/80 bg-white/50 p-3 rounded-lg">
                      <span className="text-sage mt-1 font-bold text-lg">✓</span>
                      <span>Utiliser nos services conformément à leur destination</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-vibrant-coral/10 to-vibrant-coral/5 p-6 rounded-xl border-2 border-vibrant-coral/30">
                  <h3 className="text-xl font-bold text-vibrant-coral mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6" />
                    Restrictions d'utilisation
                  </h3>
                  <p className="text-deep-navy/80 mb-4 bg-white/50 p-4 rounded-lg">
                    Vous vous engagez à ne pas :
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-deep-navy/80 bg-white/50 p-3 rounded-lg">
                      <span className="text-vibrant-coral mt-1 font-bold text-lg">✕</span>
                      <span>Modifier ou copier les contenus du site</span>
                    </li>
                    <li className="flex items-start gap-3 text-deep-navy/80 bg-white/50 p-3 rounded-lg">
                      <span className="text-vibrant-coral mt-1 font-bold text-lg">✕</span>
                      <span>Utiliser le site à des fins commerciales sans autorisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-deep-navy/80 bg-white/50 p-3 rounded-lg">
                      <span className="text-vibrant-coral mt-1 font-bold text-lg">✕</span>
                      <span>Tenter d'accéder aux systèmes de manière non autorisée</span>
                    </li>
                    <li className="flex items-start gap-3 text-deep-navy/80 bg-white/50 p-3 rounded-lg">
                      <span className="text-vibrant-coral mt-1 font-bold text-lg">✕</span>
                      <span>Supprimer les mentions de droits d'auteur</span>
                    </li>
                    <li className="flex items-start gap-3 text-deep-navy/80 bg-white/50 p-3 rounded-lg">
                      <span className="text-vibrant-coral mt-1 font-bold text-lg">✕</span>
                      <span>Transmettre des virus ou codes malveillants</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border-l-4 border-warm-gold hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-warm-gold/10 rounded-xl">
                  <Shield className="h-8 w-8 text-warm-gold" />
                </div>
                <h2 className="text-3xl font-bold text-deep-navy font-heading">Services Proposés</h2>
              </div>
              <div className="space-y-4">
                <p className="text-deep-navy/80 text-lg bg-warm-gold/5 p-5 rounded-xl border border-warm-gold/10">
                  Aventures Sans Frontières propose des services d'accompagnement et de conseil pour :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-ocean/10 to-ocean/5 p-6 rounded-xl border-l-4 border-ocean hover:shadow-lg transition-all hover:scale-105">
                    <h4 className="font-bold text-ocean mb-2 text-lg">Volontariat International</h4>
                    <p className="text-sm text-deep-navy/70">Programmes de volontariat à l'étranger</p>
                  </div>
                  <div className="bg-gradient-to-br from-sage/10 to-sage/5 p-6 rounded-xl border-l-4 border-sage hover:shadow-lg transition-all hover:scale-105">
                    <h4 className="font-bold text-sage mb-2 text-lg">Formations Professionnelles</h4>
                    <p className="text-sm text-deep-navy/70">Opportunités de formation à l'international</p>
                  </div>
                  <div className="bg-gradient-to-br from-vibrant-coral/10 to-vibrant-coral/5 p-6 rounded-xl border-l-4 border-vibrant-coral hover:shadow-lg transition-all hover:scale-105">
                    <h4 className="font-bold text-vibrant-coral mb-2 text-lg">Études à l'Étranger</h4>
                    <p className="text-sm text-deep-navy/70">Accompagnement pour études internationales</p>
                  </div>
                  <div className="bg-gradient-to-br from-warm-gold/10 to-warm-gold/5 p-6 rounded-xl border-l-4 border-warm-gold hover:shadow-lg transition-all hover:scale-105">
                    <h4 className="font-bold text-warm-gold mb-2 text-lg">Tourisme Éducatif</h4>
                    <p className="text-sm text-deep-navy/70">Voyages culturels et linguistiques</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-deep-navy/5 to-ocean/5 p-6 rounded-xl mt-4 border-2 border-deep-navy/20">
                  <p className="text-deep-navy text-lg">
                    <strong className="text-vibrant-coral">Important :</strong> Nos services sont des prestations de conseil et d'accompagnement. Nous ne garantissons pas l'obtention d'un visa, d'une admission ou d'une place dans un programme spécifique.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border-l-4 border-vibrant-coral hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-vibrant-coral/10 rounded-xl">
                  <AlertTriangle className="h-8 w-8 text-vibrant-coral" />
                </div>
                <h2 className="text-3xl font-bold text-deep-navy font-heading">Limitation de Responsabilité</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-vibrant-coral/10 to-vibrant-coral/5 p-6 rounded-xl border-2 border-vibrant-coral/30">
                  <h4 className="font-bold text-vibrant-coral mb-4 text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Responsabilité limitée
                  </h4>
                  <p className="mb-4 text-deep-navy/80 bg-white/50 p-4 rounded-lg">
                    Aisso International Ltd ne pourra être tenu responsable de :
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Décisions prises par les autorités (refus de visa, etc.)",
                      "Changements de politique des pays d'accueil",
                      "Annulations ou modifications de programmes par des tiers",
                      "Événements de force majeure (pandémie, catastrophe naturelle, etc.)",
                      "Dommages indirects ou consécutifs"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                        <span className="text-vibrant-coral mt-1">•</span>
                        <span className="text-deep-navy/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-ocean/5 to-sage/5 p-6 rounded-xl border border-ocean/20">
                  <h4 className="font-bold text-ocean mb-3 text-lg">Informations fournies</h4>
                  <p className="text-deep-navy/80">
                    Les informations sur ce site sont fournies à titre indicatif. Nous nous efforçons de maintenir les informations à jour, mais ne pouvons garantir l'exactitude, l'exhaustivité ou la pertinence de toutes les informations à tout moment.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-sage/5 to-warm-gold/5 p-6 rounded-xl border border-sage/20">
                  <h4 className="font-bold text-sage mb-3 text-lg">Liens externes</h4>
                  <p className="text-deep-navy/80">
                    Notre site peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables du contenu, des politiques de confidentialité ou des pratiques de ces sites externes.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border-l-4 border-ocean hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-ocean/10 rounded-xl">
                  <Scale className="h-8 w-8 text-ocean" />
                </div>
                <h2 className="text-3xl font-bold text-deep-navy font-heading">Propriété Intellectuelle</h2>
              </div>
              <div className="space-y-4">
                <p className="text-deep-navy/80 text-lg bg-ocean/5 p-5 rounded-xl border border-ocean/10 leading-relaxed">
                  Tous les contenus présents sur ce site (textes, images, logos, graphiques, etc.) sont la propriété exclusive d'Aisso International Ltd ou de ses partenaires et sont protégés par les lois sur la propriété intellectuelle.
                </p>
                <div className="bg-gradient-to-br from-ocean/10 to-sage/10 p-6 rounded-xl border border-ocean/20">
                  <h4 className="font-bold text-ocean mb-4 text-lg">Droits d'auteur</h4>
                  <p className="mb-3 text-deep-navy/80 bg-white/50 p-4 rounded-lg">
                    Toute reproduction, distribution, modification ou utilisation commerciale du contenu sans autorisation écrite préalable est strictement interdite.
                  </p>
                  <p className="text-sm text-deep-navy/70 bg-white/50 p-4 rounded-lg">
                    Les marques, logos et noms commerciaux affichés sur ce site sont des marques déposées d'Aisso International Ltd ou de leurs propriétaires respectifs.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-deep-navy via-ocean to-sage text-white rounded-2xl shadow-2xl p-8 lg:p-10">
              <h2 className="text-3xl font-bold font-heading mb-6">Contact</h2>
              <div className="space-y-4">
                <p className="text-white/90 text-lg leading-relaxed">
                  Pour toute question concernant ces conditions d'utilisation, contactez-nous :
                </p>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                  <p className="mb-2 text-warm-gold font-semibold uppercase tracking-wide text-sm">Email</p>
                  <a 
                    href="mailto:successprocompany@gmail.com" 
                    className="text-white hover:text-warm-gold transition-colors text-xl font-medium"
                  >
                    successprocompany@gmail.com
                  </a>
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