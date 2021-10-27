import logo from './logo.svg';
import './App.css';
import {Opening} from './Opening';
import About from './About';
import Gallery from './Gallery';
import Mint from  './Mint';
import Team from './Team';

function App() {
  return (
    <div className="App">
      <Opening/>
      <About/>
      <Gallery/>
      <Mint/>
      <Team/>
      <div className="footer">
        <div className="social">
          <a href="https://t.co/myjYTJDkXR?amp=1">Discord</a>
          <a href="https://t.me/FantomZombie">Telegram</a>
          <a href="https://twitter.com/fantom_zombie">Twitter</a>
        </div>
        &copy; Copyright 2021 FantomZombie. All rights reserved.
      </div>
    </div>
  );
}

export default App;
