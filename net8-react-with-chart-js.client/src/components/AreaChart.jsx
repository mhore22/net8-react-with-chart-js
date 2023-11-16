import React from 'react';
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {areaChartOptions, chartColors} from './Constants'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


function AreaChart() {
    const [chartData, setChartData] = useState();
    useEffect(() => {
        populateCharData();
    }, []);

    // The chart labels
    const labels = chartData === undefined ? [] : 
        chartData[0].monthlySales.map(data => data.month);
    
   // The chart datasets
   const datasets = chartData === undefined ? [] :
        generateDataSet(chartData)
    
    const data = {
      labels,
      datasets: datasets,
    };


    const contents = chartData === undefined
        ? <p><em>Loading...</em></p>
        : <Line options={areaChartOptions} data={data} />

    return (
        <div>
            {contents}
        </div>
    )

    async function populateCharData() {
        const response = await fetch('chartdata');
        const data = await response.json();
        setChartData(data);
    }

    function generateDataSet(yearlySales){
        const dateSet = [];
        yearlySales.forEach((data, index) => {
            dateSet.push({
                  fill: true,
                  label: data.year,
                  data: data.monthlySales.map(monthlySales => monthlySales.sales),
                  borderColor: chartColors[index].borderColor,
                  backgroundColor: chartColors[index].backgroundColor,
            })
        })
        return dateSet;
    }
}

export default AreaChart;