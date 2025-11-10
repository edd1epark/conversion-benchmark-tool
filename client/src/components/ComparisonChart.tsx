interface ComparisonChartProps {
  userCVR: number;
  monthlyTraffic: number;
}

const B2B_AVERAGE = 2.3;
const TOP_25_PERCENT = 5.3;

export default function ComparisonChart({ userCVR, monthlyTraffic }: ComparisonChartProps) {
  const maxValue = Math.max(userCVR, TOP_25_PERCENT) * 1.3;
  
  const getPosition = (value: number) => {
    return (value / maxValue) * 100;
  };

  const userPosition = getPosition(userCVR);
  const avgPosition = getPosition(B2B_AVERAGE);
  const topPosition = getPosition(TOP_25_PERCENT);

  // Calculate differences
  const diffToAverage = userCVR - B2B_AVERAGE;
  const diffToTop25 = userCVR - TOP_25_PERCENT;
  
  // Calculate conversion differences in actual numbers
  const conversionsAtAverage = (B2B_AVERAGE / 100) * monthlyTraffic;
  const conversionsAtTop25 = (TOP_25_PERCENT / 100) * monthlyTraffic;
  const currentConversions = (userCVR / 100) * monthlyTraffic;
  const demosGapToAverage = conversionsAtAverage - currentConversions;
  const demosGapToTop25 = conversionsAtTop25 - currentConversions;

  // Check for overlapping markers (within 10% of scale)
  const markersClose = Math.abs(userPosition - avgPosition) < 10 || 
                       Math.abs(userPosition - topPosition) < 10 ||
                       Math.abs(avgPosition - topPosition) < 10;

  // Adjust marker positions to prevent overlap
  const getAdjustedTransform = (basePosition: number, index: number) => {
    if (!markersClose) return 'translateY(50%)';
    
    // Sort positions to determine stacking order
    const positions = [
      { pos: userPosition, idx: 0 },
      { pos: avgPosition, idx: 1 },
      { pos: topPosition, idx: 2 }
    ].sort((a, b) => a.pos - b.pos);
    
    const stackIndex = positions.findIndex(p => p.idx === index);
    const offset = stackIndex * 35; // 35px spacing between markers
    
    return `translateY(calc(50% + ${offset}px))`;
  };

  return (
    <div className="space-y-4 w-full">
      <h3 className="font-bold text-lg mb-6">Conversion Rate Comparison</h3>
      
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 w-full">
        {/* Thermometer container with proper spacing */}
        <div className="relative h-96 w-full lg:w-auto flex justify-center lg:justify-start">
          <div className="relative h-96 w-64">
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
              className="absolute left-14 w-48 flex items-center transition-all duration-700"
              style={{ bottom: `${topPosition}%`, transform: getAdjustedTransform(topPosition, 2) }}
            >
              <div className="w-16 h-1 bg-green-600 rounded-full" />
              <div className="ml-2 flex items-center gap-2 flex-shrink-0">
                <div className="bg-green-600 text-white px-3 py-1.5 rounded text-sm font-bold whitespace-nowrap shadow-md">
                  Top 25%
                </div>
                <span className="text-base font-bold text-green-700">{TOP_25_PERCENT}%</span>
              </div>
            </div>

            {/* B2B Average marker */}
            <div 
              className="absolute left-14 w-48 flex items-center transition-all duration-700"
              style={{ bottom: `${avgPosition}%`, transform: getAdjustedTransform(avgPosition, 1) }}
            >
              <div className="w-16 h-1 bg-orange-500 rounded-full" />
              <div className="ml-2 flex items-center gap-2 flex-shrink-0">
                <div className="bg-orange-500 text-white px-3 py-1.5 rounded text-sm font-bold whitespace-nowrap shadow-md">
                  B2B Avg
                </div>
                <span className="text-base font-bold text-orange-700">{B2B_AVERAGE}%</span>
              </div>
            </div>

            {/* User's CVR marker */}
            <div 
              className="absolute left-14 w-48 flex items-center transition-all duration-1000"
              style={{ bottom: `${userPosition}%`, transform: getAdjustedTransform(userPosition, 0) }}
            >
              <div className="w-16 h-1 bg-blue-600 rounded-full" />
              <div className="ml-2 flex items-center gap-2 flex-shrink-0">
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
          <div className="space-y-3">
            {/* Difference to B2B Average - only show if below average */}
            {diffToAverage < 0 && (
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-1">
                  Difference to B2B SaaS Average
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-red-600">
                      {diffToAverage.toFixed(2)}%
                    </span>
                    <span className="text-sm text-slate-600">
                      below average
                    </span>
                  </div>
                  <div className="text-sm text-orange-700 font-medium">
                    {Math.abs(Math.round(demosGapToAverage))} more demos/month needed
                  </div>
                </div>
              </div>
            )}

            {/* Difference to Top 25% */}
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">
                Difference to Top 25%
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className={`text-3xl font-bold ${diffToTop25 >= 0 ? 'text-green-600' : 'text-orange-600'}`}>
                    {diffToTop25 >= 0 ? '+' : ''}{diffToTop25.toFixed(2)}%
                  </span>
                  <span className="text-sm text-slate-600">
                    {diffToTop25 >= 0 ? 'above' : 'below'} top performers
                  </span>
                </div>
                <div className="text-sm text-green-700 font-medium">
                  {Math.abs(Math.round(demosGapToTop25))} {demosGapToTop25 >= 0 ? 'fewer' : 'more'} demos/month needed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
