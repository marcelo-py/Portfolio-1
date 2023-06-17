import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Outlet />;
}

export default App;
