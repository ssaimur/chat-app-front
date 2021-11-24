import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useSocketCntext } from '../context';
import { url } from '../helper';

const Rightbar = () => {
  const locaion = useLocation();
  const { socket } = useSocketCntext();
  const [convo, setConvo] = useState({});
  const [message, setMessage] = useState('');

  const userToFetch = locaion.pathname.replace('/', '');

  useEffect(() => {
    (async function () {
      const response = await fetch(
        `${url}/api/inbox/messages/619c45a9e6c51719c21545ab`,
        {
          mode: 'cors',
          credentials: 'include',
        }
      );

      const data = await response.json();
      setConvo(data);
    })();
  }, [userToFetch]);

  console.log({ convo });

  const messsageToSend = {
    message,
    receiverId: convo.data && convo.data.participant.id,
    receiverName: convo.data && convo.data.participant.name,
    conversationId: convo.conversation_id && convo.conversation_id,
  };

  console.log({ messsageToSend });

  const sendMessage = async (e) => {
    e.preventDefault();
    const response = await fetch(`${url}/api/inbox/message`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify(messsageToSend),
    });

    const data = await response.json();
    console.log({ data });
  };

  socket.on('new_message', (data) => {
    console.log({ recievedMessage: data });
  });

  return (
    <div className='rightbar'>
      <div className='rightbar-top'>
        <h3>User to chat</h3>
      </div>
      <div className='rightbar-center'>
        <div className='messageWrapper'>
          <ul className='messages'>
            <li className='message sender'>hellow</li>
            <li className='message reciever'>what's up?</li>
            <li className='message sender'>good, u?</li>
            <li className='message reciever'>fine, bye.</li>
            <li className='message sender'>okabye</li>
          </ul>
        </div>
      </div>
      <div className='rightbar-bottom'>
        <form onSubmit={sendMessage}>
          <input
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input type='submit' value='send' />
        </form>
      </div>
    </div>
  );
};

export default Rightbar;
