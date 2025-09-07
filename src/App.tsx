import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Advantages from './components/Advantages/Advantages';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import InterfaceForm from './components/Interface/InterfaceForm';
import PromoBlock from './components/PromoBlock/PromoBlock';
import RequestForm from './components/RequestForm/RequestForm';
import Security from './components/Security/Security';
import PrivacyPolicy from './Pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <div className="main-content">
                <Hero />
                <Advantages />
                <Security />
                <RequestForm />
              </div>
              <Footer />
            </>
          } />
          
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
  );
}

export default App;