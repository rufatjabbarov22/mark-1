import Header from "./Components/Header"
import BgVideo from "./Components/BgVideo";
import DivWithThreeParts from "./Components/About";
import Working from "./Components/HowItWorks";
import HorizontalSlider from "./Components/Press";
import Infodata from "./Components/Infodata";
import RequestDemo from "./Components/RequestDemo";
import Footer from "./Components/Footer";
import LiveChatButton from "./Components/ChatButton";
import ScrollToTopButton from "./Components/ButtonToTop";


function App() {
  return (
    <div className="App">
      <Header />
      <BgVideo />
      <DivWithThreeParts />
      <Working />
      <HorizontalSlider />
      <Infodata />
      <RequestDemo />
      <Footer />
      <LiveChatButton/>
      <ScrollToTopButton/>
    </div>
  );
}

export default App;