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
  ];
  
  return (
    <footer className="relative bg-gradient-to-br from-dark-gray via-dark-gray to-primary/20 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-2 group">
              <Globe className="h-10 w-10 text-accent transition-transform duration-300 group-hover:rotate-12" />
              <div className="text-2xl font-bold font-heading">
                <div className="text-white">Aventures</div>
                <div className="gradient-text text-lg">Sans Frontières</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t("footer.apropos.texte")}
            </p>
            <div className="pt-4 border-t border-white/10">
              <p className="font-semibold text-white text-sm">Aisso International Ltd</p>
              <p className="text-gray-400 text-xs mt-1">Private Limited Company (UK)</p>
            </div>
          </div>
          
          <div className="animate-fade-in-delay-1">
            <h4 className="text-lg font-bold font-heading text-white mb-6 flex items-center gap-2">
              <div className="h-1 w-8 bg-accent rounded-full" />
              Nos Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href} 
                    className="text-gray-300 hover:text-accent transition-all duration-200 flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-200" />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-fade-in-delay-2">
            <h4 className="text-lg font-bold font-heading text-white mb-6 flex items-center gap-2">
              <div className="h-1 w-8 bg-success rounded-full" />
              {t("footer.ressources")}
            </h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <Link 
                    href={resource.href} 
                    className="text-gray-300 hover:text-success transition-all duration-200 flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-200" />
                    <span>{resource.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-fade-in-delay-3">
            <h4 className="text-lg font-bold font-heading text-white mb-6 flex items-center gap-2">
              <div className="h-1 w-8 bg-primary rounded-full" />
              {t("footer.contact")}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-300 group">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent group-hover:scale-110 transition-transform duration-200" />
                <a 
                  href="mailto:successprocompany@gmail.com" 
                  className="hover:text-accent transition-colors break-all text-sm"
                >
                  successprocompany@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-300 group">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-success group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm leading-relaxed">
                  71–75 Shelton Street<br />
                  Covent Garden<br />
                  London WC2H 9JQ<br />
                  United Kingdom
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Aisso International Ltd. {t("footer.droits")}
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/contact" className="hover:text-accent transition-colors">
                Mentions légales
              </Link>
              <span className="text-white/20">•</span>
              <Link href="/contact" className="hover:text-accent transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}