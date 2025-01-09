import FadeInSection from "@/components/FadeInSection";
import Header from "@/components/Header";
import style from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <FadeInSection>
        <Header></Header>
        <section className={style.container}>
          <div className={style.caixa_foto}>
            <img src="/images/foto_perfil.jpg" alt="Foto de perfil" className={style.foto} />
          </div>
          <div className={style.caixa_apresentacao}>
            <p>Olá, eu sou Guilherme, sou apaixonado em tecnologia e em desenvolvimento Back-End, tenho alguns projetos onde  já utilizei o PHP e seu framework Laravel, também o NodeJS com o ExpressJS
              e atualmente tenho meu foco em Java com Spring, também tenho conhecimento em banco de dados MySQL. Já no Front-End além do HTML, CSS e JavaScript, também tenho conhecimento em NextJS e mais
              algumas tecnologias como JQuery, AJAX e Bootstrap.
            </p>
          </div>
        </section>
        <section>

        </section>

      </FadeInSection>
    </div>
  );
}
