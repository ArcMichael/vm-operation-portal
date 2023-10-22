import React, { useEffect } from "react";
import echarts from "echarts";

const useECharts = (
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
  chartOptions: any
) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const chart = echarts.init(containerRef.current);
    chart.setOption(chartOptions);

    return () => chart.dispose(); // Clean up the chart instance
  }, [containerRef, chartOptions]);
};

export default useECharts;
