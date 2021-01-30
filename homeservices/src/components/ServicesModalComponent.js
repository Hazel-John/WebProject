import React,{Component} from 'react';
import { Modal, ModalBody, Label, Input } from 'reactstrap';
import axios from 'axios';
import './WelcomeUserComponent';



class ServiceModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: this.props.isOpen,
            serviceProviders : null,
            location : '',
        }
        this.closeModal = this.closeModal.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.razorPayPaymentHandler = this.razorPayPaymentHandler.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.price = 0;
        this.image = "";

    }

    handlePrice(e){
        var price = e.target.value;
        this.price = price
        console.log(this.price);
    }

    //Payment Gateway Integration
    async razorPayPaymentHandler() {
        const API_URL = `http://localhost:5000/razorpay/`
        const orderUrl = `${API_URL}order`;
        const response = await axios.post(orderUrl,{price:this.price});
        const { data } = response;
        console.log("App -> razorPayPaymentHandler -> data", data["id"]);
        console.log(global.email,global.mobile);
        var transaction_details = {
            username: global.username,
            emailid: global.email,
            mobileno: global.mobile,
            paymentid: data["id"],
            amount: this.price,
        }
        const res = axios.post("http://localhost:5000/transactiondetails/add",transaction_details);
        console.log(res)
        
        const options = {
          key: '',
          name: "Home care",
          description: "services at your doorstep",
          image: "logo.jpg",
          order_id: data.id,
          handler: async (response) => {
            try {
             const paymentId = response.razorpay_payment_id;
             const url = `${API_URL}capture/${paymentId}`;
             const captureResponse = await axios.post(url, {})
             const successObj = JSON.parse(captureResponse.data)
             const captured = successObj.captured;
             console.log("App -> razorPayPaymentHandler -> captured", successObj)
             if(captured){
                 console.log('success')
             }
             
            } catch (err) {
              console.log(err);
            }
          },
          theme: {
            color: "#686CFD",
          },
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
      }


    componentDidMount(){
        switch(this.props.serviceType){
            case 'Plumbing': this.image = "plumbing.jpg"; break;
            case 'Cleaning': this.image = "cleanig.jpg"; break;
            case 'Carpentry': this.image = "carpentry.jpg"; break;
            case 'Home Salon': this.image = "homesalon.jpg";break;
            case 'Pest Control': this.image = "pestcont.jpg"; break;
            case 'Electrician': this.image = "elec.jpg";break;
            default: this.image = "logo.jpg"; break;
        }
        axios.get('http://localhost:5000/serviceProviders/')
        .then(response => {
            console.log(response.data);
            this.setState({
                serviceProviders: response.data,
            })
        })
        .catch(err => {console.log(err)})
    }
    
    closeModal(){
        this.setState({isOpen: !this.state.isOpen});
    }

    handleChange(e) {
        let location = e.target.value;
        console.log(location);
        this.setState({
            location
        });
    }

    


    render() {
    
         const RenderServiceProviders = (items) => {
            var sp = items["serviceProviders"];
            let variable = sp.filter((item) => {
                console.log(item.location);
                console.log(this.state.location);
                return item.location.toLowerCase().indexOf(this.state.location.toLowerCase()) != -1;
            });
            var flag = false;
            if (variable != null){
                    console.log(variable);
                    
                    return(
                        <p>{variable.map((item)=>{
                            if(this.props.serviceType == item.serviceType){
                                flag = true;
                                return(
                                    <div class="card">

                                        {/* <!-- Card header --> */}
                                        <div class="card-header" role="tab" id="headingOne1">
                                            <b class="mb-0">{item.username}</b>
                                            <input class="priceradio" type="radio" name="price" value={item.charge} onChange={this.handlePrice}/>
                                        </div>

                                        {/* <!-- Card body --> */}
                                        <div class="card-body">
                                            <div class="modaldisplay">Location : {item.location}</div>
                                            <div class="modaldisplay ml-4">Price : {item.charge}</div>      
                                        </div>
                                    </div>
                                )
                            }
                            else{console.log("this executed")}
                        })}</p>
                    );
            }                            
                

            else{
                return(
                    <div></div>
                )
            }
            
        }

        
        return (
            <>
                <Modal isOpen={this.state.isOpen} className="Modal" overlayClass="Overlay">
                    <ModalBody>
                        <div class="row">
                        <div class="col-lg-4 mt-3 mb-3">
                            {/* <!--Carousel Wrapper--> */}
                            {/* <!--Slides--> */}
                                <img class="d-block w-100"
                                    src={this.image}
                                    alt="First slide"/>
                                
                            {/* <!--/.Carousel Wrapper--> */}
                        </div>
                        <div class="col-lg-8">
                            <h2 class="h2-responsive product-name">
                            <strong>{this.props.serviceType}</strong>
                            </h2>

                            {/* <!--Accordion wrapper--> */}
                            

                            {/* <!-- Accordion card --> */}
                            {this.state.serviceProviders?<RenderServiceProviders serviceProviders={this.state.serviceProviders}/>:null}
                            {/* <!-- Accordion wrapper --> */}


                            {/* <!-- Add to Cart --> */}
                            <div class="card-body">
                                <div class="row">
                                    <Label for="exampleSearch" className="col-4 mt-2">Search</Label>
                                    <Input
                                        type="search"
                                        name="search"
                                        className="col-8"
                                        id="exampleSearch"
                                        placeholder="location"
                                        value={this.state.location} onChange={this.handleChange}
                                        />
                                </div>
                            
                            </div>
                        </div>
                            {/* <!-- /.Add to Cart --> */}
                        </div>
                        <div class="text-center">
                                <button type="button" class="btn btn-secondary mb-4" onClick={this.closeModal}>Close</button>
                                <button class="btn btn-primary ml-3 mb-4" onClick={this.razorPayPaymentHandler} >Book Service</button>
                        </div>
                    </ModalBody>
                    </Modal>
            </>
        )
    }
}

export default ServiceModal;