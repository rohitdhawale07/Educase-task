import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "./PageLayout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: Math.random(),
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "no",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const existingUsers = JSON.parse(localStorage.getItem("usersData")) || [];

      const { email, phoneNumber } = formData;

      const isEmailRegistered = existingUsers.some(
        (user) => user.email === email
      );

      if (isEmailRegistered) {
        toast.error(
          "This email is already registered. Please use a different email."
        );
        return;
      }

      const isPhoneNumberReg = existingUsers.some(
        (user) => user.phoneNumber === phoneNumber
      );
      if (isPhoneNumberReg) {
        toast.error(
          "This Phone number is already registered. Please use a different number."
        );
        return;
      }

      const newUser = { ...formData };
      existingUsers.push(newUser);

      localStorage.setItem("usersData", JSON.stringify(existingUsers));
      toast.success("Sign-up successful!");
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <PageLayout>
      <h1 className="text-[28px] text-[#1D2226] leading-9 font-bold  mb-[31px] w-[188px] h-[69px]">
        Create your PopX account
      </h1>
      <form className=" flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-[13px] text-[#6C25FF] w-[96px] h-[17px] relative -top-3 left-[9px] pl-1 z-10 bg-[#F7F8F9]"
          >
            Full Name <span className="text-red-500 font-bold">*</span>
          </label>
          <input
            autoComplete="off"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            className="focus:outline-none focus:border-blue-500 rounded-md border border-[#CBCBCB] px-4 py-[11px] bg-transparent absolute  w-[330px] h-[40px] "
          />
        </div>
        <div className="flex flex-col mt-[48px]">
          <label
            htmlFor="phNum"
            className="text-[13px] text-[#6C25FF] w-[104px] h-[17px] relative -top-3 left-[9px] pl-1 z-10 bg-[#F7F8F9]"
          >
            Phone Number <span className="text-red-500 font-bold">*</span>
          </label>
          <input
            required
            autoComplete="off"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="focus:outline-none focus:border-blue-500 rounded-md border border-[#CBCBCB] px-4 py-[11px] bg-transparent absolute  w-[330px] h-[40px] "
          />
        </div>
        <div className="flex flex-col mt-[48px]">
          <label
            htmlFor="email"
            className="text-[13px] text-[#6C25FF] w-[103px] h-[17px] relative -top-3 left-[9px] pl-1 z-10 bg-[#F7F8F9]"
          >
            Email Address <span className="text-red-500 font-bold">*</span>
          </label>
          <input
            autoComplete="off"
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="focus:outline-none focus:border-blue-500 rounded-md border border-[#CBCBCB] px-4 py-[11px] bg-transparent absolute  w-[330px] h-[40px] "
          />
        </div>
        <div className="flex flex-col mt-[48px]">
          <label
            htmlFor="password"
            className="text-[13px] text-[#6C25FF] w-[103px] h-[17px] relative -top-3 left-[9px] pl-1 z-10 bg-[#F7F8F9]"
          >
            Password <span className="text-red-500 font-bold">*</span>
          </label>
          <input
            autoComplete="off"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
            className="focus:outline-none focus:border-blue-500 rounded-md border border-[#CBCBCB] px-4 py-[11px] bg-transparent absolute w-[330px] h-[40px]"
          />
        </div>
        <div className="flex flex-col mt-[48px]">
          <label
            htmlFor="company"
            className="text-[13px] text-[#6C25FF] w-[103px] h-[17px] relative -top-3 left-[9px] pl-1 z-10 bg-[#F7F8F9]"
          >
            Company Name
          </label>
          <input
            autoComplete="off"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter company name"
            className="focus:outline-none focus:border-blue-500 rounded-md border border-[#CBCBCB] px-4 py-[11px] bg-transparent absolute w-[330px] h-[40px]"
          />
        </div>

        <div className="flex flex-col mt-[30px]">
          <p htmlFor="" className="text-[13px] text-[#1D2226] ">
            Are you an Agency?
            <span className="text-red-500 font-bold">*</span>
          </p>
          <div className="flex gap-3 mt-1">
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={formData.isAgency === "yes"}
              onChange={handleRadioChange}
              className="text-[14px]"
              required
            />
            <label className="">Yes</label>
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={formData.isAgency === "no"}
              onChange={handleRadioChange}
              className="text-[14px]"
            />
            <label>No</label>
          </div>
        </div>
        <div className=" mt-[190px]">
          <button
            type="submit"
            className="rounded-md bg-[#6C25FF] hover:bg-[#754fc2] text-[#FFFFFF] w-[330px] h-[46px] mx-auto mt-[48px] duration-200 ease-in-out "
          >
            Create Account
          </button>
        </div>
      </form>
    </PageLayout>
  );
};

export default SignUpPage;
