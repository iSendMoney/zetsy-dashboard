import React from "react";
import Chart from "react-apexcharts";

export default function Summary() {
  const options = {
    chart: {
      type: "donut",
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return opts.w.globals.labels[opts.seriesIndex];
      },
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        expandOnClick: true,
      },
    },
    series: [44, 55, 13, 33],
    labels: ["Revenue", "Sales", "Total Visit", "Leads"],
    legend: {
        show: false,
      }
  };

  return (
    <Chart
      options={options}
      series={options.series}
      type="donut"
      width={270}
      height={220}
    />
  );
}
