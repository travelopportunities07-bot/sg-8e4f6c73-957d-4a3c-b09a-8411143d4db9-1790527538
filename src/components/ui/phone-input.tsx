import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

interface PhoneInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

const countryCodes = [
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+1", country: "États-Unis/Canada", flag: "🇺🇸" },
  { code: "+44", country: "Royaume-Uni", flag: "🇬🇧" },
  { code: "+49", country: "Allemagne", flag: "🇩🇪" },
  { code: "+34", country: "Espagne", flag: "🇪🇸" },
  { code: "+39", country: "Italie", flag: "🇮🇹" },
  { code: "+32", country: "Belgique", flag: "🇧🇪" },
  { code: "+41", country: "Suisse", flag: "🇨🇭" },
  { code: "+352", country: "Luxembourg", flag: "🇱🇺" },
  { code: "+31", country: "Pays-Bas", flag: "🇳🇱" },
  { code: "+351", country: "Portugal", flag: "🇵🇹" },
  { code: "+30", country: "Grèce", flag: "🇬🇷" },
  { code: "+43", country: "Autriche", flag: "🇦🇹" },
  { code: "+45", country: "Danemark", flag: "🇩🇰" },
  { code: "+46", country: "Suède", flag: "🇸🇪" },
  { code: "+47", country: "Norvège", flag: "🇳🇴" },
  { code: "+358", country: "Finlande", flag: "🇫🇮" },
  { code: "+353", country: "Irlande", flag: "🇮🇪" },
  { code: "+372", country: "Estonie", flag: "🇪🇪" },
  { code: "+370", country: "Lituanie", flag: "🇱🇹" },
  { code: "+371", country: "Lettonie", flag: "🇱🇻" },
  { code: "+48", country: "Pologne", flag: "🇵🇱" },
  { code: "+420", country: "République tchèque", flag: "🇨🇿" },
  { code: "+36", country: "Hongrie", flag: "🇭🇺" },
  { code: "+40", country: "Roumanie", flag: "🇷🇴" },
  { code: "+359", country: "Bulgarie", flag: "🇧🇬" },
  { code: "+385", country: "Croatie", flag: "🇭🇷" },
  { code: "+386", country: "Slovénie", flag: "🇸🇮" },
  { code: "+7", country: "Russie", flag: "🇷🇺" },
  { code: "+380", country: "Ukraine", flag: "🇺🇦" },
  { code: "+90", country: "Turquie", flag: "🇹🇷" },
  { code: "+20", country: "Égypte", flag: "🇪🇬" },
  { code: "+27", country: "Afrique du Sud", flag: "🇿🇦" },
  { code: "+212", country: "Maroc", flag: "🇲🇦" },
  { code: "+213", country: "Algérie", flag: "🇩🇿" },
  { code: "+216", country: "Tunisie", flag: "🇹🇳" },
  { code: "+225", country: "Côte d'Ivoire", flag: "🇨🇮" },
  { code: "+221", country: "Sénégal", flag: "🇸🇳" },
  { code: "+237", country: "Cameroun", flag: "🇨🇲" },
  { code: "+243", country: "RD Congo", flag: "🇨🇩" },
  { code: "+81", country: "Japon", flag: "🇯🇵" },
  { code: "+82", country: "Corée du Sud", flag: "🇰🇷" },
  { code: "+86", country: "Chine", flag: "🇨🇳" },
  { code: "+91", country: "Inde", flag: "🇮🇳" },
  { code: "+61", country: "Australie", flag: "🇦🇺" },
  { code: "+64", country: "Nouvelle-Zélande", flag: "🇳🇿" },
  { code: "+55", country: "Brésil", flag: "🇧🇷" },
  { code: "+52", country: "Mexique", flag: "🇲🇽" },
  { code: "+54", country: "Argentine", flag: "🇦🇷" },
  { code: "+56", country: "Chili", flag: "🇨🇱" },
  { code: "+57", country: "Colombie", flag: "🇨🇴" },
  { code: "+971", country: "Émirats arabes unis", flag: "🇦🇪" },
  { code: "+966", country: "Arabie saoudite", flag: "🇸🇦" },
  { code: "+965", country: "Koweït", flag: "🇰🇼" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
];

export function PhoneInput({ value = "", onChange, placeholder = "Numéro de téléphone" }: PhoneInputProps) {
  const [countryCode, setCountryCode] = useState("+33");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryCodeChange = (newCode: string) => {
    setCountryCode(newCode);
    if (onChange) {
      onChange(`${newCode} ${phoneNumber}`);
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = e.target.value;
    setPhoneNumber(newNumber);
    if (onChange) {
      onChange(`${countryCode} ${newNumber}`);
    }
  };

  return (
    <div className="flex gap-2">
      <Select value={countryCode} onValueChange={handleCountryCodeChange}>
        <SelectTrigger className="w-[140px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="max-h-[300px]">
          {countryCodes.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              <span className="flex items-center gap-2">
                <span>{country.flag}</span>
                <span>{country.code}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="tel"
        placeholder={placeholder}
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        className="flex-1"
      />
    </div>
  );
}