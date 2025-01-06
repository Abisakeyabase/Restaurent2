import React, { useState, useEffect } from "react";

const ScrollArrow = () => {
  const [showArrow, setShowArrow] = useState(false);

  // Show the arrow when the user scrolls down a certain amount
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Scroll to the bottom of the page
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showArrow && (
        <div style={styles.container}>
          <button style={styles.button} onClick={scrollToTop}>
            ↑
          </button>
          <button style={styles.button} onClick={scrollToBottom}>
            ↓
          </button>
        </div>
      )}
    </>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 1000,
  },
  button: {
    background: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    fontSize: "20px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
  },
};

export default ScrollArrow;
