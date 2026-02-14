import { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";

const Upload = () => {
  const [file, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("")
  return (
    <DashboardLayout activeMenu="업로드">
      <div>업로드</div>
    </DashboardLayout>
  );
};

export default Upload;
