import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Advantages from './components/Advantages/Advantages';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import RequestForm from './components/RequestForm/RequestForm';
import Security from './components/Security/Security';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Mobile from './components/Mobile/Mobile';
import Prices from './components/Prices/Prices';
import { ScrollProvider, useScroll } from './contexts/ScrollContext';
import Contacts from './components/Contacts';

const MainPage: React.FC = () => {
  const { sections } = useScroll();

  return (
    <>
      <Header />
      <div className="main-content">
        <div ref={sections.home}>
          <Hero />
        </div>
        <div ref={sections.features}>
          <Advantages />
        </div>
        <div ref={sections.tarif}>
          <Prices />
        </div>
        <Security />
        <div ref={sections.application}>
          <Mobile />
        </div>
        <div ref={sections.contacts}>
          <Contacts />
        </div>
        <RequestForm />
        {/* <div >
          <OfficesMap />
        </div> */}
      </div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <ScrollProvider>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            
            <Route path="*" element={<MainPage />} />

            <Route path="/privacy" element={
              <>
                <Header />
                <PrivacyPolicy />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </ScrollProvider>
  );
}

export default App;