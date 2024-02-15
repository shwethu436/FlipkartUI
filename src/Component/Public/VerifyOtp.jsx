import React, { useState } from 'react';

function OTPVerificationForm() {
  const [otp, setOTP] = useState('');
  const [verificationMessage, setVerificationMessage] = useState('');

  // Function to handle OTP input change
  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };

  // Function to handle OTP verification
  const handleVerifyOTP = () => {
    const expectedOTP = '123456';
    if (otp === expectedOTP) {
      setVerificationMessage('OTP is verified successfully!');
    } else {
      setVerificationMessage('Incorrect OTP. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={handleOTPChange}
        className="w-64 px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-500"
      />
      <button onClick={handleVerifyOTP} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Verify OTP
      </button>
      <p className="text-center mt-4">{verificationMessage}</p>
    </div>
  );
}

export default OTPVerificationForm;
