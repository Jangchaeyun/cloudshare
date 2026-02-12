import { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import {
  Copy,
  Download,
  Eye,
  File,
  Globe,
  Grid,
  Image,
  List,
  Lock,
  Trash2,
} from "lucide-react";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import FileCard from "../components/FileCard";
import { apiEndpoints } from "../util/apiEndpoints";
import ConfirmationDialog from "../components/ConfirmationDialog";

const MyFiles = () => {
  const [files, setFiles] = useState([]);
  const [viewMode, setViewMode] = useState("list");
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    isOpen: false,
    fileId: null,
  });

  const [shareModal, setShareModal] = useState({
    isOpen: false,
    filesId: null,
    link: "",
  });

  const fetchFiles = async () => {
    try {
      const token = await getToken();
      const response = await axios.get(
        "http://localhost:8080/api/v1.0/files/my",
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (response.status === 200) {
        setFiles(response.data);
      }
    } catch (error) {
      console.log("Error fetching the files from server: ", error);
      toast.error("파일을 불러오는 중에 오류가 발생했습니다.", error.message);
    }
  };

  // Toggles the public/private status of a file
  const togglePublic = async (fileToUpdate) => {
    try {
      const token = await getToken();
      await axios.patch(
        apiEndpoints.TOGGLE_FILES(fileToUpdate.id),
        {},
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setFiles(
        files.map((file) =>
          file.id === fileToUpdate.id
            ? { ...file, isPublic: !file.isPublic }
            : file,
        ),
      );
    } catch (error) {
      console.error("Error toggling file status", error);
      toast.error(
        "파일 상태를 변경하는 중에 오류가 발생했습니다.",
        error.message,
      );
    }
  };

  const getFileIcon = (file) => {
    const extenstion = file.name.split(".").pop().toLowerCase();

    if (["jpg", "jpeg", "png", "gif", "svg", "webp"].includes(extenstion)) {
      return <Image size={24} className="text-purple-500" />;
    }

    if (["mp4", "webm", "mov", "avi", "mkv"].includes(extenstion)) {
      return <Video size={24} className="text-blue-500" />;
    }

    if (["mp3", "wav", "ogg", "flac", "m4a"].includes(extenstion)) {
      return <Music size={24} className="text-green-500" />;
    }

    if (["pdf", "doc", "docx", "txt", "rtf"].includes(extenstion)) {
      return <FileText size={24} className="text-amber-500" />;
    }

    return <FileIcon size={24} className="text-purple-500" />;
  };

  // handle file download
  const handleDownload = async (file) => {
    try {
      const token = await getToken();
      const response = await axios.get(apiEndpoints.DOWNLOAD_FILE(file.id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", file.name);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download faild", error);
      toast.error("파일 다운로드 중 오류가 발생했습니다.", error.message);
    }
  };

  // Closes the delete confirm
  const closeDeleteConfirmation = () => {
    setDeleteConfirmation({
      isOpen: false,
      fileId: null,
    });
  };

  // Opens the delete confirmation modal
  const openDeleteConfirmation = (fileId) => {
    setDeleteConfirmation({
      isOpen: true,
      fileId,
    });
  };

  // opens the shadow link modal
  const openShareModal = (fileId) => {
    const link = `${window.location.origin}/file/${fileId}`;
    setShareModal({
      isOpen: true,
      fileId,
      link,
    });
  };

  // Delete a file after confirmation
  const handleDelete = async () => {
    const fileId = deleteConfirmation.fileId;
    if (!fileId) return;

    try {
      const token = await getToken();
      const response = axios.delete(apiEndpoints.DELETE_FILE(fileId), {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 204) {
        setFiles(files.filter((file) => file.id !== fileId));
        closeDeleteConfirmation();
      } else {
        toast.error("파일 삭제 시 오류 발생");
      }
    } catch (error) {
      console.error("Error deleting file", error);
      toast.error("파일 삭제 시 오류 발생", error.message);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, [getToken]);

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

        {files.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 flex flex-col items-center justify-center">
            <File size={60} className="text-purple-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              아직 업로드된 파일이 없습니다.
            </h3>
            <p className="text-gray-500 text-center max-w-md mb-6">
              파일을 업로드하면 여기에 목록으로 표시됩니다. 문서, 이미지 및 기타
              파일을 업로드하여 안전하게 공유하고 관리할 수 있습니다.
            </p>
            <button
              onClick={() => navigate("/upload")}
              className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
            >
              업로드 하러 가기
            </button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {files.map((file) => (
              <FileCard key={file.id} file={file} />
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    파일명
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    크기
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    업로드 날짜
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    공유
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    액션
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {files.map((file) => (
                  <tr
                    key={file.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      <div className="flex items-center gap-2">
                        {getFileIcon(file)}
                        {file.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {(file.size / 1024).toFixed(1)} KB
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {new Date(file.uploadedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => togglePublic(file)}
                          className="flex items-center gap-2 cursor-pointer group"
                        >
                          {file.isPublic ? (
                            <>
                              <Globe size={16} className="text-green-500" />
                              <span className="group-hover:underline">
                                공개됨
                              </span>
                            </>
                          ) : (
                            <>
                              <Lock size={16} className="text-gray-500" />
                              <span className="group-hover:underline">
                                비공개
                              </span>
                            </>
                          )}
                        </button>
                        {file.isPublic && (
                          <button className="flex items-center gap-2 cursor-pointer group text-blue-600">
                            <Copy size={16} />
                            <span className="group-hover:underline">
                              링크 공유
                            </span>
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex justify-center">
                          <button
                            onClick={() => handleDownload(file)}
                            title="다운로드"
                            className="text-gray-500 hover:text-green-600"
                          >
                            <Download size={18} />
                          </button>
                        </div>
                        <div className="flex justify-center">
                          <button
                            onClick={() => openDeleteConfirmation(file.id)}
                            title="삭제"
                            className="text-gray-500 hover:text-red-600"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                        <div className="flex justify-center">
                          {file.isPublic ? (
                            <a
                              href={`/file/${file.id}`}
                              title="파일 보기"
                              target="_blank"
                              rel="noreferrer"
                              className="text-gray-500 hover:text-blue-600"
                            >
                              <Eye size={18} />
                            </a>
                          ) : (
                            <span className="w-[18px]"></span>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {/* Delete confirmation dialog */}
        <ConfirmationDialog
          isOpen={deleteConfirmation.isOpen}
          onClose={closeDeleteConfirmation}
          title="파일 삭제"
          message="이 파일을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다."
          confirmText="삭제"
          cancelText="취소"
          onConfirm={handleDelete}
          confirmationButtonClass="bg-red-600 hover:bg-red-700"
        />
      </div>
    </DashboardLayout>
  );
};

export default MyFiles;
