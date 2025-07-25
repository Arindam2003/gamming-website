import { useEffect, useState } from 'react'
import Arena from './components/Arena'
import Charecter from './components/Charecter'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import LoadingScreen from './components/LoadingScreen'


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <>
      <Header/>
      <Hero/>
      <Charecter/>
      <Arena/>
      <Footer/>
    </>
  )
}

export default App
