import React from 'react';
import { ButtonComponent } from '../../components/Button';
import { Main, Column, Title, Text } from './style';
import image from '../../assets/landing-page.jpg'

export const Home = () => {
  return (
    <div>
        <Main>
          <Column>
            <Title>Contribua para um mundo mais sustentável com nossas soluções de reciclagem.</Title>
            <Text>Aqui você encontrará informações e dicas sobre como fazer a sua parte para ajudar a preservar o meio ambiente.
               Acreditamos que cada pequena ação conta e estamos comprometidos em tornar o mundo um lugar melhor. 
              Venha fazer parte desse movimento e junte-se a nós na jornada rumo à sustentabilidade.</Text>
            <ButtonComponent name="Saber mais" />
          </Column>
          <Column>
            <img src={image} alt="reciclagem" />
          </Column>
        </Main>
    </div>
  );
};