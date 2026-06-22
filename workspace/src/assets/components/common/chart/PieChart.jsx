import { useState } from "react";
import "./PieChart.scss";

const DEFAULT_COLORS = [
  "#3a6df0",
  "#f7b500",
  "#a9cbf5",
  "#2294e3",
  "#1bb89a",
  "#dfe3e8",
];

const STROKE_WIDTH = 35;
const SEGMENT_GAP = 2;

export const PieChart = ({
  data = [],
  size = 220,
  showLegend = true,
  legendCount,
  className = "",
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const total = data.reduce((sum, item) => sum + (item.value || 0), 0);
  const radius = (size - STROKE_WIDTH) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  const visibleCount = data.filter((item) => (item.value || 0) > 0).length;

  let cumulative = 0;
  const segments = data.map((item, index) => {
    const percent = total > 0 ? (item.value / total) * 100 : 0;
    const length = (circumference * percent) / 100;
    const dashLength =
      visibleCount <= 1 ? length : Math.max(length - SEGMENT_GAP, 0);
    const dashOffset = -(circumference * cumulative) / 100;
    const midPercent = cumulative + percent / 2;
    const midAngle = (midPercent / 100) * 360 - 90;
    const rad = (midAngle * Math.PI) / 180;

    const segment = {
      ...item,
      index,
      percent,
      color: item.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length],
      dashArray: `${dashLength} ${circumference - dashLength}`,
      dashOffset,
      tipX: center + radius * Math.cos(rad),
      tipY: center + radius * Math.sin(rad),
    };

    cumulative += percent;
    return segment;
  });

  const activeSegment =
    activeIndex != null ? segments[activeIndex] : null;

  const legendSegments =
    legendCount != null ? segments.slice(0, legendCount) : segments;

  const chartClass = ["pieChart", className].filter(Boolean).join(" ");

  return (
    <div className={chartClass}>
      <div className="pieChartArea" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          role="img"
          aria-label="파이 차트"
        >
          {segments.map((segment) => (
            <circle
              key={segment.index}
              className="pieSegment"
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth={STROKE_WIDTH}
              strokeDasharray={segment.dashArray}
              strokeDashoffset={segment.dashOffset}
              transform={`rotate(-90 ${center} ${center})`}
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === segment.index ? null : segment.index
                )
              }
            >
              <title>{`${segment.label} ${segment.percent.toFixed(1)}%`}</title>
            </circle>
          ))}
        </svg>

        {activeSegment && (
          <div
            className="pieTooltip"
            style={{
              left: activeSegment.tipX,
              top: activeSegment.tipY,
            }}
          >
            <span className="pieTooltipText">
              {activeSegment.label} {activeSegment.percent.toFixed(1)}%
            </span>
            <button
              type="button"
              className="pieTooltipClose"
              onClick={() => setActiveIndex(null)}
              aria-label="툴팁 닫기"
            >
              ×
            </button>
          </div>
        )}
      </div>

      {showLegend && (
        <ul className="pieLegend">
          {legendSegments.map((segment) => (
            <li key={segment.index} className="pieLegendItem">
              <span
                className="pieLegendDot"
                style={{ backgroundColor: segment.color }}
              />
              {segment.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PieChart;
