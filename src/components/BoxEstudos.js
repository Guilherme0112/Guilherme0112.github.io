import style from "@/styles/Home.module.css";

export default function BoxEstudos({curso, plataforma, status}) {
    return(
        <div className={style.caixa_projeto}>
            <div style={{border: "2px solid  white", borderRadius: "30px", padding: "20px"}}>
                <h1>{plataforma}</h1>
                <h2>{curso}</h2>
                <p>{status}</p>
            </div>
        </div>
    );
}