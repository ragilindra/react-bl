import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../context/Context';

const About = () => {
  const { state } = useContext(MyContext);

  return (
    <>
      <div>About</div>
      <p>{state.count}</p>
      <Link to={'..'}>Back</Link>
    </>
  );
};

export default About;
