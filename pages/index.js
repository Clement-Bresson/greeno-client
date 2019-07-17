import React from 'react';

import Head from '../components/Head';
import UsersList from '../components/features/UsersList';

const Home = () => {
  return (
    <div>
      <Head tiltle="Greeno - Homepage" />
      Welcome to Grenno!
      <UsersList />
    </div>
  );
};

export default Home;
