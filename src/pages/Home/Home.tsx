import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import Container from 'react-bootstrap/Container';
import Navbar from '../../components/Navbar/Navbar';
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
