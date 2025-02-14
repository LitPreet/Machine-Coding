import React, { useRef, useState } from "react";

const DummyStepper = () => {
  const CHECKOUT_STEPS = [
    {
      name: "Customer Info",
      component: <div>Provide your contact details.</div>,
    },
    {
      name: "Shipping Info",
      component: <div>Enter your shipping address.</div>,
    },
    { name: "Payment", component: <div>Complete payment for your order.</div> },
    { name: "Delivered", component: <div>Your order has been delivered.</div> },
  ];
  const [currentStep, setCurrentStep] = useState(0);

  const stepsRef = useRef([]);

  const handlePrev = () => {
    if (currentStep >= 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep >= 0 && currentStep < CHECKOUT_STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <div className="flex gap-11 h-9 bg-gray-300 relative">
        <div
          className="bg-gray-600 w-full absolute h-1 top-4"
          style={{
            width: `${((currentStep + 1) / CHECKOUT_STEPS.length) * 100}%`,
            backgroundColor:
              currentStep < CHECKOUT_STEPS.length - 1 ? "green" : "red",
          }}
        >
          1
        </div>
        {CHECKOUT_STEPS.map((step, i) => {
          const isCompleted = i < currentStep;
          const isActive = i === currentStep;
          return (
            <div
              className={`w-10 h-10 rounded-full z-10 border-none  ${
                isCompleted
                  ? "bg-red-400"
                  : isActive
                  ? "bg-green-300"
                  : "bg-blue-400"
              }  flex items-center justify-center`}
            >
              {/* {i + 1} */}
              {isCompleted ? "✅" : i + 1}
            </div>
          );
        })}
      </div>
      
      {CHECKOUT_STEPS[currentStep] && (
        <div>{CHECKOUT_STEPS[currentStep].component}</div>
      )}
      <div className="flex gap-4 my-5">
        <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>next</button>
      </div>
    </div>
  );
};

export default DummyStepper;
