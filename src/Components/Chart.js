import React from "react";
import { Line } from "react-chartjs-2";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const getLabel = (dt) =>
  `${new Date(dt * 1000).getHours() < 10 ? "0" : ""}${new Date(
    dt * 1000
  ).getHours()}:00`;

function MyComponent({ weatherData, width }) {
  const data = {
    labels: [],
    data: [],
  };
  for (let i = 0; i < 24; i++) {
    data.labels.push(getLabel(weatherData[i].dt));
    data.data.push(weatherData[i].temp.toFixed());
  }

  const size = isWidthUp("lg", width) ? 3 : 6;
  return (
    <Line
      width={12}
      height={size}
      data={{
        labels: data.labels,
        datasets: [
          {
            fill: false,
            label: "temperature in °C",
            data: data.data,
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderColor: "rgba(255, 206, 86, 1)",
            borderWidth: 3,
          },
        ],
      }}
      options={{ legend: { display: false } }}
    />
  );
}

export default withWidth()(MyComponent);
