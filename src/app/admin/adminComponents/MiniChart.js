"use client";
import ApexCharts from "apexcharts";
import { useEffect } from "react";

const MiniChart = () => {
  useEffect(() => {
    // Function to get chart colors from the element
    const getChartColorsArray = (id) => {
      // Update logic if needed to dynamically retrieve colors
      return ["#556ee6"]; // Example color array
    };

    // Ensuring the document is defined (in case of server-side rendering)
    if (typeof document !== "undefined") {
      const minichart1Colors = getChartColorsArray("#mini-chart1");

      const options = {
        series: [{ data: [2, 10, 18, 22, 36, 15, 47, 75, 65, 19, 14, 2, 47, 42, 15] }],
        chart: {
          type: "line",
          height: 50,
          sparkline: { enabled: true },
        },
        colors: minichart1Colors,
        stroke: { curve: "smooth", width: 2 },
        tooltip: {
          fixed: { enabled: false },
          x: { show: false },
          y: {
            title: {
              formatter: function () {
                return "";
              },
            },
          },
          marker: { show: false },
        },
      };

      // Initialize chart
      const chart = new ApexCharts(document.querySelector("#mini-chart1"), options);
      chart.render();

      // Cleanup function to destroy the chart on component unmount
      return () => {
        chart.destroy();
      };
    }
  }, []); // Empty dependency array means this runs once when component mounts

  return <div id="mini-chart1"></div>;
};

export default MiniChart;
