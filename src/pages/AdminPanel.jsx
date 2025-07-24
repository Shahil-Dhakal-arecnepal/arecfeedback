import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

const AdminPanel = () => {
  const [ratingData, setRatingData] = useState({});
  const [sourceData, setSourceData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const ratingRes = await axios.get("http://localhost:5000/api/feedback/rating-summary");
      const sourceRes = await axios.get("http://localhost:5000/api/feedback/source-summary");
      setRatingData(ratingRes.data);
      setSourceData(sourceRes.data);
    };
    fetchData();
  }, []);

  const barData = {
    labels: ["0 Star", "1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
    datasets: [
      {
        label: "Number of Ratings",
        data: [ratingData[0], ratingData[1], ratingData[2], ratingData[3], ratingData[4], ratingData[5]],
        backgroundColor: "#012169",
      },
    ],
  };

  const pieData = {
    labels: Object.keys(sourceData),
    datasets: [
      {
        data: Object.values(sourceData),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  return (
<div className="p-6">
  <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-white p-4">
      <h2 className="text-xl mb-2">Feedback Ratings</h2>
      <div style={{ height: "300px" }}>
        <Bar data={barData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>

    <div className="bg-white p-4">
      <h2 className="text-xl mb-2">Sources</h2>
      <div style={{ height: "300px" }}>
        <Pie data={pieData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  </div>
</div>

  );
};

export default AdminPanel;
