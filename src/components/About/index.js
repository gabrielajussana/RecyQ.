import React from 'react';
import { Main, Title, Text, Column } from './style';
import about from '../../assets/about.jpg'

export const About = () => {
  return (
    <div>
    <Main>
        <Column>
        <img src={about} width={700} />
        </Column>
        <Column>
            <Title>Sobre Nós</Title>
            <Text>
            Bem-vindo(a) ao nosso projeto de sustentabilidade e reciclagem!
            Nós somos um grupo de pessoas apaixonadas por encontrar soluções 
            inovadoras para preservar o meio ambiente e criar um futuro mais sustentável para todos.
            </Text>
            <Text>
                Acreditamos que a reciclagem é um dos pilares fundamentais da sustentabilidade e,
                por isso, dedicamos nossos esforços em desenvolver maneiras eficientes e criativas de reciclar
                materiais que antes eram descartados como lixo. Nós acreditamos que é possível 
                transformar resíduos em recursos valiosos e, dessa forma, contribuir para um mundo mais justo e equilibrado.
            </Text>
            <Text>
                Nosso projeto é baseado em três pilares: educação, reciclagem e inovação. 
                Através de iniciativas educacionais, buscamos conscientizar as pessoas sobre a 
                importância da reciclagem e de hábitos sustentáveis no dia a dia. Nosso objetivo é 
                disseminar conhecimento e promover mudanças de comportamento que tenham um impacto 
                positivo no meio ambiente.
            </Text>
            <Text>
                Nossa equipe é composta por pessoas criativas e comprometidas 
                em encontrar soluções inovadoras para a sustentabilidade. Acreditamos que a 
                tecnologia pode ser uma ferramenta poderosa para a criação de soluções sustentáveis e, por isso,
                investimos em pesquisa e desenvolvimento para criar novas formas de reciclar materiais e produzir produtos sustentáveis.
            </Text>
            <Text>
                Nosso objetivo é criar um mundo melhor e mais sustentável para todos. 
                Junte-se a nós nessa jornada rumo à um futuro mais equilibrado e justo para todos!
            </Text>
        </Column>
    </Main>
    </div>
  );
};