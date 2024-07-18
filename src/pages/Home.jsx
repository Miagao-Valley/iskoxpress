import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/auth";
import { signOut } from "firebase/auth";
import Loader3 from "../components/loaders/Loader3";
import { Sidebar } from "flowbite-react";
import { IoHome, IoNotifications, IoSettings } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

const Home = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState("home");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [loading]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function handleSignOut() {
    try {
      alert("signed out");
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Loader3 />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        {error.message}
      </div>
    );
  }

  return (
    <>
      <Sidebar>
        <Sidebar.Items className="bg-black ">
          <Sidebar.ItemGroup>
            <Sidebar.Item icon={IoHome} className="text-white">
              Home
            </Sidebar.Item>
            <Sidebar.Item icon={IoNotifications} className="text-white">
              Notifications
            </Sidebar.Item>
            <Sidebar.Item icon={CiSettings} className="text-white">Settings</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default Home;
