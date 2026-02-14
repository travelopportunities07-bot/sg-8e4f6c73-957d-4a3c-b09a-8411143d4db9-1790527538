import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t("testimonials.testimonial1.nom"),
      role: t("testimonials.testimonial1.role"),
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=400&fit=crop&q=80",
      text: t("testimonials.testimonial1.texte")
    },
    {
      name: t("testimonials.testimonial2.nom"),
      role: t("testimonials.testimonial2.role"),
      image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=400&h=400&fit=crop&q=80",
      text: t("testimonials.testimonial2.texte")
    },
    {
      name: t("testimonials.testimonial3.nom"),
      role: t("testimonials.testimonial3.role"),
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&q=80",
      text: t("testimonials.testimonial3.texte")
    },
    {
      name: t("testimonials.testimonial4.nom"),
      role: t("testimonials.testimonial4.role"),
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
      text: t("testimonials.testimonial4.texte")
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("testimonials.titre")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("testimonials.soustitre")}
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="p-6 h-full flex flex-col relative overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-white">
                <motion.div
                  className="absolute top-4 right-4 text-red-100 opacity-30"
                  initial={{ rotate: -15, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <Quote className="w-16 h-16" />
                </motion.div>

                <motion.div 
                  className="flex gap-1 mb-4 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.2 + 0.5 + (i * 0.1),
                        type: "spring",
                        stiffness: 200,
                        damping: 10
                      }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p 
                  className="text-gray-700 mb-6 flex-grow italic relative z-10 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.6 }}
                >
                  &ldquo;{testimonial.text}&rdquo;
                </motion.p>

                <motion.div 
                  className="flex items-center gap-4 relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.7 }}
                >
                  <motion.div 
                    className="relative"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-red-500 shadow-md"
                    />
                  </motion.div>
                  <div>
                    <motion.p 
                      className="font-semibold text-gray-900"
                      whileHover={{ 
                        color: "#DC2626",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {testimonial.name}
                    </motion.p>
                    <p className="text-sm text-red-600 font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}