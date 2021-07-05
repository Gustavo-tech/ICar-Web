import { useContext } from 'react';
import { Redirect } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import { ProfileContext } from '../../contexts/ProfileContext';
import { serverUrl } from '../../constants/constants';

const Home = () => {

  const { email } = useContext(ProfileContext);

  if (email === '') {
    return <Redirect to={`${serverUrl}/login`} />
  }

  return (
    <>
      <Navbar />
    </>
  )
}

export default Home;
