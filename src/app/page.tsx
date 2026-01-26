import Overview from "@/components/dashboard/overview";
import Statistics from "@/components/dashboard/statistics";
import Threats from "@/components/dashboard/threats";

function Dashboard() {
  return (
    <>
      <Overview />
      <Threats />
      <Statistics />
    </>
  );
}

export default Dashboard;
