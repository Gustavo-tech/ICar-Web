// React
import React, { useContext } from 'react';
import { Redirect } from 'react-router';

// React bootstrap
import Container from 'react-bootstrap/Container';

// components
import Navbar from '../../components/Navbar/Navbar';

// contexts
import { ProfileContext } from '../../contexts/ProfileContext';

const Home = () => {

  const { email } = useContext(ProfileContext);

  if (email === '') {
    return <Redirect to='/login' />
  }
  return (
    <>
      <Navbar />
    </>
  )
}

export default Home;
