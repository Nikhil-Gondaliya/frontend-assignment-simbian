import React from 'react';
import { motion, } from "framer-motion";
import TitleContainer from './TitleContainer';
import { VerticalInfoIcons } from '../Common/VerticalInfoIcons';
import { DownArrow } from '../Common/DownArrow';
import RightArrow from '../Common/RightArrow';
import { AlertCardIndication } from './AlertCardIndication';
import { SubCardIndication } from './SubCardIndication';
import TransparentCard from '../Common/TransparentCard';
import { Sparkles } from 'lucide-react';
import MonitoringCard from './MonitoringCard';
import { LeftArrow } from '../Common/LeftArrow';

export const WithSimbianContainer = () => {
  return (
    <div>
      <div className="flex gap-30">
        <div className="flex flex-col gap-20">
          <TitleContainer />

          <div className='w-[100%] p-[20px]'>
            <MonitoringCard />
          </div>
        </div>

        <div className='flex'>
          <div className='flex flex-col items-center gap-[10px] mt-[100px]'>
            <VerticalInfoIcons iconColor='green' />

            <DownArrow />
          </div>

          <div className='flex flex-col gap-[10px] mt-[100px]'>
            <div className='flex items-center '>
              <LeftArrow />
              <div className='w-[500px]'>
                <TransparentCard >
                  <div className='flex w-[470px]' >
                    <div className={` w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white`}>
                      <Sparkles color='green' />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Triaged & Reported</h3>
                      <p className="text-white text-sm  w-[470px] ">The SOC Agent handled investigation and reporting</p>
                    </div>
                  </div>
                </TransparentCard>
              </div>

            </div>
            <div className="w-[400px] ml-[120px]">
              <SubCardIndication />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

