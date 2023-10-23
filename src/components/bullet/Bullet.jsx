import "./Bullet.css"
const Bullet = ({text}) => {
  return (
    <div className="bullet">
        <div className="bullet-gradient"></div>
        <h4> {text}</h4>
    </div>
  )
}

export default Bullet