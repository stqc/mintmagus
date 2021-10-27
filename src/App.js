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
          <a href="#">Discord</a>
          <a href="#">Telegram</a>
          <a href="#">Twitter</a>
        </div>
        &copy; Copyright FantomZombie. All rights reserved.
      </div>
    </div>
  );
}

export default App;
