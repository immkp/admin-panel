import React, { Component, useState } from "react";
import Chart from "react-apexcharts";
import styles from "./ChartStyles.module.css";

const HorizontalChart = () => {

  const [data, setData] = useState({
    backgroundColor: [
      "aqua",
      "blue",
      "green",
      "orange",
      "purple",
      "red",
      "yellow",
    ]
  })

  const [options, setOptions] = useState({
    
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
        barHeight: "40%",
      },
    },
    chart: {
      id: "apexchart-example",
      toolbar: {
        show: false,
      },
      foreColor: "#fff",
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: Object.keys(
        JSON.parse(localStorage.getItem("dashboardPage")).performance
      ),
    },
    fill: {
      colors: ["#ffffff", "#E91E63", "#9C27B0"],
    },
  })

  const [series, setSeries] = useState([
    {
      name: "featured",
      data: Object.values(
        JSON.parse(localStorage.getItem("dashboardPage")).performance
      ),
    },
  ])
  return (
    <div className={styles.chartcontainer}>
      <h2>Performance</h2>
      <Chart
        data={data}
        options={options}
        series={series}
        type='bar'
      />
    </div>
  )
}



export default HorizontalChart;