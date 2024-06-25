
import React from 'react';
import '../App.css';

const Celda = ({ value, onClick }) => {


  const renderContent = () => {
    if (value === 1) return 'X';
    if (value === 2) return 'O';
    return '';
  };

  return (
    <div 
      onClick={onClick} 
      className={value===1 ? "celda" : "celda extra"} 
      style={{ cursor: value === 0 ? 'pointer' : 'not-allowed' }}
    >
      {renderContent()}
    </div>
  );
};

export default Celda;
