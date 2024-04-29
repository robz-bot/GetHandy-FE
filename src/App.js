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
import Base64 from "./Pages/Base64/Base64";
import ImageAvatar from "./Pages/ImageAvatar/ImageAvatar";

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
            <Route exact path="/base64" element={<Base64/>} />
            <Route exact path="/image-avatar" element={<ImageAvatar/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
