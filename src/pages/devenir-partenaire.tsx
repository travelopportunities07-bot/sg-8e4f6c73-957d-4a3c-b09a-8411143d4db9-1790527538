import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Building2, User, Phone, MessageSquare, CheckCircle2, Briefcase, Calendar } from "lucide-react";

export default function DevenirPartenaire() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    titre: "",
    prenom: "",
    nom: "",
    email: "",
    codePhone: "+49",
    telephone: "",
    entreprise: "",
    secteur: "",
    partenariats: [] as string[],
    delai: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({
        titre: "",
        prenom: "",
        nom: "",
        email: "",
        codePhone: "+49",
        telephone: "",
        entreprise: "",
        secteur: "",
        partenariats: [],
        delai: "",
        message: ""
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      partenariats: checked
        ? [...prev.partenariats, value]
        : prev.partenariats.filter(p => p !== value)
    }));
  };

  const titreOptions = [
    { value: "herr", label: "Herr" },
    { value: "frau", label: "Frau" },
    { value: "dr", label: "Dr." },
    { value: "prof-dr", label: "Prof. Dr." },
    { value: "dipl-ing", label: "Dipl.-Ing." },
    { value: "mag", label: "Mag." },
    { value: "msc", label: "M.Sc." },
    { value: "ba", label: "B.A." }
  ];

  const codesTelephone = [
    { value: "+49", label: "🇩🇪 +49", country: "Allemagne" },
    { value: "+33", label: "🇫🇷 +33", country: "France" },
    { value: "+43", label: "🇦🇹 +43", country: "Autriche" },
    { value: "+41", label: "🇨🇭 +41", country: "Suisse" },
    { value: "+32", label: "🇧🇪 +32", country: "Belgique" },
    { value: "+31", label: "🇳🇱 +31", country: "Pays-Bas" },
    { value: "+352", label: "🇱🇺 +352", country: "Luxembourg" },
    { value: "+39", label: "🇮🇹 +39", country: "Italie" },
    { value: "+34", label: "🇪🇸 +34", country: "Espagne" },
    { value: "+351", label: "🇵🇹 +351", country: "Portugal" },
    { value: "+44", label: "🇬🇧 +44", country: "Royaume-Uni" },
    { value: "+353", label: "🇮🇪 +353", country: "Irlande" },
    { value: "+45", label: "🇩🇰 +45", country: "Danemark" },
    { value: "+46", label: "🇸🇪 +46", country: "Suède" },
    { value: "+47", label: "🇳🇴 +47", country: "Norvège" },
    { value: "+358", label: "🇫🇮 +358", country: "Finlande" },
    { value: "+48", label: "🇵🇱 +48", country: "Pologne" },
    { value: "+420", label: "🇨🇿 +420", country: "République tchèque" },
    { value: "+421", label: "🇸🇰 +421", country: "Slovaquie" },
    { value: "+36", label: "🇭🇺 +36", country: "Hongrie" },
    { value: "+40", label: "🇷🇴 +40", country: "Roumanie" },
    { value: "+359", label: "🇧🇬 +359", country: "Bulgarie" },
    { value: "+30", label: "🇬🇷 +30", country: "Grèce" },
    { value: "+385", label: "🇭🇷 +385", country: "Croatie" },
    { value: "+386", label: "🇸🇮 +386", country: "Slovénie" },
    { value: "+372", label: "🇪🇪 +372", country: "Estonie" },
    { value: "+371", label: "🇱🇻 +371", country: "Lettonie" },
    { value: "+370", label: "🇱🇹 +370", country: "Lituanie" }
  ];

  const partenarisOptions = [
    { value: "fsj", label: "Volontaires: FSJ" },
    { value: "fwd", label: "FWD" },
    { value: "bfd", label: "BFD" },
    { value: "formation", label: "Formation" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent opacity-40"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                Partenariat Recruteurs
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Devenez Notre Partenaire
              </h1>
              
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Vous êtes un recruteur allemand ? Rejoignez notre réseau de partenaires et accédez à des talents qualifiés prêts à s'installer en Allemagne.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Talents Qualifiés</h3>
                <p className="text-sm text-slate-600">
                  Accédez à une base de candidats motivés et qualifiés
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Accompagnement</h3>
                <p className="text-sm text-slate-600">
                  Support dans le processus de recrutement international
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Visibilité</h3>
                <p className="text-sm text-slate-600">
                  Votre entreprise mise en avant auprès de nos candidats
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-200">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Demande Envoyée !
                  </h3>
                  <p className="text-slate-600">
                    Nous vous contacterons dans les plus brefs délais pour discuter de notre partenariat.
                  </p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">
                      Inscription Partenaire
                    </h2>
                    <p className="text-slate-600">
                      Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="titre" className="text-slate-700 font-medium flex items-center gap-2">
                          <User className="w-4 h-4 text-blue-600" />
                          Titre *
                        </Label>
                        <Select
                          value={formData.titre}
                          onValueChange={(value) => handleSelectChange("titre", value)}
                          required
                        >
                          <SelectTrigger className="h-12 border-2 border-slate-200 focus:border-blue-500 rounded-xl">
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            {titreOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="prenom" className="text-slate-700 font-medium flex items-center gap-2">
                          <User className="w-4 h-4 text-blue-600" />
                          Prénom *
                        </Label>
                        <Input
                          id="prenom"
                          name="prenom"
                          type="text"
                          required
                          value={formData.prenom}
                          onChange={handleChange}
                          placeholder="Votre prénom"
                          className="h-12 border-2 border-slate-200 focus:border-blue-500 rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="nom" className="text-slate-700 font-medium flex items-center gap-2">
                          <User className="w-4 h-4 text-blue-600" />
                          Nom *
                        </Label>
                        <Input
                          id="nom"
                          name="nom"
                          type="text"
                          required
                          value={formData.nom}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          className="h-12 border-2 border-slate-200 focus:border-blue-500 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 font-medium flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-600" />
                        Adresse E-Mail *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votreemail@entreprise.de"
                        className="h-12 border-2 border-slate-200 focus:border-blue-500 rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telephone" className="text-slate-700 font-medium flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-600" />
                        Numéro de Téléphone *
                      </Label>
                      <div className="flex gap-3">
                        <Select
                          value={formData.codePhone}
                          onValueChange={(value) => handleSelectChange("codePhone", value)}
                        >
                          <SelectTrigger className="h-12 w-32 border-2 border-slate-200 focus:border-blue-500 rounded-xl">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {codesTelephone.map((code) => (
                              <SelectItem key={code.value} value={code.value}>
                                {code.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input
                          id="telephone"
                          name="telephone"
                          type="tel"
                          placeholder="1234567890"
                          value={formData.telephone}
                          onChange={handleChange}
                          required
                          maxLength={11}
                          className="flex-1"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="entreprise" className="text-slate-700 font-medium flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-blue-600" />
                          Nom de l'Entreprise *
                        </Label>
                        <Input
                          id="entreprise"
                          name="entreprise"
                          type="text"
                          required
                          value={formData.entreprise}
                          onChange={handleChange}
                          placeholder="Votre entreprise"
                          className="h-12 border-2 border-slate-200 focus:border-blue-500 rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="secteur" className="text-slate-700 font-medium flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-blue-600" />
                          Secteur d'Activité *
                        </Label>
                        <Input
                          id="secteur"
                          name="secteur"
                          type="text"
                          required
                          value={formData.secteur}
                          onChange={handleChange}
                          placeholder="Ex: Santé, IT, Industrie..."
                          className="h-12 border-2 border-slate-200 focus:border-blue-500 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-slate-700 font-medium flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        Partenariat dans le cadre de recrutement de : *
                      </Label>
                      <div className="grid md:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                        {partenarisOptions.map((option) => (
                          <div key={option.value} className="flex items-center space-x-3">
                            <Checkbox
                              id={option.value}
                              checked={formData.partenariats.includes(option.value)}
                              onCheckedChange={(checked) => handleCheckboxChange(option.value, checked as boolean)}
                              className="border-2 border-slate-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                            />
                            <Label
                              htmlFor={option.value}
                              className="text-sm font-medium text-slate-700 cursor-pointer"
                            >
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="delai" className="text-slate-700 font-medium flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        Jusqu'à quand voulez-vous recruter ? *
                      </Label>
                      <Select
                        value={formData.delai}
                        onValueChange={(value) => handleSelectChange("delai", value)}
                        required
                      >
                        <SelectTrigger className="h-12 border-2 border-slate-200 focus:border-blue-500 rounded-xl">
                          <SelectValue placeholder="Sélectionnez un délai" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maintenant">Maintenant</SelectItem>
                          <SelectItem value="1-2-mois">Dans 1-2 mois</SelectItem>
                          <SelectItem value="3-mois-plus">Après 3 mois</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-700 font-medium flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-blue-600" />
                        Message (Optionnel)
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Parlez-nous de vos besoins en recrutement..."
                        rows={5}
                        className="border-2 border-slate-200 focus:border-blue-500 rounded-xl resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Envoi en cours...
                        </span>
                      ) : (
                        "Devenir Partenaire"
                      )}
                    </Button>

                    <p className="text-sm text-slate-500 text-center">
                      * Champs obligatoires
                    </p>
                  </form>
                </>
              )}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-4">
                Des questions ? Contactez-nous directement :
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="mailto:partenaires@vivrenallemagne.com" className="text-blue-600 hover:text-blue-700 font-medium">
                  partenaires@vivrenallemagne.com
                </a>
                <span className="text-slate-400">•</span>
                <a href="tel:+33123456789" className="text-blue-600 hover:text-blue-700 font-medium">
                  +33 1 23 45 67 89
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}