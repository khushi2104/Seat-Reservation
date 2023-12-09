import React, { useState } from 'react';
import './Flogin.css';

const Flogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Send a POST request to your backend
    const response = await fetch('http://localhost:5000/api/flogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.status === 200) {
      // Login successful
      // You can redirect to another page or perform other actions here
      // For example, redirect to the booking form
      window.location.href = '/';
    } else {
      // Login failed
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <section className="main-container">
      <div className="container py-5 h-100 form-container">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid form-image"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleLogin}>
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="form1Example13">
                  User name
                </label>
                <input
                  type="text"
                  id="form1Example13"
                  className="form-control form-control-lg form-input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="form1Example23">
                  Password
                </label>
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Log in
              </button>
              {error && <p className="error">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flogin;
