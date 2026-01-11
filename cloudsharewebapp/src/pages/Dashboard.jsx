import { UserButton } from "@clerk/clerk-react";
import DashboardLayout from "../layout/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div>
        <UserButton />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
