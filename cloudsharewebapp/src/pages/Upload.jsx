import { useContext, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { useAuth } from "@clerk/clerk-react";
import { AlertCircle } from "lucide-react";
import axios from "axios";
import { apiEndpoints } from "../util/apiEndpoints";
import toast from "react-hot-toast";
import UploadBox from "../components/UploadBox";
import { UserCreditsContext } from "../context/UserCreditsContext";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const { getToken } = useAuth();
  const { credits, setCredits } = useContext(UserCreditsContext);
  const MAX_FILES = 5;

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    if (files.length + selectedFiles.length > MAX_FILES) {
      setMessage(`한 번에 최대 ${MAX_FILES}개의 파일만 업로드할 수 있습니다.`);
      setMessageType("error");
      return;
    }

    // add the new files into the existing files
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    setMessage("");
    setMessageType("");
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setMessageType("error");
    setMessage("");
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      setMessageType("error");
      setMessage("업로드할 파일을 최소 하나 이상 선택해 주세요.");
      return;
    }

    if (files.length > MAX_FILES) {
      setMessage(`한 번에 최대 ${MAX_FILES}개의 파일만 업로드할 수 있습니다.`);
      setMessageType("error");
      return;
    }

    setUploading(true);
    setMessage("파일 업로드 중...");
    setMessageType("info");

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    try {
      const token = await getToken();
      const response = await axios.post(apiEndpoints.UPLOAD_FILE, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && response.data.remainingCredits !== undefined) {
        setCredits(response.data.remainingCredits);
      }

      setMessage("파일이 성공적으로 업로드되었습니다.");
      setMessageType("success");
      setFiles([]);
    } catch (error) {
      console.error("Error uploading files: ", error);
      toast.error("Error uploading files: ", error.message);
      setMessage(
        error.response?.data?.message ||
          "파일 업로드 중 오류가 발생했습니다. 다시 시도해 주세요.",
      );
    } finally {
      setUploading(false);
    }
  };

  const isUploadDisabled =
    files.length === 0 ||
    files.length > MAX_FILES ||
    credits <= 0 ||
    files.length > credits;

  return (
    <DashboardLayout activeMenu="업로드">
      <div className="p-6">
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${messageType === "error" ? "bg-red-50 text-red-700" : messageType === "success" ? "bg-green-50 text-green-700" : "bg-blue-50 text-blue-700"}`}
          >
            {messageType === "error" && <AlertCircle size={20} />}
            {message}
          </div>
        )}

        <UploadBox
          files={files}
          onFileChange={handleFileChange}
          onUpload={handleUpload}
          uploading={uploading}
          onRemoveFile={handleRemoveFile}
          remainingCredits={credits}
          isUploadDisabled={isUploadDisabled}
        />
      </div>
    </DashboardLayout>
  );
};

export default Upload;
