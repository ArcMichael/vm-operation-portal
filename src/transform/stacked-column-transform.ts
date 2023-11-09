import { EchartsBasicFormattime } from '@/data/word/report/column-data';
import React from 'react';

interface DataType {
    key: React.Key;
    newWordsLearned: string;
    studyDate: string;
    totalWords: string;
    wordsRemaining: string;
}

const KPI_IELTS = 150;

export const transformReport = (fetchedData: DataType[]) => {
    const transformedx_AxisData = fetchedData.map((item: DataType) =>
        EchartsBasicFormattime(item.studyDate)
    );
    const transformed_seriesTotalnow = fetchedData.map(
        (item: DataType) => item.newWordsLearned
    );
    const transformed_seriesLeftOver = fetchedData.map(
        (item: DataType) =>
            parseInt(item.totalWords) - parseInt(item.newWordsLearned)
    );

    const xAxis = [
        {
            type: 'category',
            data: transformedx_AxisData,
        },
    ];

    const S_YL = {
        name: 'Yesterday Leftover',
        type: 'bar',
        stack: 'YT',
        emphasis: {
            focus: 'series',
        },
        data: transformed_seriesLeftOver,
        markLine: {
            lineStyle: {
                type: 'dashed',
            },
            data: [
                [{ type: 'average' }, { type: 'max' }],
                {
                    type: 'average',
                    name: 'Average',
                    label: {
                        formatter: 'Avg.: {c}',
                        position: 'middle',
                    },
                },
            ],
        },
    };

    const S_TN = {
        name: 'Today New',
        type: 'bar',
        stack: 'YT',
        emphasis: {
            focus: 'series',
        },
        data: transformed_seriesTotalnow,
        markLine: {
            lineStyle: {
                type: 'dashed',
            },
            data: [
                [{ type: 'average' }, { type: 'max' }],
                {
                    type: 'average',
                    name: 'Average',
                    label: {
                        formatter: 'Avg.: {c}',
                        position: 'middle',
                    },
                },
            ],
        },
    };

    const S_KPI = {
        name: 'KPI',
        type: 'line', // 使用线系列，不会显示任何数据点
        data: [], // 不需要实际数据
        markLine: {
            symbol: 'none', // 移除标记点，只显示线
            lineStyle: {
                color: 'red', // 可以选择任何颜色
                width: 2, // 线宽
            },
            label: {
                position: 'insideEndTop', // 选择标签位置
                formatter: 'New: {c}', // 标签内容
            },
            data: [
                { yAxis: KPI_IELTS }, // 使用 yAxis 属性来指定 y 值
            ],
        },
    };

    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis,
        yAxis: [
            {
                type: 'value',
            },
        ],
        series: [S_TN, S_YL, S_KPI],
    };
};
