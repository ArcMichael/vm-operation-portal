import { EChartsType, init } from "echarts";
import { useEffect, useRef } from "react";
import columnData from "./column-data";

const StackedColumn = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chart: EChartsType = init(containerRef.current);

    chart.setOption(columnData);

    return () => {
      chart.dispose(); // 清理图表实例
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100vh", height: 600 }}></div>;
};

export default StackedColumn;
