import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function GuidesEbooksPage() {
  const guides = [
    {
      id: "reussir-allemagne",
      title: "Réussir en Allemagne",
      subtitle: "Le guide complet pour réussir votre intégration",
      description: "Tout comprendre et vous épanouir, de l'arrivée à la réussite",
      image: "/guide-reussir-allemagne.png",
      originalPrice: 39.97,
      price: 19.97,
      link: "/shop/guide-reussir-allemagne",
      features: [
        "Démarches administratives complètes",
        "Culture et vie quotidienne",
        "Conseils pratiques d'expatriés",
        "Ressources et contacts utiles"
      ]
    },
    {
      id: "projet-voyage",
      title: "Réussir son Projet de Voyage en Allemagne",
      subtitle: "Le guide complet pour planifier votre aventure",
      description: "Au Pair · FSJ/BFD · Ausbildung · Hôtellerie · Soins Infirmiers",
      image: "/guide-projet-voyage.png",
      originalPrice: 34.97,
      price: 19.97,
      link: "/shop/reussir-projet-voyage-allemagne",
      features: [
        "Opportunités détaillées par secteur",
        "Préparation administrative complète",
        "Conseils d'experts",
        "Témoignages de réussite"
      ]
    }
  ];

  return (
    <Layout>
      <SEO
        title="📚 Guides & Ebooks - VivrEnAllemagne"
        description="Découvrez nos guides pratiques pour réussir votre projet en Allemagne. Conseils d'experts, démarches administratives, et retours d'expérience."
        image="/og-image.png"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <BookOpen className="w-3.5 h-3.5 mr-1.5" />
              Guides Pratiques
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              📚 Guides & Ebooks
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Des ressources complètes pour réussir votre projet en Allemagne. 
              Conseils d'experts, démarches détaillées, et témoignages inspirants.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {guides.map((guide) => (
              <Card key={guide.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                {/* Image */}
                <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-destructive text-destructive-foreground font-bold text-sm px-3 py-1">
                      -50%
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-2">
                      {guide.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {guide.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {guide.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <span className="text-3xl font-bold text-primary">
                      {guide.price.toFixed(2)} €
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      {guide.originalPrice.toFixed(2)} €
                    </span>
                  </div>

                  {/* CTA */}
                  <Link href={guide.link} className="block">
                    <Button className="w-full group/btn" size="lg">
                      Découvrir
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Lecteurs satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Téléchargement instantané</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">30j</div>
              <div className="text-sm text-muted-foreground">Garantie satisfait ou remboursé</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}