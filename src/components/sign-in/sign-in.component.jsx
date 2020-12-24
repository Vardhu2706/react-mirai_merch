// Imports
import React from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
// Class Component
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      email: "",
      password: "",
    };
  }
  // Handle Submit Method
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
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
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}
// Export Default
export default SignIn;
