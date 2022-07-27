// eslint-disable-next-lin
import { useState, useContext } from "react";
// eslint-disable-next-lin
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

export function CreatePin() {
    
    const [pin, setPin] = useState({
    title: "",
    description: "",
    rating: "",
    longitude: "",
    latitude: "",
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
    <form onSubmit={handleSumit}>
        <p>Create your pin</p>
        <label htmlFor="formTitle">Title</label>
        <input
        placeholder="Title"
        type="text"
        name="title"
        value={pin.title}
        onChange={handleChange}
        />    
        <label htmlFor="formDescription">Description</label>
        <input
        placeholder="Description"
        type="text"
        name="description"
        value={pin.description}
        onChange={handleChange}
        />
        <label htmlFor="formRating">Rating</label>
        <select
        placeholder="Rating"
        type="number"
        name="rating"
        value={pin.rating}
        onChange={handleChange}
        >
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>    
        </select>
        <label htmlFor="formLongitude">Longitude</label>
        <input
        placeholder="Longitude"
        type="number"
        name="longitude"
        value={pin.longitude}
        onChange={handleChange}
        />
        <label htmlFor="formLatitude">Latitude</label>
        <input
        placeholder="Latitude"
        type="number"
        name="latitude"
        value={pin.latitude}
        onChange={handleChange}
        />
        <button type="submit">Create</button>
    </form>
    );
}