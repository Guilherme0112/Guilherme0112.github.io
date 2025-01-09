import style from "../styles/Home.module.css";

export default function Button({ children, link }) {
    return(
        <a href={link} className={style.button} target="_black">{children}</a>
    );
}