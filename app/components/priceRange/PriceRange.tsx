"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import "./style.scss";
import { px } from "framer-motion";

interface PriceRangeProps {
  min: number;
  max: number;
  step?: number;
  onRangeChange?: (range: [number, number]) => void;
}

const PriceRange: React.FC<PriceRangeProps> = ({
  min,
  max,
  step = 1,
  onRangeChange,
}) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);
  const rangeRef = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => ((value - min) / (max - min)) * 100,
    [min, max]
  );

  useEffect(() => {
    if (rangeRef.current) {
      rangeRef.current.style.left = `${getPercent(minValue) + 0.6}%`;
      rangeRef.current.style.width = `${
        getPercent(maxValue) - getPercent(minValue)
      }%`;
    }
  }, [minValue, maxValue, getPercent]);

  return (
    <div className="price-range-container">
      <div className="slider-wrapper">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={(e) => {
            const value = Math.min(Number(e.target.value), maxValue - step);
            setMinValue(value);
            onRangeChange?.([value, maxValue]);
          }}
          ref={minRef}
          className="range-input left"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={(e) => {
            const value = Math.max(Number(e.target.value), minValue + step);
            setMaxValue(value);
            onRangeChange?.([minValue, value]);
          }}
          ref={maxRef}
          className="range-input right"
        />
        <div className="slider-track" />
        <div ref={rangeRef} className="slider-range" />
        <div className="thumb left-thumb" />
        <div className="thumb right-thumb" />
      </div>
      <div className="price-values">
        <span>${minValue}</span>
        <span>${maxValue}</span>
      </div>
    </div>
  );
};

export default PriceRange;
