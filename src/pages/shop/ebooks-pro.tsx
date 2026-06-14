import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowRight, Award } from "lucide-react";
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

      {/* Product Section */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-square md:aspect-auto bg-gradient-to-br from-primary/5 to-accent/5">
                <Image
                  src="/pflegeberufler-cover.png"
                  alt="Pflegeberufler Sprachbegleiter"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-destructive text-destructive-foreground font-bold px-3 py-1">
                    -40%
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <Badge className="mb-3 bg-accent/20 text-accent-foreground">
                      Professionnel
                    </Badge>
                    <h2 className="text-3xl font-bold mb-3">
                      Pflegeberufler Sprachbegleiter
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Mini Dictionnaire Français-Allemand pour les Soins Infirmiers
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm">
                      <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Guide pratique pour étudiants infirmiers et professionnels de santé</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Terminologie médicale bilingue spécialisée</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Phrases essentielles pour le quotidien professionnel</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 pt-6 border-t">
                    <span className="text-4xl font-bold text-primary">
                      29,99 €
                    </span>
                    <span className="text-xl text-muted-foreground line-through">
                      49,99 €
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <Link href="/shop/pflegeberufler-sprachbegleiter" className="mt-6">
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