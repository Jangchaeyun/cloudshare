import { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { Grid, List } from "lucide-react";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";

const MyFiles = () => {
  const [files, setFiles] = useState([]);
  const [viewMode, setViewMode] = useState("list");
  const { getToken } = useAuth();

  const fetchFiles = async () => {
    try {
      const token = await getToken();
      const response = awaitaxios.get(
        "http://localhost:8080/api/v1.0/files/my",
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (setFiles.status === 200) {
        setFiles(response.data);
      }
    } catch (error) {
      console.log("Error fetching the files from server: ", error);
      
    }
  };

  return (
    <DashboardLayout activeMenu="내 파일">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">내 파일 {files.length}</h2>
          <div className="flex items-center gap-3">
            <List
              onClick={() => setViewMode("list")}
              size={24}
              className={`cursor-pointer transition-colors ${viewMode === "list" ? "text-blue-600" : "text-gray-400 hover:text-gray-600"}`}
            />
            <Grid
              size={24}
              onClick={() => setViewMode("grid")}
              className={`cursor-pointer transition-colors ${viewMode === "grid" ? "text-blue-600" : "text-gray-400 hover:text-gray-600"}`}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyFiles;
