import React, { MutableRefObject, useEffect, useRef, useState } from "react";

interface Props {
  handleOTPSubmit: (value: string) => void;
  length: number;
}

const OTP = ({ handleOTPSubmit, length = 4 }: Props) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  console.log(otp);
  const inputRefs: MutableRefObject<HTMLInputElement[]> = useRef([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const value = e.target.value;
    if (isNaN(+value)) return;
    const newOtp = [...otp];
    //allow only one input
    newOtp[i] = value.substring(value.length - 1);
    setOtp(newOtp);

    //trigger submit
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) handleOTPSubmit(combinedOtp);

    //move  to next field  if current field is filled
    if (value && i < length - 1 && inputRefs.current[i + 1]) {
      inputRefs.current[i + 1].focus();
    }
  };

  const handleClick = (i: number) => {
    inputRefs.current[i].setSelectionRange(1, 1);
  };
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    i: number
  ) => {
    if (e.key === "Backspace" && !otp[i] && i > 0 && inputRefs.current[i - 1]) {
      // Move focus to the previous input field on backspace
      inputRefs.current[i - 1].focus();
    }
  };
  console.log(inputRefs);

  return (
    <div>
      {otp.map((t: string, i: number) => {
        return (
          <input
            key={i}
            className="w-10 h-10 m-2 text-center outline-none focus:border-blue-400 border-2 text-md"
            type="text"
            maxLength={1}
            autoFocus={i === 0}
            ref={(input) => {
              if (input) {
                inputRefs.current[i] = input;
              }
            }}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onClick={() => handleClick(i)}
          />
        );
      })}
    </div>
  );
};

export default OTP;
