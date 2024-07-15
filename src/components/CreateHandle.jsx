import { useState } from "react";
import Message from "./Message";
import { useNavigate } from "react-router-dom";
import CommonButton from "./buttons/CommonButton";
import Input from "./inputs/Input";

const CreateHandle = ({ userId }) => {
  const [handle, setHandle] = useState("");
  const [isFieldEmpty, setIsFieldEmpty] = useState(false);
  const navigate = useNavigate();

  const handleNextRoute = () => {
    if (handle.trim() === "") {
      setIsFieldEmpty(true);
      return;
    }

    navigate("/set-icon", { state: { handle, userId } });
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <Message message="What would your handle be?" />
        <Input inputType={"text"} onInputChange={(e) => {
            setHandle(e.target.value);
            setIsFieldEmpty(false);
          }}
          type="text"
          value={handle}
          inputClass="mt-4 mb-4 border-b-1 border-gray-700 text-center focus:outline-none animate-fade"
        />
        {isFieldEmpty && (
          <p className="text-red-600 mb-3">Field can't be empty!</p>
        )}
        <CommonButton onButtonClick={handleNextRoute} text={"Next"} />
      </div>
    </>
  );
};

export default CreateHandle;
