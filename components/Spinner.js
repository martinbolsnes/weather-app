import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

function Spinner() {
  return (
    <div className='flex flex-col justify-between items-center'>
      <div className='w-full h-screen m-auto bg-gradient-to-br from-lightblue to-darkblue'>
        <HashLoader
          size={60}
          color='#fdfdfd'
          className='w-1/2 block m-auto mt-48'
        />
      </div>
    </div>
  );
}

export default Spinner;
