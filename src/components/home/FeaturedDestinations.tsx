import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Plane, GraduationCap, Briefcase, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

interface Destination {
  id: string;
  name: string;
  flag: string;
  description: string;
  icon: typeof Plane;
  link: string;
}

export function FeaturedDestinations() {
  const { t } = useLanguage();

  const destinations: Destination[] = [
    {
      id: "1",
      name: t("destinations.germany"),
      flag: "🇩🇪",
      description: t("destinations.germanyDesc"),
      icon: GraduationCap,
      link: "/destinations/allemagne"
    },
    {
      id: "2",
      name: t("destinations.usa"),
      flag: "🇺🇸",
      description: t("destinations.usaDesc"),
      icon: Briefcase,
      link: "/destinations/etats-unis"
    },
    {
      id: "3",
      name: t("destinations.australia"),
      flag: "🇦🇺",
      description: t("destinations.australiaDesc"),
      icon: Plane,
      link: "/destinations/australie"
    },
    {
      id: "4",
      name: t("destinations.ireland"),
      flag: "🇮🇪",
      description: t("destinations.irelandDesc"),
      icon: Heart,
      link: "/destinations/irlande"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2 border-red-200 text-red-600">
            <span className="inline-block mr-2">✨</span>
            Une Méthode Éprouvée
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("destinations.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("destinations.subtitle")}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {destinations.map((destination) => {
            const Icon = destination.icon;
            return (
              <motion.div key={destination.id} variants={itemVariants}>
                <Link href={destination.link}>
                  <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-red-200 group">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative">
                        <motion.div 
                          className="text-6xl mb-2"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {destination.flag}
                        </motion.div>
                        <div className="absolute -bottom-2 -right-2 bg-red-500 rounded-full p-2 shadow-lg">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {destination.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {destination.description}
                      </p>
                      <Button 
                        variant="ghost" 
                        className="mt-auto group-hover:bg-red-50 group-hover:text-red-600 transition-all"
                      >
                        {t("common.learnMore")}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/destinations">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
              {t("destinations.viewAll")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}