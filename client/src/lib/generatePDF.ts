import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { APP_LOGO } from '@/const';

interface PDFData {
  monthlyTraffic: number;
  monthlyConversions: number;
  conversionType: "demos" | "signups";
  conversionValue: number;
}

const B2B_AVERAGE = 2.3;
const TOP_25_PERCENT = 5.3;

export async function generateConversionReportPDF(data: PDFData) {
  const doc = new jsPDF();
  const userCVR = (data.monthlyConversions / data.monthlyTraffic) * 100;
  const cvValue = data.conversionValue || 0;
  
  // Calculate metrics
  const gapToAverage = B2B_AVERAGE - userCVR;
  const gapToTop25 = TOP_25_PERCENT - userCVR;
  const additionalConversionsToAverage = (B2B_AVERAGE / 100) * data.monthlyTraffic - data.monthlyConversions;
  const additionalConversionsToTop25 = (TOP_25_PERCENT / 100) * data.monthlyTraffic - data.monthlyConversions;
  const pipelineImpactAverage = cvValue > 0 ? additionalConversionsToAverage * cvValue : 0;
  const pipelineImpactTop25 = cvValue > 0 ? additionalConversionsToTop25 * cvValue : 0;
  
  // 30% increase calculations
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
  
  let yPos = 20;
  
  // Add logo if available
  try {
    if (APP_LOGO) {
      // Load logo image
      const logoImg = new Image();
      logoImg.crossOrigin = 'anonymous';
      await new Promise((resolve, reject) => {
        logoImg.onload = resolve;
        logoImg.onerror = reject;
        logoImg.src = APP_LOGO;
      });
      
      // Add logo to PDF (small size in top-left)
      doc.addImage(logoImg, 'PNG', 15, 10, 30, 10);
      yPos = 25;
    }
  } catch (error) {
    console.warn('Could not load logo for PDF:', error);
  }
  
  // Title
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('Conversion Rate Benchmark Report', 105, yPos, { align: 'center' });
  yPos += 15;
  
  // Your Metrics Section
  doc.setFontSize(16);
  doc.text('Your Metrics', 20, yPos);
  yPos += 10;
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(`Monthly Traffic: ${data.monthlyTraffic.toLocaleString()}`, 20, yPos);
  yPos += 7;
  doc.text(`Monthly Conversions: ${data.monthlyConversions.toLocaleString()} ${data.conversionType}`, 20, yPos);
  yPos += 7;
  doc.text(`Your Conversion Rate: ${userCVR.toFixed(2)}%`, 20, yPos);
  yPos += 7;
  if (cvValue > 0) {
    doc.text(`Conversion Value: ${formatRevenue(cvValue)}`, 20, yPos);
    yPos += 7;
  }
  yPos += 5;
  
  // Capture thermometer chart
  try {
    const chartElement = document.querySelector('[data-chart="thermometer"]') as HTMLElement;
    if (chartElement) {
      const canvas = await html2canvas(chartElement, {
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false,
      });
      const imgData = canvas.toDataURL('image/png');
      
      // Add chart to PDF
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('Benchmark Comparison', 20, yPos);
      yPos += 10;
      
      const imgWidth = 80;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      doc.addImage(imgData, 'PNG', 20, yPos, imgWidth, imgHeight);
      yPos += imgHeight + 10;
    }
  } catch (error) {
    console.warn('Could not capture thermometer chart:', error);
    
    // Fallback to text-based benchmark comparison
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Benchmark Comparison', 20, yPos);
    yPos += 10;
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(`Your CVR: ${userCVR.toFixed(2)}%`, 20, yPos);
    yPos += 7;
    doc.text(`B2B SaaS Average: ${B2B_AVERAGE}%`, 20, yPos);
    yPos += 7;
    doc.text(`Top 25% Benchmark: ${TOP_25_PERCENT}%`, 20, yPos);
    yPos += 10;
  }
  
  // Gap Analysis
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Gap to Benchmarks', 20, yPos);
  yPos += 8;
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  if (gapToAverage > 0) {
    doc.text(`Gap to Average: ${gapToAverage.toFixed(2)}% (${Math.round(additionalConversionsToAverage)} more ${data.conversionType} needed)`, 20, yPos);
    yPos += 7;
    if (cvValue > 0) {
      doc.text(`  Pipeline Impact: ${formatRevenue(pipelineImpactAverage)}`, 20, yPos);
      yPos += 7;
    }
  } else {
    doc.text(`You're ${Math.abs(gapToAverage).toFixed(2)}% above the average!`, 20, yPos);
    yPos += 7;
  }
  
  if (gapToTop25 > 0) {
    doc.text(`Gap to Top 25%: ${gapToTop25.toFixed(2)}% (${Math.round(additionalConversionsToTop25)} more ${data.conversionType} needed)`, 20, yPos);
    yPos += 7;
    if (cvValue > 0) {
      doc.text(`  Pipeline Impact: ${formatRevenue(pipelineImpactTop25)}`, 20, yPos);
      yPos += 7;
    }
  } else {
    doc.text(`You're in the top 25%! (${Math.abs(gapToTop25).toFixed(2)}% above benchmark)`, 20, yPos);
    yPos += 7;
  }
  yPos += 5;
  
  // 30% CVR Increase Impact
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('30% CVR Increase Impact', 20, yPos);
  yPos += 10;
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(`New Conversion Rate: ${newCVR.toFixed(2)}%`, 20, yPos);
  yPos += 7;
  doc.text(`Monthly Impact: +${Math.round(monthlyIncrease)} ${data.conversionType}${cvValue > 0 ? ` (${formatRevenue(monthlyIncrease * cvValue)})` : ''}`, 20, yPos);
  yPos += 7;
  doc.text(`3-Month Impact: +${Math.round(threeMonthIncrease)} ${data.conversionType}${cvValue > 0 ? ` (${formatRevenue(threeMonthIncrease * cvValue)})` : ''}`, 20, yPos);
  yPos += 7;
  doc.text(`6-Month Impact: +${Math.round(sixMonthIncrease)} ${data.conversionType}${cvValue > 0 ? ` (${formatRevenue(sixMonthIncrease * cvValue)})` : ''}`, 20, yPos);
  yPos += 15;
  
  // Check if we need a new page
  if (yPos > 220) {
    doc.addPage();
    yPos = 20;
  }
  
  // Capture projection graph
  try {
    const graphElement = document.querySelector('[data-chart="projection"]') as HTMLElement;
    if (graphElement) {
      const canvas = await html2canvas(graphElement, {
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false,
      });
      const imgData = canvas.toDataURL('image/png');
      
      // Add graph to PDF
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('12-Month Projection', 20, yPos);
      yPos += 10;
      
      const imgWidth = 170;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Check if graph fits on current page
      if (yPos + imgHeight > 270) {
        doc.addPage();
        yPos = 20;
        doc.text('12-Month Projection', 20, yPos);
        yPos += 10;
      }
      
      doc.addImage(imgData, 'PNG', 20, yPos, imgWidth, imgHeight);
      yPos += imgHeight + 10;
    }
  } catch (error) {
    console.warn('Could not capture projection graph:', error);
    
    // Fallback to text-based projection
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('12-Month Conversion Projection', 20, yPos);
    yPos += 10;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Monthly breakdown of conversions over the next 12 months:', 20, yPos);
    yPos += 8;
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const colWidth = 35;
    const rowHeight = 7;
    
    for (let i = 0; i < 12; i += 3) {
      let xPos = 20;
      for (let j = 0; j < 3 && (i + j) < 12; j++) {
        const monthIndex = i + j;
        const conversions = Math.round(data.monthlyConversions);
        doc.text(`${months[monthIndex]}: ${conversions}`, xPos, yPos);
        xPos += colWidth;
      }
      yPos += rowHeight;
    }
  }
  
  // Footer on last page
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'italic');
    doc.text('Generated by Grox - B2B SaaS Conversion Rate Benchmark Tool', 105, 285, { align: 'center' });
    doc.text(`Page ${i} of ${pageCount}`, 105, 290, { align: 'center' });
  }
  
  // Save the PDF
  doc.save('conversion-rate-report.pdf');
}
