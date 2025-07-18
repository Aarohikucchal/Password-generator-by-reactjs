import React from 'react'
// import {useTheme} from "../context/ThemeContext"
import { useTheme } from '../store/useTheme';

const home = () => {
    const {darkTheme,setDarkTheme}=useTheme();
 
  return (
    <div>
    <p>home page</p>
    <button onClick={()=>setDarkTheme()} > Change Theme</button>
    </div>
  )
}

export default home;
