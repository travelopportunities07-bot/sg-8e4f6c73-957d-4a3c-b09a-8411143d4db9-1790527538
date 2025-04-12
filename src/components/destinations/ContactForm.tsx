
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Send } from "lucide-react";

export function ContactForm() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">📩 Contactez-nous</h2>
        
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Formulaire de Contact</CardTitle>
            <CardDescription>
              Veuillez remplir ce formulaire pour nous envoyer vos informations et recevoir votre accompagnement personnalisé.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input id="name" placeholder="Votre nom et prénom" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="destination">Destination souhaitée</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez une destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="irlande">Irlande</SelectItem>
                    <SelectItem value="allemagne">Allemagne</SelectItem>
                    <SelectItem value="autriche">Autriche</SelectItem>
                    <SelectItem value="australie">Australie</SelectItem>
                    <SelectItem value="danemark">Danemark</SelectItem>
                    <SelectItem value="etats-unis">États-Unis</SelectItem>
                    <SelectItem value="finlande">Finlande</SelectItem>
                    <SelectItem value="norvege">Norvège</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="objective">Objectif</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez votre objectif" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="etudes">Études</SelectItem>
                    <SelectItem value="travail">Travail</SelectItem>
                    <SelectItem value="tourisme">Tourisme</SelectItem>
                    <SelectItem value="volontariat">Volontariat</SelectItem>
                    <SelectItem value="stage">Stage</SelectItem>
                    <SelectItem value="au-pair">Au-pair</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="payment">Preuve de paiement</Label>
                <div className="grid grid-cols-1 gap-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="h-8 w-8 text-gray-400" />
                      <p className="text-sm text-gray-500">Cliquez pour télécharger ou glissez-déposez</p>
                      <p className="text-xs text-gray-400">PNG, JPG ou PDF (max. 5MB)</p>
                    </div>
                    <Input id="payment-upload" type="file" className="hidden" />
                  </div>
                  <div className="- or -">
                    <div className="flex items-center gap-4">
                      <div className="h-px bg-gray-300 flex-grow"></div>
                      <span className="text-sm text-gray-500">OU</span>
                      <div className="h-px bg-gray-300 flex-grow"></div>
                    </div>
                  </div>
                  <div>
                    <Input id="payment-code" placeholder="Entrez votre code de paiement" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message (optionnel)</Label>
                <Textarea id="message" placeholder="Partagez-nous des détails supplémentaires sur votre projet..." />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full flex items-center gap-2">
              <Send className="h-4 w-4" /> Envoyer ma demande
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
