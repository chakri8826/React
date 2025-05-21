import "./index.css";

const ContactItem = (props) => {
  const { contactDetails, onUpdateFav } = props;
  const { name, mobileNo, isFavorite,id } = contactDetails;

  const starImgUrl = isFavorite
    ? "https://assets.ccbp.in/frontend/react-js/star-filled-img.png"
    : "https://assets.ccbp.in/frontend/react-js/star-outline-img.png";

  const update = ()=>{
    onUpdateFav(id)
  }
  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{mobileNo}</p>
        <button type="button" onClick={update} className="favorite-icon-container">
          <img src={starImgUrl} className="favorite-icon" alt="star" />
        </button>
      </div>
    </li>
  );
};
export default ContactItem;