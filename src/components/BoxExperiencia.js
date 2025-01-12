import style from "@/styles/Home.module.css";

export default function BoxExperiencia({titulo, descricao}) {
    return (
        <div className={style.caixa_projeto}>
            <div style={{border: "2px solid  white", borderRadius: "30px", padding: "20px"}}>
                <h1>{titulo}</h1>
                <p>{descricao}</p>
            </div>
        </div>
    );
}