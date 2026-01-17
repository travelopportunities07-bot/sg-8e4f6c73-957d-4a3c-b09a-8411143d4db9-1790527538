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
            <div className="text-2xl font-bold text-primary">
              Allemagne<span className="text-accent">Mobilité</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-base font-medium text-dark-gray hover:text-primary transition-colors">
              {t("nav.home")}
            </Link>
            <Link href="/volontariat" className="text-base font-medium text-dark-gray hover:text-primary transition-colors">
              {t("nav.volunteering")}
            </Link>
            <Link href="/formations" className="text-base font-medium text-dark-gray hover:text-primary transition-colors">
              {t("nav.training")}
            </Link>
            <Link href="/etudes" className="text-base font-medium text-dark-gray hover:text-primary transition-colors">
              {t("nav.studies")}
            </Link>
            <Link href="/tourisme" className="text-base font-medium text-dark-gray hover:text-primary transition-colors">
              {t("nav.tourism")}
            </Link>
            <Link href="/accompagnement" className="text-base font-medium text-dark-gray hover:text-primary transition-colors">
              {t("nav.support")}
            </Link>
            <Link href="/blog" className="text-base font-medium text-dark-gray hover:text-primary transition-colors">
              {t("nav.blog")}
            </Link>
            <Link href="/contact" className="text-base font-medium text-dark-gray hover:text-primary transition-colors">
              {t("nav.contact")}
            </Link>
            <LanguageSelector />
            <Button className="bg-accent hover:bg-accent/90 text-white">
              {t("cta.button")}
            </Button>
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
              <Link href="/" className="text-base font-medium text-dark-gray hover:text-primary transition-colors">
                {t("nav.home")}
              </Link>
              <Link href="/volontariat" className="text-base font-medium text-dark-gray hover:text-primary transition-colors">
                {t("nav.volunteering")}
              </Link>
              <Link href="/formations" className="text-base font-medium text-dark-gray hover:text-primary transition-colors">
                {t("nav.training")}
              </Link>
              <Link href="/etudes" className="text-base font-medium text-dark-gray hover:text-primary transition-colors">
                {t("nav.studies")}
              </Link>
              <Link href="/tourisme" className="text-base font-medium text-dark-gray hover:text-primary transition-colors">
                {t("nav.tourism")}
              </Link>
              <Link href="/accompagnement" className="text-base font-medium text-dark-gray hover:text-primary transition-colors">
                {t("nav.support")}
              </Link>
              <Link href="/blog" className="text-base font-medium text-dark-gray hover:text-primary transition-colors">
                {t("nav.blog")}
              </Link>
              <Link href="/contact" className="text-base font-medium text-dark-gray hover:text-primary transition-colors">
                {t("nav.contact")}
              </Link>
              <Button className="bg-accent hover:bg-accent/90 text-white w-full">
                {t("cta.button")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}