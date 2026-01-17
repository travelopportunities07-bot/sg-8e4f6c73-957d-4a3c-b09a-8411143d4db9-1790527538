import { useEffect } from "react";

interface CalendlyEmbedProps {
  url: string;
  className?: string;
  height?: number;
}

export function CalendlyEmbed({ url, className = "", height = 700 }: CalendlyEmbedProps) {
  useEffect(() => {
    // Charger le script Calendly
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Nettoyer le script lors du démontage du composant
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      className={`calendly-inline-widget ${className}`} 
      data-url={url} 
      style={{ minWidth: "320px", height: `${height}px` }} 
    />
  );
}