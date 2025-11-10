import { Info } from "lucide-react";

interface ComparisonChartProps {
  userCVR: number;
  monthlyTraffic: number;
  conversionValue?: number;
}

const B2B_AVERAGE = 2.3;
const TOP_25_PERCENT = 5.3;

export default function ComparisonChart({ userCVR, monthlyTraffic, conversionValue = 0 }: ComparisonChartProps) {
  // Calculate positions on the scale (0-100%)
  const maxValue = Math.max(userCVR, TOP_25_PERCENT) * 1.3; // Add 30% padding at top
  const userPosition = (userCVR / maxValue) * 100;
  const avgPosition = (B2B_AVERAGE / maxValue) * 100;
  const topPosition = (TOP_25_PERCENT / maxValue) * 100;

  // Calculate gaps
  const gapToAverage = userCVR - B2B_AVERAGE;
  const gapToTop = userCVR - TOP_25_PERCENT;
  
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
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 w-full">
        {/* Thermometer container with proper spacing */}
        <div className="relative h-96 w-full lg:w-auto flex justify-center lg:justify-start">
          <div className="relative h-96 w-80">
            {/* Scale markers on the left */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-slate-500 w-12 text-right pr-2">
              <span>{maxValue.toFixed(1)}%</span>
              <span>{(maxValue * 0.75).toFixed(1)}%</span>
              <span>{(maxValue * 0.5).toFixed(1)}%</span>
              <span>{(maxValue * 0.25).toFixed(1)}%</span>
              <span>0%</span>
            </div>

            {/* Thermometer track */}
            <div className="absolute left-14 w-16 h-full bg-gradient-to-t from-slate-200 via-slate-100 to-slate-50 rounded-full border-2 border-slate-300">
              {/* Fill based on user's CVR with rounded bottom */}
              <div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 transition-all duration-1000 ease-out"
                style={{ 
                  height: `${userPosition}%`,
                  borderRadius: userPosition < 100 ? '0 0 9999px 9999px' : '9999px'
                }}
              />
            </div>

            {/* Markers positioned relative to the container */}
            {/* Top 25% marker */}
            <div 
              className="absolute left-14 flex items-center transition-all duration-700"
              style={{ bottom: `${topPosition}%`, transform: 'translateY(50%)' }}
            >
              <div className="w-16 h-1 bg-green-600" />
              <div 
                className="flex items-center gap-2 flex-shrink-0 transition-all duration-300"
                style={{ 
                  marginLeft: '8px',
                  transform: `translateY(${getLabelVerticalOffset(TOP_25_PERCENT)}px)`,
                  transition: 'transform 0.3s ease'
                }}
              >
                <div className="bg-green-600 text-white px-3 py-1.5 rounded text-sm font-bold whitespace-nowrap shadow-md">
                  Top 25%
                </div>
                <span className="text-lg font-bold text-green-700">{TOP_25_PERCENT.toFixed(2)}%</span>
              </div>
            </div>

            {/* B2B Average marker */}
            <div 
              className="absolute left-14 flex items-center transition-all duration-700"
              style={{ bottom: `${avgPosition}%`, transform: 'translateY(50%)' }}
            >
              <div className="w-16 h-1 bg-orange-500" />
              <div 
                className="flex items-center gap-2 flex-shrink-0 transition-all duration-300"
                style={{ 
                  marginLeft: '8px',
                  transform: `translateY(${getLabelVerticalOffset(B2B_AVERAGE)}px)`,
                  transition: 'transform 0.3s ease'
                }}
              >
                <div className="bg-orange-500 text-white px-3 py-1.5 rounded text-sm font-bold whitespace-nowrap shadow-md">
                  B2B SaaS Avg
                </div>
                <span className="text-lg font-bold text-orange-600">{B2B_AVERAGE.toFixed(2)}%</span>
              </div>
            </div>

            {/* User's CVR marker */}
            <div 
              className="absolute left-14 flex items-center transition-all duration-1000"
              style={{ bottom: `${userPosition}%`, transform: 'translateY(50%)' }}
            >
              <div className="w-16 h-1 bg-blue-600" />
              <div 
                className="flex items-center gap-2 flex-shrink-0 transition-all duration-300"
                style={{ 
                  marginLeft: '8px',
                  transform: `translateY(${getLabelVerticalOffset(userCVR)}px)`,
                  transition: 'transform 0.3s ease'
                }}
              >
                <div className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm font-bold whitespace-nowrap shadow-lg">
                  Your CVR
                </div>
                <span className="text-lg font-bold text-blue-700">{userCVR.toFixed(2)}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gap Metrics */}
        <div className="flex-1 space-y-4 w-full lg:w-auto lg:min-w-[400px]">
          {/* Only show B2B Average gap if user is below average */}
          {userCVR < B2B_AVERAGE && (
            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
              <h4 className="text-sm font-semibold text-orange-800 mb-2">VS. B2B SAAS AVG</h4>
              <p className="text-4xl font-bold text-orange-600 mb-1">
                {gapToAverage.toFixed(2)}%
              </p>
              <p className="text-sm text-orange-700 mb-3">below average</p>
              <div className="inline-flex items-center gap-1 bg-orange-200 text-orange-800 px-4 py-2 rounded-full font-semibold whitespace-nowrap">
                <span>{demosToAverage} demos/month</span>
                {conversionValue > 0 && <span> • {formatRevenue(revenueToAverage)}/year</span>}
              </div>
            </div>
          )}

          {/* Always show Top 25% gap */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h4 className="text-sm font-semibold text-green-800 mb-2">VS. TOP 25%</h4>
            <p className="text-4xl font-bold text-orange-600 mb-1">
              {gapToTop.toFixed(2)}%
            </p>
            <p className="text-sm text-green-700 mb-3">
              {userCVR >= TOP_25_PERCENT ? 'above' : 'below'} top performers
            </p>
            <div className="inline-flex items-center gap-1 bg-green-200 text-green-800 px-4 py-2 rounded-full font-semibold whitespace-nowrap">
              <span>{Math.abs(demosToTop)} demos/month</span>
              {conversionValue > 0 && <span> • {formatRevenue(revenueToTop)}/year</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
