import { useState } from "react";
import { APP_LOGO, APP_TITLE } from "@/const";
import InputForm from "@/components/InputForm";
import ResultsScreen from "@/components/ResultsScreen";

export default function Home() {
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    monthlyTraffic: 0,
    monthlyConversions: 0,
    conversionType: "demos" as "demos" | "signups",
    conversionValue: 0,
  });

  const handleSubmit = (data: typeof formData) => {
    setFormData(data);
    setShowResults(true);
  };

  const handleBack = () => {
    setShowResults(false);
  };

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="container max-w-7xl">
        <div className="flex items-center gap-3 mb-8">
          <img src={APP_LOGO} alt="Logo" className="h-12 w-12" />
          <h1 className="text-2xl font-bold text-foreground">{APP_TITLE}</h1>
        </div>

        {!showResults ? (
          <InputForm onSubmit={handleSubmit} />
        ) : (
          <ResultsScreen data={formData} onBack={handleBack} />
        )}
      </div>
    </div>
  );
}
