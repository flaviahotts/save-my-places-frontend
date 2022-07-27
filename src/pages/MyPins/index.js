import { useEffect, useState } from "react";
import { api } from "../../api/api";
// import { Card } from "../../components/Cards";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function MyPins() {
    const [pin, setPin] = useState({
        title:"",
        description:"",
        rating: 0,
        comment: [{comment:""}]
    });
    const { id } = useParams();

    useEffect(() => {
    async function fetchPost() {
        try {
        const response = await api.get(`/pin/${id}`);
        console.log(response.data);
        setPin(response.data);
        } catch (err) {
        console.error(err);
        }
    }
    fetchPost();
    }, [id]);
    console.log(pin);
    return (
    <>
        <p>{pin.title}</p>
        <p>{pin.description}</p>
        <p>{pin.rating}</p>

        <p>Comments</p>
        {pin.comment.map((currentComment)=> {
            return (
                <div>
                    {currentComment.comment}
                </div>
            )
        }
        )

        }
       

        <Link to={`/edit/:pinId${id}`}>
        <button>Edit</button>
        </Link>
        <Link to={`/create-comment/${id}`}>
        <button>Add a comment</button>
        </Link>
    </>
    );
}