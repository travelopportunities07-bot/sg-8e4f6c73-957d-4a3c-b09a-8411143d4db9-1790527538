import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Users, Award } from "lucide-react";

export function CallToAction() {
  const { t } = useLanguage();

  const trustBadges = [
    {
      icon: CheckCircle,
      label: t("cta.badges.verified"),
    },
    {
      icon: Shield,
      label: t("cta.badges.secure"),
    },
    {
      icon: Users,
      label: t("cta.badges.clients"),
    },
    {
      icon: Award,
      label: t("cta.badges.excellence"),
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold text-sm">{badge.label}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Sous-titre */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t("cta.soustitre")}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/rendez-vous">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t("cta.bouton")}
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                {t("cta.contact")}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}