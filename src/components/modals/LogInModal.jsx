import React, { useState } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import GoogleSignUpButton from "../buttons/GoogleButton";
import { auth } from "../../firebase/auth";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { googleProvider } from "../../pages/LandingPage";

const LogInModal = ({ openModal, setOpenModal }) => {

  const [isLogginIn, setIsLoggingIn] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  function onCloseModal() {
    setOpenModal(false);
    setIsLoggingIn(false);
    setEmail("");
    setIsError(null);
    setPassword("");
    setIsValidEmail(true);
    setIsError(false);
  }

  async function handleGoogleLogin() {
    try {
      setIsLoggingIn(true);
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
    } finally {
      setIsLoggingIn(false);
    }
  }

  async function handleEmailPassLogin(email, password) {
    try {
      setIsLoggingIn(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    }
  }

  if (isError) {
    return (
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center text-red-700">{errorMessage}</div>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <Modal show={openModal} onClose={onCloseModal} size="md" popup>
      <Modal.Header />
      <Modal.Body>
        <form action="" onSubmit="">
          <h3 className="text-xl font-medium font-mono text-gray-900 dark:text-white text-center">
            Sign in to IskoXpress
          </h3>
          <div>
            <div className="mt-5 flex flex-col items-center justify-center font-mono">
              <GoogleSignUpButton text="Log in with your UP Mail" />
            </div>
            <div className="relative flex items-center justify-center py-3">
              <div className="w-[100px] border-t border-black"></div>
              <span className="flex-shrink mx-5 text-black font-mono">Or</span>
              <div className="w-[100px] border-t border-black"></div>
            </div>
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
            <div className="w-full flex flex-col justify-center items-center mt-2">
              <Button
                type="submit"
                disabled={ !isValidEmail}
                className="bg-black"
              >
                Create account
              </Button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default LogInModal;
