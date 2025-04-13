import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PrimaryButton = ({ to, onClick, children, className = '', fullWidth = false, type = 'button' }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const primaryColor = "#3251D0";
  
  // Common button styles for both link and regular buttons
  const buttonStyles = {
    position: 'relative',
    padding: '0.75rem 2rem',
    border: `2px solid ${primaryColor}`,
    color: isHovered ? 'white' : primaryColor,
    fontWeight: 600,
    borderRadius: '0.5rem',
    overflow: 'hidden',
    zIndex: 0,
    cursor: 'pointer',
    transition: 'color 0.5s',
    display: fullWidth ? 'block' : 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    width: fullWidth ? '100%' : 'auto',
    textAlign: fullWidth ? 'center' : 'left',
  };

  // Span style that creates the hover fill effect
  const spanStyle = {
    position: 'absolute',
    inset: 0,
    backgroundColor: primaryColor,
    width: isHovered ? '100%' : '0%',
    transition: 'all 500ms ease-out',
    zIndex: -1,
  };

  // Combined classNames
  const combinedClassName = `relative overflow-hidden ${className}`;

  // If it's a link button
  if (to) {
    return (
      <Link
        to={to}
        className={combinedClassName}
        style={buttonStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span style={spanStyle}></span>
        {children}
      </Link>
    );
  }

  // If it's a regular button
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={combinedClassName}
      style={buttonStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={spanStyle}></span>
      {children}
    </motion.button>
  );
};

export default PrimaryButton; 