import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "./LanguageSelector";
import { DestinationsMenu } from "./DestinationsMenu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccompagnementOpen, setIsAccompagnementOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 via-yellow-500 to-black bg-clip-text text-transparent">
              VivrEnAllemagne
            </span>
            <span className="text-2xl group-hover:scale-110 transition-transform">
              🇩🇪
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Accueil
            </Link>

            {/* Destinations Dropdown */}
            <DestinationsMenu />

            {/* À Propos with Accompagnement submenu */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                <span>À Propos</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>

              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 pb-2">
                <div className="py-2">
                  <Link
                    href="/a-propos"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Notre Mission
                  </Link>

                  {/* Accompagnement submenu */}
                  <div className="relative group/submenu">
                    <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer group-hover/submenu:bg-blue-50 group-hover/submenu:text-blue-600">
                      <span>Accompagnement</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>

                    {/* Nested submenu */}
                    <div className="absolute left-full top-0 ml-0 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200 -mt-2">
                      <div className="py-2">
                        <Link
                          href="/volontariat"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          🤝 Volontariat International
                        </Link>
                        <Link
                          href="/formations"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          📚 Formations Professionnelles
                        </Link>
                        <Link
                          href="/etudes"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          🎓 Études Supérieures
                        </Link>
                        <Link
                          href="/tourisme"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          ✈️ Tourisme
                        </Link>
                        <Link
                          href="/ausbildung"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          🎯 Ausbildung
                        </Link>
                        <Link
                          href="/au-pair"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          👶 Au Pair
                        </Link>
                        <Link
                          href="/demarches"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          📋 Démarches Administratives
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/blog"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </Link>

            <Link
              href="/devenir-partenaire"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Devenir Partenaire
            </Link>

            <LanguageSelector />

            <Link href="/rendez-vous">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Prendre RDV
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 animate-in slide-in-from-top duration-200">
            <Link
              href="/"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Accueil
            </Link>

            <Link
              href="/destinations"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Destinations
            </Link>

            {/* À Propos Mobile with Accompagnement */}
            <div>
              <button
                onClick={() => setIsAccompagnementOpen(!isAccompagnementOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                <span>À Propos</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isAccompagnementOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isAccompagnementOpen && (
                <div className="ml-4 mt-2 space-y-2 animate-in slide-in-from-top duration-200">
                  <Link
                    href="/a-propos"
                    className="block text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    Notre Mission
                  </Link>
                  <div className="space-y-2 pl-4 border-l-2 border-gray-200">
                    <p className="text-sm font-semibold text-gray-500">Accompagnement</p>
                    <Link
                      href="/volontariat"
                      className="block text-gray-600 hover:text-blue-600 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      🤝 Volontariat International
                    </Link>
                    <Link
                      href="/formations"
                      className="block text-gray-600 hover:text-blue-600 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      📚 Formations Professionnelles
                    </Link>
                    <Link
                      href="/etudes"
                      className="block text-gray-600 hover:text-blue-600 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      🎓 Études Supérieures
                    </Link>
                    <Link
                      href="/tourisme"
                      className="block text-gray-600 hover:text-blue-600 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      ✈️ Tourisme
                    </Link>
                    <Link
                      href="/ausbildung"
                      className="block text-gray-600 hover:text-blue-600 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      🎯 Ausbildung
                    </Link>
                    <Link
                      href="/au-pair"
                      className="block text-gray-600 hover:text-blue-600 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      👶 Au Pair
                    </Link>
                    <Link
                      href="/demarches"
                      className="block text-gray-600 hover:text-blue-600 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      📋 Démarches Administratives
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>

            <Link
              href="/devenir-partenaire"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Devenir Partenaire
            </Link>

            <div className="pt-3 border-t border-gray-200">
              <LanguageSelector />
            </div>

            <Link href="/rendez-vous" onClick={toggleMenu}>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Prendre RDV
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}