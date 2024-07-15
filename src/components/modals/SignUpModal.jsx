import { Button, Label, Modal, TextInput } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { auth } from "../../firebase/auth";
import {
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Loader3 from "../loaders/Loader3";

const SignUpModal = ({ openModal, setOpenModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMesage] = useState(null);

  const navigate = useNavigate();

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setIsValidEmail(true);
    setIsValidPassword(true);
  }

  function useTimeout(callback, delay) {
    useEffect(() => {
      if (delay === null) {
        return;
      }

      const id = setTimeout(callback, delay);

      return () => clearTimeout(id);
    }, [callback, delay]);
  }

  async function handleEmailLogin(email, password) {
    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      const actionCodeSettings = {
        url: "http://localhost:5173/home",
        handleCodeInApp: true,
      };
      await sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          window.localStorage.setItem("emailForSignIn", email);
        })
        .catch((error) => console.error(error.message));
    } catch (error) {
      setIsError(true);
      setErrorMesage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useTimeout(() => setIsError(false), isError ? 2000 : null);

  if (isError) {
    return (
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">{errorMessage}</div>
        </Modal.Body>
      </Modal>
    );
  }

  if (isLoading) {
    return (
      <Modal show={openModal} size="md" popup>
        <Modal.Header />
        <Modal.Body>
          <Loader3 />
        </Modal.Body>
      </Modal>
    );
  }

  const isFormEmpty = !email && !password && !confirmPassword;

  return (
    <Modal show={openModal} size="md" onClose={onCloseModal} popup>
      <Modal.Header />
      <Modal.Body>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            if (isValidEmail && isValidPassword) {
              handleEmailLogin(email, password);
            }
          }}
        >
          <h3 className="text-xl font-medium font-mono text-gray-900 dark:text-white text-center">
            IskoXpress
          </h3>
          <div>
            <div className="mb-2 block font-mono">
              <Label htmlFor="email" value="Your UP mail" />
            </div>
            <TextInput
              size={100}
              id="email"
              value={email}
              placeholder="name@up.edu.ph"
              onChange={(e) => {
                const emailValue = e.target.value.trim();
                setEmail(emailValue);
                setIsValidEmail(
                  emailValue === "" || emailValue.endsWith("@up.edu.ph")
                );
              }}
              className="outline-black"
              required
            />
            {!isValidEmail && (
              <p className="ml-5 text-red-700 font-mono text-[15px]">
                You must enter a UP mail!
              </p>
            )}
          </div>
          <div>
            <div className="mb-2 block font-mono">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block font-mono">
              <Label htmlFor="confirmPassword" value="Confirm password" />
            </div>
            <TextInput
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                const confirmedPassword = e.target.value;
                setConfirmPassword(confirmedPassword);
                setIsValidPassword(confirmedPassword === password);
              }}
              required={true}
            />
            {!isValidPassword && password !== "" && confirmPassword !== "" && (
              <p className="ml-5 text-red-700 font-mono text-[15px]">
                Passwords do not match!
              </p>
            )}
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <Button
              type="submit"
              disabled={isFormEmpty || !isValidEmail || !isValidPassword}
              className="bg-black"
            >
              Create account
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default SignUpModal;
