import logo from './logo.svg';
import Header from './components/HeaderComponent';
import Services from './components/ServicesComponent';
import Contact from './components/ContactUsComponent';
import Footer from './components/FooterComponent';
import Workflow from './components/WorkflowComponent';
import About from './components/AboutUsComponent';
import React,{Component} from 'react';
import './App.css';


class App extends Component{

  // static childContextTypes ={
  //   locale: PropTypes.object
  // }

  // getChildContext(){
  //   return {locale: Welcome}
  // }

  render(){
    return (
      <>
        <Header/>
        <Services/>
        <Workflow/>
        <About/>
        <Contact/>
        <Footer/>
      </>
    );
  }
  
}

export default App;