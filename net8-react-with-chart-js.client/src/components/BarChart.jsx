import React from 'react';
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {barChartOptions, chartColors} from './Constants'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



function BarChart() {
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
        : <Bar options={barChartOptions} data={data} />

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

export default BarChart;