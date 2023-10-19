import { EChartsOption } from "echarts";
import moment from "moment";

const EchartsBasicFormattime = (time: string) => {
  try {
    return moment(time).format("YYYY-MM-DD");
  } catch (e) {
    return "";
  }
};

console.log();

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
      data: [0, 24, 85, 87],
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
      data: [124, 45, 48, 98],
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
  ],
};

export default columnData;
