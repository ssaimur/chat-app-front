import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSocketCntext } from '../context';

const url = 'http://localhost:4000';

const Sidebar = () => {
  const { users, setUsers } = useSocketCntext();
  const [search, setSearch] = useState('');
  const [searchUser, setSearchUser] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await fetch(`${url}/api/users/all`, {
        credentials: 'include',
        mode: 'cors',
      });
      const data = await response.json();
      setUsers(data.data);
    })();
  }, [url]);

  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <h2>Firechat</h2>
      </div>
      <div className='sidebar-top'>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {searchUser.map((item) => {
          const { _id, name, email, username } = item;
          return (
            <div className='search-users' key={_id}>
              <p className='name'>{name}</p>
            </div>
          );
        })}
      </div>
      <div className='sidebar-bottom'>
        <ul className='users'>
          {users &&
            users.map((item) => {
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
