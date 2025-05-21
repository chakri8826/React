import "./index.css";

const EmojiCard = (props) => {
  const {emojiDetails,onClickEmoji } = props;
  const {id, emojiName, emojiUrl} = emojiDetails

  const handleClick = () => {
    onClickEmoji(id); 
  };

  return (
    <li className="emoji-card" onClick={handleClick}>
      <img src={emojiUrl} alt={emojiName} className="emoji-image" />
    </li>
  );
};

export default EmojiCard;
