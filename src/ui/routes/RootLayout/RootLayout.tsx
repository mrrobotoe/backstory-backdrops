import { Outlet } from 'react-router-dom';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export const RootLayout = () => {
  return (
    <div className='root-container'>
      <Navigation />
        <Outlet />
      <Footer />
    </div>
  );
};
