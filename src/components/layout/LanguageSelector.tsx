import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = (lang: "fr" | "de") => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={language === "fr" ? "default" : "ghost"}
        size="sm"
        onClick={() => toggleLanguage("fr")}
        className="font-medium"
      >
        FR
      </Button>
      <Button
        variant={language === "de" ? "default" : "ghost"}
        size="sm"
        onClick={() => toggleLanguage("de")}
        className="font-medium"
      >
        DE
      </Button>
    </div>
  );
}