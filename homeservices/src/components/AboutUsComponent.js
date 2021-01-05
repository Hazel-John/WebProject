import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
         <>   
        {/* // <!-- ***** Features Big Item Start ***** --> */}
        <section class="section padding-top-70 padding-bottom-0" id="features">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-12 col-sm-12 align-self-center" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <img src="left-image.png" class="rounded img-fluid d-block mx-auto" alt="App"/>
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                        <div class="left-heading">
                            <h2 class="section-title">Help Us Help You</h2>
                        </div>
                        <div class="left-text">
                            <p>We provide our customers with a  hassle-free approach to get their domestic work done. HomeCare is
                                 guaranteed to connect users with high-quality service providers at the lowerest rate, with the best
                                  practices and the closest proximity.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="hr"></div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- ***** Features Big Item End ***** -->

        <!-- ***** Features Big Item Start ***** --> */}
        <section class="section padding-bottom-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                        <div class="left-heading">
                            <h2 class="section-title">We can help you to grow your business</h2>
                        </div>
                        <div class="left-text">
                            <p>We provide a platform for zealous/passionate service providers to render services that meet our customers needs. 
                                The customers will not only remember the exceptional service provided by you, they will also be more likely to refer
                                 other people to you.</p>
                        </div>
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                        <img src="right-image.png" class="rounded img-fluid d-block mx-auto" alt="App"/>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- ***** Features Big Item End ***** --></section> */}
        </>
            )
        }
}

export default About;