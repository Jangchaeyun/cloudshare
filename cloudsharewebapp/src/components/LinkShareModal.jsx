import React, { useRef, useEffect } from "react";
import Modal from "./Modal";
import { Check, Copy } from "lucide-react";

/**
 * A modal component for sharing links
 *
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether the modal is open
 * @param {function} props.onClose - Function to call when the modal is closed
 * @param {string} props.link - The link to share
 * @param {string} props.title - Modal title
 */
const LinkShareModal = ({ isOpen, onClose, link, title = "Share Link" }) => {
  const [copied, setCopied] = React.useState(false);
  const linkInputRef = useRef(null);

  // Reset copied state when modal is opened or closed
  useEffect(() => {
    setCopied(false);

    // Focus and select the link input when the modal is opened
    if (isOpen && linkInputRef.current) {
      setTimeout(() => {
        linkInputRef.current.focus();
        linkInputRef.current.select();
      }, 100);
    }
  }, [isOpen]);

  const handleCopyLink = () => {
    if (linkInputRef.current) {
      linkInputRef.current.select();
      navigator.clipboard
        .writeText(link)
        .then(() => {
          setCopied(true);
          // Reset copied state after 2 seconds
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy link: ", err);
        });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      confirmText={copied ? "복사했어요!" : "복사"}
      cancelText="닫기"
      onConfirm={handleCopyLink}
      confirmButtonClass={
        copied
          ? "bg-green-600 hover:bg-green-700"
          : "bg-purple-500 hover:bg-purple-600"
      }
      size="md"
    >
      <div className="space-y-4">
        <p className="text-gray-600">
          이 파일에 접근할 수 있도록 다른 사람들과 이 링크를 공유하세요.
        </p>
        <div className="flex items-center gap-2">
          <input
            ref={linkInputRef}
            type="text"
            value={link}
            readOnly
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />
          <button
            onClick={handleCopyLink}
            className={`p-2 rounded-md ${copied ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"} hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
            title={copied ? "Copied!" : "Copy to clipboard"}
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
        </div>
        {copied && (
          <p className="text-sm text-green-600 flex items-center gap-1">
            <Check size={16} />
            링크가 클립보드에 복사되었습니다!
          </p>
        )}
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            이 링크만 있으면 누구나 이 파일에 접근할 수 있습니다.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default LinkShareModal;
