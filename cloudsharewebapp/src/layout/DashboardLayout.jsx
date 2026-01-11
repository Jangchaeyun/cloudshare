import { useUser } from "@clerk/clerk-react";

const DashboardLayout = ({ children }) => {
  const { user } = useUser();
  return (
    <div>
      {/* Navbar component goes here */}
      {user && (
        <div className="flex">
          <div className="max-[1080px]:hidden">
            {/* Sidemenu goes here */}side menu
          </div>
          <div className="grow mx-5">{children}</div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
