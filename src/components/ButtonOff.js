import style from "../styles/Home.module.css";

export default function ButtonOff({ children }) {
    return(
        <button className={style.buttonOff} title="Indisponível">{children}</button>
    );
}