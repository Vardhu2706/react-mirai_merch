// Imports
import React from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button-component/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
// Class Component
class SignIn extends React.Component {
  constructor() {
    super();
    // State
    this.state = {
      email: "",
      password: "",
    };
  }
  // Handle Submit Method
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    }catch(error){
      console.error(error);
    }
  };
  // Handle Change Method
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  // Render
  render() {
    return (
      <div className="sign-in">
        <h2>I have an account</h2>
        <span>Sign in with your existing account.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Google SignIn
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
// Export Default
export default SignIn;
