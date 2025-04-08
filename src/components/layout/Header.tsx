
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            AfricaOpportunités
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-primary-foreground/80">
              Accueil
            </Link>
            <Link href="/destinations" className="hover:text-primary-foreground/80">
              Destinations
            </Link>
            <Link href="/opportunites" className="hover:text-primary-foreground/80">
              Types d'Opportunités
            </Link>
            <Link href="/a-propos" className="hover:text-primary-foreground/80">
              À Propos
            </Link>
            <Link href="/contact" className="hover:text-primary-foreground/80">
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/" className="block hover:text-primary-foreground/80">
              Accueil
            </Link>
            <Link href="/destinations" className="block hover:text-primary-foreground/80">
              Destinations
            </Link>
            <Link href="/opportunites" className="block hover:text-primary-foreground/80">
              Types d'Opportunités
            </Link>
            <Link href="/a-propos" className="block hover:text-primary-foreground/80">
              À Propos
            </Link>
            <Link href="/contact" className="block hover:text-primary-foreground/80">
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
