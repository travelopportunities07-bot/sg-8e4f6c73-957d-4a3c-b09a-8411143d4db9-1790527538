import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

interface PhoneInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

const countryCodes = [
  // Pays prioritaires mentionnés
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+49", country: "Allemagne", flag: "🇩🇪" },
  { code: "+1", country: "États-Unis/Canada", flag: "🇺🇸" },
  { code: "+61", country: "Australie", flag: "🇦🇺" },
  { code: "+43", country: "Autriche", flag: "🇦🇹" },
  { code: "+372", country: "Estonie", flag: "🇪🇪" },
  { code: "+370", country: "Lituanie", flag: "🇱🇹" },
  { code: "+352", country: "Luxembourg", flag: "🇱🇺" },
  { code: "+47", country: "Norvège", flag: "🇳🇴" },
  { code: "+41", country: "Suisse", flag: "🇨🇭" },
  
  // Autres pays d'Europe de l'Ouest
  { code: "+32", country: "Belgique", flag: "🇧🇪" },
  { code: "+45", country: "Danemark", flag: "🇩🇰" },
  { code: "+34", country: "Espagne", flag: "🇪🇸" },
  { code: "+358", country: "Finlande", flag: "🇫🇮" },
  { code: "+353", country: "Irlande", flag: "🇮🇪" },
  { code: "+39", country: "Italie", flag: "🇮🇹" },
  { code: "+31", country: "Pays-Bas", flag: "🇳🇱" },
  { code: "+351", country: "Portugal", flag: "🇵🇹" },
  { code: "+44", country: "Royaume-Uni", flag: "🇬🇧" },
  { code: "+46", country: "Suède", flag: "🇸🇪" },
  
  // Pays d'Afrique (ordre alphabétique)
  { code: "+27", country: "Afrique du Sud", flag: "🇿🇦" },
  { code: "+213", country: "Algérie", flag: "🇩🇿" },
  { code: "+244", country: "Angola", flag: "🇦🇴" },
  { code: "+229", country: "Bénin", flag: "🇧🇯" },
  { code: "+267", country: "Botswana", flag: "🇧🇼" },
  { code: "+226", country: "Burkina Faso", flag: "🇧🇫" },
  { code: "+257", country: "Burundi", flag: "🇧🇮" },
  { code: "+237", country: "Cameroun", flag: "🇨🇲" },
  { code: "+238", country: "Cap-Vert", flag: "🇨🇻" },
  { code: "+236", country: "Centrafrique", flag: "🇨🇫" },
  { code: "+269", country: "Comores", flag: "🇰🇲" },
  { code: "+242", country: "Congo", flag: "🇨🇬" },
  { code: "+225", country: "Côte d'Ivoire", flag: "🇨🇮" },
  { code: "+253", country: "Djibouti", flag: "🇩🇯" },
  { code: "+20", country: "Égypte", flag: "🇪🇬" },
  { code: "+291", country: "Érythrée", flag: "🇪🇷" },
  { code: "+268", country: "Eswatini", flag: "🇸🇿" },
  { code: "+251", country: "Éthiopie", flag: "🇪🇹" },
  { code: "+241", country: "Gabon", flag: "🇬🇦" },
  { code: "+220", country: "Gambie", flag: "🇬🇲" },
  { code: "+233", country: "Ghana", flag: "🇬🇭" },
  { code: "+224", country: "Guinée", flag: "🇬🇳" },
  { code: "+245", country: "Guinée-Bissau", flag: "🇬🇼" },
  { code: "+240", country: "Guinée équatoriale", flag: "🇬🇶" },
  { code: "+254", country: "Kenya", flag: "🇰🇪" },
  { code: "+266", country: "Lesotho", flag: "🇱🇸" },
  { code: "+231", country: "Liberia", flag: "🇱🇷" },
  { code: "+218", country: "Libye", flag: "🇱🇾" },
  { code: "+261", country: "Madagascar", flag: "🇲🇬" },
  { code: "+265", country: "Malawi", flag: "🇲🇼" },
  { code: "+223", country: "Mali", flag: "🇲🇱" },
  { code: "+212", country: "Maroc", flag: "🇲🇦" },
  { code: "+230", country: "Maurice", flag: "🇲🇺" },
  { code: "+222", country: "Mauritanie", flag: "🇲🇷" },
  { code: "+258", country: "Mozambique", flag: "🇲🇿" },
  { code: "+264", country: "Namibie", flag: "🇳🇦" },
  { code: "+227", country: "Niger", flag: "🇳🇪" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+256", country: "Ouganda", flag: "🇺🇬" },
  { code: "+243", country: "RD Congo", flag: "🇨🇩" },
  { code: "+250", country: "Rwanda", flag: "🇷🇼" },
  { code: "+239", country: "Sao Tomé-et-Principe", flag: "🇸🇹" },
  { code: "+221", country: "Sénégal", flag: "🇸🇳" },
  { code: "+248", country: "Seychelles", flag: "🇸🇨" },
  { code: "+232", country: "Sierra Leone", flag: "🇸🇱" },
  { code: "+252", country: "Somalie", flag: "🇸🇴" },
  { code: "+211", country: "Soudan du Sud", flag: "🇸🇸" },
  { code: "+249", country: "Soudan", flag: "🇸🇩" },
  { code: "+255", country: "Tanzanie", flag: "🇹🇿" },
  { code: "+235", country: "Tchad", flag: "🇹🇩" },
  { code: "+228", country: "Togo", flag: "🇹🇬" },
  { code: "+216", country: "Tunisie", flag: "🇹🇳" },
  { code: "+260", country: "Zambie", flag: "🇿🇲" },
  { code: "+263", country: "Zimbabwe", flag: "🇿🇼" },
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
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="max-h-[300px]">
          {countryCodes.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              <span className="flex items-center gap-2">
                <span>{country.flag}</span>
                <span className="text-sm">{country.code}</span>
                <span className="text-xs text-gray-500">{country.country}</span>
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