import Link from "next/link";

interface Destination {
  id: string;
  name: string;
  flag: string;
}

interface DestinationsMenuProps {
  destinations: Destination[];
}

export function DestinationsMenu({ destinations }: DestinationsMenuProps) {
  return (
    <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg py-2 z-50 w-64">
      <div className="grid grid-cols-1 gap-1">
        {destinations.map((destination) => (
          <Link 
            href={`/destinations/${destination.id}`} 
            key={destination.id}
            className="px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
          >
            <span className="mr-2">{destination.flag}</span>
            <span>{destination.name}</span>
          </Link>
        ))}
        <div className="border-t border-gray-200 my-1"></div>
        <Link 
          href="/destinations" 
          className="px-4 py-2 text-gray-800 hover:bg-gray-100 font-medium"
        >
          Voir toutes les destinations
        </Link>
      </div>
    </div>
  );
}
