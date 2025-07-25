import { useEffect, useRef, useState } from 'react'
import Arena from './components/Arena'
import Charecter from './components/Charecter'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import LoadingScreen from './components/LoadingScreen'


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoReady = () => {
      setTimeout(() => {
        setIsLoading(false); // smooth fade after video is ready
      }, 300);
    };

    // Attach event listener if video exists
    if (videoElement) {
      videoElement.addEventListener('canplaythrough', handleVideoReady);
    }

    // Fallback timeout if video takes too long or fails
    const fallbackTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('canplaythrough', handleVideoReady);
      }
      clearTimeout(fallbackTimeout);
    };
  }, []);


  return (
    <>
      {isLoading && <LoadingScreen />}
      <Header/>
      <Hero videoRef={videoRef}/>
      <Charecter/>
      <Arena/>
      <Footer/>
    </>
  )
}

export default App
