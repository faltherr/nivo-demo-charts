import React from "react";
import { ResponsiveLine } from "@nivo/line";
import data from "./timeSeriesData";

export default function AreaChart() {
  return (
    <>
      <ResponsiveLine
        data={data}
        layers = {['grid', 'markers', 'lines', 'areas', 'crosshair', 'axes', 'points', 'slices', 'mesh', 'legends']}
        curve="monotoneX"
        colors={{ datum: "color" }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point", min: "auto" }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        enableArea={true}
        areaOpacity={1}
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
          legend: "Detection Rate",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        // Hide grid lines
        enableGridX={false}
        enableGridY={false}
        // Show cross hair with all data points in tooltip
        enableSlices='x'
        crosshairType="x"
        areaBaselineValue={0}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointLabelYOffset={-12}
        // useMesh={true}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: "#777777",
                strokeWidth: 1.5,
              },
            },
          },
        }}
      />
    </>
  );
}
