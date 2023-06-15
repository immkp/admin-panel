import React, { Component,useState } from "react";
import Chart from "react-apexcharts";
import styles from "./ChartStyles.module.css";

const LineChart = () => {
  const [options, setOptions] = useState({
        chart: {
          id: "apexchart-example",
          toolbar: {
            show: false,
          },
          foreColor: "#fff",
        },
        xaxis: {
          categories: JSON.parse(localStorage.getItem("dashboardPage"))
            .latestHits.months,
        },
        stroke: {
          curve: "smooth",
          width: "3",
        },
    colors: ["#f7604c", "#a8d582", "#4ed6b8"],
      })
  const [series, setSeries] = useState([
        {
          name: "featured",
          data: JSON.parse(localStorage.getItem("dashboardPage")).latestHits
            .featured,
        },
        {
          name: "latest",
          data: JSON.parse(localStorage.getItem("dashboardPage")).latestHits
            .latest,
        },
        {
          name: "popular",
          data: JSON.parse(localStorage.getItem("dashboardPage")).latestHits
            .popular,
        },
      ])
  return (
    <div className={styles.chartcontainer}>
      <h2>Latest Hits</h2>
      <Chart
        options={options}
        series={series}
        type='line'
      />
    </div>
  )
}

export default LineChart;