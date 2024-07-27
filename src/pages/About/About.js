// CSS
import styles from './About.module.css'
import React from 'react'

const About = () => {
    return (
        <div className={styles.texts}>
            <h2>Sobre o Social Family</h2>
            <p>
                O Social Family é um blog dedicado a todos que têm paixão por genealogia e desejam explorar e compartilhar suas histórias de família. Inspirado pela minha experiência como jovem missionário de serviço no Templo e História da Família da Igreja de Jesus Cristo dos Santos dos Últimos Dias, percebi a necessidade de um espaço onde as pessoas possam contar suas conquistas e desafios ao montar suas árvores genealógicas.
            </p>

            <h2>Nosso objetivo é</h2>

            <p>Oferecer uma plataforma completa para entusiastas da genealogia, com três principais áreas de foco:<br/><br/>

                <b>Histórias e Testemunhos:</b> Um espaço para que você possa compartilhar suas experiências e conquistas na busca por suas raízes familiares. Cada história é uma inspiração para outros que estão na mesma jornada.<br/><br/>

                <b>Tutoriais em Vídeo:</b> Uma série de vídeos educativos que ensinam passo a passo como realizar pesquisas genealógicas, desde a coleta de documentos até a utilização de ferramentas online e técnicas de investigação.<br/><br/>

                <b>Perguntas e Ajuda:</b> Uma comunidade interativa onde você pode fazer perguntas, trocar ideias e pedir ajuda para resolver os desafios que encontra ao montar sua árvore genealógica.<br/><br/>

                Acreditamos que cada família tem uma história única que merece ser contada. Junte-se a nós no Social Family e descubra o prazer de desvendar suas origens!</p>


        </div>
    )
}

export default About