import './index.css'
const NavBar = ({score, topScore}) => {
  return (
    <div className="nav-main">
      <div className="firstOne">
        <img src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" />
        <p>Emoji Game</p>
      </div>
      <div className="again">
        <p>Score: {score} </p>
        <p>TopScore: {topScore}</p>
      </div>
    </div>
  );
};
export default NavBar 