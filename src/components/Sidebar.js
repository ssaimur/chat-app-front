import React from 'react';
import { Link } from 'react-router-dom';
import { useSocketCntext } from '../context';

const Sidebar = () => {
  const { users } = useSocketCntext();

  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <h2>Firechat</h2>
      </div>
      <div className='sidebar-bottom'>
        <ul className='users'>
          {users.map((item) => {
            const { name, _id, username } = item;
            return (
              <Link to={`/${username}`} key={_id}>
                <li className='user'>{name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
