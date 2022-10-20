import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h2>Home Page</h2>
      <h2>Hello, {user.displayName}!!</h2>
    </div>
  );
};

export default Home;
