import { EChartsType, init } from "echarts";
import { useEffect, useRef } from "react";
import scatterData from "./scatterData";

const StatterBasic = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chart: EChartsType = init(containerRef.current);

    chart.setOption(scatterData);

    return () => {
      chart.dispose(); // 清理图表实例
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100vh", height: 600 }}></div>;
};

export default StatterBasic;
