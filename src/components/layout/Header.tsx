import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { t } = useLanguage();

  const services = [
    { href: "/volontariat", label: t("nav.volontariat") },
    { href: "/formations", label: t("nav.formations") },
    { href: "/etudes", label: t("nav.etudes") },
    { href: "/tourisme", label: t("nav.tourisme") },
    { href: "/au-pair", label: t("nav.aupair") },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-border sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Drapeau allemand stylisé */}
              <div className="w-10 h-10 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                <div className="w-full h-1/3 bg-[#000000]"></div>
                <div className="w-full h-1/3 bg-[#DD0000]"></div>
                <div className="w-full h-1/3 bg-[#FFCE00]"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-red-600/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="text-2xl font-bold font-heading">
              <span className="text-primary">Vivr</span>
              <span className="gradient-text">EnAllemagne</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="nav-link">
              {t("nav.accueil")}
            </Link>
            
            <div className="relative group">
              <button
                className="nav-link flex items-center gap-1"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Nos Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-border py-2 animate-fade-in"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service, index) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block px-4 py-3 text-sm font-medium text-dark-gray hover:bg-primary/5 hover:text-primary transition-all duration-200 animate-stagger-${index + 1}`}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/demarches" className="nav-link">
              {t("nav.accompagnement")}
            </Link>
            
            <Link href="/blog" className="nav-link">
              {t("nav.blog")}
            </Link>
            
            <Link href="/contact" className="nav-link">
              {t("nav.contact")}
            </Link>
            
            <div className="h-6 w-px bg-border mx-2" />
            
            <LanguageSelector />
            
            <Link href="/contact">
              <Button className="btn-primary">
                {t("cta.bouton")}
              </Button>
            </Link>
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSelector />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-1 animate-fade-in border-t border-border pt-6">
            <Link 
              href="/" 
              className="block px-4 py-3 text-base font-medium text-dark-gray hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.accueil")}
            </Link>
            
            <div className="px-4 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Nos Services
            </div>
            
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block pl-8 pr-4 py-3 text-base font-medium text-dark-gray hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {service.label}
              </Link>
            ))}
            
            <Link 
              href="/demarches" 
              className="block px-4 py-3 text-base font-medium text-dark-gray hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.accompagnement")}
            </Link>
            
            <Link 
              href="/blog" 
              className="block px-4 py-3 text-base font-medium text-dark-gray hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.blog")}
            </Link>
            
            <Link 
              href="/contact" 
              className="block px-4 py-3 text-base font-medium text-dark-gray hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
            
            <div className="pt-4">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="btn-primary w-full">
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