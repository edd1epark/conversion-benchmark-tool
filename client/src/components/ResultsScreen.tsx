import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ComparisonChart from "@/components/ComparisonChart";
import ProjectionGraph from "@/components/ProjectionGraph";
import CalendlyWidget from "@/components/CalendlyWidget";
import { ArrowLeft, Info } from "lucide-react";

interface ResultsScreenProps {
  data: {
    monthlyTraffic: number;
    monthlyConversions: number;
    conversionType: "demos" | "signups";
    conversionValue: number;
  };
  onBack: () => void;
}

const B2B_AVERAGE = 2.3;
const TOP_25_PERCENT = 5.3;

export default function ResultsScreen({ data, onBack }: ResultsScreenProps) {
  const [conversionValue, setConversionValue] = useState("");

  const userCVR = (data.monthlyConversions / data.monthlyTraffic) * 100;
  const cvValue = parseFloat(conversionValue) || 0;

  // Calculate gaps
  const gapToAverage = B2B_AVERAGE - userCVR;
  const gapToTop25 = TOP_25_PERCENT - userCVR;

  // Calculate additional conversions if user reached benchmarks
  const additionalConversionsToAverage = (B2B_AVERAGE / 100) * data.monthlyTraffic - data.monthlyConversions;
  const additionalConversionsToTop25 = (TOP_25_PERCENT / 100) * data.monthlyTraffic - data.monthlyConversions;

  // Calculate pipeline impact
  const pipelineImpactAverage = cvValue > 0 ? additionalConversionsToAverage * cvValue : 0;
  const pipelineImpactTop25 = cvValue > 0 ? additionalConversionsToTop25 * cvValue : 0;

  return (
    <div className="space-y-8">
      <Button variant="outline" onClick={onBack} className="gap-2">
        <ArrowLeft className="h-4 w-4" />
        Back to Form
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side - Comparison Metrics */}
        <div className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Conversion Rate Comparison</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <ComparisonChart userCVR={userCVR} monthlyTraffic={data.monthlyTraffic} conversionValue={cvValue} conversionType={data.conversionType} />

              {/* 30% CVR Increase Impact Section */}
              <div className="mt-6 pt-6 border-t">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 space-y-4">
                  <h3 className="font-bold text-xl text-blue-900">30% CVR Increase Impact</h3>
                  
                  {(() => {
                    const newCVR = userCVR * 1.3;
                    const newMonthlyConversions = (newCVR / 100) * data.monthlyTraffic;
                    const monthlyIncrease = newMonthlyConversions - data.monthlyConversions;
                    const threeMonthIncrease = monthlyIncrease * 3;
                    const sixMonthIncrease = monthlyIncrease * 6;
                    
                    const formatRevenue = (amount: number) => {
                      if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`;
                      if (amount >= 1000) return `$${(amount / 1000).toFixed(0)}K`;
                      return `$${amount.toFixed(0)}`;
                    };
                    
                    return (
                      <>
                        <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                          <p className="text-sm text-blue-700 font-medium mb-1">New Conversion Rate</p>
                          <p className="text-3xl font-bold text-blue-900">{newCVR.toFixed(2)}%</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div className="bg-white rounded-lg p-4 border border-blue-200">
                            <p className="text-xs text-blue-600 font-semibold mb-2">MONTHLY IMPACT</p>
                            <p className="text-xl font-bold text-blue-900">
                              +{Math.round(monthlyIncrease)} {data.conversionType}
                            </p>
                            {cvValue > 0 && (
                              <p className="text-sm font-semibold text-blue-700 mt-1">
                                {formatRevenue(monthlyIncrease * cvValue)}
                              </p>
                            )}
                          </div>
                          
                          <div className="bg-white rounded-lg p-4 border border-blue-200">
                            <p className="text-xs text-blue-600 font-semibold mb-2">3-MONTH IMPACT</p>
                            <p className="text-xl font-bold text-blue-900">
                              +{Math.round(threeMonthIncrease)} {data.conversionType}
                            </p>
                            {cvValue > 0 && (
                              <p className="text-sm font-semibold text-blue-700 mt-1">
                                {formatRevenue(threeMonthIncrease * cvValue)}
                              </p>
                            )}
                          </div>
                          
                          <div className="bg-white rounded-lg p-4 border border-blue-200">
                            <p className="text-xs text-blue-600 font-semibold mb-2">6-MONTH IMPACT</p>
                            <p className="text-xl font-bold text-blue-900">
                              +{Math.round(sixMonthIncrease)} {data.conversionType}
                            </p>
                            {cvValue > 0 && (
                              <p className="text-sm font-semibold text-blue-700 mt-1">
                                {formatRevenue(sixMonthIncrease * cvValue)}
                              </p>
                            )}
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>

              {/* Optional Pipeline Impact Section */}
              <div className="space-y-3 pt-6 border-t mt-6">
                <h3 className="font-bold text-lg">Find pipeline impact:</h3>
                <div className="space-y-2">
                  <Label htmlFor="cv" className="text-base font-semibold bg-blue-100 text-blue-900 px-3 py-1.5 rounded-md inline-block">
                    Conversion Value ($)
                  </Label>
                  <Input
                    id="cv"
                    type="number"
                    placeholder="e.g., 5000"
                    value={conversionValue}
                    onChange={(e) => setConversionValue(e.target.value)}
                    className="text-lg"
                    min="0"
                  />
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Info className="h-4 w-4 flex-shrink-0" />
                    <span className="font-medium">How can I find my conversion value?</span>
                  </div>
                  <div className="bg-muted p-3 rounded-md text-sm space-y-1">
                    <p><strong>For demos:</strong> LTV × Sales Close Rate</p>
                    <p><strong>For free trial signups:</strong> LTV × Free trial to paid user conversion rates</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Calendly Widget */}
        <div>
          <CalendlyWidget />
        </div>
      </div>

      {/* Bottom Section - Projection Graph */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">
            {cvValue > 0 ? "Revenue Projection" : "Lead Projection"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ProjectionGraph
            monthlyTraffic={data.monthlyTraffic}
            currentCVR={userCVR}
            conversionValue={cvValue}
            conversionType={data.conversionType}
          />
        </CardContent>
      </Card>
    </div>
  );
}
