import { useState } from "react";
import Message from "./Message";
import { useNavigate } from "react-router-dom";

const CreateHandle = ({userId}) => {
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
        <input
          type="text"
          value={handle}
          onChange={(e) => {
            setHandle(e.target.value);
            setIsFieldEmpty(false);
          }}
          className="mt-4 mb-4 border-b-1 border-gray-700 text-center focus:outline-none animate-fade"
        />
        {isFieldEmpty && (
          <p className="text-red-600 mb-3">Field can't be empty!</p>
        )}
        <button
          type="button"
          className="animate-fade cursor-pointer transition-all bg-black text-white px-4 py-2
        border-black  rounded-md
        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          onClick={handleNextRoute}
        >
          {" "}
          Next{" "}
        </button>
      </div>
    </>
  );
};

export default CreateHandle;
