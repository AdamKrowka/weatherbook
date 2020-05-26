import React from "react";
import { Line } from "react-chartjs-2";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

function MyComponent(props) {
  const size = isWidthUp("md", props.width) ? 3 : 6;
  return (
    <Line
      width={12}
      height={size}
      data={{
        labels: [
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
          "23:00",
          "24:00",
          "01:00",
          "02:00",
          "03:00",
          "04:00",
          "05:00",
        ],
        datasets: [
          {
            fill: false,
            label: "temp",
            data: [20, 19, 17, 14, 10, 5, 4, 5, 4, 5, 7, 8],
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderColor: "rgba(255, 206, 86, 1)",
            borderWidth: 1,
          },
        ],
      }}
    />
  );
}

export default withWidth()(MyComponent);
