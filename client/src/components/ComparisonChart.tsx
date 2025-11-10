interface ComparisonChartProps {
  userCVR: number;
}

const B2B_AVERAGE = 2.3;
const TOP_25_PERCENT = 5.3;

export default function ComparisonChart({ userCVR }: ComparisonChartProps) {
  const maxValue = Math.max(userCVR, TOP_25_PERCENT) * 1.2;
  
  const getBarHeight = (value: number) => {
    return (value / maxValue) * 100;
  };

  const bars = [
    {
      label: "Your Rate",
      value: userCVR,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
    },
    {
      label: "B2B SaaS Average",
      value: B2B_AVERAGE,
      color: "from-orange-400 to-orange-500",
      bgColor: "bg-orange-100",
      textColor: "text-orange-700",
    },
    {
      label: "Top 25%",
      value: TOP_25_PERCENT,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-100",
      textColor: "text-green-700",
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="font-bold text-lg mb-6">Conversion Rate Comparison</h3>
      
      <div className="flex items-end justify-center gap-8 h-80">
        {bars.map((bar, index) => (
          <div key={index} className="flex flex-col items-center gap-3 flex-1 max-w-[140px]">
            {/* Bar container */}
            <div className="relative w-full h-64 flex flex-col justify-end">
              {/* Background track */}
              <div className="absolute bottom-0 left-0 right-0 h-full bg-slate-100 rounded-t-lg border-2 border-slate-200" />
              
              {/* Animated bar */}
              <div
                className={`relative bg-gradient-to-t ${bar.color} rounded-t-lg transition-all duration-1000 ease-out flex flex-col items-center justify-start pt-4`}
                style={{ height: `${getBarHeight(bar.value)}%` }}
              >
                <span className="text-white font-bold text-lg">
                  {bar.value.toFixed(2)}%
                </span>
              </div>
            </div>
            
            {/* Label */}
            <div className="text-center">
              <div className={`font-semibold text-sm ${bar.textColor}`}>
                {bar.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend with descriptions */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-blue-600" />
            <span className="font-semibold text-sm text-blue-900">Your Rate</span>
          </div>
          <p className="text-xs text-blue-700">Current performance</p>
        </div>
        <div className="text-center p-3 bg-orange-50 rounded-lg">
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <span className="font-semibold text-sm text-orange-900">B2B Average</span>
          </div>
          <p className="text-xs text-orange-700">Industry standard</p>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-green-600" />
            <span className="font-semibold text-sm text-green-900">Top 25%</span>
          </div>
          <p className="text-xs text-green-700">Best-in-class</p>
        </div>
      </div>
    </div>
  );
}
