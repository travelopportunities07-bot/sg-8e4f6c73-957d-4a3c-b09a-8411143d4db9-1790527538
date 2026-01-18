import Link from "next/link";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-institutional-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Allemagne<span className="text-success">Mobilité</span>
            </h3>
            <p className="text-gray-200 mb-4">
              {t("footer.apropos.texte")}
            </p>
            <div className="text-sm text-gray-300 mt-4">
              <p className="font-semibold">Aisso International Ltd</p>
              <p>Private Limited Company (UK)</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.liens")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-success transition-colors">
                  {t("nav.accueil")}
                </Link>
              </li>
              <li>
                <Link href="/volontariat" className="text-gray-200 hover:text-success transition-colors">
                  {t("nav.volontariat")}
                </Link>
              </li>
              <li>
                <Link href="/formations" className="text-gray-200 hover:text-success transition-colors">
                  {t("nav.formations")}
                </Link>
              </li>
              <li>
                <Link href="/etudes" className="text-gray-200 hover:text-success transition-colors">
                  {t("nav.etudes")}
                </Link>
              </li>
              <li>
                <Link href="/tourisme" className="text-gray-200 hover:text-success transition-colors">
                  {t("nav.tourisme")}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.ressources")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/demarches" className="text-gray-200 hover:text-success transition-colors">
                  {t("nav.accompagnement")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-200 hover:text-success transition-colors">
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-success transition-colors">
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
                <a href="mailto:successprocompany@gmail.com" className="hover:text-success transition-colors break-all">
                  successprocompany@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2 text-gray-200">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  71–75 Shelton Street<br />
                  Covent Garden<br />
                  London WC2H 9JQ<br />
                  United Kingdom
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-gray-200">
            &copy; {new Date().getFullYear()} Aisso International Ltd. {t("footer.droits")}
          </p>
        </div>
      </div>
    </footer>
  );
}