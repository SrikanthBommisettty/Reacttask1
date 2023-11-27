// Home.js

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    radioOption: '',
    sliderValue: 50,
    switchOn: false,
    selectedTime: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSliderChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      sliderValue: value,
    }));
  };

  const handleSwitchChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      switchOn: !prevData.switchOn,
    }));
  };

  const handleTimeChange = (time) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedTime: time,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
  };

  return (
    <div>
      <h2> EMPLOYEE FORM</h2>

      <form onSubmit={handleSubmit}>
        <div className='datepicker'>
          <h3>Date of Birth</h3>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            required
          />
        </div>

        <div className='formdetails'>
          <h3>User Details</h3>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder='User Name'
              value={formData.name}
              onChange={handleFormChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleFormChange}
              required
            />
          </label>
        </div>

        <div className='gender'>
          <h3>Gender</h3>
          <label>
            Male
            <input
              type="radio"
              name="radioOption"
              value="Option 1"
              checked={formData.radioOption === 'Option 1'}
              onChange={handleFormChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              name="radioOption"
              value="Option 2"
              checked={formData.radioOption === 'Option 2'}
              onChange={handleFormChange}
            />
          </label>
        </div>

        <div className='percentage'>
          <h3>Percentage of React completion </h3>
          <input
            type="range"
            min="0"
            max="100"
            value={formData.sliderValue}
            onChange={(e) => handleSliderChange(e.target.value)}
          />
          <p>Value: {formData.sliderValue}</p>
        </div>

        <div className='time'>
          <h3>Time Taken</h3>
          <input
            type="time"
            value={formData.selectedTime}
            onChange={(e) => handleTimeChange(e.target.value)}
          />
        </div>
        <div className='click'>
          <h3>Continue Learning</h3>
          <label>
            Click
            <input
              type="checkbox"
              checked={formData.switchOn}
              onChange={handleSwitchChange}
              required
            />
          </label>
        </div>
        <button className='subbtn' type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h2>Employee Details</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>B. SRIKANTH</td>
                <td>srikanth@gmail.com</td>
              </tr>
              <tr>
                <td>2</td>
                <td>G. Naveen Chand</td>
                <td>naveenchand@gmail.com</td>
              </tr>
              <tr>
                <td>3</td>
                <td>N.JYOTHI</td>
                <td>Jyothi@gmail.com</td>
              </tr>
              <tr>
                <td>4</td>
                <td>P. Nikhil</td>
                <td>nikhil@gmail.com</td>
              </tr>
              <tr>
                <td>5</td>
                <td>k. Surya</td>
                <td>Surya@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
