import React, { useEffect } from "react";
import { pieChartData } from "../../data/data";

import { Piechart, Header } from "../../components";

const Pie = () => {
  const chartData = [];
  const chartLabels = [];
  pieChartData.map((item) => chartData.push(item.y));
  pieChartData.map((item) => chartLabels.push(item.x));

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-zinc-700 flex-col items-center justify-center">
      <Header category="Page" title="Pie-Chart" />
      <p className="mt-4 mb-4">
        Pie and doughnut charts are probably the most commonly used charts. They
        are divided into segments, the arc of each segment shows the
        proportional value of each piece of data. They are excellent at showing
        the relational proportions between data.
      </p>
      <div className="flex items-center justify-center">
        <div className="w-600 ">
          <Piechart Data={chartData} Labels={chartLabels} />
        </div>
      </div>
    </div>
  );
};

export default Pie;
