import React,{Component} from 'react';
import { Modal,  ModalBody } from 'reactstrap';
import axios from 'axios';
import './WelcomeUserComponent';


class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        displayModal: true,
        fields: {},
        errors: {},
        users : null
      };

      
      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
      this.toggle = this.toggle.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
      this.userdetails = null;
    }

    // state = {
    //   currentLocale: ''
    // }
  
    // changeLocale(locale){
    //   this.setState({currentLocale: locale})
    // }

    componentDidMount(){
      axios.get('http://localhost:5000/users/')
      .then(response => {
          console.log(response.data[0]);
          this.setState({
              users: response.data,
          })
      })
      .catch(err => {console.log(err)})
  }
    
    toggle() {
      this.setState({
        displayModal: !this.state.displayModal,
      });
    }
    
  

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          fields["password"] = "";
          global.username = this.userdetails.username;
          global.email = this.userdetails.emailid;
          global.mobile = this.userdetails.mobileno;
          this.setState({fields:fields});
          this.toggle();
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
      let flaguser = false;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      this.state.users.map((user)=>{
        if(user.username==fields["username"]){
          flaguser = true;
          if(user.password!=fields["password"]){
            formIsValid = false;
            errors["password"] = "*Incorrect password."
          }
          this.userdetails = user;
        }
      })

      if(!flaguser){
        formIsValid = false;
        errors["username"] = "*User not registered.";
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {


    return (
    <Modal isOpen={this.state.displayModal} id="modal">
      <ModalBody>
        <div id="register">
            <h3>Login</h3>
            <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
            <label>Username</label>
            <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.username}</div>

            <label>Password:</label>
            <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.password}</div>

            <div className="row">
              <div className="col-6">
              <input type="submit" className="btn btn-primary btn-md btnreg" value="Login"/>
              </div>
            <div class="col-6">
            <a className="btn btn-primary btn-md btnreg" onClick={this.toggle}>Close</a>
            </div>
            </div>
            </form>
            
        </div>
      </ModalBody>
      
    </Modal>

      );
  }


}

export default Login;