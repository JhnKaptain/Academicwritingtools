import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service, onOrderClick }) => {
  return (
    <div className="service-card">
      <img src={service.img} alt={service.name} className="service-img" />
      <h3>{service.name}</h3>
      <p className="price">{service.price}</p>
      <button onClick={() => onOrderClick(service)}>Order via WhatsApp</button>
    </div>
  );
};

export default ServiceCard;
