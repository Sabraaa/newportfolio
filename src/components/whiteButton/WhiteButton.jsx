import "./WhiteButton.css";

const WhiteButton = () => {
  return (
    <div>
      <div className="svg-wrapper">
        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <rect className="shape" height="60" width="100" />
          <div className="text"> Check on github</div>
        </svg>
      </div>
    </div>
  );
};

export default WhiteButton;
