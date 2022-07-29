
import React from "react";
import { Link } from "react-router-dom";
import pin5 from "../../assets/images/pin5.png";
import styles from "./styles.module.css";


export function Home() {
  return(
    <>
   <div className={styles.container}>
    
      <div><img src={pin5} alt="pin-img" style={{alignItems: "center", width:"70px"}} />
          <h2>SaveMyPlaces</h2>
        </div>
    <div >
      <p>Keep calm and save your favorites places around the world</p>
    </div>
    <div >
      <p>Already have an account ? <Link to="/login">Log in</Link></p>
      <Link to="/signup">Create an account</Link>
      </div>
    </div>
    </>  
  ) 
}
