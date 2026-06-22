import "./DonutChart.scss";

const STROKE_WIDTH = 30;

export const DonutChart = ({
  value = 0,
  size = 150,
  showValue = true,
  valueText,
  subText,
  className = "",
}) => {
  const arcValue = Math.min(100, Math.max(0, value));
  const radius = (size - STROKE_WIDTH) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - arcValue / 100);
  const center = size / 2;

  const chartClass = ["donutChart", className].filter(Boolean).join(" ");

  return (
    <div
      className={chartClass}
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${value}%`}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="donutTrack"
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={STROKE_WIDTH}
        />
        <circle
          className="donutValue"
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={STROKE_WIDTH}
          strokeLinecap="butt"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>

      {showValue && (
        <div className="donutLabel">
          <strong className="donutValueText">
            {valueText ?? `${value}%`}
          </strong>
          {subText && <span className="donutSubText">{subText}</span>}
        </div>
      )}
    </div>
  );
};

export default DonutChart;
