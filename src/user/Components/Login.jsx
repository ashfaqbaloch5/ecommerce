import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'ashfaq@admin.com') {
      navigate('/admin');
    } else if (email === 'ashfaqhaider@gmail.com') {
      navigate('/landingpage');
    } else {
      setErrorMessage('Incorrect credentials. Please try again.');
    }
  };

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="flex h-screen px-4">
      <div className="flex items-center justify-center w-1/2 bg-gray-100">
        <img
          src="your-image-url" // Replace with the actual image URL
          alt="Login Illustration"
          className="max-w-full"
        />
      </div>
      <div className="flex flex-col justify-center w-1/2 p-8">
        <h2 className="text-2xl font-semibold mb-4">Log in to Exclusive</h2>
        <p className="text-gray-600 mb-8">Enter your details below</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email or Phone Number"
            className="border border-gray-300 p-2 mb-4 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-2 mb-4 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 w-full rounded mb-4"
          >
            Log in
          </button>
        </form>
        {errorMessage && (
          <p className="text-red-500 text-center mt-4">{errorMessage}</p>
        )}
        <div className="flex justify-between">
          <p className="text-right">
            <a href="/forgot-password" className="text-red-500">Forgot Password?</a>
          </p>
          <p className="text-right">
            <button
              onClick={handleSignupRedirect}
              className="text-red-500 underline"
            >
              Create New Account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
