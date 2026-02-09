import Link from "next/link";
import { ChevronDown } from "lucide-react";

const destinations = [
  { id: "allemagne", name: "Allemagne", flag: "🇩🇪" },
  { id: "autriche", name: "Autriche", flag: "🇦🇹" },
  { id: "australie", name: "Australie", flag: "🇦🇺" },
  { id: "danemark", name: "Danemark", flag: "🇩🇰" },
  { id: "estonie", name: "Estonie", flag: "🇪🇪" },
  { id: "etats-unis", name: "États-Unis", flag: "🇺🇸" },
  { id: "finlande", name: "Finlande", flag: "🇫🇮" },
  { id: "irlande", name: "Irlande", flag: "🇮🇪" },
  { id: "lituanie", name: "Lituanie", flag: "🇱🇹" },
  { id: "luxembourg", name: "Luxembourg", flag: "🇱🇺" },
  { id: "norvege", name: "Norvège", flag: "🇳🇴" },
  { id: "russie", name: "Russie", flag: "🇷🇺" }
];

export function DestinationsMenu() {
  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
        <span>Destinations</span>
        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
      </button>

      <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 max-h-[400px] overflow-y-auto">
        <div className="py-2">
          {destinations.map((destination) => (
            <Link 
              href={`/destinations/${destination.id}`} 
              key={destination.id}
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center"
            >
              <span className="mr-2">{destination.flag}</span>
              <span>{destination.name}</span>
            </Link>
          ))}
          <div className="border-t border-gray-200 my-1"></div>
          <Link 
            href="/destinations" 
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
          >
            Voir toutes les destinations
          </Link>
        </div>
      </div>
    </div>
  );
}