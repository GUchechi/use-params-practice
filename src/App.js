import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FullCard from './Components/FullCard';
import Hero from './Components/Hero';


function App() {
  const data = [
    {
      title: 'HTML',
      description: 'THis is a html'
    },

    {
      title: 'CSS',
      description: 'THis is a css'
    },

    {
      title: 'JavaScript',
      description: 'THis is a javascript'
    },
    {
      title: 'React',
      description: 'THis is a react'
    },
    {
      title: 'VUE',
      description: 'THis is a vue'
    },

    {
      title: 'Angular',
      description: 'THis is a angular'
    },
  ]


  return (
    <Router>
      <Routes>
        <Route  exact path="/" element={<Hero data={data}/>}/>
        <Route path="/cards/:title" element= {<FullCard data={data}/>} />
      </Routes>
    </Router>
  );
}

export default App;
