import Navbar from './components/Navbar'
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';

import { useState } from 'react';
const App = () => {
  const[theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme'): 'light')
  return (
    <div className="bg-[--color-primary] text-white">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy/>
      <Services/>
      
    </div>
  );
};
export default App;
