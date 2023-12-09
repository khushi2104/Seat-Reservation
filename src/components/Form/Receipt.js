import React from 'react';

const Receipt = (props) => {
  const { username, date, startTime, endTime, numSeats, selectedSeats } = props.location.state;

  return (
    <div className="receipt">
      <h2>Booking Receipt</h2>
      <p>Username: {username}</p>
      <p>Date: {date}</p>
      <p>Start Time: {startTime}</p>
      <p>End Time: {endTime}</p>
      <p>Number of Seats: {numSeats}</p>
      <p>Selected Seats: {selectedSeats.join(', ')}</p>
      <p>Your booking is successful! Thank you for booking.</p>
    </div>
  );
};

export default Receipt;
