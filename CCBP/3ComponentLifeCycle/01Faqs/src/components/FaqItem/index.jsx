import "./index.css";

const FaqItem = ({ faqDetails, toggleAnswer,isOpen }) => {
  const { questionText, answerText, id } = faqDetails;
  const onClickUpdate = () => {
    toggleAnswer(id);
  };
  return (
    <li className="faq-item">
      <div className="question-section">
        <h1 className="question-text">{questionText}</h1>
        <button type="button" className="toggle-button" onClick={onClickUpdate}>
          <img
            src={
              isOpen
                ? "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png "
                : "https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
            }
            alt="plus"
            className="icon"
          />
        </button>
      </div>
      {/* This answer should be toggled with functionality */}
      <p className="answer-text"> {isOpen && answerText} </p>
      <hr className="separator" />
    </li>
  );
};
export default FaqItem;