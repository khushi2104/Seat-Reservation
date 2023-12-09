import React from 'react';

function Seat({ seat, isSelected, onClick }) {
  return (
    <div
      className={`seat ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {seat}
    </div>
  );
}

export default Seat;
