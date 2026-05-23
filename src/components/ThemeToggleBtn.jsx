import { useEffect } from "react"
import assets from "../assets/assets"
const ThemeToggleBtn = ({theme, setTheme}) => {
   useEffect(()=>{
          if(theme === 'dark'){
            document.documentElement.classList.add('dark')
          }else{
            document.documentElement.classList.remove('dark')
          }
          localStorage.setItem('theme',theme)   
    },[theme])
  return (
    <>
      <button>
        {theme === "dark" ? (
          <img
            onClick={() => {
              setTheme("light");
            }}
            src={assets.sun_icon}
            className="size-8.5 p-1.5 border-blue-950 rounded-full"
            alt="sun-icon"
          />
        ) : (
          <img
            onClick={() => {
              setTheme("dark");
            }}
            src={assets.moon_icon}
            className="size-8.5 p-1.5 border-blue-950 rounded-full"
            alt="moon_icon"
          />
        )}
      </button>
    </>
  );
}
export default ThemeToggleBtn