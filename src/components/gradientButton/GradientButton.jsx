import "./GradientButton.css";
const GradientButton = ({ text }) => {
  return (
    <div className="gradientbutton__wrapper">
      <button className="gradient__bg gradientbutton">{text}</button>
    </div>
  );
};

export default GradientButton;
