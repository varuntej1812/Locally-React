import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

import { FaUser, FaEnvelope, FaKey, FaGoogle, FaTwitter, FaInstagram } from 'react-icons/fa';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateUsername = (username) => {
    // Add your username validation logic here
    // For example, check if it contains only alphanumeric characters and has a length between 3 and 20
    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    return usernameRegex.test(username);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Username validation
    if (!validateUsername(formData.username)) {
      setErrors({ ...errors, username: 'Invalid username format' });
      return;
    }

    // Email validation
    if (!validateEmail(formData.email)) {
      setErrors({ ...errors, email: 'Invalid email format' });
      return;
    }

    // Password validation
    if (!validatePassword(formData.password)) {
      setErrors({
        ...errors,
        password: 'Password must have capital, small, numeric, and special characters.',
      });
      return;
    }
    setErrors({
        username: '',
        email: '',
        password: '',
      })
      setFormData({
        username: '',
        email: '',
        password: '',
      })
    // Perform registration logic here
    console.log('Form submitted:', formData);
    navigate('/sellerview')
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <form className=" px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold mb-6 text-center">Seller Registration</h1>
        <div className="input-group mt-1">
          <label className="text-lg" htmlFor="username">
            Username
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <FaUser className="text-gray-400" />
            </span>
            <input
              className={`appearance-none border ${
                errors.username ? 'border-red-500' : 'border-gray-200'
              } rounded w-80 h-12 py-2 px-3 pl-8 leading-tight focus:outline-none focus:shadow-outline`}
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
          
            />
          </div>
          {errors.username && <p className="text-red-500 text-xs italic">{errors.username}</p>}
        </div>
        <div className="input-group mt-2">
          <label className="text-lg" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <FaEnvelope className="text-gray-400" />
            </span>
            <input
              className={`appearance-none border ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              } rounded w-80 h-12 py-2 px-3 pl-8 leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
             
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
        <div className="input-group mt-2">
          <label className="text-lg" htmlFor="password">
            Password
          </label>
          <div className="relative mt-1">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <FaKey className="text-gray-400" />
            </span>
            <input
              className={`appearance-none border ${
                errors.password ? 'border-red-500' : 'border-gray-200'
              } rounded w-80 h-12 py-2 px-3 pl-8 leading-tight focus:outline-none focus:shadow-outline`}
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
        
            />
          </div>
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
        </div>
        <div className="input-group  mt-5">
          <button
            className="bg-black w-full hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
         

 >
            Register
          </button>
        </div>
      </form>
      <div className="text-lg">
        Already have an account? <a href="/seller/login"> Login</a>
      </div>
      <div className="input-group2">
        <div className="divider flex w-80 ml-10 mt-10">
          <hr className="inline-block w-1/3 align-self-center mt-3" />
          <p className='mx-5'>or</p>
          <hr className="inline-block w-1/3 align-self-center mt-3" />
        </div>
        <div className="brands flex justify-center mt-5">
          <FaGoogle className="text-3xl cursor-pointer mr-6" />
          <FaTwitter className="text-3xl cursor-pointer mr-6" />
          <FaInstagram className="text-3xl cursor-pointer mr-6" />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;


