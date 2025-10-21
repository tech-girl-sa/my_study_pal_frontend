import React from "react";
import { FaTriangleExclamation } from "react-icons/fa6";
import classes from "./ConfirmDeleteModal.module.css";

export default function ConfirmDeleteModal({ isOpen, onClose, onConfirm, itemType, itemName }) {
  if (!isOpen) return null;

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modal}>
        <div className={classes.iconWrapper}>
          <FaTriangleExclamation className={classes.warningIcon} />
        </div>
        <h2 className={classes.modalTitle}>Confirm Delete</h2>
        <p className={classes.modalText}>
          Are you sure you want to delete the {itemType} <strong>{itemName}</strong>? This action cannot be undone.
        </p>
        <div className={classes.modalActions}>
          <button className={classes.cancelBtn} onClick={onClose}>Cancel</button>
          <button className={classes.deleteBtn} onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}
