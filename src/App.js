import React, { Component} from "react";
import "./css/App.css";

class App extends Component{
  constructor(props) {
    super(props);
    this.linkedin = "https://www.linkedin.com/in/hasangenc0";
    this.logo_url = "https://github.com/hasangenc0/express-react/raw/master/logo.png";
    this.state = {    
      logo : null,
      logo_display : ".d-none",
      class: "lds-dual-ring",
    };
  }

  componentDidMount() {
    const logo = new Image();

    logo.src = this.logo_url;

    logo.onload = () => {
      this.setState({class: "" }); 
      this.logo.setAttribute(
        "style",
        "background-image: url('" + this.logo_url + "')"
      );
    }

  }

  render(){
    return(      
      <center className="App">
        <a href="https://github.com/hasangenc0/express-react">
          <h1> Express - React </h1>
          <div class={this.state.class} ref={logo => this.logo = logo}></div>          
        </a>
        <h6>Created by <a href={this.linkedin}> <b>Hasan Genc</b></a></h6>
      </center>
    );
  }
}

export default App;