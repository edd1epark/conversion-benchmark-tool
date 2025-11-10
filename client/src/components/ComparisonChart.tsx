interface ComparisonChartProps {
  userCVR: number;
}

const B2B_AVERAGE = 2.3;
const TOP_25_PERCENT = 5.3;

export default function ComparisonChart({ userCVR }: ComparisonChartProps) {
  const maxValue = Math.max(userCVR, TOP_25_PERCENT) * 1.2;

  const getBarWidth = (value: number) => {
    return (value / maxValue) * 100;
  };

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg mb-4">Conversion Rate Comparison</h3>
      
      {/* User's CVR */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold">Your Rate</span>
          <span className="text-sm font-bold text-primary">{userCVR.toFixed(2)}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-8 overflow-hidden">
          <div
            className="bg-gradient-to-r from-purple-500 to-purple-600 h-full rounded-full flex items-center justify-end px-3 transition-all duration-500"
            style={{ width: `${getBarWidth(userCVR)}%` }}
          >
            <span className="text-white text-xs font-semibold">You</span>
          </div>
        </div>
      </div>

      {/* B2B Average */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold">B2B SaaS Average</span>
          <span className="text-sm font-bold">{B2B_AVERAGE}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-8 overflow-hidden">
          <div
            className="bg-gradient-to-r from-orange-400 to-orange-500 h-full rounded-full flex items-center justify-end px-3 transition-all duration-500"
            style={{ width: `${getBarWidth(B2B_AVERAGE)}%` }}
          >
            <span className="text-white text-xs font-semibold">Avg</span>
          </div>
        </div>
      </div>

      {/* Top 25% */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold">Top 25%</span>
          <span className="text-sm font-bold">{TOP_25_PERCENT}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-8 overflow-hidden">
          <div
            className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full flex items-center justify-end px-3 transition-all duration-500"
            style={{ width: `${getBarWidth(TOP_25_PERCENT)}%` }}
          >
            <span className="text-white text-xs font-semibold">Top 25%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
