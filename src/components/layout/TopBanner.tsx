import React from 'react';

export function TopBanner() {
  const text = "Votre référence pour vivre en Allemagne - Vivre et travailler en Allemagne";
  // Répétez le texte suffisamment de fois pour assurer un défilement continu fluide
  // Le séparateur "•" ajoute une distinction visuelle propre
  const repeatedItems = Array(10).fill(text);

  return (
    <div className="bg-blue-600 text-white overflow-hidden py-2 relative z-50 border-b border-blue-700">
      <div className="animate-marquee whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <span key={index} className="mx-4 font-medium text-sm md:text-base flex items-center">
            {item}
            <span className="mx-4 opacity-50">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}