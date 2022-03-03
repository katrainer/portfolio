import React from 'react'
import './App.css';
import {Header} from "./components/1-Header/Header";
import {Main} from "./components/2-Main/Main";
import {Skills} from "./components/3-Skills/Skilss";
import {Works} from "./components/4-Works/Works";
import {Recruit} from "./components/5-Recruit/Recruit";
import {Contacts} from "./components/6-Contacts/Contacts";
import {Footer} from "./components/7-Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Works/>
      <Recruit/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
