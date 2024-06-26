import { EChartsOption, EChartsType, init } from 'echarts';
import React, { useEffect, useRef } from 'react';

interface StackedColumnProps
    extends React.PropsWithChildren<{
        stackedColumnData: EChartsOption;
    }> {
    // add any other props here if needed
}

const StackedColumn: React.FC<StackedColumnProps> = ({ stackedColumnData }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const chart: EChartsType = init(containerRef.current);

        chart.setOption(stackedColumnData);

        return () => {
            chart.dispose(); // 清理图表实例
        };
    }, [stackedColumnData]);

    return (
        <div ref={containerRef} style={{ width: '100vh', height: 600 }}></div>
    );
};

export default StackedColumn;
