import { Layout } from "@/components/layout/Layout";
import { Building2, Mail, MapPin, FileText, Scale } from "lucide-react";

export default function MentionsLegales() {
  return (
    <Layout 
      title="Mentions Légales | Aventures Sans Frontières"
      description="Informations légales et identification de l'entreprise Aisso International Ltd."
    >
      <div className="min-h-screen bg-gradient-to-b from-soft-cream via-white to-soft-cream">
        <div className="relative bg-gradient-to-r from-navy via-ocean to-navy py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-white/20">
                <Scale className="h-5 w-5 text-gold" />
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
          <div className="max-w-4xl mx-auto space-y-12">
            <section className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-delay-1 border border-ocean/10">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="h-8 w-8 text-ocean" />
                <h2 className="text-3xl font-bold text-navy font-heading">Identification de l'Entreprise</h2>
              </div>
              <div className="space-y-4 text-navy/80">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-soft-cream/50 p-6 rounded-xl">
                    <p className="font-semibold text-navy mb-2">Raison Sociale</p>
                    <p className="text-lg">Aisso International Ltd</p>
                  </div>
                  <div className="bg-soft-cream/50 p-6 rounded-xl">
                    <p className="font-semibold text-navy mb-2">Forme Juridique</p>
                    <p className="text-lg">Private Limited Company (UK)</p>
                  </div>
                  <div className="bg-soft-cream/50 p-6 rounded-xl">
                    <p className="font-semibold text-navy mb-2">Numéro d'Enregistrement</p>
                    <p className="text-lg">Companies House (UK)</p>
                  </div>
                  <div className="bg-soft-cream/50 p-6 rounded-xl">
                    <p className="font-semibold text-navy mb-2">Siège Social</p>
                    <p className="text-lg">Royaume-Uni</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-delay-2 border border-sage/10">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-8 w-8 text-sage" />
                <h2 className="text-3xl font-bold text-navy font-heading">Adresse du Siège Social</h2>
              </div>
              <div className="bg-soft-cream/50 p-6 rounded-xl">
                <address className="not-italic text-navy/80 text-lg leading-relaxed">
                  <strong className="text-navy block mb-2">Aisso International Ltd</strong>
                  71–75 Shelton Street<br />
                  Covent Garden<br />
                  London WC2H 9JQ<br />
                  United Kingdom
                </address>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-delay-3 border border-coral/10">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-8 w-8 text-coral" />
                <h2 className="text-3xl font-bold text-navy font-heading">Contact</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-soft-cream/50 p-6 rounded-xl">
                  <p className="font-semibold text-navy mb-2">Email</p>
                  <a 
                    href="mailto:successprocompany@gmail.com" 
                    className="text-lg text-ocean hover:text-coral transition-colors"
                  >
                    successprocompany@gmail.com
                  </a>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-delay-4 border border-gold/10">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-8 w-8 text-gold" />
                <h2 className="text-3xl font-bold text-navy font-heading">Hébergement</h2>
              </div>
              <div className="bg-soft-cream/50 p-6 rounded-xl space-y-4 text-navy/80">
                <div>
                  <p className="font-semibold text-navy mb-2">Hébergeur du Site</p>
                  <p className="text-lg">Vercel Inc.</p>
                  <p>340 S Lemon Ave #4133</p>
                  <p>Walnut, CA 91789, USA</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-navy/10">
              <h2 className="text-3xl font-bold text-navy font-heading mb-6">Propriété Intellectuelle</h2>
              <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-ocean/10">
              <h2 className="text-3xl font-bold text-navy font-heading mb-6">Protection des Données</h2>
              <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p>
                  Pour exercer ces droits, vous pouvez nous contacter à l'adresse email : <a href="mailto:successprocompany@gmail.com" className="text-ocean hover:text-coral transition-colors font-medium">successprocompany@gmail.com</a>
                </p>
                <p>
                  Pour plus d'informations, consultez notre <a href="/politique-confidentialite" className="text-ocean hover:text-coral transition-colors font-medium underline">Politique de Confidentialité</a>.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-navy/5 to-ocean/5 rounded-2xl p-8 border border-navy/10">
              <h2 className="text-3xl font-bold text-navy font-heading mb-6">Limitation de Responsabilité</h2>
              <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                </p>
                <p>
                  Aisso International Ltd ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications, soit de l'apparition d'un bug ou d'une incompatibilité.
                </p>
                <p>
                  Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité d'Aisso International Ltd.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-sage/10">
              <p className="text-navy/60 text-sm">
                <strong className="text-navy">Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}