
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, CreditCard, Smartphone, Globe, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

interface PaymentSectionProps {
  onBasicSelect: () => void;
  onPremiumSelect: () => void;
}

export function PaymentSection({ onBasicSelect, onPremiumSelect }: PaymentSectionProps) {
  return (
    <section className="py-12 bg-gray-50" id="payment-options">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Choisissez Votre Accompagnement</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Accompagnement Basic */}
          <Card className="mb-8 border-blue-200 hover:border-blue-400 transition-all">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <CardTitle className="text-2xl flex items-center gap-2">
                🎯 Accompagnement Basic
              </CardTitle>
              <CardDescription className="text-blue-100">
                1h d'orientation personnalisée
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" /> Objectif :
              </h3>
              <p className="text-gray-700 mb-6">
                Obtenez toutes les informations essentielles sur votre pays de destination et découvrez les démarches à suivre pour concrétiser votre projet.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Conseils adaptés à votre profil</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Informations sur les démarches administratives</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Réponses à vos questions spécifiques</span>
                </li>
              </ul>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-blue-800 mb-2">Accompagnement 100% sécurisé</h4>
                <p className="text-gray-700 mb-4">
                  Pour bénéficier de notre pack "Basic", réglez maintenant via notre plateforme sécurisée.
                </p>
                <p className="flex items-center gap-2 text-blue-700 font-medium">
                  <CreditCard className="h-4 w-4" /> Paiement simple – reçu immédiat
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-3">
                  <Smartphone className="h-5 w-5" />
                  <span>Mobile Money</span>
                </Button>
                <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-3">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="PayPal" width={60} height={20} />
                </Button>
                <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-3">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Payoneer_logo.svg/2560px-Payoneer_logo.svg.png" alt="Payoneer" width={60} height={20} />
                </Button>
                <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-3">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Revolut_logo.svg/2560px-Revolut_logo.svg.png" alt="Revolut" width={60} height={20} />
                </Button>
              </div>
              
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
                onClick={onBasicSelect}
              >
                Choisir ce forfait <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Accompagnement Premium */}
          <Card className="mb-8 border-yellow-200 hover:border-yellow-400 transition-all">
            <CardHeader className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white">
              <CardTitle className="text-2xl flex items-center gap-2">
                ⭐ Accompagnement Premium
              </CardTitle>
              <CardDescription className="text-yellow-100">
                Suivi complet et personnalisé
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" /> Objectif :
              </h3>
              <p className="text-gray-700 mb-6">
                Bénéficiez d'un accompagnement complet et personnalisé pour réussir votre projet à l'étranger, avec un suivi étape par étape.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Tout l'accompagnement Basic</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>3 sessions de suivi personnalisées</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Assistance pour les démarches administratives</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Ressources exclusives et contacts utiles</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <span>Support prioritaire par email pendant 3 mois</span>
                </li>
              </ul>
              
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-amber-800 mb-2">Accompagnement Premium – 100% sécurisé</h4>
                <p className="text-gray-700 mb-4">
                  Pour bénéficier de notre pack "Premium", réglez maintenant via notre plateforme sécurisée.
                </p>
                <p className="flex items-center gap-2 text-amber-700 font-medium">
                  <CreditCard className="h-4 w-4" /> Paiement simple – reçu immédiat – assistance continue
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-3">
                  <Smartphone className="h-5 w-5" />
                  <span>Mobile Money</span>
                </Button>
                <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-3">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="PayPal" width={60} height={20} />
                </Button>
                <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-3">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Payoneer_logo.svg/2560px-Payoneer_logo.svg.png" alt="Payoneer" width={60} height={20} />
                </Button>
                <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-3">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Revolut_logo.svg/2560px-Revolut_logo.svg.png" alt="Revolut" width={60} height={20} />
                </Button>
              </div>
              
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700 flex items-center justify-center gap-2"
                onClick={onPremiumSelect}
              >
                Choisir ce forfait <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
