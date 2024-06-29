import * as React from "react";
import styles from "./app.module.css";
import { ReactComponent as StarIcon } from "../../public/images/star.svg";
import PhoneIcon from "../../public/images/phone.png";
import EmailIcon from "../../public/images/e-mail.png";
import AlienImage from "../../public/images/alien.png";

export default function App() {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={AlienImage} alt="foto perfil" />
      <h1>ET Bilu</h1>
      <StarIcon className={styles.favorite} />
      <div className={styles.info}>
        <img src={PhoneIcon} alt="phone icon" />
        <p>(81) 98888 8888</p>
      </div>
      <div className={styles.info}>
        <img src={EmailIcon} alt="e-mail icon" />
        <p>etbilu@et.com</p>
      </div>
    </div>
  );
}
