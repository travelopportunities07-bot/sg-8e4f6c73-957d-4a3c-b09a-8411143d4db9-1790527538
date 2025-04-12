
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, CreditCard, Smartphone, Globe } from "lucide-react";
import Image from "next/image";

export function PaymentSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Accompagnement Personnalisé</h2>
        
        <Card className="mb-8">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <CardTitle className="text-2xl flex items-center gap-2">
              🎯 Accompagnement Basic – 1h d'orientation personnalisée
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" /> Objectif :
            </h3>
            <p className="text-gray-700 mb-6">
              Obtenez toutes les informations essentielles sur votre pays de destination et découvrez les démarches à suivre pour concrétiser votre projet de voyage, travail, études, volontariat ou stage à l'étranger.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-blue-800 mb-2">Accompagnement complet – 100% sécurisé</h4>
              <p className="text-gray-700 mb-4">
                Pour bénéficier de notre pack "Conseils & Suivi personnalisé", réglez maintenant via notre plateforme sécurisée.
              </p>
              <p className="flex items-center gap-2 text-blue-700 font-medium">
                <CreditCard className="h-4 w-4" /> Paiement simple – reçu immédiat – assistance continue.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
