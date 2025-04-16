import React from 'react';
import TransparentCard from '../Common/TransparentCard';
import { motion, AnimatePresence } from 'framer-motion';

const cardData = [
  {
    icon: <span>⏳</span>,
    title: 'Waiting for Analyst',
    description: 'Analyst is dealing with other problems, hold on...',
  },
  {
    icon: <span>⚠️</span>,
    title: 'Writing Query',
    description: 'Querying across so many tools gets complex...',
  },
  {
    icon: <span>📊</span>,
    title: 'Asking ChatGPT',
    description: 'What do this PowerShell Command even mean?',
  },
  {
    icon: <span>⏱️</span>,
    title: 'Asking Supervisor',
    description: 'The analyst in training and needs some help...',
  },
];

export const AlertCardIndication = () => {
  const [visibleIndex, setVisibleIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % cardData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);



  return (
    <div className="relative h-[75px] overflow-hidden">
      <div className="absolute w-full">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={visibleIndex}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className=" flex items-center justify-center flex-col gap-5"
          >
            {
              cardData.map((item, index) => {
                return (
                  <TransparentCard key={index}>
                    <div className='flex w-[470px]' >
                    {item.icon && (
                      <div className={` w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white`}>
                        {item.icon}
                      </div>
                    )}
                    <div>
                      <h3 className="text-white font-medium mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-sm">{item.description}</p>
                    </div>
                    </div>
                  </TransparentCard>
                )
              })
            }

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
