import React from 'react';
import DropScheduleMixTape from './DropScheduleMixTape';

const DropSchedule = () => {
  return (
    <div className='pt-20 drop-schedule'>
      <div className='mosh-container-normal'>
        <h2 className='text-4xl font-bold lg:text-6xl'>Don't Miss a Drop</h2>
        <div className='max-w-[939px] font-open-sans mt-6 '>
          <p className='text-lg lg:text-xl !leading-relaxed'>
            New Mix Tapes are released several times per month and include 10
            songs. When you buy a song, you'll get one, randomly generated song
            for $25.00. Collect all 10 songs in the Mix Tape and you may be in
            store for additional perks in the future! (hint hint)
          </p>
          <p className='mt-8 text-lg lg:text-xl !leading-relaxed'>
            Check out our upcoming Mix Tapes below and get notified before they
            drop so you don't miss out.
          </p>
        </div>

        <div>
          <DropScheduleMixTape />
        </div>
      </div>
    </div>
  );
};

export default DropSchedule;
