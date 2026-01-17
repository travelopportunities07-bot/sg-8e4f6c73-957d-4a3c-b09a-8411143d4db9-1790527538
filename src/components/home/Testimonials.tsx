import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      nameKey: "testimonials.1.name",
      roleKey: "testimonials.1.role",
      textKey: "testimonials.1.text"
    },
    {
      nameKey: "testimonials.2.name",
      roleKey: "testimonials.2.role",
      textKey: "testimonials.2.text"
    },
    {
      nameKey: "testimonials.3.name",
      roleKey: "testimonials.3.role",
      textKey: "testimonials.3.text"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-section-gray">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-institutional-blue">
            {t("testimonials.title")}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 bg-white border-2 border-gray-200 hover:border-accent-green hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-10 w-10 text-accent-green mb-4 opacity-50" />
              
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-text-secondary mb-6 italic">
                "{t(testimonial.textKey)}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-institutional-blue">
                  {t(testimonial.nameKey)}
                </p>
                <p className="text-sm text-text-secondary">
                  {t(testimonial.roleKey)}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}