import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { api } from "../../api/api";

export function EditPin() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title:"",
        description:"",
        rating: 0,
        // comment: [{comment:""}] >>>> duvida aqui!!! <<<<<

    });


    useEffect(() => {
        async function fetchPost() {
        const response = await api.get(`/pin/my-pins/${id}`);
        console.log(response.data);
        setForm({ ...response.data });
        }
        fetchPost();
    }, [id]);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        }

        async function handleSubmit(e) {
            e.preventDefault();
            try {
                const response = await api.patch(`/pin/edit/${id}`, form);
                navigate(`/my-pins/${id}`)
            } catch (err) {
                console.error(err);
            }
            }
            console.log(form);

        async function handleDelete() {
        try {
            await api.delete(`/pin/delete/${id}`);
    
            navigate("/my-pins");
        } catch (err) {
            console.error(err);
        }
        }

        return (
        <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="formTitle">Title:</label>
        <input
            id="formTitle"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
        ></input>
        <label htmlFor="formDescription">Description:</label>
        <input
            id="formDescription"
            name="description"
            type="text"
            value={form.description}
            onChange={handleChange}
        />
        <label htmlFor="formRating">Rating:</label>
        <select
            id="formRating"
            name="rating"
            type="text"
            value={form.rating}
            onChange={handleChange}
        >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>

        <button type="submit">Save</button>
        <Link to="/my-pins">
            <button onClick={handleDelete}>Delete</button>
        </Link>
        </form>
    </>
    );
}