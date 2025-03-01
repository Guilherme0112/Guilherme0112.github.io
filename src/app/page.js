import BoxEstudos from "@/components/BoxEstudos";
import BoxExperiencia from "@/components/BoxExperiencia";
import BoxProjetos from "@/components/BoxProjetos";
import FadeInSection from "@/components/FadeInSection";
import Header from "@/components/Header";
import style from "@/styles/Home.module.css";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=.5" />
      </head>
      <div style={{ width: "100%" }}>
        <FadeInSection>
          <Header></Header>
          <section className={style.container} id="sobre">
            <div className={style.caixa_foto}>
              <div style={{ border: "2px solid white", borderRadius: "50%", padding: "15px" }}>
                <Image
                  src="perfil.jpg"
                  alt="Foto de Guilherme"
                  width={300}
                  height={300}
                  className={style.foto}
                ></Image>
              </div>
            </div>
            <div className={style.caixa}>
              <div style={{ border: "2px solid white", borderRadius: "30px", padding: "20px" }}>
                <h1 className={style.titulo}>Desenvolvedor Back-End</h1>
                <p>Olá, eu sou Guilherme, sou apaixonado em tecnologia e em desenvolvimento Back-End, adoro criar projetos para praticar minhas habilidades, tenho alguns projetos onde  já utilizei o PHP e seu framework Laravel, também o NodeJS com o ExpressJS
                  e atualmente tenho meu foco em Java com Spring, também tenho conhecimento em banco de dados MySQL. Já no Front-End além do HTML, CSS e JavaScript, também tenho conhecimento em NextJS e mais
                  algumas tecnologias como JQuery, AJAX e Bootstrap.
                </p>
              </div>
            </div>
          </section>


          <section style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} id="projetos">
            <h1 className={style.titulo}>Projetos</h1>
            <div>
              <BoxProjetos
                titulo="Admon"
                descricao="O AdMon é um site de administração financeira onde você pode cadastrar sua receita e seus gastos, e ele te mostra um resumo de como está sua situação financeira. Tem diversas funcionalidades como: cadastro de receitas e gastos, gráficos de desempenho financeiro, entre outros."
                link="https://github.com/Guilherme0112/AdMon"
                tecnologias="HTML, CSS, JavaScript, AJAX, Java, Spring e MySQL"
                >
              </BoxProjetos>
            </div>


            <div>
              <BoxProjetos
                titulo="FutOne"
                descricao="O FutOne é um site de notícias onde abrange mais o mundo dos jogos, usando o AJAX foi possível criar a rolagem infinita, onde o usuário pode ver as notícias somente ao rolar o scroll. Também tem um sistema de login básico com verificação por e-mail."
                link="https://github.com/Guilherme0112/FutOne"
                tecnologias="HTML, CSS, JavaScript, AJAX, NodeJS, ExpressJS e MySQL">
              </BoxProjetos>
            </div>


            <div>
              <BoxProjetos
                titulo="Curriculados"
                descricao="O Curriculados é um site onde o usuário pode criar seu currículo de forma simples e rápida. Existem diversos modelos onde o usuário respondendo um questionário pode colocar os dados no modelo."
                link="https://github.com/Guilherme0112/Curriculados"
                tecnologias="HTML, CSS, JavaScript, PHP, Laravel e MySQL">
              </BoxProjetos>
            </div>


            <div>
              <BoxProjetos
                titulo="VidTube"
                descricao="O VidTube é um site de vídeos onde o usuário pode fazer upload de seus vídeos, e também pode assistir vídeos de outros usuários. O site tem um sistema de login e cadastro, e também um sistema de like e dislike nos vídeos juntamente com um sistema de perfis e comentários."
                link="https://github.com/Guilherme0112/VidTube"
                tecnologias="HTML, CSS, JavaScript, AJAX, JQuery, PHP e MySQL">
              </BoxProjetos>
            </div>


            <div>
              <BoxProjetos
                titulo="DashFreela"
                descricao="O DeshFreela é um simples site onde o objetivo é lhe ajudar a gerenciar serviços de freelancer, ele lhe diz quais são os serviços que você tem que fazer, quais estão em andamento, quais já foram feitos e quais estão atrasados. Ele também te diz com 2 dias de antecedência quais estão perto de vencer."
                link="https://github.com/Guilherme0112/DashFreela"
                tecnologias="HTML, CSS, JavaScript, PHP (POO) e MySQL">

              </BoxProjetos>
            </div>


            <div>
              <BoxProjetos
                titulo="Verval"
                descricao="O Verval é um site para gerenciar validade de produtos. É um site moderno e simples de usar com funcionalidade que ajudam as pequenas, médias e grandes empresas a ter controle do estoque."
                link="https://github.com/Guilherme0112/Verval"
                tecnologias="NextJS, Java, Spring e MySQL">
              </BoxProjetos>
            </div>

            <div>
              <BoxProjetos
                titulo="ComPrei"
                descricao="O ComPrei é uma loja onde uma etidade pode cadastrar produtos para vender, é como se fosse uma loja onine que pertence a alguma fanquia. Os clientes podem se cadastrar e fazer seus pedidos!"
                link="https://github.com/Guilherme0112/ComPrei"
                tecnologias="HTML, CSS, JS, Java, Spring e MySQL">
              </BoxProjetos>
            </div>
          </section>


          <section style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} id="experiencia">
            <h1 className={style.titulo}>Experiências</h1>
            <div>
              <BoxExperiencia
                titulo="-"
                descricao="Não tenho experiência profissional, mas desenvolvi projetos que pessoais que me ajudaram a aprender mais sobre programação e desenvolvimento web."
              ></BoxExperiencia>
            </div>
          </section>

          <section style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} id="estudos">
            <h1 className={style.titulo}>Estudos</h1>
            <div>
              <BoxEstudos
                plataforma="UNIPÊ"
                curso="Sistemas para Internet"
                status="01/2024 - 12/2025"
              ></BoxEstudos>
            </div>
            <div>
              <BoxEstudos
                plataforma="Curso em Vídeo"
                curso="PHP"
                status="Concluído"
              ></BoxEstudos>
            </div>
            <div>
              <BoxEstudos
                plataforma="DevMedia"
                curso="API - Application Programming Interface"
                status="Concluído"
              ></BoxEstudos>
            </div>
            <div>
              <BoxEstudos
                plataforma="DevMedia"
                curso="POO com PHP"
                status="Concluído"
              ></BoxEstudos>
            </div>
          </section>
        </FadeInSection>
      </div>
    </>
  );
}
