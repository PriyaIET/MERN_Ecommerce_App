// This is the main library for creating charts. It is used for configuring and rendering the chart. Various modules (CategoryScale, LinearScale, etc.) are imported from chart.js to enable specific features for the bar chart like scaling, tooltips, legends, and other chart behaviors.
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2"; //This is a wrapper around chart.js that makes it easier to use in React applications.

//This registers the required components from chart.js to be used for rendering the bar chart. Components include the scales (categorical and linear), bar elements, title, tooltip, and legend.
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface BarPropsChart {
  horizontal?: boolean;
  data_1: number[];
  data_2: number[];
  title_1: string;
  title_2: string;
  bgColor_1: string;
  bgColor_2: string;
  labels?: string[];
}

const months = ["January", "February", "March", "April", "May", "June", "July"];

export const BarChart = ({
  data_1 = [],
  data_2 = [],
  title_1,
  title_2,
  bgColor_1,
  bgColor_2,
  horizontal = false,
  labels = months,
}: BarPropsChart) => {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
    scales:{
      y:{
        beginAtZero: true,
        grid:{
          display: false
        }
      },
      x:{
        grid:{
          display: false
        }
      }
    }
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bgColor_1,
        barThickness:"flex",
        barPercentage:1,
        categoryPercentage:0.4
      },
      {
        label: title_2,
        data: data_2,
        backgroundColor: bgColor_2,
        barThickness:"flex",
        barPercentage:1,
        categoryPercentage:0.4
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

interface DoughnutChartProps{
  labels: string[];
  data: number[];
  backgroundColor: string[];
  cutout?:number|string;
  legends?:boolean;
  offset?:number[];
}

export const DoughnutChart=({labels, data, backgroundColor, cutout, legends=true, offset}:DoughnutChartProps)=>{

  const doughnutData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets:[{
      data,
      backgroundColor,
      borderWidth:0,
      offset
    }]
  };
  const doughnutOptions: ChartOptions<"doughnut"> = {
    responsive:true,
    plugins:{
      legend:{
        display:legends,
        position:"bottom",
        labels:{
          padding:40
        }
      }
    },
    cutout
  };
  return <Doughnut data={doughnutData} options={doughnutOptions}/>
}