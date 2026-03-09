import { createContext, useContext, useState, useCallback } from "react";
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from "react-icons/fa";

const ToastContext = createContext(null);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be inside ToastProvider");
  return ctx;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "info", duration = 4000) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, duration);
  }, []);

  const dismiss = (id) => setToasts(prev => prev.filter(t => t.id !== id));

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast container */}
      <div className="toast-container">
        {toasts.map(toast => (
          <Toast key={toast.id} toast={toast} onDismiss={dismiss} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const ICONS = {
  success: <FaCheckCircle />,
  error:   <FaExclamationCircle />,
  info:    <FaInfoCircle />,
  warning: <FaExclamationCircle />,
};

const Toast = ({ toast, onDismiss }) => (
  <div className={`toast toast-${toast.type}`}>
    <span className="toast-icon">{ICONS[toast.type]}</span>
    <span className="toast-message">{toast.message}</span>
    <button className="toast-close" onClick={() => onDismiss(toast.id)}>
      <FaTimes />
    </button>
  </div>
);

export default ToastProvider;