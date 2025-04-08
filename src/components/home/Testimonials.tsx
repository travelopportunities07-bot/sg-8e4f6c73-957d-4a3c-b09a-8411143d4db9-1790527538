
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  country: string;
  destination: string;
  quote: string;
  opportunityType: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aminata Diallo",
    country: "Sénégal",
    destination: "Allemagne",
    quote: "Grâce à AfricaOpportunités, j'ai pu trouver un programme de master en ingénierie en Allemagne avec une bourse complète. Le processus a été simplifié et les conseils fournis ont été précieux.",
    opportunityType: "Formations"
  },
  {
    id: 2,
    name: "Kofi Mensah",
    country: "Ghana",
    destination: "Australie",
    quote: "J'ai découvert un programme de volontariat en Australie qui correspondait parfaitement à mes compétences. Aujourd'hui, j'ai un emploi permanent et une nouvelle vie grâce aux informations trouvées sur ce site.",
    opportunityType: "Volontariat"
  },
  {
    id: 3,
    name: "Fatima Ouedraogo",
    country: "Burkina Faso",
    destination: "Norvège",
    quote: "Le guide sur les opportunités de travail en Norvège m'a permis de préparer efficacement ma candidature. Je travaille maintenant comme infirmière à Oslo et je suis très reconnaissante.",
    opportunityType: "Travail"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Témoignages de Réussite</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les histoires inspirantes de personnes qui ont réalisé leurs rêves internationaux grâce à nos services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.country} → {testimonial.destination}</p>
                  <p className="text-primary mt-1">{testimonial.opportunityType}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
