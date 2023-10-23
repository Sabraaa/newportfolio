import "./ProgressBar.css";

const ProgressBar = ({title}) => {
  return (
    <div className="progressBar">
      <h3> {title}</h3>
      <div className="progressBar__gradient"></div>
    </div>
  );
};

export default ProgressBar;
