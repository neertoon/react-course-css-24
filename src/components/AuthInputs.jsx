import { useState } from 'react';

import Button from "./Button.jsx";
import CustomInput from "./Input.jsx";


export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className="w-full mx-auto max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
      <div className="flex flex-col gap-2 mb-6 ">
        <CustomInput
            label="Email"
            invalid={emailNotValid}
            type="email"
            onChange={(event) => handleInputChange('email', event.target.value)}
        ></CustomInput>
        <CustomInput
            label="Password"
            invalid={passwordNotValid}
            type="password"
            onChange={(event) => handleInputChange('password', event.target.value)}
        ></CustomInput>
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
