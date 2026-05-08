"use client";

import { useEffect, useRef } from "react";
import type { ECharts, EChartsOption } from "echarts";

type EChartProps = {
  option: EChartsOption;
  className?: string;
};

export function EChart({ option, className }: EChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chart: ECharts | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let cancelled = false;

    async function mountChart() {
      if (!containerRef.current) {
        return;
      }

      const echarts = await import("echarts");

      if (cancelled || !containerRef.current) {
        return;
      }

      chart = echarts.init(containerRef.current);
      chart.setOption(option);

      resizeObserver = new ResizeObserver(() => {
        chart?.resize();
      });
      resizeObserver.observe(containerRef.current);
    }

    mountChart();

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
      chart?.dispose();
    };
  }, [option]);

  return <div ref={containerRef} className={className} />;
}
