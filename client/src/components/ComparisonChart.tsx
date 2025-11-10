import { Info } from "lucide-react";

interface ComparisonChartProps {
  userCVR: number;
  monthlyTraffic: number;
}

const B2B_AVERAGE = 2.3;
const TOP_25_PERCENT = 5.3;

export default function ComparisonChart({ userCVR, monthlyTraffic }: ComparisonChartProps) {
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

  // Check for overlapping markers (within 10% of scale)
  const markersClose = Math.abs(userPosition - avgPosition) < 10 || 
                       Math.abs(userPosition - topPosition) < 10 ||
                       Math.abs(avgPosition - topPosition) < 10;

  // Get horizontal offset for label when markers overlap
  const getLabelOffset = (value: number) => {
    if (!markersClose) return 0;
    
    // Sort by CVR value to determine stacking order
    const markers = [
      { value: userCVR, name: 'user' },
      { value: B2B_AVERAGE, name: 'avg' },
      { value: TOP_25_PERCENT, name: 'top' }
    ].sort((a, b) => a.value - b.value);
    
    const index = markers.findIndex(m => m.value === value);
    // Stack labels horizontally: each subsequent label moves further right
    return index * 120; // 120px spacing between stacked labels
  };

  return (
    <div className="space-y-4 w-full">
      <h3 className="font-bold text-lg mb-6">Conversion Rate Comparison</h3>
      
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 w-full">
        {/* Thermometer container with proper spacing */}
        <div className="relative h-96 w-full lg:w-auto flex justify-center lg:justify-start">
          <div className="relative h-96 w-[500px]">
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
                style={{ marginLeft: `${8 + getLabelOffset(TOP_25_PERCENT)}px` }}
              >
                <div className="bg-green-600 text-white px-3 py-1.5 rounded text-sm font-bold whitespace-nowrap shadow-md">
                  Top 25%
                </div>
                <span className="text-base font-bold text-green-700">{TOP_25_PERCENT}%</span>
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
                style={{ marginLeft: `${8 + getLabelOffset(B2B_AVERAGE)}px` }}
              >
                <div className="bg-orange-500 text-white px-3 py-1.5 rounded text-sm font-bold whitespace-nowrap shadow-md">
                  B2B Avg
                </div>
                <span className="text-base font-bold text-orange-700">{B2B_AVERAGE}%</span>
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
                style={{ marginLeft: `${8 + getLabelOffset(userCVR)}px` }}
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
        <div className="flex-1 space-y-4 w-full lg:w-auto">
          {/* Only show B2B Average gap if user is below average */}
          {userCVR < B2B_AVERAGE && (
            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
              <h4 className="text-sm font-semibold text-orange-800 mb-2">DIFFERENCE TO B2B SAAS AVERAGE</h4>
              <p className="text-4xl font-bold text-orange-600 mb-1">
                {gapToAverage.toFixed(2)}%
              </p>
              <p className="text-sm text-orange-700 mb-3">below average</p>
              <p className="text-lg font-semibold text-orange-800">
                {demosToAverage} more demos/month needed
              </p>
            </div>
          )}

          {/* Always show Top 25% gap */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h4 className="text-sm font-semibold text-green-800 mb-2">DIFFERENCE TO TOP 25%</h4>
            <p className="text-4xl font-bold text-orange-600 mb-1">
              {gapToTop.toFixed(2)}%
            </p>
            <p className="text-sm text-green-700 mb-3">
              {userCVR >= TOP_25_PERCENT ? 'above' : 'below'} top performers
            </p>
            <p className="text-lg font-semibold text-green-800">
              {userCVR >= TOP_25_PERCENT 
                ? `${Math.abs(demosToTop)} more demos/month than top 25%`
                : `${demosToTop} fewer demos/month needed`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
