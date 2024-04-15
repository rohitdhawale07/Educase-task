import React from "react";
import { motion } from "framer-motion";

const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#FAFAFA]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.4 }}
        className="w-[375px] h-[812px] bg-[#F7F8F9] px-5 py-10 border-[3px] shadow-sm border-gray-200"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageLayout;
