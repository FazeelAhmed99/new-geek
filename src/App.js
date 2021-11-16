import React from 'react';
import Header from './components/Header';
// import Body1 from './components/Body1';
// import Body3 from './components/Body3';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Body2 from './components/Body2';
import Pexels from './Pexels.mp4'
import './App.css'

function App() {
  return (
    <>

    <video className="video" autoPlay muted loop>
      <source src={Pexels} type="video/mp4"/>
    </video>
    <Header/>
    {/* <Body1/>
    <Body2 />
    <Body3/>
    <Contact/>
    <Footer/> */}
    
    </>
  );
}

export default App;
