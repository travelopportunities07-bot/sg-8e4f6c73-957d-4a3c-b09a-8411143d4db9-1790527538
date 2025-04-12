import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { DestinationsMenu } from "./DestinationsMenu";

// Liste des destinations pour le menu déroulant
const destinations = [
  { id: "allemagne", name: "Allemagne", flag: "🇩🇪" },
  { id: "australie", name: "Australie", flag: "🇦🇺" },
  { id: "norvege", name: "Norvège", flag: "🇳🇴" },
  { id: "finlande", name: "Finlande", flag: "🇫🇮" },
  { id: "irlande", name: "Irlande", flag: "🇮🇪" },
  { id: "danemark", name: "Danemark", flag: "🇩🇰" },
  { id: "luxembourg", name: "Luxembourg", flag: "🇱🇺" },
  { id: "autriche", name: "Autriche", flag: "🇦🇹" },
  { id: "estonie", name: "Estonie", flag: "🇪🇪" },
  { id: "lituanie", name: "Lituanie", flag: "🇱🇹" },
  { id: "russie", name: "Russie", flag: "🇷🇺" }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDestinationsMenu, setShowDestinationsMenu] = useState(false);
  const { t } = useLanguage();

  return (
    <header className='bg-green-600 text-white'>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            AfricaOpportunités
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">
              {t("home")}
            </Link>
            
            {/* Menu déroulant des destinations */}
            <div 
              className="relative"
              onMouseEnter={() => setShowDestinationsMenu(true)}
              onMouseLeave={() => setShowDestinationsMenu(false)}
            >
              <Link 
                href="/destinations" 
                className="text-lg font-medium hover:text-primary transition-colors flex items-center"
              >
                {t("destinations")}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              
              {showDestinationsMenu && (
                <DestinationsMenu destinations={destinations} />
              )}
            </div>
            
            <Link href="/rendez-vous" className="text-lg font-medium hover:text-primary transition-colors">
              {t("appointment")}
            </Link>
            <Link href="/a-propos" className="text-lg font-medium hover:text-primary transition-colors">
              {t("about")}
            </Link>
            <Link href="/contact" className="text-lg font-medium hover:text-primary transition-colors">
              {t("contact")}
            </Link>
            <LanguageSelector />
          </nav>

          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <LanguageSelector />
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <div className="pt-5 pb-6 px-5 space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <Link href="/" className="text-base font-medium text-gray-900 hover:text-primary transition-colors">
                  {t("home")}
                </Link>
                
                {/* Menu mobile des destinations */}
                <div>
                  <Link href="/destinations" className="text-base font-medium text-gray-900 hover:text-primary transition-colors">
                    {t("destinations")}
                  </Link>
                  <div className="pl-4 mt-2 space-y-2">
                    {destinations.map((destination) => (
                      <Link 
                        href={`/destinations/${destination.id}`} 
                        key={destination.id}
                        className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center"
                      >
                        <span className="mr-2">{destination.flag}</span>
                        <span>{destination.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link href="/rendez-vous" className="text-base font-medium text-gray-900 hover:text-primary transition-colors">
                  {t("appointment")}
                </Link>
                <Link href="/a-propos" className="text-base font-medium text-gray-900 hover:text-primary transition-colors">
                  {t("about")}
                </Link>
                <Link href="/contact" className="text-base font-medium text-gray-900 hover:text-primary transition-colors">
                  {t("contact")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}