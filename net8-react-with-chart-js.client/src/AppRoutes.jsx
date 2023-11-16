import Home from "./components/Home.jsx";
import AreaChart from "./components/AreaChart.jsx";
import BarChart from "./components/BarChart.jsx";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path:'/area-chart',
    element: <AreaChart />
  },
  {
    path:'/bar-chart',
    element: <BarChart />
  },
];

export default AppRoutes;
