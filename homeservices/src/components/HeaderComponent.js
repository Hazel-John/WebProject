import React,{Component} from 'react';
import {  Jumbotron } from 'reactstrap';
import RegisterForm from './RegisterFormComponent';
import RegisterForm2 from './RegisterForm2Component';
import Login from './LoginComponent';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import './WelcomeUserComponent';



class Header extends Component{

    // static contextTypes = {
    //     locale: PropTypes.object
    // }

    constructor() {
        super();
    
        this.state = {
          showLogin: false,
          showLogin2:false,
          drop:false,
          login:false,
          welcome: ''
        };
        this.showLoginModal = this.showLoginModal.bind(this);
        this.showLoginModal2 = this.showLoginModal2.bind(this);  
        this.droptoggle = this.droptoggle.bind(this); 
        this.loginmodel = this.loginmodel.bind(this);     
    }

    

    droptoggle() {
        this.setState({
            drop: !this.state.drop,
        })
    }

    showLoginModal() {
        this.setState({
          showLogin: !this.state.showLogin,
        })
        console.log(this.state.showLogin)
      }
        // TODO: Likely change the route or do something else here...
      
      showLoginModal2() {
          this.setState({
              showLogin2: !this.state.showLogin2,
            })
            console.log(this.state.showLogin)
      }

      loginmodel(){
          this.setState({
              login: !this.state.login
          })
      }
      
    render(){
        var username = global.username;
        if(username!='' && this.state.welcome!=('Welcome, '+username)){
            this.setState({
                welcome : 'Welcome, '+username
            })
            this.forceUpdate();
        }
        console.log(username);
        return(
            <>
                <header class="header-area header-sticky">
                    <div class="container">
                        <div class="row">
                            <div class="col-11">
                                <nav class="main-nav">
                                    <a href="#" class="logo">
                                        <img width="70" height="70"src="logo.jpg" alt="Softy Pinko"/>
                                    </a>
                                    <ul class="nav">
                                        <li><a href="#welcome" class="active">Home</a></li>
                                        <li><a href="#features" class="">About</a></li>
                                        <li><a href="#work-process" class="">Work Process</a></li>
                                        <li><a href="#pricing-plans" class="" onClick={()=>this.loginmodel()}>Login</a></li>
                                        <li><a href="#contact-us" class="">Contact Us</a></li>
                                        <Dropdown isOpen={this.state.drop} >
                                        <DropdownToggle id="toggler">
                                            <div onClick={() => this.droptoggle()}>Register</div>
                                        </DropdownToggle>
                                            <DropdownMenu id="dropmenu"> 
                                            <div onClick={() => this.showLoginModal()}>User</div>
                                            <div onClick={() => this.showLoginModal2()}>Service Provider</div>
                                            </DropdownMenu>
                                        </Dropdown>
                                        {/* <li><select name="reg" >
                                            </select></li> */}
                                        {this.state.login?<Login/>:null}
                                        {this.state.showLogin?<RegisterForm/>:null}
                                        {this.state.showLogin2?<RegisterForm2/>:null}
                                    </ul>
                                    <a class="menu-trigger">
                                        <span>Menu</span>
                                    </a>
                                </nav>
                            </div>
                            <div class="col-1 center">
                                <p>{this.state.welcome}</p>
                            </div>
                        </div>
                    </div>
                </header>
                <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            
                        </div>
                    </div>
                </div>
                </Jumbotron>
            </>
        );
    }
}
export default Header;