import React from "react";

import { GoPrimitiveDot } from "react-icons/go";

import image1 from "../data/Image/Image1.png";
import { Button, Piechart, LineChart } from "../components/index";
import { earningData, SparklineAreaData } from "../data/data";
import { useStateContext } from "../context/ContextProvider";
import DropMenu from "../components/DropMenu/DropMenu";

const Ecommerce = () => {
  const { screenSize, currentColor } = useStateContext();
  const chartDatax = [];
  const labels = [];

  SparklineAreaData.map((elem) => chartDatax.push(elem.x));
  SparklineAreaData.map((elem) => labels.push(elem.yval));

  console.log(labels);

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
    <div className="mt-24 lg:mt-12 md:mt-10">
      <div className="w-full flex justify-center items-center p-2 2xl:p-0">
        <div className="flex flex-wrap justify-center items-start xl:flex-nowrap gap-5">
          <div className="bg-white dark:bg-secondary-dark-bg flex items-center justify-between p-4 rounded-2xl drop-shadow-md">
            <div className="flex-col justify-start">
              <p style={{ color: `${currentColor}` }} className="lg:text-2xl">
                Congratulations Alireza! 🎉
              </p>
              <p className="mt-5 dark:text-gray-200">
                You have done 72% more sales today. Check your new badge in your
                profile.
              </p>
              <Button
                text={"View Badge"}
                bgHoverColor={currentColor}
                width={screenSize <= 1010 ? "w-28" : "w-36"}
                size={screenSize <= 1010 ? "text-sm" : "text-md"}
                color={currentColor}
                borderColor={currentColor}
              />
            </div>
            <img
              src={image1}
              height={screenSize <= 1010 ? "200" : "300"}
              width={screenSize <= 1010 ? "200" : "300"}
              className="object-scale-down"
              alt="img"
            />
          </div>
          <div
            style={{ backgroundColor: `${currentColor}` }}
            className="h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 rounded-2xl drop-shadow-md">
            <div>
              <p className="font-bold text-white">Earnings</p>
              <p className="text-3xl text-white font-semibold mt-6">
                $63,448.78
              </p>
              <p className="text-white mt-2">Monthly Revenue</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex m-14 flex-wrap gap-5 justify-center items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 rounded-2xl drop-shadow-lg">
              <button
                type="button"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
                className="text-2xl rounded-full opacity-0.9 p-3 hover:drop-shadow-md">
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm ml-2 ${item.pcColor}`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center items-center px-2 2xl:p-0">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-3 xl:p-5 2xl:p-7 rounded-2xl drop-shadow-md mt-5">
          <div className="flex justify-between">
            <p className="font-semibold text-sm lg:text-xl">Total Revenue</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl dark:text-gray-200">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span className="text-lg sm:text-sm">Expense</span>
              </p>
              <p
                style={{ color: currentColor }}
                className="flex items-center gap-2 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span className="text-lg sm:text-sm">Budget</span>
              </p>
            </div>
          </div>

          <div className="mt-3 flex justify-between items-center flex-wrap">
            <div className="border-color m-4">
              <div>
                <p>
                  <span className="text-md lg:text-xl font-semibold">
                    $93,438
                  </span>
                  <span className="p-1.5 text-sm lg:text-xl  hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1 text-md lg:text-xl ">Budget</p>
              </div>
              <div className="mt-3">
                <p className="text-md lg:text-xl  font-semibold">$48,487</p>

                <p className="text-gray-500 mt-1 text-md lg:text-xl ">
                  Expense
                </p>
              </div>
              <div className="h-56 mt-5 w-300 2xl:w-500">
                <LineChart
                  Data={chartDatax}
                  labels={labels}
                  options={options}
                  BorderColor={"#4cd137"}
                  ChartName={"Chart1"}
                  flag={"singleline"}
                />
              </div>
            </div>

            <div className="p-2 mt-5 flex-col items-center justify-center">
              <div className="flex justify-center items-center">
                <DropMenu
                  backgroundColor={currentColor}
                  textColor={"#fff"}
                  borderColor={currentColor}
                  text={"2022"}
                  hoverBackgroundColor={"hover:bg-rose-400"}
                  hoverTextColor={"hover:text-white"}
                />
              </div>
              <div className="flex justify-center mt-6 items-center lg:w-400 md:w-300">
                <Piechart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>bar</div>
    </div>
  );
};

export default Ecommerce;
