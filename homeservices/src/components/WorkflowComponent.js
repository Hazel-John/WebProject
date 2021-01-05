import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faCartArrowDown, faMoneyCheckAlt, faReceipt, faTruckLoading, faLaughBeam } from '@fortawesome/free-solid-svg-icons'

const login = <FontAwesomeIcon icon={faSignInAlt} size="lg"  />
const booking = <FontAwesomeIcon icon={faCartArrowDown}  size="lg" />
const payment = <FontAwesomeIcon icon={faMoneyCheckAlt}  size="lg" />
const receipt = <FontAwesomeIcon icon={faReceipt}  size="lg" />
const delivery = <FontAwesomeIcon icon={faTruckLoading}  size="lg" />
const happy = <FontAwesomeIcon icon={faLaughBeam} size="lg" />

class Workflow extends Component{
    render(){
        return (
            <section class="mini" id="work-process">
        <div class="mini-content">
            <div class="container">
                <div class="row">
                    <div class="offset-lg-3 col-lg-6">
                        <div class="info">
                            <h1>Work Process</h1>
                            <p>You are six steps away from a smart lifestyle.</p>
                        </div>
                    </div>
                </div>

                {/* <!-- ***** Mini Box Start ***** --> */}
                <div class="row">
                    <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                        <p href="#" class="mini-box">
                            <a>{login}</a>
                            <strong>Login / Register</strong>
                            <span>Register and  Login to avail services from our skilled service providers.</span>
                        </p>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                        <p href="#" class="mini-box">
                            <a>{booking}</a>
                            <strong>Service Booking</strong>
                            <span>Choose from a variety of services and service providers.</span>
                        </p>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                        <p href="#" class="mini-box">
                            <a>{payment}</a>
                            <strong>Online Payment</strong>
                            <span>Enjoy a secure and  hassle-free online payment with just a few clicks.</span>
                        </p>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                        <p href="#" class="mini-box">
                            <a>{receipt}</a>
                            <strong>Service Confirmation</strong>
                            <span>On booking, email will be sent to the customer and service provider.</span>
                        </p>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                        <p href="#" class="mini-box">
                            <a>{delivery}</a>
                            <strong>Delivery of Services</strong>
                            <span>Get professional services from trusted and skilled service providers within few minutes.</span>
                        </p>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                        <p href="#" class="mini-box">
                            <a>{happy}</a>
                            <strong>Happy Customer</strong>
                            <span>Do provide feedback so that we can improvise the services rendered.</span>
                        </p>
                    </div>
                </div>
                {/* <!-- ***** Mini Box End ***** --> */}
            </div>
        </div>
    </section>
        )
    }
}
/* <!-- ***** Home Parallax Start ***** -->
    
    <!-- ***** Home Parallax End ***** --> */
export default Workflow;