import Link from "next/link";
import { Globe, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Aventures Sans Frontières
            </h3>
            <p className="text-gray-300 mb-4">
              Votre passerelle vers des opportunités internationales exceptionnelles. Explorez le monde, transformez votre avenir.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <Globe className="h-5 w-5" />
              <span>Opportunités mondiales depuis 2026</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/opportunites" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Types d'Opportunités
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/rendez-vous" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Prendre Rendez-vous
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="h-5 w-5" />
                <a href="mailto:contact@aventuressansfrontieres.com" className="hover:text-indigo-400 transition-colors">
                  contact@aventuressansfrontieres.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="h-5 w-5" />
                <span>+33 1 23 45 67 89</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Suivez-nous</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Aventures Sans Frontières. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Votre partenaire de confiance pour les opportunités internationales
          </p>
        </div>
      </div>
    </footer>
  );
}