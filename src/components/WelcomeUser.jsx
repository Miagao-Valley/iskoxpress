import { useEffect, useState } from "react";
import CreateHandle from "./CreateHandle";
import Message from "./Message";



const WelcomeUser = ({userId}) => {

  const [step, setStep] = useState(0);

  useEffect(() => {
    
    const steps = [2000, 2000]; 
    let timeout;

    if (step < steps.length) {
      timeout = setTimeout(() => {
        setStep(step + 1);
      }, steps[step]);
    }

    return () => clearTimeout(timeout);
  }, [step]);


  return (
    <>
      {step === 0 && <Message message="Welcome to IskoXpress" />}
      {step === 1 && <Message message="Let's set you up!"/>}
      {step === 2 && <CreateHandle userId={userId}/>}
    </>
  );
};

export default WelcomeUser;
