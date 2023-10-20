import { EChartsOption } from "echarts";
import moment from "moment";

const EchartsBasicFormattime = (time: string) => {
  try {
    return moment(time).format("YYYY-MM-DD");
  } catch (e) {
    return "";
  }
};

const KPI_IELTS = 100;

const columnData: EChartsOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {},
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: [
        EchartsBasicFormattime("2023-10-15"),
        EchartsBasicFormattime("2023-10-16"),
        EchartsBasicFormattime("2023-10-17"),
        EchartsBasicFormattime("2023-10-18"),
        EchartsBasicFormattime("2023-10-19"),
        EchartsBasicFormattime("2023-10-20"),
      ],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Yesterday Leftover",
      type: "bar",
      emphasis: {
        focus: "series",
      },
      data: [0, 24, 85, 87, 116, 90],
      markLine: {
        lineStyle: {
          type: "dashed",
        },
        data: [
          [{ type: "average" }, { type: "max" }],
          { type: "average", name: "Average" },
        ],
      },
    },
    {
      name: "Today New",
      type: "bar",
      emphasis: {
        focus: "series",
      },
      data: [124, 45, 48, 98, 32, 59],
      markLine: {
        lineStyle: {
          type: "dashed",
        },
        data: [
          [{ type: "average" }, { type: "max" }],
          { type: "average", name: "Average" },
        ],
      },
    },
    {
      name: "KPI",
      type: "line", // 使用线系列，不会显示任何数据点
      data: [], // 不需要实际数据
      markLine: {
        symbol: "none", // 移除标记点，只显示线
        lineStyle: {
          color: "red", // 可以选择任何颜色
          width: 2, // 线宽
        },
        label: {
          position: "insideEndTop", // 选择标签位置
          formatter: "New: {c}", // 标签内容
        },
        data: [
          { yAxis: KPI_IELTS }, // 使用 yAxis 属性来指定 y 值
        ],
      },
    },
  ],
};

export default columnData;
