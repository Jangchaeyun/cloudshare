import Modal from "./Modal";

const ConfirmationDialog = ({
  isOpen,
  onClose,
  title = "확인 작업",
  message = "계속 진행하시겠습니까?",
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  confirmationButtonClass = "bg-red-600 hover:bg-red-700",
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      message={message}
      confirmText={confirmText}
      cancelText={cancelText}
      onConfirm={onConfirm}
      confirmButtonClass={confirmationButtonClass}
      size="sm"
    >
        <p className="text-gray-600">{message}</p>
    </Modal>
  );
};

export default ConfirmationDialog;
