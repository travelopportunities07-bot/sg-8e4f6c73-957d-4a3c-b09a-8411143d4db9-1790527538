import { Layout } from "@/components/layout/Layout";
import { Building2, Mail, MapPin, FileText, Scale } from "lucide-react";

export default function MentionsLegales() {
  return (
    <Layout 
      title="Mentions Légales | VivrEnAllemagne"
      description="Informations légales et identification de l'entreprise Aisso International Ltd."
    >
      <div className="min-h-screen bg-gradient-to-b from-soft-cream via-white to-soft-cream">
        <div className="relative bg-gradient-to-br from-deep-navy via-ocean to-deep-navy py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-white/20">
                <Scale className="h-5 w-5 text-warm-gold" />
                <span className="text-white font-medium">Informations Légales</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-heading">
                Mentions Légales
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Identification de l'éditeur et informations légales obligatoires
              </p>
            </div>
          </div>
        </div>

        <div className="container py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 animate-fade-in-delay-1 border-l-4 border-ocean hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-ocean/10 rounded-xl">
                  <Building2 className="h-8 w-8 text-ocean" />
                </div>
                <h2 className="text-3xl font-bold text-deep-navy font-heading">Identification de l'Entreprise</h2>
              </div>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-ocean/5 to-ocean/10 p-6 rounded-xl border border-ocean/20 hover:border-ocean/40 transition-colors">
                    <p className="font-semibold text-ocean mb-2 text-sm uppercase tracking-wide">Raison Sociale</p>
                    <p className="text-xl font-medium text-deep-navy">Aisso International Ltd</p>
                  </div>
                  <div className="bg-gradient-to-br from-sage/5 to-sage/10 p-6 rounded-xl border border-sage/20 hover:border-sage/40 transition-colors">
                    <p className="font-semibold text-sage mb-2 text-sm uppercase tracking-wide">Forme Juridique</p>
                    <p className="text-xl font-medium text-deep-navy">Private Limited Company (UK)</p>
                  </div>
                  <div className="bg-gradient-to-br from-vibrant-coral/5 to-vibrant-coral/10 p-6 rounded-xl border border-vibrant-coral/20 hover:border-vibrant-coral/40 transition-colors">
                    <p className="font-semibold text-vibrant-coral mb-2 text-sm uppercase tracking-wide">Promoteur & Propriétaire</p>
                    <p className="text-xl font-medium text-deep-navy">Monsieur Mahuton Isaac Aisso</p>
                    <p className="text-sm text-deep-navy/70 mt-1">Propriétaire de VivrEnAllemagne.de</p>
                  </div>
                  <div className="bg-gradient-to-br from-warm-gold/5 to-warm-gold/10 p-6 rounded-xl border border-warm-gold/20 hover:border-warm-gold/40 transition-colors">
                    <p className="font-semibold text-warm-gold mb-2 text-sm uppercase tracking-wide">Siège Social</p>
                    <p className="text-xl font-medium text-deep-navy">Royaume-Uni</p>
                  </div>
                  <div className="bg-gradient-to-br from-ocean/5 to-ocean/10 p-6 rounded-xl border border-ocean/20 hover:border-ocean/40 transition-colors">
                    <p className="font-semibold text-ocean mb-2 text-sm uppercase tracking-wide">Numéro d'Enregistrement</p>
                    <p className="text-xl font-medium text-deep-navy">Companies House (UK)</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 animate-fade-in-delay-2 border-l-4 border-sage hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-sage/10 rounded-xl">
                  <MapPin className="h-8 w-8 text-sage" />
                </div>
                <h2 className="text-3xl font-bold text-deep-navy font-heading">Adresse du Siège Social</h2>
              </div>
              <div className="bg-gradient-to-br from-sage/5 to-ocean/5 p-8 rounded-xl border border-sage/20">
                <address className="not-italic text-deep-navy/80 text-lg leading-relaxed">
                  <strong className="text-deep-navy block mb-3 text-xl">Aisso International Ltd</strong>
                  71–75 Shelton Street<br />
                  Covent Garden<br />
                  London WC2H 9JQ<br />
                  United Kingdom
                </address>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 animate-fade-in-delay-3 border-l-4 border-vibrant-coral hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-vibrant-coral/10 rounded-xl">
                  <Mail className="h-8 w-8 text-vibrant-coral" />
                </div>
                <h2 className="text-3xl font-bold text-deep-navy font-heading">Contact</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-vibrant-coral/5 to-vibrant-coral/10 p-6 rounded-xl border border-vibrant-coral/20">
                  <p className="font-semibold text-vibrant-coral mb-3 text-sm uppercase tracking-wide">Email de Contact</p>
                  <a 
                    href="mailto:successprocompany@gmail.com" 
                    className="text-xl text-ocean hover:text-vibrant-coral transition-colors font-medium flex items-center gap-2 group"
                  >
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    successprocompany@gmail.com
                  </a>
                </div>
                <div className="bg-gradient-to-br from-ocean/5 to-ocean/10 p-6 rounded-xl border border-ocean/20">
                  <p className="font-semibold text-ocean mb-3 text-sm uppercase tracking-wide">Téléphone</p>
                  <a 
                    href="https://wa.me/4917969092800" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-ocean hover:text-vibrant-coral transition-colors font-medium flex items-center gap-2 group"
                  >
                    <svg className="h-5 w-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    +49 179 6909 280
                  </a>
                  <p className="text-sm text-deep-navy/70 mt-2">WhatsApp uniquement</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 animate-fade-in-delay-4 border-l-4 border-warm-gold hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-warm-gold/10 rounded-xl">
                  <FileText className="h-8 w-8 text-warm-gold" />
                </div>
                <h2 className="text-3xl font-bold text-deep-navy font-heading">Hébergement</h2>
              </div>
              <div className="bg-gradient-to-br from-warm-gold/5 to-warm-gold/10 p-6 rounded-xl space-y-3 border border-warm-gold/20">
                <div>
                  <p className="font-semibold text-warm-gold mb-2 text-sm uppercase tracking-wide">Hébergeur du Site</p>
                  <p className="text-xl font-medium text-deep-navy">Vercel Inc.</p>
                  <p className="text-deep-navy/70 mt-2">340 S Lemon Ave #4133</p>
                  <p className="text-deep-navy/70">Walnut, CA 91789, USA</p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-deep-navy/5 via-ocean/5 to-sage/5 rounded-2xl shadow-xl p-8 lg:p-10 border border-ocean/20">
              <h2 className="text-3xl font-bold text-deep-navy font-heading mb-6">Propriété Intellectuelle</h2>
              <div className="space-y-4 text-deep-navy/80 text-lg leading-relaxed">
                <p className="bg-white/50 backdrop-blur-sm p-5 rounded-xl border border-ocean/10">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="bg-white/50 backdrop-blur-sm p-5 rounded-xl border border-sage/10">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-ocean/5 via-vibrant-coral/5 to-warm-gold/5 rounded-2xl shadow-xl p-8 lg:p-10 border border-vibrant-coral/20">
              <h2 className="text-3xl font-bold text-deep-navy font-heading mb-6">Protection des Données</h2>
              <div className="space-y-4 text-deep-navy/80 text-lg leading-relaxed">
                <p className="bg-white/50 backdrop-blur-sm p-5 rounded-xl border border-ocean/10">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p className="bg-white/50 backdrop-blur-sm p-5 rounded-xl border border-vibrant-coral/10">
                  Pour exercer ces droits, vous pouvez nous contacter à l'adresse email : <a href="mailto:successprocompany@gmail.com" className="text-ocean hover:text-vibrant-coral transition-colors font-semibold">successprocompany@gmail.com</a>
                </p>
                <p className="bg-white/50 backdrop-blur-sm p-5 rounded-xl border border-warm-gold/10">
                  Pour plus d'informations, consultez notre <a href="/politique-confidentialite" className="text-ocean hover:text-vibrant-coral transition-colors font-semibold underline decoration-ocean/30 hover:decoration-vibrant-coral">Politique de Confidentialité</a>.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border-l-4 border-deep-navy">
              <h2 className="text-3xl font-bold text-deep-navy font-heading mb-6">Limitation de Responsabilité</h2>
              <div className="space-y-4 text-deep-navy/80 text-lg leading-relaxed">
                <p className="bg-deep-navy/5 p-5 rounded-xl border border-deep-navy/10">
                  Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                </p>
                <p className="bg-ocean/5 p-5 rounded-xl border border-ocean/10">
                  Aisso International Ltd ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications, soit de l'apparition d'un bug ou d'une incompatibilité.
                </p>
                <p className="bg-sage/5 p-5 rounded-xl border border-sage/10">
                  Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité d'Aisso International Ltd.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-warm-gold via-vibrant-coral to-ocean text-white rounded-2xl shadow-2xl p-8 lg:p-10">
              <p className="text-center text-lg backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
                <strong className="text-warm-gold">Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}