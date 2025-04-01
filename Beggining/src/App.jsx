import "./App.css";
import UserProfile from "./components/UserProfile/index";
// import Welcome from "./components/Welcome";
import React from "react";
import { Component } from "react";

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name: "Siddu",
    role: "Software Developer",
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Chakri",
    role: "Software Developer",
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name: "tiger",
    role: "Software Developer",
  },
  {
    uniqueNo: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name: "Harshi",
    role: "Software Developer",
  },
];

class App extends Component {
  state = { searchInput: "",userDetailsList: initialUserDetailsList };

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  
  onDelete = (uniqueNo)=>{
    const {userDetailsList} = this.state 
    const filteredUserDetailsList = userDetailsList.filter((eachUser)=>eachUser.uniqueNo!==uniqueNo)
    this.setState({userDetailsList:filteredUserDetailsList})
    console.log("onDelete() triggered");
  }

  
  render() {
    const { searchInput, userDetailsList } = this.state;
    const searchResults = userDetailsList.filter((eachUser) =>
      eachUser.name.includes(searchInput)
    );

    
    // console.log(searchInput);
    return (
      <div className="list-container">
        <h1 className="title">User List</h1>
        <input
          type="search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        /> 
        <ul>
          {searchResults.map((eachItem) => (
            <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} onDelete={this.onDelete} />
          ))} 
        </ul> 
      </div>
    );
  }
}

// import { Component } from "react"

// IF-ELSE RENDERING
// class App extends Component {
//   state = { isLoggedIn: true }

//    renderAuthButton = () => {
//     const {isLoggedIn} = this.state
//     if (isLoggedIn === true) {
//       return <button>Logout</button>
//     }
//     return <button>Login</button>
//   }

//   render() {
//     return (
//      <div className="container">
// <h1>React JS</h1>;
//         {this.renderAuthButton()}
//       </div>
//     )
//   }
// }

// ELEMENT RENDERING (using variable)
// class App extends Component {
//   state = { isLoggedIn: true }

//   render() {
//     const { isLoggedIn } = this.state
//     let authButton
//     if (isLoggedIn) {
//       authButton = <button>Logout</button>
//     } else {
//       authButton = <button>Login</button>
//     }
//     return (
//       <div className="container">
//         <h1>React JS</h1>
//         {authButton}
//       </div>
//     )
//  }
// }

// TERNARY OPERATOR RENDERING
// class App extends Component {
//     state = { isLoggedIn: true };
//   render() {
//     const { isLoggedIn } = this.state
//     return (
//       <div className="container">
//         <h1>React JS</h1>
//         {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
//       </div>
//     );
//   }
// }

// class App extends Component {
//   state = { isLoggedIn: true };
//   render() {
//     const { isLoggedIn } = this.state;
//     return (
//       <div className="container">
//         <h1>React JS</h1>
//         {isLoggedIn && <button>Logout</button>}
//         {!isLoggedIn && <button>Login</button>}
//       </div>
//     );
//   }
// }

export default App;
