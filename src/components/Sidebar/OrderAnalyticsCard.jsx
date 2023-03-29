import React from "react";
import Chart from "react-apexcharts";
import formatNumber from "format-number";

export default function OrderAnalyticsCard({ data }) {
  const [isDataTrendFalse] = React.useState(data?.trend > 0 ? "green" : "red");

  const options = {
    series: [
      {
        data: data?.chartData,
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
      colors: [isDataTrendFalse === "green" ? "#00E396" : "#FF4560"],
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
  };

  return (
    <div className="orderAnalyticsCard__container">
      <div className="analyticsNumber">
        <div>
          <h4>{data?.name}</h4>
          <div className="overview">
            <i className={`ri-funds-line  ${isDataTrendFalse}`}></i>
            <p>
              {formatNumber({ prefix: data?.trend > 0 ? "+" : "" })(
                data?.trend
              )}
              %
            </p>
          </div>
          <h3 className="number">{formatNumber()(data?.count)}</h3>
        </div>
        <div id="usersAnalyticsLineChart">
          <Chart
            options={options}
            series={options.series}
            type="line"
            width={160}
            height={120}
          />
        </div>
      </div>
    </div>
  );
}
