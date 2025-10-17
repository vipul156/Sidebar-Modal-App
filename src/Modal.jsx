import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import React, { useEffect, useRef } from "react";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  const modalRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        isModalOpen
      ) {
        closeModal();
      }
    }
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, closeModal]);

  return (
    <div className={`modal-overlay ${isModalOpen && "show-modal"}`}>
      <div ref={modalRef} className="modal-container">
        <h3>modal content</h3>
        <button onClick={closeModal} className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
