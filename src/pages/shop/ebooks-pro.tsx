import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function EbooksProPage() {
  return (
    <Layout>
      <SEO
        title="Ebooks Pro - Mini Dictionnaire Français-Allemand | VivrEnAllemagne"
        description="Le guide professionnel indispensable pour les Azubis et professionnels de santé francophones en Allemagne."
        image="/pflegeberufler-cover.png"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">
              <Award className="w-3.5 h-3.5 mr-1.5" />
              Formation Professionnelle
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Ebooks Pro
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Des outils professionnels spécialisés pour les Azubis et professionnels de santé francophones en Allemagne.
            </p>
          </div>
        </div>
      </section>

      {/* Product Section - Single Compact Card */}
      <section className="py-16 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl">
            <div className="relative">
              {/* Badge Promo */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-destructive text-destructive-foreground font-bold px-3 py-1.5 text-sm shadow-lg">
                  -40%
                </Badge>
              </div>

              {/* Image 500x500 */}
              <div className="relative w-full aspect-square bg-gradient-to-br from-primary/5 to-accent/5">
                <Image
                  src="/pflegeberufler-cover.png"
                  alt="Pflegeberufler Sprachbegleiter"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Overlay */}
              <div className="p-6 bg-gradient-to-t from-background via-background/95 to-background/80">
                <Badge className="mb-3 bg-accent/20 text-accent-foreground">
                  💼 Professionnel
                </Badge>
                
                <h2 className="text-2xl font-bold mb-2 text-foreground">
                  Pflegeberufler Sprachbegleiter
                </h2>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Mini Dictionnaire Français-Allemand pour les Soins Infirmiers
                </p>

                {/* Key Features - Compact */}
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">200+ termes médicaux bilingues</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Phrases essentielles du quotidien</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Format PDF accessible partout</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6 pb-6 border-b">
                  <span className="text-3xl font-bold text-primary">
                    29,99 €
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    49,99 €
                  </span>
                </div>

                {/* CTA Button */}
                <Link href="/shop/pflegeberufler-sprachbegleiter">
                  <Button className="w-full" size="lg">
                    Découvrir
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Professionnels formés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Taux de satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Accès illimité</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}