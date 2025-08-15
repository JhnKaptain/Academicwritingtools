import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import OrderModal from "./components/OrderModal";
import Footer from "./components/Footer";
import servicesData from "./data/services";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("green");
  const [selectedService, setSelectedService] = useState(null);

  const toggleTheme = () => {
    setTheme(theme === "green" ? "blue" : "green");
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <div className="welcome-text">
        <h2>Welcome to the JohnKaptain Academic Tools Hub</h2>
        <p>Access affordable academic tools and services</p>
        <p>Enjoy 15% Referral Bonus on each Member Referred to Our Services</p>
      </div>

      {servicesData.map((category, idx) => (
        <Category
          key={idx}
          category={category}
          onOrderClick={setSelectedService}
        />
      ))}

      <OrderModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      <Footer />
    </div>
  );
}

export default App;
