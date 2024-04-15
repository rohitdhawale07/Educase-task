import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "./PageLayout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
    setIsFormFilled(
      (name === "email" && value !== "" && credentials.password !== "") ||
        (name === "password" && value !== "" && credentials.email !== "")
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const existingUsers = JSON.parse(localStorage.getItem("usersData")) || [];

      const usersData = existingUsers.find(
        (user) =>
          user.username === credentials.username &&
          user.password === credentials.password
      );

      if (
        usersData &&
        usersData.email === credentials.email &&
        usersData.password === credentials.password
      ) {
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ email: usersData.email })
        );
        toast.success("Login successful!");
        navigate("/account-settings");
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed:", error);
    }
  };

  return (
    <PageLayout>
      <h1 className="text-[28px] text-[#1D2226] leading-9 font-bold  mb-[14px] w-[188px] h-[69px]">
        Signin to your PopX account
      </h1>
      <p className="w-[232px] h-[48px] text-[#1D2226] opacity-60 mb-[24px] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-[13px] text-[#6C25FF] w-[103px] h-[17px] relative -top-2 left-[9px] text-center z-10 bg-[#F7F8F9]"
          >
            Email Address
          </label>
          <input
            autoComplete="off"
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="focus:outline-none focus:border-blue-500 rounded-md border border-[#CBCBCB] px-4 py-[11px] bg-transparent absolute  w-[330px] h-[40px] "
          />
        </div>
        <div className="flex flex-col mt-[48px]">
          <label
            htmlFor="password"
            className="text-[13px] text-[#6C25FF] w-[103px] h-[17px] relative -top-2 left-[9px] text-center z-10 bg-[#F7F8F9]"
          >
            Password
          </label>
          <input
            autoComplete="off"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="focus:outline-none focus:border-blue-500 rounded-md border border-[#CBCBCB] px-4 py-[11px] bg-transparent absolute w-[330px] h-[40px]"
          />
        </div>
        <button
          type="submit"
          className={`rounded-md text-[#FFFFFF] w-[330px] h-[46px] mx-auto mt-[48px] duration-200 ease-in-out ${
            isFormFilled
              ? "bg-[#6C25FF] hover:bg-[#4F1DBD]"
              : "bg-[#CBCBCB] hover:bg-[#c2c1c1]"
          }`}
          disabled={!isFormFilled}
        >
          Login
        </button>
      </form>
    </PageLayout>
  );
};

export default LoginPage;
