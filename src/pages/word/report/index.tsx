import StackedColumn from '@/components/Molecular/Charts/stack/stack-column';
import LayoutWord from '@/components/Layout/layout-word';
import React, { useEffect, useState } from 'react';
import useMessageApi from '@/components/Atomic/useMessageApi';
import { getWordLearningData } from '@/services/wordService';
import useAuthToken from '@/components/Atomic/useAuthToken';
import { EchartsBasicFormattime } from '@/data/word/report/column-data';
import { EChartsOption } from 'echarts';

interface DataType {
    key: React.Key;
    newWordsLearned: string;
    studyDate: string;
    totalWords: string;
    wordsRemaining: string;
}

const KPI_IELTS = 150;

const Component: React.FC = () => {
    // const [columnData, setColumnData] = useState(''); // State to hold the fetched data
    const { messageLoading, messageSuccess, messageError, messageWarning } =
        useMessageApi();

    const [columnData, setColumnData] = useState<EChartsOption | null>(null);

    // 使用自定义钩子来获取 token
    const token = useAuthToken();

    const loadData = async () => {
        try {
            messageLoading('Loading data...');
            // messageApi.loading('Loading data...');
            // Assuming `getWordLearningData` is a function that makes an API call
            // and returns the data in the expected format.
            const fetchedData = await getWordLearningData(token);
            // Transform data to match the DataType interface if needed

            const transformedx_AxisData = fetchedData.map((item: DataType) =>
                EchartsBasicFormattime(item.studyDate)
            );
            const transformed_seriesTodayNow = fetchedData.map(
                (item: DataType) => item.newWordsLearned
            );
            const transformed_seriesLeftOver = fetchedData.map(
                (item: DataType) =>
                    parseInt(item.totalWords) - parseInt(item.newWordsLearned)
            );

            const columnData: EChartsOption = {
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
                xAxis: [
                    {
                        type: 'category',
                        data: transformedx_AxisData,
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                    },
                ],
                series: [
                    {
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
                    },
                    {
                        name: 'Today New',
                        type: 'bar',
                        stack: 'YT',
                        emphasis: {
                            focus: 'series',
                        },
                        data: transformed_seriesTodayNow,
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
                    },
                    {
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
                    },
                ],
            };

            messageSuccess('Data loaded successfully');

            setColumnData(columnData);

            // 转换格式
            // const transformedDataxAxis = fetchedData.map(
            //     (item: DataType, index: number) => ({
            //         EchartsBasicFormattime(item.),
            //     })
            // );
            // setColumnData(transformReport(fetchedData)); // Update the state with the transformed data

            // messageApi.success('Data loaded successfully');
        } catch (error) {
            messageError('Error fetching data');
            console.log(error);
        }
    };

    useEffect(() => {
        messageWarning('Start Loading...');
        loadData();
    }, []); // This useEffect runs when `fileId` changes);

    if (!columnData) {
        return <div>Loading...</div>; // Or some loading component
    }

    return <StackedColumn stackedColumnData={columnData} />;
};

export default LayoutWord(Component);
