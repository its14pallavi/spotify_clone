import logo from './logo.svg';
import './App.css';
import { MainDash } from './Components/MainDash/MainDash';
import { Sidebar }  from './Components/sidebar/sidebar';
import RightSide from './Components/RightSide/RightSide';
function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        
        <Sidebar />
        <MainDash/>
        <RightSide/>
      </div>
     
    </div>
  );
}

export default App;
