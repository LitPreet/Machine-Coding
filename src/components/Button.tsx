import React, { useState } from "react";

const Button = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black p-2 text-white"
      >
        Open
      </button>

      {isOpen && <div className="flex w-full h-[300px] bg-red-400">Modal</div>}
    </div>
  );
};

export default Button;
