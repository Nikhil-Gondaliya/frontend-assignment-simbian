import React from 'react';
import TitleContainer from './TitleContainer';
import { AlertCardIndication } from './AlertCardIndication';
import { SubCardIndication } from './SubCardIndication';
import RightArrow from '../Common/RightArrow';
import {DownArrow} from '../Common/DownArrow';
import {VerticalInfoIcons} from '../Common/VerticalInfoIcons';
import MonitoringCard from './MonitoringCard';

export const WithOutTWithOutSimbianContainer = () => {
  return (
    <div className=' w-[100%]'>
      <div className='flex justify-end'>
        <TitleContainer />
      </div>

      <div className=" flex ">
        <div className=" flex flex-col gap-[60px]">
          <div className='flex items-center'>

            <div className='w-[500px]'>
              <AlertCardIndication />
            </div>

            <RightArrow />
          </div>

          <div className="w-[400px]">
            <SubCardIndication />
          </div>
        </div>
        <div className='flex flex-col items-center gap-[10px]'>
          <VerticalInfoIcons />
          
          <DownArrow />
        </div>

        <div className='w-[100%] p-[90px]'>
          <MonitoringCard />
        </div>
      </div>
    </div>

  );
}

