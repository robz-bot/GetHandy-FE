import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ColorThiefComponent from "./Pages/ColorThief/ColorThief";
import Header from "./Components/Header/Header";
import MySign from "./Pages/MySign/MySign";
import Base64 from "./Pages/Base64/Base64";
import ImageAvatar from "./Pages/ImageAvatar/ImageAvatar";
import Base64_image from "./Pages/Base64-image/Base64-image";
import Count from "./Pages/Count/Count";
import Footer from "./Components/Footer/Footer";
import NumberToWordsConverter from "./Pages/NumToWords/NumToWords";
import ImageTextExtractor from "./Pages/ImageToText/ImageToText";
import TextToSpeech from "./Pages/Text-Speech/Text-Speech";
import JpgToPdfConverter from "./Pages/Jpg-pdf/Jpg-pdf";
import JsonToXmlConverter from "./Pages/JsonToXmlConverter/JsonToXmlConverter";
import FakerObj from "./Pages/FakerObj/FakerObj";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/color-thief"
              element={<ColorThiefComponent />}
            />
            <Route exact path="/my-sign" element={<MySign />} />
            <Route exact path="/base64" element={<Base64 />} />
            <Route exact path="/image-avatar" element={<ImageAvatar />} />
            <Route exact path="/Base64_image" element={<Base64_image />} />
            <Route exact path="/count" element={<Count />} />
            <Route exact path="/num-to-words" element={<NumberToWordsConverter />} />
            <Route exact path="/image-text" element={<ImageTextExtractor />} />
            <Route exact path="/text-speech" element={<TextToSpeech />} />
            <Route exact path="/jpg-pdf" element={<JpgToPdfConverter />} />
            <Route exact path="/json-xml" element={<JsonToXmlConverter />} />
            <Route exact path="/faker" element={<FakerObj />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
