import style from "@/styles/Home.module.css";
import ButtonOff from "./ButtonOff";
import Button from "./Button";

export default function BoxProjetos({titulo, descricao, link, tecnologias}) {
    return (
        <div className={style.caixa_projeto}>
            <div style={{border: "2px solid  white", borderRadius: "30px", padding: "10px"}}>
                <h1 style={{ fontSize: "25px"}}>{titulo}</h1>
                <p>{descricao}</p>
                <br />
                <p style={{fontSize: "15px"}}><b>Tecnologias:</b> {tecnologias}</p>
                <Button link={link}>Código</Button>
                <ButtonOff>Deploy</ButtonOff>
            </div>
        </div>
    );  
}