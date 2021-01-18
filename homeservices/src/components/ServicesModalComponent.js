import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Input } from 'reactstrap';
import axios from 'axios';


const  RenderServiceProviders = (serviceProviders) => {
                if (serviceProviders != null){
                        console.log(serviceProviders)
                        return(
                                    
                                    <p>{serviceProviders.map((item)=>{
                                        return(
                                            <div class="card">

                                                {/* <!-- Card header --> */}
                                                <div class="card-header" role="tab" id="headingOne1">
                                                    <h6 class="mb-0">{item.name}</h6>
                                                </div>

                                                {/* <!-- Card body --> */}
                                                <div class="card-body">
                                                    location : {item.location}      price : {item.price}
                                                </div>
                                            </div>
                                        )
                                    })}</p>
                            );
                        }
                        

                else{
                    return(
                        <div></div>
                    )
                }
            }

class ServiceModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: this.props.isOpen,
            serviceProviders : null
        }
        this.closeModal = this.closeModal.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    componentDidMount(){
        axios.get('http://localhost:5000/serviceProviders/')
        .then(response => {
            console.log(response.data);
            this.setState({
                serviceProviders: response.data[0],
            })
        })
        .catch(err => {console.log(err)})
        console.log(this.state.serviceProviders);
    }
    
    closeModal(){
        this.setState({isOpen: !this.state.isOpen});
    }



    render() {

        return (
            <>
                <Modal isOpen={this.state.isOpen} className="Modal" overlayClass="Overlay">
                    <ModalBody>
                        <div class="row">
                        <div class="col-lg-5 mt-5">
                            {/* <!--Carousel Wrapper--> */}
                            {/* <!--Slides--> */}
                                <img class="d-block w-100"
                                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(23).jpg"
                                    alt="First slide"/>
                                
                            {/* <!--/.Carousel Wrapper--> */}
                        </div>
                        <div class="col-lg-7">
                            <h2 class="h2-responsive product-name">
                            <strong>{this.props.serviceType}</strong>
                            </h2>

                            {/* <!--Accordion wrapper--> */}
                            

                            {/* <!-- Accordion card --> */}
                            <RenderServiceProviders serviceProviders={this.state.serviceProviders}/>
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
                                        />
                                </div>
                            
                            </div>
                        </div>
                            {/* <!-- /.Add to Cart --> */}
                        </div>
                        <div class="text-center">
                                <button type="button" class="btn btn-secondary mb-4" onClick={this.closeModal}>Close</button>
                                <button class="btn btn-primary ml-3 mb-4" >Book Service</button>
                        </div>
                    </ModalBody>
                    </Modal>
            </>
        )
    }
}

export default ServiceModal;