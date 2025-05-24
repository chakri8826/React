import "./index.css";
import FaqItem from "../FaqItem";
import { Component } from "react";
class Faqs extends Component {
  state = {
    activeFaqs: {},
  };
  toggleAnswer = (id) => {
    this.setState(prevState=>({
      activeFaqs:{
        ...prevState.activeFaqs,
        [id]:!prevState.activeFaqs[id],
      }
    }))
  };
  render() {
    const { faqsList } = this.props;
    const {activeFaqs} = this.state;
    console.log(activeFaqs)
    return (  
      <div className="faqs-bg">
        <div className="faqs-container">
          <h1 className="faqs-heading">FAQs</h1>
          <ul className="faqs-list">
            {faqsList.map((faq) => (
              <FaqItem
                key={faq.id}
                faqDetails={faq}
                isOpen = {activeFaqs[faq.id]||false}
                toggleAnswer={this.toggleAnswer}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Faqs;