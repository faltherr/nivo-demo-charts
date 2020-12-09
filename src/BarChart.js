import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import data from "./paretoData";

// This function allows us to split italicization of pathogen labels
const CustomTick = (tick) => {
  const label = tick.value
    .replace("<em>", '<tspan font-style="italic">')
    .replace("</em>", "</tspan>");
  const tickValue = (
    <text
      transform={"translate(-10,0)"}
      dominant-baseline="central"
      dangerouslySetInnerHTML={{ __html: label }}
      text-anchor="end"
      style={{
        fontFamily: "sans-serif",
        fontSize: "11px",
        fill: "rgb(51, 51, 51)",
      }}
    />
  );
  return (
    <g transform={`translate(${tick.x},${tick.y})`}>
      <line
        x1="0"
        x2="-5"
        y1="0"
        y2="0"
        style={{ stroke: "rgb(119, 119, 119)", strokeWidth: 1 }}
      ></line>
      {tickValue}
    </g>
  );
};

export default function BarChart() {
  return (
    <>
      <ResponsiveBar
        data={data.sort((a, b) => a.value - b.value)}
        // Uncomment this to adjust the layers
        // layers={["grid", "bars", "markers", "legends", "annotations", "axes"]}
        keys={["value"]}
        indexBy="id"
        // Change the margins if more space is required for labels
        margin={{ top: 50, right: 80, bottom: 50, left: 180 }}
        padding={0.3}
        // Sets bar orientation to display as horizontal
        layout="horizontal"
        // Specifies colors from data
        colors={({ id, data }) => data.color}
        // Provides transitions for data
        animate={true}
        // Hides horizontal grid lines
        enableGridY={false}
        // Hides value displayed on bar
        enableLabel={false}
        // Y-axis configuration options
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          renderTick: CustomTick,
        }}
      />
    </>
  );
}
