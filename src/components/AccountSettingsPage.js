import React, { useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

function AccountSettingsPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser && loggedInUser.email) {
      const existingUsers = JSON.parse(localStorage.getItem("usersData")) || [];

      const user = existingUsers.find(
        (user) => user.email === loggedInUser.email
      );

      if (user) {
        setUserData(user);
      }
    }
  }, []);

  function handleLogout() {
    navigate("/");
    toast.success("Logout successfully");
  }
  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.4 }} className="flex flex-col justify-center items-center min-h-screen bg-[#FAFAFA]">
      <div className="w-[375px] relative h-[812px] bg-[#F7F8F9]  border-[3px] shadow-sm border-gray-200">
        <h1 className="text-[18px] text-[#1D2226] bg-white pl-[15px] py-[27px] leading-[22px] font-bold mb-[10px] h-[68px]">
          Account Settings
        </h1>
        <IoIosLogOut
          onClick={handleLogout}
          title="Logout"
          className="absolute top-0 right-0 m-2 text-xl cursor-pointer opacity-40"
        />

        <div className="flex p-5 gap-[20px]">
          <div className="">
            <img src="/Ellipse 114.png" alt="profile photo" />
            <img
              src="/Group 1585.svg"
              className="absolute top-[147px] left-[79px]"
              alt=""
            />
          </div>
          <div>
            {userData ? (
              <div>
                <p className="text-[15px] font-medium text-[#1D2226]  ">
                  {userData.fullName}
                </p>
                <p className="text-[14px] text-[#1D2226] ">{userData.email}</p>
                {/* Add other user details here */}
              </div>
            ) : (
              <p>Loading user details...</p>
            )}
          </div>
        </div>
        <div className="p-5 border-dashed border-b-2 ">
          <p className="text-[14px] text-[#1D2226]">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
        <div className="border-b-2 border-dashed mt-[470px]"></div>
      </div>
    </motion.div>
  );
}

export default AccountSettingsPage;
