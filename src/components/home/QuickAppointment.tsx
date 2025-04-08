
import { CalendlyPopup } from "@/components/appointment/CalendlyPopup";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface QuickAppointmentProps {
  calendlyUrl: string;
  title?: string;
  description?: string;
}

export function QuickAppointment({
  calendlyUrl,
  title = "Besoin d'un conseil rapide ?",
  description = "Réservez un appel de 15 minutes avec l'un de nos conseillers."
}: QuickAppointmentProps) {
  return (
    <Card className="shadow-md">
      <CardHeader className="bg-primary/5 pb-4">
        <div className="flex items-center gap-3">
          <Calendar className="h-6 w-6 text-primary" />
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <CalendlyPopup 
          url={calendlyUrl} 
          text="Réserver un appel rapide" 
          className="w-full"
        />
      </CardContent>
    </Card>
  );
}
