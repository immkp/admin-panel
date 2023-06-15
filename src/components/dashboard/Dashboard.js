import React, { useState } from "react";
import OrdersList from "./OrdersList";
import NotificationList from "./NotificationList";
import styles from "./Dashboard.module.css";
import PieChart from "./Charts/PieChart";
import LineChart from "./Charts/LineChart";
import HorizontalChart from "./Charts/HorizontalChart";

const Dashboard = () => {
  let localPerformance = JSON.parse(localStorage.getItem("dashboardPage"))[
    "storage"
  ];
  const [userData, setUserData] = useState({
    labels: [
      `Used(${localPerformance.used}GB)`,
      `System(${localPerformance.system}GB)`,
      `Available(${localPerformance.available}GB)`,
    ],

    datasets: [
      {
        data: [
          localPerformance.available,
          localPerformance.system,
          localPerformance.used,
        ],

        backgroundColor: ["#f7604c", "#4ed6b8", "#a8d582"],
        fontColor: "white",
      },
    ],
  })

  return (
    <div>
      <div className={styles.flexdiv}>
        <div>
          <LineChart />
        </div>
        <div>
          <HorizontalChart />
        </div>
      </div>

      <div className={styles.flexdiv}>
        <div>
          <PieChart chartData={userData} />
        </div>
        <div>
          <NotificationList />
        </div>
      </div>
      <OrdersList />
    </div>
  );
};

export default Dashboard;