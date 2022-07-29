import { useState } from "react";
// import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function CreatePin() {
    
    const [pin, setPin] = useState({
    title: "",
    description: "",
    rating: "",
    
});

    const navigate = useNavigate();

    function handleChange(e) {
    setPin({ ...pin, [e.target.name]: e.target.value });
    }

    async function handleSumit(e) {
    e.preventDefault();
    try {
        const response = await api.post("/pin/create-pin", pin);
        console.log(response.data);
        
        navigate("/profile");
        } catch (error) {
        console.log(error);
        }
    }

    return (
        <>
    <Link to="/profile"><button>Back</button></Link>
    <form onSubmit={handleSumit}>
        <p>Save a place</p>
        <label htmlFor="formTitle">Title</label>
        <input
        id="formTitle"
        placeholder="Title"
        type="text"
        name="title"
        value={pin.title}
        onChange={handleChange}
        />    
        <label htmlFor="formDescription">Description</label>
        <input
        id="formDescription"
        placeholder="Description"
        type="text"
        name="description"
        value={pin.description}
        onChange={handleChange}
        />
        <label htmlFor="formRating">Rating</label>
        <select
        id="formRating"
        placeholder="Rating"
        type="number"
        name="rating"
        value={pin.rating}
        onChange={handleChange}
        >
        <option value= "0" >0</option>
        <option value= "1">1</option>
        <option value= "2">2</option>
        <option value= "3">3</option>
        <option value= "4">4</option>
        <option value= "5">5</option>    
        </select>
        
        <button type="submit">Save</button>
    </form>
    </>
    );
}