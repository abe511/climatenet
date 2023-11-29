import React, { useEffect, useRef, ReactNode } from 'react';
// import { Chart, ChartData, ChartOptions } from 'chart.js';
import { Chart } from 'chart.js/auto';

interface StationChartProps {
  data: number[];
  labels: string[];
}
const StationChart: React.FC<StationChartProps> = ({ data, labels }) => {
  // console.log(Chart);
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) {
      return;
    }

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Temperature',
            data,
            backgroundColor: 'rgba(55,55,55, 0.5)',
            borderColor: 'rgba(111,111,111, 0.5)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'hour',
              tooltipFormat: 'DD MM YYYY',
            },
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    // return () => {
    //   chart.destroy();
    // };
  }, [data, labels]);
  return (
    <>
      <p>chart here</p>
      <div style={{ width: '400px' }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </>
  );
};

export default StationChart;
