import React, { Component } from 'react';
import './Lab.css';

class Lab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      startTime: '',
      endTime: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  validateForm = () => {
    const { date, startTime, endTime } = this.state;
    if (startTime >= endTime) {
      alert('Start time must be earlier than end time');
      return false;
    }
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.validateForm()) {
      return;
    }

    const { date, startTime, endTime } = this.state;

    // Your fetch request and booking logic here...
  };

  render() {
    const { date, startTime, endTime } = this.state;

    return (
      <div className="booking-form">
        <h2>Seat Booking Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="startTime">Start Time</label>
            <input
              type="time"
              name="startTime"
              value={startTime}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="endTime">End Time</label>
            <input
              type="time"
              name="endTime"
              value={endTime}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <button type="submit">Book Seats</button>
        </form>
      </div>
    );
  }
}

export default Lab;
