import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ComparisonChart from "@/components/ComparisonChart";
import ProjectionGraph from "@/components/ProjectionGraph";
import CalendlyWidget from "@/components/CalendlyWidget";
import { ArrowLeft } from "lucide-react";

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
  const [showHelp, setShowHelp] = useState(false);

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
              <CardTitle className="text-2xl">Your Conversion Rate Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <ComparisonChart userCVR={userCVR} />

              <div className="space-y-4 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Your Conversion Rate:</span>
                  <span className="text-2xl font-bold text-primary">{userCVR.toFixed(2)}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">B2B SaaS Average:</span>
                  <span className="text-xl font-semibold text-muted-foreground">{B2B_AVERAGE}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Top 25% Companies:</span>
                  <span className="text-xl font-semibold text-muted-foreground">{TOP_25_PERCENT}%</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t">
                <h3 className="font-bold text-lg">Conversion Rate Gaps</h3>
                {gapToAverage > 0 && (
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-orange-900">Gap to B2B Average</p>
                    <p className="text-2xl font-bold text-orange-700">{gapToAverage.toFixed(2)}%</p>
                    <p className="text-sm text-orange-800 mt-1">
                      {Math.round(additionalConversionsToAverage)} more {data.conversionType}/month needed
                    </p>
                    {cvValue > 0 && (
                      <p className="text-sm font-semibold text-orange-900 mt-2">
                        Pipeline Impact: ${pipelineImpactAverage.toLocaleString()}/month
                      </p>
                    )}
                  </div>
                )}
                {gapToTop25 > 0 && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900">Gap to Top 25%</p>
                    <p className="text-2xl font-bold text-blue-700">{gapToTop25.toFixed(2)}%</p>
                    <p className="text-sm text-blue-800 mt-1">
                      {Math.round(additionalConversionsToTop25)} more {data.conversionType}/month needed
                    </p>
                    {cvValue > 0 && (
                      <p className="text-sm font-semibold text-blue-900 mt-2">
                        Pipeline Impact: ${pipelineImpactTop25.toLocaleString()}/month
                      </p>
                    )}
                  </div>
                )}
                {gapToAverage <= 0 && gapToTop25 <= 0 && (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-900">🎉 Excellent Performance!</p>
                    <p className="text-sm text-green-800">
                      Your conversion rate exceeds top 25% of B2B SaaS companies
                    </p>
                  </div>
                )}
              </div>

              {/* Optional Pipeline Impact Section */}
              <div className="space-y-3 pt-4 border-t">
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
                  <button
                    type="button"
                    onClick={() => setShowHelp(!showHelp)}
                    className="text-sm text-primary hover:underline"
                  >
                    How can I find my conversion value?
                  </button>
                  {showHelp && (
                    <div className="bg-muted p-3 rounded-md text-sm space-y-1">
                      <p><strong>For demos:</strong> LTV × Sales Close Rate</p>
                      <p><strong>For free trial signups:</strong> LTV × Free trial to paid user conversion rates</p>
                    </div>
                  )}
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
