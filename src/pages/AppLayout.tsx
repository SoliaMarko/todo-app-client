import {Outlet} from 'react-router-dom';
import ThemeToggleButton from '@/components/Buttons/ThemeToggleButton';

const AppLayout = () => {
  return (
    <>
      <ThemeToggleButton />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
