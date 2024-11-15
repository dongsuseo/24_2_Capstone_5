"use client";
import styles from "./Modal.module.css";
export default function Modal({ isOpen, onClose, width, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: `${width}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
