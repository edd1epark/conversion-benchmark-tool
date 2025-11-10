import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CalendlyWidget() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <Card className="shadow-lg h-full">
      <CardHeader>
        <CardTitle className="text-2xl">Convert 30% More in 90 Days, or you don't pay.</CardTitle>
        <CardDescription className="text-base">
          Book a strategy call and get personalized tips on how you can boost your website conversions.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div
          className="calendly-inline-widget flex-1"
          data-url="https://calendly.com/eddie-groxweb/strategy-call-homepage?hide_gdpr_banner=1&text_color=222222"
          style={{ minWidth: "320px", minHeight: "800px" }}
        />
      </CardContent>
    </Card>
  );
}
