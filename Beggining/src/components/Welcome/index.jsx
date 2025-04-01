import React from 'react'
import { Component } from 'react'
// import React, { Component } from "react";

class Welcome extends Component{
  render (){
    const {name, greeting} = this.props
    return <h1>{greeting} {name}</h1>;
  }
}

Welcome.defaultProps = {
  name:"Chakri",
  greeting:"Hello"
}

export default Welcome 
