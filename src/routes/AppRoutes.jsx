import { Route, Routes } from 'react-router-dom';
import HomeFunction from '../pages/home/HomeFunction';
import About from '../pages/about';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="about" element={<About />} />
      <Route path="/" element={<HomeFunction />} />
    </Routes>
  );
};

export default AppRoutes;
