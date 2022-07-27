import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSumit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", form);
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSumit}>
      <h1>Log in to your account</h1>
      {/* <label>Email:</label> */}
      <input
      placeholder="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      {/* <label>Senha:</label> */}
      <input
      placeholder="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <button type="submit">Sig in</button>
    </form>
  );
}
