import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='bg-primary text-white'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='text-2xl font-bold'>
            AfricaOpportunités
          </Link>

          <nav className='hidden md:flex items-center space-x-6'>
            <Link href='/' className='text-lg font-medium hover:text-primary transition-colors'>
              Accueil
            </Link>
            <Link href='/opportunites' className='text-lg font-medium hover:text-primary transition-colors'>
              Opportunités
            </Link>
            <Link href='/destinations' className='text-lg font-medium hover:text-primary transition-colors'>
              Destinations
            </Link>
            <Link href='/rendez-vous' className='text-lg font-medium hover:text-primary transition-colors'>
              Rendez-vous
            </Link>
            <Link href='/calendly-widget' className='text-lg font-medium hover:text-primary transition-colors'>
              Calendly Widget
            </Link>
            <Link href='/a-propos' className='text-lg font-medium hover:text-primary transition-colors'>
              À propos
            </Link>
            <Link href='/contact' className='text-lg font-medium hover:text-primary transition-colors'>
              Contact
            </Link>
          </nav>

          <div className='md:hidden'>
            <Button variant='ghost' size='icon' onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className='h-6 w-6' />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className='md:hidden mt-4 pb-4 space-y-4'>
            <div className='pt-5 pb-6 px-5 space-y-6'>
              <div className='grid grid-cols-1 gap-4'>
                <Link href='/' className='text-base font-medium text-gray-900 hover:text-primary transition-colors'>
                  Accueil
                </Link>
                <Link href='/opportunites' className='text-base font-medium text-gray-900 hover:text-primary transition-colors'>
                  Opportunités
                </Link>
                <Link href='/destinations' className='text-base font-medium text-gray-900 hover:text-primary transition-colors'>
                  Destinations
                </Link>
                <Link href='/rendez-vous' className='text-base font-medium text-gray-900 hover:text-primary transition-colors'>
                  Rendez-vous
                </Link>
                <Link href='/calendly-widget' className='text-base font-medium text-gray-900 hover:text-primary transition-colors'>
                  Calendly Widget
                </Link>
                <Link href='/a-propos' className='text-base font-medium text-gray-900 hover:text-primary transition-colors'>
                  À propos
                </Link>
                <Link href='/contact' className='text-base font-medium text-gray-900 hover:text-primary transition-colors'>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}