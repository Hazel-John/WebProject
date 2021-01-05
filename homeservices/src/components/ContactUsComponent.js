import React,{Component} from 'react';

class Contact extends Component{
    render(){
        return (
            <section class="section colored" id="contact-us">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="center-heading">
                                <h2 class="section-title">Talk To Us</h2>
                            </div>
                        </div>
                        <div class="offset-lg-3 col-lg-6">
                            <div class="center-text">
                                <p>Feel free to connect with us  and  provide  valuable information so that we can improve the quality of 
                                    services rendered. Any suggestions, queries and feedback are always welcome!</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <h5 class="margin-bottom-30">Keep in touch</h5>
                            <div class="contact-text">
                                <p>For all quries, please email us using the following form</p>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-6 col-sm-12">
                            <div class="contact-form">
                                <form id="contact" action="" method="get">
                                <div class="row">
                                    <div class="col-lg-6 col-md-12 col-sm-12">
                                    <fieldset>
                                        <input name="name" type="text" class="form-control" id="name" placeholder="Full Name" required=""/>
                                    </fieldset>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12">
                                    <fieldset>
                                        <input name="email" type="email" class="form-control" id="email" placeholder="E-Mail Address" required=""/>
                                    </fieldset>
                                    </div>
                                    <div class="col-lg-12">
                                    <fieldset>
                                        <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your Message" required=""></textarea>
                                    </fieldset>
                                    </div>
                                    <div class="col-lg-12">
                                    <fieldset>
                                        <button type="submit" id="form-submit" class="main-button">Send Message</button>
                                    </fieldset>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;