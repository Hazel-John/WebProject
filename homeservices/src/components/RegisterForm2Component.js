import React,{Component} from 'react';
import {  Modal, ModalBody } from 'reactstrap';
import axios from 'axios';


class RegisterForm2 extends Component {
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
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["password"] = "";
          fields["serviceType"] = "";
          fields["charge"] = "";
          this.setState({fields:fields});
          var user={
            "username": this.state.fields["username"],
            "password": this.state.fields["password"],
            "emailid": this.state.fields["emailid"],
            "mobileno": this.state.fields["mobileno"],
            "serviceType": this.state.fields["serviceType"],
            "charge": this.state.fields["charge"],

          };
          axios.post('http://localhost:5000/serviceProviders/add',user)
          .then(res => console.log(res.data))
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

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
        }
      }
      if (!fields["charge"]) {
        formIsValid = false;
        errors["charge"] = "*Please enter price per session";
      }

      if (typeof fields["charge"] !== "undefined") {
        if (!fields["charge"].match(/^[0-9]*$/)) {
          formIsValid = false;
          errors["charge"] = "*Please enter price per session";
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
            <h3>Registration page</h3>
            <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
            <label>Name</label>
            <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.username}</div>
            <label>Email ID:</label>
            <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
            <div className="errorMsg">{this.state.errors.emailid}</div>
            <label>Mobile No:</label>
            <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
            <div className="errorMsg">{this.state.errors.mobileno}</div>
            <label>Password:</label>
            <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.password}</div>
            <label>Service Type:</label>
            <input type="text" name="serviceType" value={this.state.fields.serviceType} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.username}</div>
            <label>Per Session Charge:</label>
            <input type="text" name="charge" value={this.state.fields.charge} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.charge}</div>
            <div className="row">
              <div className="col-6">
              <input type="submit" className="btn btn-primary btn-md btnreg" value="Register"/>
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

export default RegisterForm2;