import logo from './logo.svg';
import './App.css';
import {Opening} from './Opening';
import About from './About';

import Mint from  './Mint';


function App() {
  return (
    <div className="App">
      <Opening/>
      <About/>
      <Mint/>
      <div className="footer">
        <div className="social">
          <a href="https://discord.gg/fgCYe52GEt">Discord</a>
          <a href="https://t.me/MagusNodes">Telegram</a>
          <a href="https://twitter.com/MagusNodes">Twitter</a>
        </div>
      </div>
    </div>
  );
}

export default App;
