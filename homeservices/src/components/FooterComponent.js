import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faTwitter, faLinkedin , faGooglePlus } from '@fortawesome/free-brands-svg-icons'



const facebook = <FontAwesomeIcon icon={faFacebook}  size="lg" />
const github = <FontAwesomeIcon icon={faGithub}  size="lg" />
const twitter = <FontAwesomeIcon icon={faTwitter}  size="lg" />
const linkedin = <FontAwesomeIcon icon={faLinkedin}  size="lg" />
const googleps = <FontAwesomeIcon icon={faGooglePlus}  size="lg" />

class Footer extends Component{
    render(){
        return (
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <ul class="social">
                            <li><a href="https://www.facebook.com/">{facebook}</a></li>
                            <li><a href="https://github.com/">{github}</a></li>
                            <li><a href="https://twitter.com/?lang=en">{twitter}</a></li>
                            <li><a href="https://www.linkedin.com/">{linkedin}</a></li>
                            <li><a href="https://myaccount.google.com/">{googleps}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>);
    }
}
export default Footer;
