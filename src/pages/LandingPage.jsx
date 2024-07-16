import "../index.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import person from "../assets/SVG/Astro.svg";
import GoogleButton from "../components/buttons/GoogleButton";
import CreateAccountButton from "../components/buttons/CreateAccountButton";
import SignInButton from "../components/buttons/SignInButton";
import Footer from "../components/Footer";
import SignUpModal from "../components/modals/SignUpModal";
import { useState } from "react";
import LogInModal from "../components/modals/LogInModal";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/db";

export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("https://www.googleapis.com/auth/userinfo.email");

googleProvider.setCustomParameters({
  prompt: "select_account",
});

const LandingPage = () => {

  const [openSignup, setSignup] = useState(false);
  const [openLogin, setLogin] = useState(false);

  async function handleGoogleSignUp() {
    try {
      await signInWithPopup(auth, googleProvider);
      const userRef = doc(db, "users", email);
      await setDoc(userRef, {});
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="sm:grid-cols-2 grid animate-fade h-screen">
        <section className="overflow-y-hidden mobile:hidden sm:block bg-black text-white flex flex-row justify-center items-center">
          <div className="sm:p-12">
            <h1 className="sm:text-3xl sm:text-center sm:mt-[9rem] md:mt-6 md:text-left md:text-5xl  mb-2 font-bold font-mono">
              Welcome to IskoXpress
            </h1>
            <div className="sm:text-center md:text-left">
              <TypeAnimation
                sequence={[
                  "a place for UPV students to express their thoughts",
                  1000,
                  "a place for UPV students to express their thoughts exclusively!",
                  1000,
                ]}
                wrapper="p"
                speed={50}
                style={{
                  fontSize: "15px",
                  display: "inline-block",
                  fontFamily: "monospace",
                }}
                repeat={0}
              />
            </div>
            <img src={person} className="object-contain sm:mt-32 md:mt-0" />
          </div>
        </section>

        <section className="mobile:p-7 mobile:mt-28 ">
          <div className="flex flex-col justify-center items-center">
            {/*Headings */}
            <div className="mb-6 text-center sm:hidden">
              <TypeAnimation
                sequence={["Express your thoughts!", 1000]}
                wrapper="h1"
                speed={50}
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  display: "inline-block",
                  fontFamily: "monospace",
                }}
                repeat={Infinity}
              />
            </div>

            {/* Sign-up section */}

            <div className="sm:mt-28">
              <GoogleButton
                onButtonClick={handleGoogleSignUp}
                text="Sign up with your UP Mail"
              />
              <div className="relative flex items-center py-3">
                <div className="flex-grow border-t border-black"></div>
                <span className="flex-shrink mx-5 text-black font-mono">
                  Or
                </span>
                <div className="flex-grow border-t border-black"></div>
              </div>
              <CreateAccountButton
                text={"Create account"}
                onButtonClick={() => setSignup(true)}
              />
              <SignUpModal openModal={openSignup} setOpenModal={setSignup} />
            </div>
          </div>

          {/* Sign-in section */}

          <div className="mt-10">
            <div className="text-center">
              <h2 className="font-mono font-medium text-[15px] mb-4">
                Already have an account?
              </h2>
              <SignInButton
                text={"Sign in"}
                onButtonClick={() => setLogin(true)}
              />
              <LogInModal openModal={openLogin} setOpenModal={setLogin} />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
