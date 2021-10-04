import logo from './logo.svg';
import './App.css';
import {Opening} from './Opening';
import About from './About';
import Gallery from './Gallery';
import Mint from  './Mint';
function App() {
  return (
    <div className="App">
      <Opening/>
      <About/>
      <Gallery/>
      <Mint/>
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
