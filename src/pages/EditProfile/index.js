
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

export function EditProfile() {
    const navigate = useNavigate();
    const { loggedInUser } = useContext(AuthContext);
    console.log(loggedInUser);
    // const { _id } = useParams;

    const [form, setForm] = useState({
    name: "",
    email:"",
    img:"",    
    });
    
    useEffect(() => {
        async function fetchUser() {
            try {
            const response = await api.get("/user/profile");
            setForm({ ...response.data });
            } catch (err) {
            console.error(err);
            }
        }
        fetchUser();
        }, []);

    const [img, setImg] = useState("");

    function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
    }

    function handleImage(e) {
    setImg(e.target.files[0]);
    }

    async function handleUpload() {
    try {
        const uploadData = new FormData();
        uploadData.append("picture", img);

        const response = await api.post("/upload-image", uploadData);

    return response.data.url;
    } catch (error) {
        console.log(error);
    }
    }

        async function handleSubmit(e) {
        e.preventDefault();
        try {
        const clone = { ...form };
        delete clone._id;
        const imgURL = await handleUpload();
        await api.patch("/user/update-profile", { ...clone, img: imgURL });
    
        navigate("/profile");
        } catch (err) {
        console.error(err);
        }
} console.log(form);

        async function handleDelete(e) { 
            e.preventDefault()  
        try {
        const response = await api.delete("/user/disable-profile");
        localStorage.removeItem("loggedInUser");
        console.log(response)
    
        
        } catch (err) {
        console.error(err);
    }
    }

    // const { loggedInUser } = useContext(AuthContext);
    // function handleLogOut() {
    // localStorage.removeItem("loggedInUser");
    // navigate("/");
    // }

    return (
    <>
        
        <div>
        <Link to="/profile"><button>Back</button></Link>        
        <header>My profile</header>
        </div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="formName">Name:</label>
        <input
            id="formName"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
        />
        <label htmlFor="formImg">Profile photo:</label>
        <input type="file" id="formImg" onChange={handleImage} />
        <label htmlFor="formEmail">Email</label>
        <input
            id="email"
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
        />
        
        <button type="submit">Save Profile</button>
        <button onClick={(e)=>{
            handleDelete(e)
            navigate("/")
        }}>Delete Profile</button>
        </form>
    </>
    );
}