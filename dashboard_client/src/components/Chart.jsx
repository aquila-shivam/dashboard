import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ data }) => {
  const filterData = {
    labels: data?.map((_, index) => index + 1),
    datasets: [
      {
        label: 'Intensity',
        borderColor: 'rgba(75,192,192,1)',
        data: data?.map((item, idx) => item.intensity),
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      },
      {
        label: 'Likelihood',
        borderColor: 'rgba(255,99,132,1)',
        data: data?.map((item, idx) => item.likelihood),
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      },
      {
        label: 'Relevance',
        borderColor: 'rgba(255,206,86,1)',
        data: data?.map((item, idx) => item.relevance),
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      },
    ],
  };

  const options = {
    responsive: true,
    tension: 0.4,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return <Line options={options} data={filterData} />;
};

export default Chart;