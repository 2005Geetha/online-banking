import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaUserPlus, FaSignInAlt } from "react-icons/fa";
import "./About.css";
import SecureOnlineBanking from "../assets/secure online banking.jpg";
import instant from "../assets/instant funds.jpg";
import quick from "../assets/small credit.jpg";
import alerts from "../assets/alerts.jpg";
import card from "../assets/card.jpg";
import invest from "../assets/investment.jpg";
import cust from "../assets/customer.jpg";
import app from "../assets/app.jpg";
const slides = [
  {
    image: SecureOnlineBanking,
    title: "Secure Online Banking",
    description: "Access your bank accounts securely from anywhere, anytime.",
  },
  {
    image: app,
    title: "Mobile Banking App",
    description: "Manage your finances with our easy-to-use mobile app.",
  },
  {
    image: instant,
    title: "Instant Fund Transfers",
    description: "Transfer funds instantly with no hassle, 24/7.",
  },
  {
    image: quick,
    title: "Quick Loan Application",
    description: "Apply for loans online with minimal paperwork and fast approval.",
  },
  {
    image: alerts,
    title: "Real-Time Account Alerts",
    description: "Get instant notifications for transactions and account updates.",
  },
  {
    image: card,
    title: "Card Management",
    description: "Easily manage your debit and credit cards from within the app.",
  },
  {
    image: invest,
    title: "Investment Options",
    description: "Explore a range of investment options to grow your wealth.",
  },
  {
    image: cust,
    title: "24/7 Customer Support",
    description: "Get round-the-clock assistance for any banking issues or inquiries.",
  },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">E-BANK</div>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-item">
              <FaHome className="icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-item">
              <FaInfoCircle className="icon" /> About
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav-item">
              <FaUserPlus className="icon" /> Register
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav-item">
              <FaSignInAlt className="icon" /> Login
            </Link>
          </li>
        </ul>
      </nav>

      {/* Slider Section */}
      <div className="slider-container">
        <div className="slides-wrapper">
          {slides.map((slide, index) => {
            const offset = index - currentIndex;
            return (
                      <div
          key={index}
          className={`slide ${offset === 0 ? "active" : ""}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            transform: `translateX(${offset * 50}%)`, // Show two slides at a time
            opacity: offset === 0 ? 2 : 0, // Adjust opacity (active = 0.7, inactive = 0.3)
            transition: "opacity 0.5s ease", // Smooth transition for opacity changes
          }}
        >

<div className="slide-content">
  <h2 style={{ color: "white" }}>{slide.title}</h2>
  <p style={{ color: "white" }}>{slide.description}</p>
</div>

              </div>
            );
          })}
        </div>
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={currentIndex === index ? "dot active" : "dot"}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
