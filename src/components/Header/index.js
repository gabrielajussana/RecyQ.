import React from 'react';
import { Container, MenuList, Logo } from './style';
import { ButtonComponent } from '../Button';

export const TheHeader = () => {
  return (
    <Container>
        <Logo>
            RecyQ.
        </Logo>
        <MenuList>
            <a>Home</a>
            <a>Sobre nós</a>
            <a>Produtos Reciclavéis</a>
        </MenuList>
        <ButtonComponent name="Entrar"/>
    </Container>
  );
};