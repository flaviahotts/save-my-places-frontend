import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [img, setImg] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
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
      const imgURL = await handleUpload();
      await api.post("/user/signup", { ...form, img: imgURL });

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      <h1>Create Account with Email</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="formName">Nome:</label> 
      <input
      placeholder="Username"
        id="formName"
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="formImg">Sua foto de perfil:</label>
      <input type="file" id="formImg" onChange={handleImage} /> 

      <label htmlFor="formEmail">E-mail:</label> 
      <input
      placeholder="Email"
        id="formEmail"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="formPassword">Senha:</label> 
      <input
      placeholder="Password"
        id="formPassword"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
      />
      <label htmlFor="formConfirmPassword">Confirmação de senha</label>
      <input
      placeholder="Confirm your password"
        id="formConfirmPassword"
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
      />
      <div>
      <button type="submit">Create an account</button>
      </div>      
    </form>
    </div>
  );
}
