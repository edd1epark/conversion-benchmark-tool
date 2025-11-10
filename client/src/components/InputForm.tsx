import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface InputFormProps {
  onSubmit: (data: {
    monthlyTraffic: number;
    monthlyConversions: number;
    conversionType: "demos" | "signups";
    conversionValue: number;
  }) => void;
}

export default function InputForm({ onSubmit }: InputFormProps) {
  const [monthlyTraffic, setMonthlyTraffic] = useState("");
  const [monthlyConversions, setMonthlyConversions] = useState("");
  const [conversionType, setConversionType] = useState<"demos" | "signups">("demos");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const traffic = parseInt(monthlyTraffic) || 0;
    const conversions = parseInt(monthlyConversions) || 0;
    
    if (traffic > 0 && conversions > 0) {
      onSubmit({
        monthlyTraffic: traffic,
        monthlyConversions: conversions,
        conversionType,
        conversionValue: 0,
      });
    }
  };

  return (
    <div className="flex justify-center items-start min-h-[60vh]">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl md:text-4xl font-bold">
            Compare my Conversion Rate to B2B SaaS Benchmarks
          </CardTitle>
          <CardDescription className="text-base md:text-lg">
            This tool helps you compare your website visitor to demo/signup conversion rates to B2B SaaS benchmarks. Input your numbers to see results
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="traffic" className="text-base font-semibold bg-purple-100 text-purple-900 px-3 py-1.5 rounded-md inline-block">
                What is your current monthly traffic?
              </Label>
              <Input
                id="traffic"
                type="number"
                placeholder="e.g., 10000"
                value={monthlyTraffic}
                onChange={(e) => setMonthlyTraffic(e.target.value)}
                className="text-lg"
                required
                min="1"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="conversions" className="text-base font-semibold bg-orange-100 text-orange-900 px-3 py-1.5 rounded-md inline-block">
                How many monthly conversions (demos/signups) are you getting through your website?
              </Label>
              <Input
                id="conversions"
                type="number"
                placeholder="e.g., 250"
                value={monthlyConversions}
                onChange={(e) => setMonthlyConversions(e.target.value)}
                className="text-lg"
                required
                min="1"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type" className="text-base font-semibold bg-green-100 text-green-900 px-3 py-1.5 rounded-md inline-block">
                What is your primary conversion?
              </Label>
              <Select value={conversionType} onValueChange={(value: "demos" | "signups") => setConversionType(value)}>
                <SelectTrigger id="type" className="text-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="demos">Demos</SelectItem>
                  <SelectItem value="signups">Signups</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" size="lg" className="w-full text-lg font-semibold">
              See Results
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
