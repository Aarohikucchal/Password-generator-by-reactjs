// import React from 'react';
// import {Routes, Route } from 'react-router';
// import Home from "./pages/Home";
// import About from './pages/about';
// import Contact from './pages/contact';
// import NotFound from './pages/NotFound';
// import NavBar from './components/NavBar';


// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         <Route path='/' element={<Home/>} />
//         <Route path='/About/:id' element={<About/>} />
//         <Route path='/Contact' element={<Contact/>} />
//         <Route path='*' element={<NotFound/>} />
//       </Routes>

//     </div>
//   )
// }

// export default App

import React from 'react'
import { Routes, Route } from 'react-router';
import Home from "./pages/Home";
import About from './pages/about';
import Contact from './pages/contact';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './store/useTheme';

const App = () => {
  // const [darkTheme, setTheme] = React.useState(true);
  // const setDarkTheme = () => {
  //   setTheme((prev) => !prev)
  // }
  const {darkTheme}= useTheme();
  return (
    <div>
      {/* <ThemeProvider value={{ darkTheme, setDarkTheme }}> */}
        <div className={`h-screen ${darkTheme ? "bg-slate-950 text-white" : "bg-yellow-100 text-black"}`} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/:id" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      {/* </ThemeProvider> */}
    </div>
  )
}

export default App