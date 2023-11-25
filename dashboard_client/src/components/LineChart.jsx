import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const LineChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartData = {
      labels: data.map((item, index) => index + 1), // Assuming data is an array of objects
      datasets: [
        {
          label: 'Intensity',
          borderColor: 'rgba(75,192,192,1)',
          data: data.map((item,idx) => item.intensity),
        },
        {
          label: 'Likelihood',
          borderColor: 'rgba(255,99,132,1)',
          data: data.map((item,idx) => item.likelihood),
        },
        {
          label: 'Relevance',
          borderColor: 'rgba(255,206,86,1)',
          data: data.map((item,idx) => item.relevance),
        },
      ],
    };

    const chartOptions = {
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Data Point',
            },
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Value',
            },
          },
        ],
      },
    };

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions,
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
