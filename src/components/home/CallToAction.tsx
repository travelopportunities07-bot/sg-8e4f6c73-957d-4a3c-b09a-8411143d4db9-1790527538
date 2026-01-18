import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function CallToAction() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-institutional-blue to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1600')] bg-cover bg-center opacity-5"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            {t("appel.titre")}
          </h2>
          
          <p className="text-xl text-blue-100">
            {t("appel.soustitre")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" className="bg-accent-green hover:bg-accent-green/90 text-white text-lg px-8 py-6 rounded-lg shadow-xl hover:shadow-2xl transition-all">
                {t("appel.bouton")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link href="/rendez-vous">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-institutional-blue text-lg px-8 py-6 rounded-lg transition-all">
                <Phone className="mr-2 h-5 w-5" />
                {t("appel.rendezvous")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}