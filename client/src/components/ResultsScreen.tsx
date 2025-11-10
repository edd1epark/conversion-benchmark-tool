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
              <CardTitle className="text-2xl">Your Conversion Rate Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <ComparisonChart userCVR={userCVR} monthlyTraffic={data.monthlyTraffic} />

              {/* Optional Pipeline Impact Section */}
              <div className="space-y-3 pt-6 border-t mt-6">
                <h3 className="font-bold text-lg">Find pipeline impact:</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="cv" className="text-base font-semibold bg-blue-100 text-blue-900 px-3 py-1.5 rounded-md inline-flex items-center gap-2">
                      Conversion Value ($)
                      <Info className="h-4 w-4" />
                    </Label>
                  </div>
                  <Input
                    id="cv"
                    type="number"
                    placeholder="e.g., 5000"
                    value={conversionValue}
                    onChange={(e) => setConversionValue(e.target.value)}
                    className="text-lg"
                    min="0"
                  />
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
