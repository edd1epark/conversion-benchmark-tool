import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ProjectionGraphProps {
  monthlyTraffic: number;
  currentCVR: number;
  conversionValue: number;
  conversionType: "demos" | "signups";
}

const B2B_AVERAGE = 2.3;
const TOP_25_PERCENT = 5.3;
const MONTHS = 12;

export default function ProjectionGraph({
  monthlyTraffic,
  currentCVR,
  conversionValue,
  conversionType,
}: ProjectionGraphProps) {
  const data = useMemo(() => {
    const result = [];
    const improvedCVR = currentCVR * 1.3; // 30% increase

    for (let month = 0; month <= MONTHS; month++) {
      const currentConversions = (currentCVR / 100) * monthlyTraffic * month;
      const improvedConversions = (improvedCVR / 100) * monthlyTraffic * month;

      const dataPoint: {
        month: number;
        current: number;
        improved: number;
        benchmark?: number;
      } = {
        month,
        current: conversionValue > 0 ? currentConversions * conversionValue : currentConversions,
        improved: conversionValue > 0 ? improvedConversions * conversionValue : improvedConversions,
      };

      // Always show B2B SaaS Average benchmark line
      const benchmarkConversions = (B2B_AVERAGE / 100) * monthlyTraffic * month;
      dataPoint.benchmark = conversionValue > 0 ? benchmarkConversions * conversionValue : benchmarkConversions;

      result.push(dataPoint);
    }

    return result;
  }, [monthlyTraffic, currentCVR, conversionValue]);

  const formatYAxis = (value: number) => {
    if (conversionValue > 0) {
      return `$${(value / 1000).toFixed(0)}k`;
    }
    return value.toFixed(0);
  };

  const formatTooltip = (value: number) => {
    if (conversionValue > 0) {
      return `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
    }
    return `${value.toFixed(0)} ${conversionType}`;
  };

  const getBenchmarkLabel = () => {
    return "B2B SaaS Average (2.3%)";
  };

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis
            dataKey="month"
            label={{ value: "Months", position: "insideBottom", offset: -5 }}
            className="text-sm"
          />
          <YAxis
            tickFormatter={formatYAxis}
            label={{
              value: conversionValue > 0 ? "Revenue" : `${conversionType}`,
              angle: -90,
              position: "insideLeft",
            }}
            className="text-sm"
          />
          <Tooltip
            formatter={formatTooltip}
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="current"
            stroke="#5189FB"
            strokeWidth={2}
            name={`Current CVR (${currentCVR.toFixed(2)}%)`}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="improved"
            stroke="#10b981"
            strokeWidth={2}
            name={`30% Increase (${(currentCVR * 1.3).toFixed(2)}%)`}
            dot={false}
          />
          {data[0].benchmark !== undefined && (
            <Line
              type="monotone"
              dataKey="benchmark"
              stroke="#E46BCF"
              strokeWidth={2}
              strokeDasharray="5 5"
              name={getBenchmarkLabel()}
              dot={false}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
