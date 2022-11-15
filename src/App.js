import './App.css';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import ThirdSection from './components/ThirdSection';
import VideoSection from './components/VideoSection';



function App() {
  return (
    <div className="App">
       <NavBar />
       <HeroSection />
       <VideoSection />
       <ThirdSection />
    </div>
  );
}

export default App;
