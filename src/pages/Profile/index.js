import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";

export function Profile() {
const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUser() {
      const response = await api.get("/user/profile");
      setUser(response.data);
    }

    fetchUser();
  }, []);

  // const { loggedInUser } = useContext(AuthContext);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  //funcao para mostrar os pins
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
      <h1>Hello, {user.name}!</h1>
      <p>{user.email}</p>
            <Link to="/update-profile"><button>Edit profile</button></Link>
            <Link to="/create-pin"><button>Create pin</button></Link>
            <button onClick={handleLogOut}>Sign out</button>
      

{/* Mostrar os pins feitos aqui */}
    <div>{pins.map((currentPins) => {
      return (
          <div key={`${currentPins._id}$`}>
            <p> {currentPins.title}</p>
            <Link to={`/my-pins/${currentPins._id}`}>
          <button>Details</button>
        </Link>
          </div>
          )})}
    </div>
      </>
  )}
      
        




