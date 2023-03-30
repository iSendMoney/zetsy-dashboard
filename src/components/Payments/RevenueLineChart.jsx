import React from "react";
import Chart from "react-apexcharts";

export default function RevenueLineChart() {
  const options = {
    series: [
      {
        data: [100, 241, 35, 151, 49, 62, 169],
        type: "area",
      },
    ],
    legend: {
      show: false,
    },
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: { show: false },
    },
    states: {
      hover: {
        filter: {
          type: "lighten",
          value: 0.04,
        },
      },
      active: {
        filter: {
          type: "darken",
          value: 0.88,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["#01AB54"],
      width: 3,
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
      row: {
        colors: undefined,
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      labels: {
        show: false,
      },
      lines: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      lines: {
        show: false,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        show: false,
      },
      marker: {
        show: false,
      },
    },
    markers: {
      size: 0, // set to 0 to remove markers
    },
    colors: ["#89E0A6"],
  };

  return (
    <div>
      {" "}
      <Chart
        options={options}
        series={options.series}
        type="line"
        width="102%"
        height={120}
      />
    </div>
  );
}
