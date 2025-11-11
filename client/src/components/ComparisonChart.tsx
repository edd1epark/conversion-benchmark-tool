import { Info } from "lucide-react";

interface ComparisonChartProps {
  userCVR: number;
  monthlyTraffic: number;
  conversionValue?: number;
  conversionType: "demos" | "signups";
}

const B2B_AVERAGE = 2.3;
const TOP_25_PERCENT = 5.3;

export default function ComparisonChart({ userCVR, monthlyTraffic, conversionValue = 0, conversionType }: ComparisonChartProps) {
  // Calculate positions on the scale (0-100%)
  const maxValue = Math.max(userCVR, TOP_25_PERCENT) * 1.3; // Add 30% padding at top
  const userPosition = (userCVR / maxValue) * 100;
  const avgPosition = (B2B_AVERAGE / maxValue) * 100;
  const topPosition = (TOP_25_PERCENT / maxValue) * 100;

  // Calculate gaps
  const gapToAverage = userCVR - B2B_AVERAGE;
  const gapToTop = userCVR - TOP_25_PERCENT;
  
  // Calculate ratio metrics (percentage above/below)
  const ratioToAverage = ((userCVR - B2B_AVERAGE) / B2B_AVERAGE) * 100;
  const ratioToTop = ((userCVR - TOP_25_PERCENT) / TOP_25_PERCENT) * 100;
  
  // Calculate conversion differences
  const demosToAverage = Math.round((B2B_AVERAGE / 100) * monthlyTraffic - (userCVR / 100) * monthlyTraffic);
  const demosToTop = Math.round((TOP_25_PERCENT / 100) * monthlyTraffic - (userCVR / 100) * monthlyTraffic);
  
  // Calculate revenue impact (annual)
  const revenueToAverage = conversionValue > 0 ? (demosToAverage * conversionValue * 12) : 0;
  const revenueToTop = conversionValue > 0 ? (Math.abs(demosToTop) * conversionValue * 12) : 0;
  
  // Format revenue for display
  const formatRevenue = (revenue: number) => {
    if (revenue >= 1000000) {
      return `$${(revenue / 1000000).toFixed(1)}M`;
    } else if (revenue >= 1000) {
      return `$${(revenue / 1000).toFixed(0)}K`;
    }
    return `$${revenue.toFixed(0)}`;
  };

  // Fixed color scheme
  const USER_CVR_COLOR = '#5189FB';     // Blue
  const AVG_COLOR = '#E46BCF';          // Pink
  const TOP_25_COLOR = '#06D6A0';       // Turquoise
  
  // Generate gradient for thermometer fill (Your CVR)
  const getUserGradient = () => {
    return 'linear-gradient(to top, #5189FB, #7AA7FC, #A3C5FD)';
  };

  // Get vertical offset for label when markers overlap
  const getLabelVerticalOffset = (value: number) => {
    const OVERLAP_THRESHOLD = 10; // 10% of scale
    const STACK_SPACING = 18; // 18px spacing between stacked labels
    
    // Check which markers are close to this one
    let offset = 0;
    
    if (value === userCVR) {
      // Check if user CVR is close to B2B average
      if (Math.abs(userPosition - avgPosition) < OVERLAP_THRESHOLD) {
        // User is close to avg, move up if user is higher
        if (userCVR > B2B_AVERAGE) offset = -STACK_SPACING;
      }
      // Check if user CVR is close to top 25%
      if (Math.abs(userPosition - topPosition) < OVERLAP_THRESHOLD) {
        // User is close to top, move down if user is lower
        if (userCVR < TOP_25_PERCENT) offset = STACK_SPACING;
      }
    } else if (value === B2B_AVERAGE) {
      // Check if B2B avg is close to user CVR
      if (Math.abs(avgPosition - userPosition) < OVERLAP_THRESHOLD) {
        // Avg is close to user, move down if avg is lower
        if (B2B_AVERAGE < userCVR) offset = STACK_SPACING;
      }
      // Check if B2B avg is close to top 25%
      if (Math.abs(avgPosition - topPosition) < OVERLAP_THRESHOLD) {
        // Avg is close to top, move down if avg is lower
        if (B2B_AVERAGE < TOP_25_PERCENT) offset = STACK_SPACING;
      }
    } else if (value === TOP_25_PERCENT) {
      // Check if top 25% is close to user CVR
      if (Math.abs(topPosition - userPosition) < OVERLAP_THRESHOLD) {
        // Top is close to user, move up if top is higher
        if (TOP_25_PERCENT > userCVR) offset = -STACK_SPACING;
      }
      // Check if top 25% is close to B2B avg
      if (Math.abs(topPosition - avgPosition) < OVERLAP_THRESHOLD) {
        // Top is close to avg, move up if top is higher
        if (TOP_25_PERCENT > B2B_AVERAGE) offset = -STACK_SPACING;
      }
    }
    
    return offset;
  };

  return (
    <div className="space-y-4 w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-start gap-6 sm:gap-8 md:gap-16 lg:gap-4 xl:gap-6 w-full">
        {/* Thermometer container with proper spacing */}
        <div className="relative h-96 w-full md:w-auto flex justify-center md:justify-start">
          <div className="relative h-96 w-80 md:w-56 lg:w-64 xl:w-80">
            {/* Scale markers on the left */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-slate-500 w-12 text-right pr-2">
              <span>{maxValue.toFixed(1)}%</span>
              <span>{(maxValue * 0.75).toFixed(1)}%</span>
              <span>{(maxValue * 0.5).toFixed(1)}%</span>
              <span>{(maxValue * 0.25).toFixed(1)}%</span>
              <span>0%</span>
            </div>

            {/* Thermometer track */}
            <div className="absolute left-14 w-16 h-full bg-gradient-to-t from-slate-200 via-slate-100 to-slate-50 rounded-full border-2 border-slate-300 overflow-hidden">
              {/* Fill based on user's CVR with rounded bottom */}
              <div 
                className="absolute bottom-0 left-0 right-0 transition-all duration-1000 ease-out rounded-b-full"
                style={{ 
                  background: getUserGradient(),
                  height: `${userPosition}%`
                }}
              />
            </div>

            {/* Markers positioned relative to the container */}
            {/* Top 25% marker */}
            <div 
              className="absolute left-14 flex items-center transition-all duration-700"
              style={{ bottom: `${topPosition}%`, transform: 'translateY(50%)' }}
            >
              <div className="w-16 h-1" style={{ backgroundColor: TOP_25_COLOR }} />
              <div 
                className="flex flex-row sm:flex-col md:flex-row lg:flex-col xl:flex-row items-center sm:items-start md:items-center lg:items-start xl:items-center gap-1 sm:gap-0.5 md:gap-1 lg:gap-0.5 xl:gap-2 flex-shrink-0 transition-all duration-300"
                style={{ 
                  marginLeft: '8px',
                  transform: `translateY(${getLabelVerticalOffset(TOP_25_PERCENT)}px)`,
                  transition: 'transform 0.3s ease'
                }}
              >
                <div className="text-white px-3 py-1.5 rounded text-xs md:text-sm font-bold whitespace-nowrap shadow-md" style={{ backgroundColor: TOP_25_COLOR }}>
                  Top 25%
                </div>
                <span className="text-base md:text-lg font-bold" style={{ color: TOP_25_COLOR }}>{TOP_25_PERCENT.toFixed(2)}%</span>
              </div>
            </div>

            {/* B2B Average marker */}
            <div 
              className="absolute left-14 flex items-center transition-all duration-700"
              style={{ bottom: `${avgPosition}%`, transform: 'translateY(50%)' }}
            >
              <div className="w-16 h-1" style={{ backgroundColor: AVG_COLOR }} />
              <div 
                className="flex flex-row sm:flex-col md:flex-row lg:flex-col xl:flex-row items-center sm:items-start md:items-center lg:items-start xl:items-center gap-1 sm:gap-0.5 md:gap-1 lg:gap-0.5 xl:gap-2 flex-shrink-0 transition-all duration-300"
                style={{ 
                  marginLeft: '8px',
                  transform: `translateY(${getLabelVerticalOffset(B2B_AVERAGE)}px)`,
                  transition: 'transform 0.3s ease'
                }}
              >
                <div className="text-white px-3 py-1.5 rounded text-xs md:text-sm font-bold whitespace-nowrap shadow-md" style={{ backgroundColor: AVG_COLOR }}>
                  B2B SaaS Avg
                </div>
                <span className="text-base md:text-lg font-bold" style={{ color: AVG_COLOR }}>{B2B_AVERAGE.toFixed(2)}%</span>
              </div>
            </div>

            {/* User's CVR marker */}
            <div 
              className="absolute left-14 flex items-center transition-all duration-1000"
              style={{ bottom: `${userPosition}%`, transform: 'translateY(50%)' }}
            >
              <div className="w-16 h-1" style={{ backgroundColor: USER_CVR_COLOR }} />
              <div 
                className="flex flex-row sm:flex-col md:flex-row lg:flex-col xl:flex-row items-center sm:items-start md:items-center lg:items-start xl:items-center gap-1 sm:gap-0.5 md:gap-1 lg:gap-0.5 xl:gap-2 flex-shrink-0 transition-all duration-300"
                style={{ 
                  marginLeft: '8px',
                  transform: `translateY(${getLabelVerticalOffset(userCVR)}px)`,
                  transition: 'transform 0.3s ease'
                }}
              >
                <div className="text-white px-3 py-1.5 rounded text-xs md:text-sm font-bold whitespace-nowrap shadow-lg" style={{ backgroundColor: USER_CVR_COLOR }}>
                  Your CVR
                </div>
                <span className="text-base md:text-lg font-bold" style={{ color: USER_CVR_COLOR }}>{userCVR.toFixed(2)}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gap Metrics */}
        <div className="w-full sm:w-auto space-y-3 md:space-y-4">
          {/* Always show B2B Average gap */}
          <div className="rounded-lg p-3 md:p-3 lg:p-3 xl:p-6" style={{ backgroundColor: '#FFF0F5', border: `2px solid ${AVG_COLOR}` }}>
            <h4 className="text-xs font-semibold mb-1" style={{ color: AVG_COLOR }}>VS. B2B SAAS AVG</h4>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1" style={{ color: AVG_COLOR }}>
              {userCVR >= B2B_AVERAGE ? '+' : ''}{gapToAverage.toFixed(2)}%
            </p>
            <p className="text-xs mb-1 whitespace-nowrap" style={{ color: AVG_COLOR }}>
              {Math.abs(ratioToAverage).toFixed(0)}% {userCVR >= B2B_AVERAGE ? 'above' : 'below'} average
            </p>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {demosToAverage > 0 && (
                  <div className="px-2.5 md:px-2.5 lg:px-2.5 xl:px-4 py-1 md:py-1 lg:py-1 xl:py-2 rounded-full text-xs font-semibold whitespace-nowrap" style={{ backgroundColor: '#EFA0DE', color: 'white' }}>
                    {demosToAverage} {conversionType}/month
                  </div>
                )}
                {conversionValue > 0 && demosToAverage > 0 && (
                  <div className="px-2.5 md:px-2.5 lg:px-2.5 xl:px-4 py-1 md:py-1 lg:py-1 xl:py-2 rounded-full text-xs font-semibold whitespace-nowrap" style={{ backgroundColor: '#EFA0DE', color: 'white' }}>
                    {formatRevenue(revenueToAverage / 12)}/month
                  </div>
                )}
              </div>
          </div>

          {/* Always show Top 25% gap */}
          <div className="rounded-lg p-3 md:p-3 lg:p-3 xl:p-6" style={{ backgroundColor: '#F0FFFC', border: `2px solid ${TOP_25_COLOR}` }}>
            <h4 className="text-xs font-semibold mb-1" style={{ color: TOP_25_COLOR }}>VS. TOP 25%</h4>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1" style={{ color: TOP_25_COLOR }}>
              {userCVR >= TOP_25_PERCENT ? '+' : ''}{gapToTop.toFixed(2)}%
            </p>
            <p className="text-xs mb-1 whitespace-nowrap" style={{ color: TOP_25_COLOR }}>
              {Math.abs(ratioToTop).toFixed(0)}% {userCVR >= TOP_25_PERCENT ? 'above' : 'below'} top performers
            </p>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {demosToTop > 0 && (
                <div className="px-2.5 md:px-2.5 lg:px-2.5 xl:px-4 py-1 md:py-1 lg:py-1 xl:py-2 rounded-full text-xs font-semibold whitespace-nowrap" style={{ backgroundColor: '#5FDABB', color: 'white' }}>
                  {Math.abs(demosToTop)} {conversionType}/month
                </div>
              )}
              {conversionValue > 0 && demosToTop > 0 && (
                <div className="px-2.5 md:px-2.5 lg:px-2.5 xl:px-4 py-1 md:py-1 lg:py-1 xl:py-2 rounded-full text-xs font-semibold whitespace-nowrap" style={{ backgroundColor: '#5FDABB', color: 'white' }}>
                  {formatRevenue(revenueToTop / 12)}/month
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
