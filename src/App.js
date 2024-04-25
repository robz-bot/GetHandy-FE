import "./App.css";
import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ColorThiefComponent from "./Pages/ColorThief/ColorThief";
import Header from "./Components/Header/Header";
import MySign from "./Pages/MySign/MySign";

function App() {
  return (
    <>
    
      <Router>
        <div>
        <Header/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/color-thief" element={<ColorThiefComponent/>} />
            <Route exact path="/my-sign" element={<MySign/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
