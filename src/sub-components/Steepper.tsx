import React, { useEffect, useRef, useState } from "react";

interface Step {
  name: string;
  Component: React.ComponentType;
}

interface CheckoutStepperProps {
  stepsConfig: Step[] ;
}

interface Margins {
  marginLeft: number;
  marginRight: number;
}

const CheckoutStepper: React.FC<CheckoutStepperProps> = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [margins, setMargins] = useState<Margins>({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (stepRef.current[0] && stepRef.current[stepsConfig.length - 1]) {
      setMargins({
        marginLeft: stepRef.current[0]?.offsetWidth / 2,
        marginRight: stepRef.current[stepsConfig.length - 1]?.offsetWidth! / 2,
      });
    }
  }, [stepsConfig.length]);

  if (!stepsConfig.length) {
    return <></>;
  }

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const calculateProgressBarWidth = (): number => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  return (
    <>
      <div className="stepper">
        {stepsConfig.map((step, index) => (
          <div
            key={step.name}
            ref={(el) => (stepRef.current[index] = el)}
            className={`step ${currentStep > index + 1 || isComplete ? "complete" : ""} ${
              currentStep === index + 1 ? "active" : ""
            }`}
          >
            <div className="step-number">
              {currentStep > index + 1 || isComplete ? <span>&#10003;</span> : index + 1}
            </div>
            <div className="step-name">{step.name}</div>
          </div>
        ))}

        <div
          className="progress-bar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div className="progress" style={{ width: `${calculateProgressBarWidth()}%` }}></div>
        </div>
      </div>

      {ActiveComponent && <ActiveComponent />}

      {!isComplete && (
        <button className="btn" onClick={handleNext}>
          {currentStep === stepsConfig.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
};

export default CheckoutStepper;
