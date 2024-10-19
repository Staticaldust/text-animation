import "./movingText.css";

const MovingText = () => {
  const text = "זהו טקסט לדוגמה בעברית אשר יזוז כדי לחשוף את חלקו השמאלי ";
  return (
    <div className="text-container">
      <div className="moving-text-wrapper">
        <span className="moving-text">{text.repeat(2)}</span>
      </div>
      <div className="text-blur text-blur-left"></div>
      <div className="text-blur text-blur-right"></div>
    </div>
  );
};

export default MovingText;
