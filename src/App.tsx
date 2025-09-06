import './App.css';
import Advantages from './components/Advantages/Advantages';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import InterfaceForm from './components/Interface/InterfaceForm';
import PromoBlock from './components/PromoBlock/PromoBlock';
import RequestForm from './components/RequestForm/RequestForm';
import Security from './components/Security/Security';

function App() {
  return (
    <div className="app-container">
      <div className="main-content">
        <Header />
        <Hero />
        <Advantages />
        <PromoBlock />
        <InterfaceForm />
        <Security />
        <RequestForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;