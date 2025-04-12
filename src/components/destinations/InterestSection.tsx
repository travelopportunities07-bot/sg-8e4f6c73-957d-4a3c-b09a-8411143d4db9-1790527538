
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

export function InterestSection() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-sm my-8">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
          <HelpCircle className="h-8 w-8 text-blue-600" />
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Besoin d'accompagnement ?</h3>
          <p className="text-blue-700 mb-4">
            Vous avez des questions ? Besoin d'un accompagnement ? Cliquez ici pour bénéficier de nos conseils et d'un suivi étape par étape.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Je suis intéressé(e)
          </Button>
        </div>
      </div>
    </div>
  );
}
