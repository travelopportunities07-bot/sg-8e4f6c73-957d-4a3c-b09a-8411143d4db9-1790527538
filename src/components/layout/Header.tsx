import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [isMobileAccompagnementOpen, setIsMobileAccompagnementOpen] = useState(false);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const toggleMobileSubmenu = (menu: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === menu ? null : menu);
    // Reset nested submenu when changing main menus
    if (openMobileSubmenu !== menu) {
      setIsMobileAccompagnementOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-gray-200 group-hover:border-[#D4AF37] transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-black via-red-600 to-yellow-400"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              VivrEnAllemagne
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#D4AF37] transition-colors font-medium">
              Accueil
            </Link>

            {/* Nos Services Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenSubmenu("services")}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#D4AF37] transition-colors font-medium">
                <span>Nos Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openSubmenu === "services" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  <Link
                    href="/volontariat"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors"
                  >
                    🤝 Volontariat International
                  </Link>
                  <Link
                    href="/formations"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors"
                  >
                    📚 Formations Professionnelles
                  </Link>
                  <Link
                    href="/etudes"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors"
                  >
                    🎓 Études Supérieures
                  </Link>
                  <Link
                    href="/tourisme"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors"
                  >
                    ✈️ Tourisme
                  </Link>
                  <Link
                    href="/ausbildung"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors"
                  >
                    🎯 Ausbildung
                  </Link>
                  <Link
                    href="/au-pair"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors"
                  >
                    👶 Au Pair
                  </Link>
                  <Link
                    href="/demarches"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors"
                  >
                    📋 Démarches Administratives
                  </Link>
                </div>
              )}
            </div>

            {/* À Propos Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenSubmenu("apropos")}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#D4AF37] transition-colors font-medium">
                <span>À Propos</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openSubmenu === "apropos" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  <Link
                    href="/a-propos"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors"
                  >
                    📄 Notre Mission
                  </Link>
                  
                  {/* Accompagnement Submenu */}
                  <div className="relative group/submenu">
                    <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors cursor-pointer">
                      <span>📂 Accompagnement</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200">
                      <Link
                        href="/volontariat"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors"
                      >
                        🤝 Volontariat International
                      </Link>
                      <Link
                        href="/formations"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors"
                      >
                        📚 Formations Professionnelles
                      </Link>
                      <Link
                        href="/etudes"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors"
                      >
                        🎓 Études Supérieures
                      </Link>
                      <Link
                        href="/tourisme"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors"
                      >
                        ✈️ Tourisme
                      </Link>
                      <Link
                        href="/ausbildung"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors"
                      >
                        🎯 Ausbildung
                      </Link>
                      <Link
                        href="/au-pair"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors"
                      >
                        👶 Au Pair
                      </Link>
                      <Link
                        href="/demarches"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors"
                      >
                        📋 Démarches Administratives
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-gray-700 hover:text-[#D4AF37] transition-colors font-medium">
              Blog
            </Link>

            <Link href="/contact" className="text-gray-700 hover:text-[#D4AF37] transition-colors font-medium">
              Contact
            </Link>

            <Link href="/devenir-partenaire" className="text-gray-700 hover:text-[#D4AF37] transition-colors font-medium">
              Devenir Partenaire
            </Link>

            <Link href="/rendez-vous">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6">
                Prendre RDV
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-[#D4AF37] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>

            {/* Mobile Nos Services */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu("services")}
                className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-[#D4AF37] transition-colors"
              >
                <span>Nos Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openMobileSubmenu === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMobileSubmenu === "services" && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    href="/volontariat"
                    className="block py-2 text-gray-600 hover:text-[#D4AF37] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🤝 Volontariat International
                  </Link>
                  <Link
                    href="/formations"
                    className="block py-2 text-gray-600 hover:text-[#D4AF37] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    📚 Formations Professionnelles
                  </Link>
                  <Link
                    href="/etudes"
                    className="block py-2 text-gray-600 hover:text-[#D4AF37] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🎓 Études Supérieures
                  </Link>
                  <Link
                    href="/tourisme"
                    className="block py-2 text-gray-600 hover:text-[#D4AF37] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ✈️ Tourisme
                  </Link>
                  <Link
                    href="/ausbildung"
                    className="block py-2 text-gray-600 hover:text-[#D4AF37] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🎯 Ausbildung
                  </Link>
                  <Link
                    href="/au-pair"
                    className="block py-2 text-gray-600 hover:text-[#D4AF37] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    👶 Au Pair
                  </Link>
                  <Link
                    href="/demarches"
                    className="block py-2 text-gray-600 hover:text-[#D4AF37] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    📋 Démarches Administratives
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile À Propos */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu("apropos")}
                className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-[#D4AF37] transition-colors"
              >
                <span>À Propos</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openMobileSubmenu === "apropos" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMobileSubmenu === "apropos" && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    href="/a-propos"
                    className="block py-2 text-gray-600 hover:text-[#D4AF37] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    📄 Notre Mission
                  </Link>
                  
                  {/* Mobile Accompagnement Submenu - FIXED NESTING */}
                  <div>
                    <button
                      onClick={() => setIsMobileAccompagnementOpen(!isMobileAccompagnementOpen)}
                      className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-[#D4AF37] transition-colors"
                    >
                      <span>📂 Accompagnement</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isMobileAccompagnementOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isMobileAccompagnementOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        <Link
                          href="/volontariat"
                          className="block py-2 text-gray-500 hover:text-[#D4AF37] transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          🤝 Volontariat International
                        </Link>
                        <Link
                          href="/formations"
                          className="block py-2 text-gray-500 hover:text-[#D4AF37] transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          📚 Formations Professionnelles
                        </Link>
                        <Link
                          href="/etudes"
                          className="block py-2 text-gray-500 hover:text-[#D4AF37] transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          🎓 Études Supérieures
                        </Link>
                        <Link
                          href="/tourisme"
                          className="block py-2 text-gray-500 hover:text-[#D4AF37] transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          ✈️ Tourisme
                        </Link>
                        <Link
                          href="/ausbildung"
                          className="block py-2 text-gray-500 hover:text-[#D4AF37] transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          🎯 Ausbildung
                        </Link>
                        <Link
                          href="/au-pair"
                          className="block py-2 text-gray-500 hover:text-[#D4AF37] transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          👶 Au Pair
                        </Link>
                        <Link
                          href="/demarches"
                          className="block py-2 text-gray-500 hover:text-[#D4AF37] transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          📋 Démarches Administratives
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="block py-2 text-gray-700 hover:text-[#D4AF37] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-[#D4AF37] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/devenir-partenaire"
              className="block py-2 text-gray-700 hover:text-[#D4AF37] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Devenir Partenaire
            </Link>

            {/* Bouton CTA Mobile */}
            <Link href="/rendez-vous" className="block mt-6">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                Prendre RDV
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}