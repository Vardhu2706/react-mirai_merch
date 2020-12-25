// Imports
import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

// Class Component
class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  // Lifecycle Method - ComponentDidMount
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }
  // Lifecycle Method - ComponentWillUnmount
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  // Render
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/login" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}
// Exports
export default App;
