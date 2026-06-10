import React, { useRef, useState } from "react";
import "./Resizable.scss";

export function Resizable({ children }) {
  const count = React.Children.count(children);

  const [ratios, setRatios] = useState(Array(count).fill(1 / count));

  const containerRef = useRef(null);

  const startX = useRef(0);
  const startRatios = useRef([]);
  const activeIndex = useRef(null);

  const [maxIndex, setMaxIndex] = useState(null);

  const onPointerDown = (index) => (e) => {
    activeIndex.current = index;
    startX.current = e.clientX;
    startRatios.current = [...ratios];

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
  };

  const onPointerMove = (e) => {
    const i = activeIndex.current;
    if (i === null) return;

    const containerWidth =
      containerRef.current?.getBoundingClientRect().width || 1;

    const deltaRatio = (e.clientX - startX.current) / containerWidth;

    const next = [...startRatios.current];

    const left = next[i] + deltaRatio;
    const right = next[i + 1] - deltaRatio;

    // 최소 5%
    if (left < 0.05 || right < 0.05) return;

    next[i] = left;
    next[i + 1] = right;

    setRatios(next);
  };

  const toggleMax = (i) => {
    setMaxIndex((prev) => (prev === i ? null : i));
  };

  const onPointerUp = () => {
    activeIndex.current = null;
    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerup", onPointerUp);
  };

  return (
    <div className="group" ref={containerRef}>
      {React.Children.map(children, (child, i) => {
        const isMax = maxIndex !== null;

        // 👉 max 상태일 때: 선택된 것만 렌더
        if (isMax && i !== maxIndex) return null;

        return (
          <div
            className="panel"
            style={{
              flex: isMax ? 1 : ratios[i],
            }}
          >
            {child}

            <button onClick={() => toggleMax(i)}>
              {isMax ? "복구" : "확대"}
            </button>

            {/* 👉 divider는 normal 모드에서만 */}
            {!isMax && i < count - 1 && (
              <div className="divider" onPointerDown={onPointerDown(i)} />
            )}
          </div>
        );
      })}
    </div>
  );
}
