import {
  FileIcon,
  FileText,
  Globe,
  Image,
  Lock,
  Music,
  Video,
} from "lucide-react";
import { useState } from "react";

const FileCard = ({ file }) => {
  const [showActions, setShowActions] = useState(false);
  const getFileIcon = () => {
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

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    else if (bytes < 1048) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / 1048576).toFixed(1) + " MB";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
  return (
    <div
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
      className="relative group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      {/* File preview area */}
      <div className="h-32 bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center p-4">
        {getFileIcon()}
      </div>

      {/* Public/Private badge */}
      <div className="absolute top-2 right-2">
        <div
          className={`rounded-full p-1.5 ${file.isPublic ? "bg-green-100" : "bg-gray-100"}`}
          title={file.isPublic ? "공개" : "비공개"}
        >
          {file.isPublic ? (
            <Globe size={14} className="text-green-600" />
          ) : (
            <Lock size={14} className="text-gray-600" />
          )}
        </div>
      </div>
    </div>
  );
};

export default FileCard;
