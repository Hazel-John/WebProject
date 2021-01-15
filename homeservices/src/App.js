import logo from './logo.svg';
import Header from './components/HeaderComponent';
import Services from './components/ServicesComponent';
import Contact from './components/ContactUsComponent';
import Footer from './components/FooterComponent';
import Workflow from './components/WorkflowComponent';
import About from './components/AboutUsComponent';
import ServiceModal from './components/ServiceModalComponent';
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Services/>
      <Workflow/>
      <About/>
      <Contact/>
      <Footer/>
      <ServiceModal/>
    </>
  );
}

export default App;