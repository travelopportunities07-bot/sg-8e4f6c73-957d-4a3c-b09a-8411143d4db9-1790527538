
import { useState } from "react";
import { InterestSection } from "./InterestSection";
import { PaymentSection } from "./PaymentSection";
import { ContactForm } from "./ContactForm";

export function DestinationConsultation() {
  // États pour gérer le flux de navigation
  const [currentStep, setCurrentStep] = useState<"interest" | "payment" | "contact">("interest");
  const [selectedPlan, setSelectedPlan] = useState<"basic" | "premium" | undefined>(undefined);
  
  // Fonctions de navigation
  const handleInterestClick = () => {
    setCurrentStep("payment");
    // Scroll to payment section
    const paymentSection = document.getElementById("payment-options");
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const handleBasicSelect = () => {
    setSelectedPlan("basic");
    setCurrentStep("contact");
    // Scroll to contact form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const handlePremiumSelect = () => {
    setSelectedPlan("premium");
    setCurrentStep("contact");
    // Scroll to contact form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const handleBackToPayment = () => {
    setCurrentStep("payment");
    // Scroll to payment section
    const paymentSection = document.getElementById("payment-options");
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div>
      {/* Section d'intérêt toujours visible */}
      <div className="container mx-auto px-4">
        <InterestSection onInterestClick={handleInterestClick} />
      </div>
      
      {/* Section de paiement visible après clic sur "Je suis intéressé(e)" */}
      {currentStep !== "interest" && (
        <PaymentSection 
          onBasicSelect={handleBasicSelect} 
          onPremiumSelect={handlePremiumSelect} 
        />
      )}
      
      {/* Formulaire de contact visible après sélection d'un plan */}
      {currentStep === "contact" && (
        <ContactForm 
          selectedPlan={selectedPlan} 
          onBack={handleBackToPayment} 
        />
      )}
    </div>
  );
}
