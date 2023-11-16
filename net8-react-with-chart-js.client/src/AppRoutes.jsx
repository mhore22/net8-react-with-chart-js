import Home from "./components/Home.jsx";
import AreaChart from "./components/AreaChart.jsx";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path:'/area-chart',
    element: <AreaChart />
  },
];

export default AppRoutes;
