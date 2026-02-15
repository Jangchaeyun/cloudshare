import { useContext, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { useAuth } from "@clerk/clerk-react";
import { AlertCircle } from "lucide-react";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const { getToken } = useAuth();
  const { credits, setCredits } = useContext();
  const MAX_FILES = 5;

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    if (files.length + selectedFiles.length > MAX_FILES) {
      setMessage(`한 번에 최대 ${MAX_FILES}개의 파일만 업로드할 수 있습니다.`);
      setMessageType("error");
      return;
    }

    // add the new files into the existing files
    setFiles((prevFiles) => [...prevFiles, selectedFiles]);
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

        <Upload
          files={files}
          onFileChange={handleFileChange}
          onUpload={handleUpload}
          uploading={uploading}
          onRemoveFile={handleRemoveFile}
          remainingCredits={credits}
          isUploadDisable={isUploadDisable}
        />
      </div>
    </DashboardLayout>
  );
};

export default Upload;
