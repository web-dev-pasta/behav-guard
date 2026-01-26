import Overview from "@/components/dashboard/overview";
import Statistics from "@/components/dashboard/statistics";
import Threats from "@/components/dashboard/threats";
import { ChartAreaInteractive } from "@/components/request-traffic";

function Dashboard() {
  return (
    <>
      <Overview />
      <Threats />
      <Statistics />
      <ChartAreaInteractive />
    </>
  );
}

export default Dashboard;
