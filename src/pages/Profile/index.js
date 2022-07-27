import { useEffect, useState, useContext } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";
// import { Card } from "../../components/Cards";


export function Profile() {
  // const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  // useEffect(() => {
  //   async function fetchUser() {
  //     const response = await api.get("/user/profile");
  //     setUser(response.data);
  //   }

  //   fetchUser();
  // }, []);

  const { loggedInUser } = useContext(AuthContext);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  const [pins, setPins] = useState([{title:""}]);
  
    useEffect(() => {
      async function fetchPins() {
        const response = await api.get("/pin/my-pins");
      
        setPins([...response.data]);
      }
      fetchPins();
    }, []);
  
    console.log(pins);

  return (
    <>
      <h1>Hello, {loggedInUser.user.name}!</h1>
      <p>{loggedInUser.user.email}</p>
      <button onClick={handleLogOut}>Sign out</button>
      <Link to="/create-pin">Get Started</Link>
      

    <div>{pins.map((currentPins) => {
      return (
          <div key={currentPins._id}>
            <p> {currentPins.title}</p>
            <Link to={`/my-pins/${currentPins._id}`}>
          <button>Details</button>
        </Link>
            {/* <Card
              user={currentPins.user}
              title={currentPins.title}
              description={currentPins.description}
              rating={currentPins.rating}
              longitude={currentPins.longitude}
              latitude={currentPins.latitude}
              id={currentPins._id}
            /> */}
          </div>
          )})}
    </div>
      </>
  )}
      
        




