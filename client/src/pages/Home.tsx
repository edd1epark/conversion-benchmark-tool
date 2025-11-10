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
    <div className="min-h-screen py-8 md:py-12 relative overflow-hidden">
      {/* Bottom-left grid */}
      <div 
        className="absolute pointer-events-none" 
        style={{ 
          width: '2795.18px',
          height: '1863.45px',
          left: '-1520.47px',
          bottom: '-604.56px',
          zIndex: 0
        }}
      >
        <img src="/grid-bottom-left.svg" alt="" style={{ width: '100%', height: '100%' }} />
      </div>
      
      {/* Top-right grid */}
      <div 
        className="absolute pointer-events-none" 
        style={{ 
          width: '3726.9px',
          height: '1397.63px',
          right: '-864.47px',
          top: '-84.62px',
          zIndex: 0
        }}
      >
        <img src="/grid-top-right.svg" alt="" style={{ width: '100%', height: '100%' }} />
      </div>
      
      <div className="container max-w-7xl relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <img src="/logo-complete.svg" alt="Logo" className="h-16 w-auto" />
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-1">{APP_TITLE}</h1>
            <p className="text-slate-600">Compare your conversion rates to B2B SaaS benchmarks</p>
          </div>
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
