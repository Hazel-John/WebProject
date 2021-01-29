import React,{Component} from 'react';
import ServiceModal from './ServicesModalComponent';
import './WelcomeUserComponent';
import Login from './LoginComponent';

class Services extends Component{

    
    constructor(props){
        super(props);
        this.state = {
            open: false,
            login: false
        }
        this.tos = null;
        this.openservices = this.openservices.bind(this);
    }


    loginmodel(){
        this.setState({
            login: !this.state.login
        })
    }

    openservices(tof){
        if(global.username == ''){
            {this.setState({login:true})}
        }
        else{
            this.tof = tof;
            console.log('Hello');
            this.setState({open: !this.state.open});
        }
        

    }

    render(){
        return(
             
            <>
                <section class="section home-feature">
                <div class="container">
                    <div class="row" >
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-sm-6 col-12" >
                                    <div class="features-small-item" onClick={()=>{this.openservices('Plumbing');}}>
                                        <div class="icon" >
                                            <i><img width="150" height="150" src="plumber.jpg" alt=""/></i>
                                        </div>
                                        <h5 class="features-title">Plumbing</h5>
                                        <p>Get pipes that supply water and gas installed and repaired with ease.</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                                    <div class="features-small-item " onClick={()=>{this.openservices('Electrician');}}>
                                        <div class="icon">
                                            <i><img width="150" height="150" src="electrician.jpg" alt=""/></i>
                                        </div>
                                        <h5 class="features-title">Electrician</h5>
                                        <p>Get your household electrical equipments installed and fixed with ease.</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                                    <div class="features-small-item" onClick={()=>{this.openservices('Carpentry');}}>
                                        <div class="icon">
                                            <i><img width="150" height="150" src="carpenter.jpg" alt=""/></i>
                                        </div>
                                        <h5 class="features-title">Carpentry</h5>
                                        <p>We Build and  repair cabinets, doors, floors, and any other wooden fixtures for you.</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                                    <div class="features-small-item" onClick={()=>{this.openservices('Pest Control');}}>
                                        <div class="icon">
                                            <i><img width="150" height="150" src="pestControl.jpg" alt=""/></i>
                                        </div>
                                        <h5 class="features-title">Pest Control</h5>
                                        <p>We help you identify and eliminate invading pests including rats, termites, mosquitos et cetera</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                                    <div class="features-small-item" onClick={()=>{this.openservices('Cleaning');}}>
                                        <div class="icon">
                                            <i><img width="150" height="150" src="cleaning.jpg" alt=""/></i>
                                        </div>
                                        <h5 class="features-title">Cleaning</h5>
                                        <p> We ensure that your home is cared and cleaned adequately so that nothing can stop you from relaxing at home.</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                                    <div class="features-small-item" onClick={()=>{this.openservices('Home Salon');}}>
                                        <div class="icon">
                                            <i><img width="150" height="150" src="salon.jpg" alt=""/></i>
                                        </div>
                                        <h5 class="features-title">Home Salon</h5>
                                        <p>Get professional salon treatment at home while enjoying your cup of coffee to your favorite music.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </section>
                {this.state.open?<ServiceModal isOpen={this.state.open} serviceType={this.tof}/>:null}
                {this.state.login?<Login/>:null}
                </>
            );
        }
    }
export default Services;