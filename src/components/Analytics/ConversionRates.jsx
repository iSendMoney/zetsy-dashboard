import React from "react";
import Chart from "react-apexcharts";

export default function ConversionRates() {
  var options = {
    series: [
      {
        name: "Actual",
        data: [
          {
            x: "2011",
            y: 12,
            goals: [
              {
                name: "Expected",
                value: 14,
                strokeWidth: 2,
                strokeDashArray: 2,
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2012",
            y: 44,
            goals: [
              {
                name: "Expected",
                value: 54,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2013",
            y: 54,
            goals: [
              {
                name: "Expected",
                value: 52,
                strokeWidth: 10,
                strokeHeight: 0,
                strokeLineCap: "round",
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2014",
            y: 66,
            goals: [
              {
                name: "Expected",
                value: 61,
                strokeWidth: 10,
                strokeHeight: 0,
                strokeLineCap: "round",
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2015",
            y: 81,
            goals: [
              {
                name: "Expected",
                value: 66,
                strokeWidth: 10,
                strokeHeight: 0,
                strokeLineCap: "round",
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2016",
            y: 67,
            goals: [
              {
                name: "Expected",
                value: 70,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: "#775DD0",
              },
            ],
          },
        ],
      },
    ],
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
    chart: {
      height: 350,
      type: "bar",
      stacked: true,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    colors: ["#00E396"],
    legend: {
      show: true,
      showForSingleSeries: true,
      customLegendItems: ["Actual", "Expected"],
      markers: {
        fillColors: ["#00E396", "#775DD0"],
      },
    },
  };

  return (
    <div className="conversionRates__container">
      <h3>Conversion Rates</h3>
      <p>(+43%) than last year</p>
      <Chart
        options={options}
        series={options.series}
        type="bar"
        width={760}
        height={350}
      />
    </div>
  );
}
