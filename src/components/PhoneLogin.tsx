import React, { useState } from "react";
import OTP from "../sub-components/OTP";

const PhoneLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(false);

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
  };

  const handlePhoneSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regEx = /[^0-9]/g;

    if (regEx.test(phoneNumber) || phoneNumber.length < 10) {
      alert("Please enter a valid phone number");
      return;
    } else {
      setShowInput(true);
    }
  };

const handleOTPSubmit = (value: string) => {
  console.log("Login successful",value)
}

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-xl text-gray-600 my-2 text-center">Login with Phone</h1>
      {showInput ? (
        <>
         <p className="text-center text-black font-medium text-md">Enter OTP sent to {phoneNumber}</p>
        <OTP handleOTPSubmit={handleOTPSubmit} length={4}/>
        </>
      ) : (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
            className="p-2 text-black outline-none border focus:border-blue-400"
          />
          <button type="submit" className="p-2 bg-blue-400 text-white hover:bg-blue-600 border">Submit</button>
        </form>
      )}
    </div>
  );
};

export default PhoneLogin;
