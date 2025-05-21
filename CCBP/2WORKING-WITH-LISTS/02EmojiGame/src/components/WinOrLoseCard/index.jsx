import './index.css'

const WinOrLoseCard = (props)=>{
    const { emojisList, clickedEmojisList, resetGame } = props;
    const isWon = clickedEmojisList.length===emojisList.length
    const onClickReset=()=>{
        resetGame()
    }
    return (
      <div className="score-card">
        <div className="result-text">
          <h1>{isWon ? "You Won!" : "You Lost!"}</h1>
          <p>Score: {clickedEmojisList.length}</p>
          <button onClick={onClickReset}>Play Again</button>
        </div>
        <div className="result-image">
          <img
            src={
              isWon
                ? "https://assets.ccbp.in/frontend/react-js/won-game-img.png"
                : "https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            }
            alt={isWon ? "win" : "lose"}
          />
        </div>
      </div>
    );
}

export default WinOrLoseCard 