import React from "react";
import Chart from "react-apexcharts";

export default function ProductCategoySales() {
  var options = {
    series: [
      {
        name: "Last Week",
        data: [45, 52, 38, 24, 33, 10],
      },
      {
        name: "This Week",
        data: [26, 21, 20, 6, 8, 15],
      },
    ],
    stroke: {
      show: true,
      width: 2,
      colors: [],
      dashArray: 0,
    },
    grid: {
      row: {
        colors: ["transparent"],
        opacity: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: ["Urban", "Fashion", "Shoes", "Custom", "Prints", "Readymade"],
      labels: {
        show: true,
        style: {
          colors: ["#a8a8a8"],
          fontSize: "11px",
          fontFamily: "Arial",
        },
      },
    },
    chart: {
      height: 350,
      type: "bar",
      stacked: true,
      toolbar: { show: false },
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColor: "#e8e8e8",
          fill: {
            colors: ["#f8f8f8", "#fff"],
          },
        },
      },
    },
  };

  return (
    <div className="productCategorySales__container">
      <h3>Sales by Category</h3>
      <p>Congrats! Urban Category is geeting more outreach.</p>
      <Chart
        options={options}
        series={options.series}
        type="radar"
        width={350}
        height={350}
      />
    </div>
  );
}
