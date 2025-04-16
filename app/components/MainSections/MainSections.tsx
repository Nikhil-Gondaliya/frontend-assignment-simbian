import React, { useEffect, useState } from 'react';
import {  AnimatePresence } from "framer-motion";
import {  WithOutTWithOutSimbianContainer } from '../WithOutSimbian/WithOutSimbianContainer';
import { WithSimbianContainer } from '../WithSimbain/WithSimbianContainer';

type MainSectionProps = {
  visibleBox : string, 
  setVisibleBox:any
}

export const MainSections = ({visibleBox, setVisibleBox}:MainSectionProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsExiting(true);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleExitComplete = () => {
    setVisibleBox((prev: string) => (prev === "box1" ? "box2" : "box1"));
    setIsExiting(false);
  };

  return (
    <section
      className={`relative bg-cover bg-center  text-white flex mt-10 ${
        visibleBox === "box1" ? "justify-end" : "justify-start"
      } px-16`}
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        {visibleBox === "box1" && !isExiting && (
        <WithOutTWithOutSimbianContainer/>
        )}

        {visibleBox === "box2" && !isExiting && (
        <WithSimbianContainer/>
        )}
  
      </AnimatePresence>
    </section>
  );
};
