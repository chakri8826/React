import {Component} from "react";
import './index.css'
const countryAndCapitalsList = [
  {
    id: "NEW_DELHI",
    capitalDisplayText: "New Delhi",
    country: "India",
  },
  {
    id: "LONDON",
    capitalDisplayText: "London",
    country: "United Kingdom",
  },
  {
    id: "PARIS",
    capitalDisplayText: "Paris",
    country: "France",
  },
  {
    id: "KATHMANDU",
    capitalDisplayText: "Kathmandu",
    country: "Nepal",
  },
  {
    id: "HELSINKI",
    capitalDisplayText: "Helsinki",
    country: "Finland",
  },
];

// class Capitals extends Component {
//     state = {
//         activeCountryId: countryAndCapitalsList[0].id,
//     };
    
//     onClickCountry = (id) => {
//         this.setState({activeCountryId: id});
//     };
    
//     render() {
//         const {activeCountryId} = this.state;
//         const activeCountryDetails = countryAndCapitalsList.find(
//         (country) => country.id === activeCountryId
//         );
    
//         return (
//         <div className="app-container">
//             <h1 className="heading">Countries And Capitals</h1>
//             <ul className="countries-list">
//             {countryAndCapitalsList.map((country) => (
//                 <li key={country.id}>
//                 <button
//                     type="button"
//                     className={`country-button ${
//                     activeCountryId === country.id ? "active" : ""
//                     }`}
//                     onClick={() => this.onClickCountry(country.id)}
//                 >
//                     {country.country}
//                 </button>
//                 </li>
//             ))}
//             </ul>
//             <div className="capital-display-container">
//             <h1 className="capital-display-text">
//                 {activeCountryDetails.capitalDisplayText}
//             </h1>
//             </div>
//         </div>
//         );
//     }
// }

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  };
  onChangeCapital = (event) => {
    this.setState({ activeCapitalId: event.target.value });
  };
  getCapital = (id)=>{
    const activeCountryAndCapital = countryAndCapitalsList.find(
      (eachCapital) => eachCapital.id === id
    );
    return activeCountryAndCapital;
  } 
  render() {
    const { activeCapitalId } = this.state;
    const capital = this.getCapital(activeCapitalId);
    return (
      <div className="bg">
        <div className="countries">
          <h1>Countries and Capitals</h1>
          <div className="inp">
            <select value={activeCapitalId} onChange={this.onChangeCapital}>
              {countryAndCapitalsList.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.capitalDisplayText}
                </option>
              ))}
            </select> 
            <p>Is the capital of which country?</p>
          </div>
            <h1>{capital.country}</h1>
        </div>
      </div>
    );
  }
}

export default Capitals;   