import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";

const WelcomePage = () => {
  return (
    <PageLayout>
      <div className="flex flex-col justify-end min-h-[730px]">
        <h1 className="text-[28px] font-bold mb-[10px] text-[#1D2226] opacity-100 h-[33px]">
          Welcome to PopX
        </h1>
        <p className="mb-[29px] text-[18px] text-[#1D2226] opacity-60 w-[232px] h-[48px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex flex-col">
          <Link
            to="/signup"
            className="transition ease-in-out duration-200 rounded-md bg-[#6C25FF] hover:bg-[#754fc2] mb-3 text-[16px] text-white text-center font-medium py-[13px]"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="transition ease-in-out duration-200 bg-[#6C25FF4B] hover:bg-[#844ef04b]  text-[16px] text-[#1D2226] text-center font-medium rounded-md py-[13px]"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default WelcomePage;
