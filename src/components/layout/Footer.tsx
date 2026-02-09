import Link from "next/link";
import { Mail, Phone, MapPin, Globe, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  
  const services = [
    { href: "/volontariat", label: t("nav.volontariat") },
    { href: "/formations", label: t("nav.formations") },
    { href: "/etudes", label: t("nav.etudes") },
    { href: "/tourisme", label: t("nav.tourisme") },
  ];

  const resources = [
    { href: "/demarches", label: t("nav.accompagnement") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contact", label: t("nav.contact") },
    { href: "/a-propos", label: "À Propos" },
  ];

  const legal = [
    { href: "/mentions-legales", label: "Mentions Légales" },
    { href: "/politique-confidentialite", label: "Politique de Confidentialité" },
    { href: "/conditions-utilisation", label: "Conditions d'Utilisation" },
  ];
  
  return (
    <footer className="relative bg-black text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2 space-y-6 animate-fade-in">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                {/* Drapeau allemand stylisé */}
                <div className="w-10 h-10 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <div className="w-full h-1/3 bg-[#000000]"></div>
                  <div className="w-full h-1/3 bg-[#DD0000]"></div>
                  <div className="w-full h-1/3 bg-[#FFCE00]"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-red-600/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-2xl font-bold font-heading flex flex-row items-baseline">
                <span className="text-white">VivrEn</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-coral to-ocean">Allemagne</span>
              </div>
            </div>
            {/* À Propos */}
            <div>
              <h3 className="text-lg font-semibold mb-4">À Propos de Nous</h3>
              <p className="text-sm text-gray-300 mb-4">
                Vivre en Allemagne est votre partenaire de confiance pour réussir votre installation en Allemagne. 
                Nous vous accompagnons dans toutes vos démarches, de la recherche d'opportunités à l'intégration complète.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="font-semibold text-white text-sm">VivrEnAllemagne</p>
              <p className="text-gray-400 text-xs mt-1">Marque d'Aisso International Ltd (UK)</p>
            </div>
          </div>
          
          <div className="animate-fade-in-delay-1">
            <h4 className="text-lg font-bold font-heading text-white mb-6 flex items-center gap-2">
              <div className="h-1 w-8 bg-ocean rounded-full" />
              Nos Services
            </h4>
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/volontariat" className="text-gray-300 hover:text-white transition-colors">
                    Volontariat
                  </Link>
                </li>
                <li>
                  <Link href="/formations" className="text-gray-300 hover:text-white transition-colors">
                    Formations Professionnelles
                  </Link>
                </li>
                <li>
                  <Link href="/etudes" className="text-gray-300 hover:text-white transition-colors">
                    Études Supérieures
                  </Link>
                </li>
                <li>
                  <Link href="/tourisme" className="text-gray-300 hover:text-white transition-colors">
                    Tourisme
                  </Link>
                </li>
                <li>
                  <Link href="/au-pair" className="text-gray-300 hover:text-white transition-colors">
                    Au Pair
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="animate-fade-in-delay-2">
            <h4 className="text-lg font-bold font-heading text-white mb-6 flex items-center gap-2">
              <div className="h-1 w-8 bg-sage rounded-full" />
              Ressources
            </h4>
            {/* Ressources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Ressources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/demarches" className="text-gray-300 hover:text-white transition-colors">
                    Démarches Administratives
                  </Link>
                </li>
                <li>
                  <Link href="/destinations" className="text-gray-300 hover:text-white transition-colors">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="/a-propos" className="text-gray-300 hover:text-white transition-colors">
                    À Propos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="animate-fade-in-delay-3">
            <h4 className="text-lg font-bold font-heading text-white mb-6 flex items-center gap-2">
              <div className="h-1 w-8 bg-coral rounded-full" />
              Contact
            </h4>
            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300 group">
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-gold group-hover:scale-110 transition-transform duration-200" />
                  <a 
                    href="mailto:successprocompany@gmail.com" 
                    className="hover:text-gold transition-colors break-all text-sm"
                  >
                    successprocompany@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-300 group">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-sage group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm leading-relaxed">
                    71–75 Shelton Street<br />
                    Covent Garden<br />
                    London WC2H 9JQ<br />
                    United Kingdom
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-6">
            <p className="text-gray-400 text-sm text-center lg:text-left">
              &copy; {new Date().getFullYear()} VivrEnAllemagne. Tous droits réservés.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
              {/* Légal */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Légal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/mentions-legales" className="text-gray-300 hover:text-white transition-colors">
                      Mentions Légales
                    </Link>
                  </li>
                  <li>
                    <Link href="/politique-confidentialite" className="text-gray-300 hover:text-white transition-colors">
                      Politique de Confidentialité
                    </Link>
                  </li>
                  <li>
                    <Link href="/conditions-utilisation" className="text-gray-300 hover:text-white transition-colors">
                      Conditions d'Utilisation
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-6 border-t border-white/5">
            <p className="text-gray-500 text-xs">
              VivrEnAllemagne est une marque d'Aisso International Ltd, société de droit britannique.
              <br className="hidden sm:block" />
              Tous droits réservés. Site hébergé par Vercel Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}