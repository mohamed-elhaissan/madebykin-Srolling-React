import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import Nav from './componants/header';
import Project from './componants/project';
import Contact from './componants/contact';
import About from './componants/about';
import Home from './componants/home';
function App() {
  const location = useLocation();
  return (
    <div>
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Project' element={<Project/>}/>

      </Routes>
    </div>
  );
}

export default App;
