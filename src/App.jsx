import Navbar from './components/Navbar'
import { useState } from 'react';
const App = () => {
  const[theme, setTheme] = useState('light')
  return (
    <div className="bg-[--color-primary] text-white">
      Hello
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};
export default App;
