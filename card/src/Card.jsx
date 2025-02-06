
import Button from "./Button";
import profilepic from "./assets/profile.jpg";
function Card(props) {
  return (
    <div className="card">
      <img src={profilepic} alt="Profile Picture"></img>
      <h2 className="title">{props.title}</h2>
      <p className="text">{props.desc}.</p>
      <Button view="Views"/>
    </div>
  );
}

export default Card;
