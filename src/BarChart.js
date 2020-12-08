import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import data from "./paretoData";

export default function BarChart() {

  return (
    <>
      <ResponsiveBar
        data={data.sort((a, b) => a.value - b.value)}
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
            format: value => value
        }}
      />
    </>
  );
}
