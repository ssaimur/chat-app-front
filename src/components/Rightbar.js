import React from 'react';

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbar-top'>
        <h3>User to chat</h3>
      </div>
      <div className='rightbar-center'>
        <ul className='messages'>
          <li className='message sender'>hellow</li>
          <li className='message reciever'>what's up?</li>
          <li className='message sender'>good, u?</li>
          <li className='message reciever'>fine, bye.</li>
          <li className='message sender'>okabye</li>
        </ul>
      </div>
      <div className='rightbar-bottom'>
        <form>
          <input type='text' />
          <input type='button' value='send' />
        </form>
      </div>
    </div>
  );
};

export default Rightbar;
