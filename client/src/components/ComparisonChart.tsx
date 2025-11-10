interface ComparisonChartProps {
  userCVR: number;
}

const B2B_AVERAGE = 2.3;
const TOP_25_PERCENT = 5.3;

export default function ComparisonChart({ userCVR }: ComparisonChartProps) {
  const maxValue = Math.max(userCVR, TOP_25_PERCENT) * 1.3;
  
  const getPosition = (value: number) => {
    return (value / maxValue) * 100;
  };

  const userPosition = getPosition(userCVR);
  const avgPosition = getPosition(B2B_AVERAGE);
  const topPosition = getPosition(TOP_25_PERCENT);

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
              style={{ bottom: `${topPosition}%`, transform: 'translateY(50%)' }}
            >
              <div className="w-16 h-1 bg-green-600 rounded-full" />
              <div className="ml-2 flex items-center gap-2 flex-shrink-0">
                <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                  Top 25%
                </div>
                <span className="text-xs font-bold text-green-700">{TOP_25_PERCENT}%</span>
              </div>
            </div>

            {/* B2B Average marker */}
            <div 
              className="absolute left-14 w-48 flex items-center transition-all duration-700"
              style={{ bottom: `${avgPosition}%`, transform: 'translateY(50%)' }}
            >
              <div className="w-16 h-1 bg-orange-500 rounded-full" />
              <div className="ml-2 flex items-center gap-2 flex-shrink-0">
                <div className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                  B2B Avg
                </div>
                <span className="text-xs font-bold text-orange-700">{B2B_AVERAGE}%</span>
              </div>
            </div>

            {/* User's CVR marker */}
            <div 
              className="absolute left-14 w-48 flex items-center transition-all duration-1000"
              style={{ bottom: `${userPosition}%`, transform: 'translateY(50%)' }}
            >
              <div className="w-16 h-1.5 bg-blue-600 rounded-full" />
              <div className="ml-2 flex items-center gap-2 flex-shrink-0">
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap shadow-lg">
                  Your CVR
                </div>
                <span className="text-sm font-bold text-blue-700">{userCVR.toFixed(2)}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-4 w-full lg:w-auto">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-blue-600 flex-shrink-0" />
            <div>
              <div className="font-semibold text-sm">Your Conversion Rate</div>
              <div className="text-xs text-slate-600">Current performance level</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-orange-500 flex-shrink-0" />
            <div>
              <div className="font-semibold text-sm">B2B SaaS Average</div>
              <div className="text-xs text-slate-600">Industry standard benchmark</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-green-600 flex-shrink-0" />
            <div>
              <div className="font-semibold text-sm">Top 25% Companies</div>
              <div className="text-xs text-slate-600">Best-in-class performance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
