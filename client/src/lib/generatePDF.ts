import html2canvas from 'html2canvas';

interface PDFData {
  monthlyTraffic: number;
  monthlyConversions: number;
  conversionType: "demos" | "signups";
  conversionValue: number;
}

// Helper to wait for a specified time
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function generateConversionReportPDF(data: PDFData) {
  try {
    // Find the results container (everything except Calendly)
    const resultsContainer = document.querySelector('.results-container') as HTMLElement;
    
    if (!resultsContainer) {
      console.error('Results container not found');
      throw new Error('Could not find results page to capture');
    }

    // Wait a bit to ensure everything is rendered
    await wait(300);

    // Scroll to top to ensure everything is in view
    window.scrollTo({ top: 0, behavior: 'instant' });
    await wait(200);

    // Capture the screenshot at 1440px width
    const canvas = await html2canvas(resultsContainer, {
      scale: 2, // High quality
      backgroundColor: '#f1f5f9', // Match the page background
      logging: false,
      useCORS: true,
      allowTaint: true,
      width: 1440,
      windowWidth: 1440,
    });

    // Convert to blob and download - wrap in promise to properly await
    await new Promise<void>((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) {
          try {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'conversion-rate-report.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            resolve();
          } catch (error) {
            reject(error);
          }
        } else {
          reject(new Error('Failed to create image blob'));
        }
      }, 'image/png');
    });

    console.log('Screenshot generated and downloaded successfully');
  } catch (error) {
    console.error('Error generating screenshot:', error);
    throw error;
  }
}
