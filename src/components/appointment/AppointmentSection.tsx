
import { CalendlyEmbed } from "./CalendlyEmbed";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, MapPin, MessageSquare } from "lucide-react";

interface AppointmentSectionProps {
  calendlyUrl: string;
  title?: string;
  description?: string;
}

export function AppointmentSection({ 
  calendlyUrl, 
  title = "Prenez rendez-vous avec nous", 
  description = "Réservez un créneau qui vous convient pour discuter de vos projets à l'international."
}: AppointmentSectionProps) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">{title}</h2>
            <p className="text-slate-600 mb-8">{description}</p>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Consultation personnalisée</h3>
                      <p className="text-sm text-slate-500">Discutez de vos projets et obtenez des conseils adaptés à votre situation.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Flexibilité horaire</h3>
                      <p className="text-sm text-slate-500">Choisissez le créneau qui vous convient le mieux dans notre calendrier.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">En ligne ou en personne</h3>
                      <p className="text-sm text-slate-500">Optez pour une rencontre virtuelle ou dans nos bureaux selon votre préférence.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Suivi personnalisé</h3>
                      <p className="text-sm text-slate-500">Recevez un compte-rendu et des ressources après votre rendez-vous.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4">
            <CalendlyEmbed url={calendlyUrl} className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
