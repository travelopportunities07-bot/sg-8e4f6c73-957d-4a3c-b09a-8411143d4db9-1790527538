import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface CalendlyPopupProps {
  url: string;
  text?: string;
  className?: string;
  buttonVariant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}

// Déclaration pour TypeScript
declare global {
  interface Window {
    Calendly?: any;
  }
}

export function CalendlyPopup({ 
  url, 
  text = 'Prendre rendez-vous', 
  className = '',
  buttonVariant = 'default'
}: CalendlyPopupProps) {
  useEffect(() => {
    // Charger le script Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Nettoyer le script lors du démontage du composant
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const openCalendly = () => {
    // Calendly est ajouté globalement par le script
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({ url });
      return false;
    }
  };

  return (
    <Button 
      onClick={openCalendly} 
      className={className}
      variant={buttonVariant}
    >
      {text}
    </Button>
  );
}