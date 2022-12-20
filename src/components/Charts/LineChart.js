import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ Data, flag, labels, options, BorderColor, ChartName }) => {
  const { chartData } = Data;

  console.log(chartData);
  let data;
  if (flag === "multiline") {
    data = {
      labels,
      datasets: [
        {
          label: chartData[0],
          data: Data["data1y"],
          fill: false,
          borderColor: "orange",
          tension: 0.1,
        },
        {
          label: chartData[1],
          data: Data["data2y"],
          fill: false,
          borderColor: "blue",
          tension: 0.1,
        },
        {
          label: chartData[2],
          data: Data["data3y"],
          fill: false,
          borderColor: "red",
          tension: 0.1,
        },
      ],
    };
  } else if (flag === "singleline") {
    data = {
      labels,
      datasets: [
        {
          label: ChartName,
          data: Data,
          fill: false,
          borderColor: BorderColor,
          tension: 0.1,
        },
      ],
    };
  }

  return <Line options={options} data={data} />;
};

export default LineChart;
