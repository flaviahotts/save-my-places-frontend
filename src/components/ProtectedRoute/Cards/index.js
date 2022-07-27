import { Link } from "react-router-dom";

export function Card(props) {
  console.log(props);
  return (
    <>
      <div>
        <p>{props.user.name}</p>
        <p>{`Title: ${props.title}`}</p>
        <p>{`Description: ${props.description}`}</p>
        <p>{`Rating: ${props.rating}`}</p>
        <p>{`Longitude: ${props.longitude}`}</p>
        <p>{`Latitude: ${props.latitude}`}</p>
        <Link to={`/my-pins/${props.id}`}>
          <button>My pins</button>
        </Link>
      </div>
    </>
  );
}