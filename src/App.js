import React,{useState} from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Events from './Events';
import Question from './Question';
import Quotes from './Quotes';
import Resource from './Resource';
// import Contests from './Contests';

function App() {

  return (
    <div className="app">
      <Header/>
      <About/>
      <Events name={"Upcoming"}/>
      {/* <Events name={"Past"}/> */}
      {/* <Contests/> */}
      <Quotes/>
      <Resource />
      <Question/>
    </div>
  );
}

export default App;
