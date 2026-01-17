import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Allemagne<span className="text-accent">Mobilité</span>
            </h3>
            <p className="text-gray-200 mb-4">
              {t("footer.about.text")}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.links")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-accent transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/volontariat" className="text-gray-200 hover:text-accent transition-colors">
                  {t("nav.volunteering")}
                </Link>
              </li>
              <li>
                <Link href="/formations" className="text-gray-200 hover:text-accent transition-colors">
                  {t("nav.training")}
                </Link>
              </li>
              <li>
                <Link href="/etudes" className="text-gray-200 hover:text-accent transition-colors">
                  {t("nav.studies")}
                </Link>
              </li>
              <li>
                <Link href="/tourisme" className="text-gray-200 hover:text-accent transition-colors">
                  {t("nav.tourism")}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.resources")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/accompagnement" className="text-gray-200 hover:text-accent transition-colors">
                  {t("nav.support")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-200 hover:text-accent transition-colors">
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-accent transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-200">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@allemagne-mobilite.fr" className="hover:text-accent transition-colors">
                  contact@allemagne-mobilite.fr
                </a>
              </div>
              <div className="flex items-start gap-2 text-gray-200">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-start gap-2 text-gray-200">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-gray-200">
            &copy; {new Date().getFullYear()} AllemagneMobilité. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}