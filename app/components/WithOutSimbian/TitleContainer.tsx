import React from 'react';
import { motion } from "framer-motion";

const TitleContainer = () => {
    return (
             <motion.div
        key="box1"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col w-fit items-end"
      >
        <h1 className="text-[22px] font-bold mb-3">Without Simbian</h1>
        <p className="text-[18px] mb-5 max-w-xl">
          If this sounds all too familiar, you might want to...
        </p>
        <button className="bg-white text-black px-5 py-2 rounded-full font-normal text-[15px] flex items-center gap-1 ">
          <span>
          Book a Demo
          </span>
     

          <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
        </svg>
      </div>
        </button>
      </motion.div>
    );
}

export default TitleContainer;
