import React from "react";
import { Link } from "react-router-dom";
import globe from "../../assets/images/globe.PNG";
import styles from "./styles.module.css";

export function Home() {
  return(
    <>
    <div className={styles.container}>
      <div className={styles.header}>
      <img src={globe} alt="globe-img" />
          <p>SaveMyPlaces</p>
        </div>
    <div className={styles.text}>
      <p>Keep calm and save your favorites places around the world</p>
    </div>
    <div className={styles.login}>
      <p>Already have an account ? <Link to="/login">Log in</Link></p>
    </div>
    </div>
    <Link to="/signup">
    <button className={styles.signup}>Sign up with email</button>
    </Link>
    </>
    
  ) 
}
