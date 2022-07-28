import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { api } from "../../api/api";
// import styles from "./styles.module.css";

export function CreateComment() {
    const [form, setForm] = useState({
    comment: "",
    });

    const navigate = useNavigate()

    const [pin, setPin] = useState({});
    const { id } = useParams();

    function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
    e.preventDefault();
    try {
        const response = await api.post(`/comment/${id}/create-comment`, form);
        navigate(`/my-pins/${id}`)
        console.log(response.data);
    } catch (err) {
        console.error(err);
    }
    }
    console.log(form);

    return (
    <>
        <div>        
        <p>{pin.title}</p>
        </div>

        <form onSubmit={handleSubmit}>
        <label htmlFor="formComment">Comment:</label>
        <input
            id="formComment"
            name="comment"
            type="text"
            value={form.comment}
            onChange={handleChange}
        />
        
            <button type="submit">Create a comment</button>
       
        </form>
    </>
    );
}