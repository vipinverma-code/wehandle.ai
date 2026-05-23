import Navbar from './components/Navbar'
import Hero from './components/Hero';

import { useState } from 'react';
const App = () => {
  const[theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme'): 'light')
  return (
    <div className="bg-[--color-primary] text-white">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero/>
    </div>
  );
};
export default App;
