import React from "react";
import "./OrderModal.css";

const OrderModal = ({ service, onClose }) => {
  if (!service) return null;

  const handleProceed = () => {
    const whatsappUrl = `https://wa.me/254701730921?text=${encodeURIComponent(
      service.whatsappText
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{service.name}</h2>
        <p>{service.description}</p>
        <p className="price">{service.price}</p>
        <div className="modal-buttons">
          <button className="proceed" onClick={handleProceed}>
            Proceed to Order
          </button>
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
