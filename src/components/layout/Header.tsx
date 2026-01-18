import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-institutional-blue">
              Allemagne<span className="text-success">Mobilité</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-base font-medium text-dark-gray hover:text-institutional-blue transition-colors">
              {t("nav.accueil")}
            </Link>
            <Link href="/volontariat" className="text-base font-medium text-dark-gray hover:text-institutional-blue transition-colors">
              {t("nav.volontariat")}
            </Link>
            <Link href="/formations" className="text-base font-medium text-dark-gray hover:text-institutional-blue transition-colors">
              {t("nav.formations")}
            </Link>
            <Link href="/etudes" className="text-base font-medium text-dark-gray hover:text-institutional-blue transition-colors">
              {t("nav.etudes")}
            </Link>
            <Link href="/tourisme" className="text-base font-medium text-dark-gray hover:text-institutional-blue transition-colors">
              {t("nav.tourisme")}
            </Link>
            <Link href="/demarches" className="text-base font-medium text-dark-gray hover:text-institutional-blue transition-colors">
              {t("nav.accompagnement")}
            </Link>
            <Link href="/blog" className="text-base font-medium text-dark-gray hover:text-institutional-blue transition-colors">
              {t("nav.blog")}
            </Link>
            <Link href="/contact" className="text-base font-medium text-dark-gray hover:text-institutional-blue transition-colors">
              {t("nav.contact")}
            </Link>
            <LanguageSelector />
            <Link href="/contact">
              <Button className="bg-success hover:bg-success/90 text-white">
                {t("cta.bouton")}
              </Button>
            </Link>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSelector />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <Link href="/" className="text-base font-medium text-dark-gray hover:text-institutional-blue transition-colors">
                {t("nav.accueil")}
              </Link>
              <Link href="/volontariat" className="text-base font-medium text-dark-gray hover:text-institutional-blue transition-colors">
                {t("nav.volontariat")}
              </Link>
              <Link href="/formations" className="text-base font-medium text-dark-gray hover:text-institutional-blue transition-colors">
                {t("nav.formations")}
              </Link>
              <Link href="/etudes" className="text-base font-medium text-dark-gray hover:text-institutional-blue transition-colors">
                {t("nav.etudes")}
              </Link>
              <Link href="/tourisme" className="text-base font-medium text-dark-gray hover:text-institutional-blue transition-colors">
                {t("nav.tourisme")}
              </Link>
              <Link href="/demarches" className="text-base font-medium text-dark-gray hover:text-institutional-blue transition-colors">
                {t("nav.accompagnement")}
              </Link>
              <Link href="/blog" className="text-base font-medium text-dark-gray hover:text-institutional-blue transition-colors">
                {t("nav.blog")}
              </Link>
              <Link href="/contact" className="text-base font-medium text-dark-gray hover:text-institutional-blue transition-colors">
                {t("nav.contact")}
              </Link>
              <Link href="/contact">
                <Button className="bg-success hover:bg-success/90 text-white w-full">
                  {t("cta.bouton")}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}