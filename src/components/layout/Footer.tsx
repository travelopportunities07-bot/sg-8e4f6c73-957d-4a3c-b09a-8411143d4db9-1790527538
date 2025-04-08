
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AfricaOpportunités</h3>
            <p className="text-gray-300">
              Votre passerelle vers des opportunités internationales pour les résidents africains.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-300 hover:text-white">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/opportunites" className="text-gray-300 hover:text-white">
                  Types d'Opportunités
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-white">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Email: contact@africaopportunites.com</p>
            <p className="text-gray-300">Téléphone: +xxx xxx xxx xxx</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AfricaOpportunités. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
