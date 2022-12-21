import React from 'react';
import moment from 'moment';

function ShowTime() {
  return (
    <div>
      <h3 className='text-white opacity-60 mt-10'>
        {moment.utc().format('dddd, MMMM Do')}
      </h3>
    </div>
  );
}

export default ShowTime;
