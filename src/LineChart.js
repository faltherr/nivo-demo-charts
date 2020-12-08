import React from "react";
import { ResponsiveLine } from "@nivo/line";
import data from "./timeSeriesData";

export default function LineChart() {

  return (
    <>
      <ResponsiveLine
        data={data}
        curve="monotoneX"
        colors={{ datum: "color" }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        enableArea={false}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Date",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "My Value",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        // Hide grid lines
        enableGridX={false}
        enableGridY={true}
        // Show cross hair with all data points in tooltip
        enableSlices="x"
        crosshairType="x"
        pointSize={10}
        pointColor={{ theme: "background" }}
        useMesh={true}
      />
    </>
  );
}
