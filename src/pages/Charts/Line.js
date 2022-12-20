import React from "react";

import { ChartsHeader, LineChart } from "../../components";
import { lineCustomSeries } from "../../data/data";

const Line = () => {
  const chartDatasource = [];
  const chartData = [];
  const labels = [];
  const data1y = [];
  const data2y = [];
  const data3y = [];

  lineCustomSeries.map((elem) => chartDatasource.push(elem.dataSource));
  lineCustomSeries.map((elem) => chartData.push(elem.name));

  const loopingArray = (data, num) => {
    for (let index = 0; index < data.length; index++) {
      if (num === 0) {
        data1y.push(data[index].y);
        labels.push(data[index].x);
      } else if (num === 1) {
        data2y.push(data[index].y);
      } else if (num === 2) {
        data3y.push(data[index].y);
      }
    }
  };

  chartDatasource.forEach((item, index) => {
    if (index === 0) {
      loopingArray(item, index);
    } else if (index === 1) {
      loopingArray(item, index);
    } else if (index === 2) {
      loopingArray(item, index);
    }
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "LineChart",
      },
    },
  };
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Line" title="Inflation Rate" />
      <div>
        <LineChart
          Data={{ data1y, data2y, data3y, chartData }}
          labels={[2005, 2006, 2007, 2008, 2009, 2010, 2011]}
          options={options}
          flag={"multiline"}
        />
      </div>
    </div>
  );
};

export default Line;
