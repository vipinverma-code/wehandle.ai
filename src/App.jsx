import Navbar from './components/Navbar'
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';

import { useState } from 'react';
const App = () => {
  const[theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme'): 'light')
  return (
    <div className="min-h-screen bg-white text-gray-700 dark:bg-gray-950 dark:text-white transition-colors duration-300">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
    </div>
  );
};
export default App;
