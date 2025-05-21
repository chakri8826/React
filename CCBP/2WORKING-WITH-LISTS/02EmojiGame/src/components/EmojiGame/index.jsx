/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/
import { Component } from "react";
import NavBar from "../NavBar";
import EmojiCard from "../EmojiCard";
import WinOrLoseCard from "../WinOrLoseCard";

import "./index.css";

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    topScore: 0,
    isGameInProgress: true,
  };

  onClickEmoji = (id) => {
    const { clickedEmojisList } = this.state;
    const { emojisList } = this.props;
    if (clickedEmojisList.includes(id)) {
      this.finishGameAndSetTopScore(clickedEmojisList.length);
    } else {
      if (clickedEmojisList.length == emojisList.length - 1) {
        this.finishGameAndSetTopScore(emojisList.length);
      }
      this.setState((prevState) => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }));
    }
  };

  finishGameAndSetTopScore = (score) => {
    const { topScore } = this.state;
    if (score > topScore) {
      this.setState({ topScore: score });
    }
    this.setState({ isGameInProgress: false });
  };

  resetGame = () => {
    this.setState({
      clickedEmojisList: [],
      isGameInProgress: true,
    });
  };

  shuffleEmojis = (emojisList) => {
    return [...emojisList].sort(() => Math.random() - 0.5);
  };

  render() {
    const { isGameInProgress, clickedEmojisList, topScore, score } = this.state;
    const { emojisList } = this.props;
    const shuffledList = this.shuffleEmojis(emojisList);
    return (
      <div className="bg">
        <NavBar score={clickedEmojisList.length} topScore={topScore} />
        {isGameInProgress ? (
          <ul className="uli">
            <div className="inner">
              {shuffledList.map((emoji) => (
                <EmojiCard
                  key={emoji.id}
                  emojiDetails={emoji}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </div>
          </ul>
        ) : (
          <WinOrLoseCard
            emojisList={this.props.emojisList}
            clickedEmojisList={clickedEmojisList}
            resetGame={this.resetGame}
          />
        )}
      </div>
    );
  }
}

export default EmojiGame;
