import React from "react";
import { Line } from "react-chartjs-2";

class Chart extends React.Component {
  render() {
    const chartData = (canvas) => {
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 100, 0);

      return {
        labels: this.props.dates,
        backgroundColor: gradient,
        datasets: [
          {
            label: "Precio de " + this.props.coin + " (USD)",
            data: this.props.prices,
            fill: true,
            borderColor: "rgb(60, 120, 230)",
          },
        ],
      };
    };

    return (
      <Line
        data={chartData}
        width={300}
        height={300}
        options={{
          maintainAspectRatio: false,
          legend: {
            display: true,
            position: "bottom",
          },
          scales: {
            xAxes: [
              {
                display: false,
                ticks: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                type: "linear",
              },
            ],
          },
        }}
      />
    );
  }
}
export default Chart;
