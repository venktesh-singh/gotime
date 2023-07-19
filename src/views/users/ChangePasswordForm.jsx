import React, { useState } from 'react';
import axios from 'axios';

function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform client-side validation here (e.g., check if passwords match)

    try {
      // Make a POST request to the server to change the password
      const response = await axios.post('/changepassword', {
        currentPassword,
        newPassword,
      });

      // Handle the success response
      console.log(response.data);
      // Display a success message or perform any necessary actions
    } catch (error) {
      // Handle any errors
      console.error(error);
      // Display an error message or perform any necessary actions
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="currentPassword">Current Password:</label>
        <input
          type="password"
          id="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button type="submit">Change Password</button>
    </form>
  );
}

export default ChangePasswordForm;
