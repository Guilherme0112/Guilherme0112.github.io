import Button from "@/components/Button";
import FadeInSection from "@/components/FadeInSection";
import Header from "@/components/Header";
import style from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <FadeInSection>
        <Header></Header>
        <section className={style.container} id="sobre">
          <div className={style.caixa_foto}>
            <img src="/images/foto_perfil.jpg" alt="Foto de perfil" className={style.foto} />
          </div>
          <div className={style.caixa}>
            <p>Olá, eu sou Guilherme, sou apaixonado em tecnologia e em desenvolvimento Back-End, tenho alguns projetos onde  já utilizei o PHP e seu framework Laravel, também o NodeJS com o ExpressJS
              e atualmente tenho meu foco em Java com Spring, também tenho conhecimento em banco de dados MySQL. Já no Front-End além do HTML, CSS e JavaScript, também tenho conhecimento em NextJS e mais
              algumas tecnologias como JQuery, AJAX e Bootstrap.
            </p>
          </div>
        </section>


        <section style={{display: "flex" ,justifyContent: "center", flexWrap: "wrap" }}  id="projetos">
          <h1 className={style.titulo}>Projetos</h1>
          <div>
            <div className={style.caixa_projeto}>
              <h2>AdMon</h2>
              <p>Um site que te ajuda a organizar sua vida financeira, você se cadastra e adiciona as suas contas e ganhos, ele te trás o resumo mensal</p>
              <Button link={"https://github.com/Guilherme0112/AdMon"}>Código</Button>
            </div>
          </div>
        </section>

      </FadeInSection>
    </div>
  );
}
