interface PDFData {
  monthlyTraffic: number;
  monthlyConversions: number;
  conversionType: "demos" | "signups";
  conversionValue: number;
}

export async function generateConversionReportPDF(data: PDFData) {
  // Use native browser print functionality
  // Users can save as PDF from the print dialog
  window.print();
}
