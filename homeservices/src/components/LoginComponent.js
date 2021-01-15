import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';


class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        displayModal: true,
        fields: {},
        errors: {}
      };

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
      this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
      this.setState({
        displayModal: !this.state.displayModal,
      });
    }
    
  
  
    onSubmit() {
      this.props.onLogin();
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
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
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