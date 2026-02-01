import { UserButton } from "@clerk/clerk-react";
import DashboardLayout from "../layout/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout activeMenu="대시보드">
      <div>Dashboard content</div>
    </DashboardLayout>
  );
};

export default Dashboard;
