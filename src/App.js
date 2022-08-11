import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FullCard from './Components/FullCard';
import Hero from './Components/Hero';


function App() {
  const data = [
    {
      title: 'HTML',
      desc: 'THis is a html'
    },

    {
      title: 'CSS',
      desc: 'THis is a css'
    },

    {
      title: 'JavaScript',
      desc: 'THis is a javascript'
    },
    {
      title: 'React',
      desc: 'THis is a react'
    },
    {
      title: 'VUE',
      desc: 'THis is a vue'
    },

    {
      title: 'Angular',
      desc: 'THis is a angular'
    },
  ]


  return (
    <Router>
      <Routes>
        <Route  exact path="/" element={<Hero />}/>
        <Route path="/fullcard" element= {<FullCard />} />
      </Routes>
    </Router>
  );
}

export default App;
