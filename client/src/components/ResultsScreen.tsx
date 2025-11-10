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
              <ComparisonChart userCVR={userCVR} monthlyTraffic={data.monthlyTraffic} conversionValue={cvValue} />

              {/* 30% CVR Increase Impact Section */}
              <div className="space-y-4 pt-6 border-t mt-6">
                <h3 className="font-bold text-lg">30% CVR Increase Impact</h3>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-6 space-y-4">
                  {/* New CVR */}
                  <div>
                    <p className="text-sm font-semibold text-blue-800 mb-1">New Conversion Rate</p>
                    <p className="text-3xl font-bold text-blue-900">{(userCVR * 1.3).toFixed(2)}%</p>
                    <p className="text-xs text-blue-700">+{(userCVR * 0.3).toFixed(2)}% increase</p>
                  </div>

                  {/* Monthly Impact */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-xs font-semibold text-slate-600 mb-1">Monthly Impact</p>
                      <p className="text-2xl font-bold text-slate-900">
                        {Math.round((userCVR * 1.3 / 100) * data.monthlyTraffic - (userCVR / 100) * data.monthlyTraffic)}
                      </p>
                      <p className="text-xs text-slate-600">more {data.conversionType}/month</p>
                      {cvValue > 0 && (
                        <p className="text-sm font-semibold text-green-700 mt-2">
                          {(() => {
                            const monthlyDiff = Math.round((userCVR * 1.3 / 100) * data.monthlyTraffic - (userCVR / 100) * data.monthlyTraffic);
                            const revenue = monthlyDiff * cvValue;
                            if (revenue >= 1000000) return `$${(revenue / 1000000).toFixed(1)}M`;
                            if (revenue >= 1000) return `$${(revenue / 1000).toFixed(0)}K`;
                            return `$${revenue.toFixed(0)}`;
                          })()}
                        </p>
                      )}
                    </div>

                    {/* 3-Month Impact */}
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-xs font-semibold text-slate-600 mb-1">3-Month Impact</p>
                      <p className="text-2xl font-bold text-slate-900">
                        {Math.round(((userCVR * 1.3 / 100) * data.monthlyTraffic - (userCVR / 100) * data.monthlyTraffic) * 3)}
                      </p>
                      <p className="text-xs text-slate-600">more {data.conversionType}</p>
                      {cvValue > 0 && (
                        <p className="text-sm font-semibold text-green-700 mt-2">
                          {(() => {
                            const monthlyDiff = Math.round((userCVR * 1.3 / 100) * data.monthlyTraffic - (userCVR / 100) * data.monthlyTraffic);
                            const revenue = monthlyDiff * cvValue * 3;
                            if (revenue >= 1000000) return `$${(revenue / 1000000).toFixed(1)}M`;
                            if (revenue >= 1000) return `$${(revenue / 1000).toFixed(0)}K`;
                            return `$${revenue.toFixed(0)}`;
                          })()}
                        </p>
                      )}
                    </div>

                    {/* 6-Month Impact */}
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-xs font-semibold text-slate-600 mb-1">6-Month Impact</p>
                      <p className="text-2xl font-bold text-slate-900">
                        {Math.round(((userCVR * 1.3 / 100) * data.monthlyTraffic - (userCVR / 100) * data.monthlyTraffic) * 6)}
                      </p>
                      <p className="text-xs text-slate-600">more {data.conversionType}</p>
                      {cvValue > 0 && (
                        <p className="text-sm font-semibold text-green-700 mt-2">
                          {(() => {
                            const monthlyDiff = Math.round((userCVR * 1.3 / 100) * data.monthlyTraffic - (userCVR / 100) * data.monthlyTraffic);
                            const revenue = monthlyDiff * cvValue * 6;
                            if (revenue >= 1000000) return `$${(revenue / 1000000).toFixed(1)}M`;
                            if (revenue >= 1000) return `$${(revenue / 1000).toFixed(0)}K`;
                            return `$${revenue.toFixed(0)}`;
                          })()}
                        </p>
                      )}
                    </div>
                  </div>
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
