import Button from "@/components/Button";
import ButtonOff from "@/components/ButtonOff";
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
              <h1>AdMon</h1>
              <p>Um site que te ajuda a organizar sua vida financeira, você se cadastra e adiciona as suas contas e ganhos, 
                ele te trás o resumo mensal em um dashboard dinâmico. junto com o Google Charts ele adiciona diversos gráficos que ajudam
                no entendimento de suas finanças, e assim lhe ajudando a ter controle  dos gastos.</p>
              <Button link={"https://github.com/Guilherme0112/AdMon"}>Código</Button>
              <ButtonOff>Deploy</ButtonOff>
            </div>
          </div>
        </section>


        <section style={{display: "flex" ,justifyContent: "center", flexWrap: "wrap" }}  id="experiencia">
          <h1 className={style.titulo}>Experiências</h1>
        </section>

        <section>
          <h1 className={style.titulo}>Estudos</h1>
        </section>
      </FadeInSection>
    </div>
  );
}
