import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <Link to='/' className='btn btn-ghost normal-case text-3xl font-bold'>
            <span className='text-primary'>auth</span>UI
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Log In</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
          </ul>
          {user?.email && <p>{user.email}</p>}
        </div>
      </div>
    </div>
  );
};

export default Header;
