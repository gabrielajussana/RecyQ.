import React from 'react';
import { Container, MenuList, Logo, MenuLink } from './style';
import { ButtonComponent } from '../Button';

export const TheHeader = () => {
  return (
    <Container>
        <Logo>
            RecyQ.
        </Logo>
        <MenuList>
            <MenuLink>Home</MenuLink>
            <MenuLink>Sobre nós</MenuLink>
            <MenuLink>Produtos Reciclavéis</MenuLink>
        </MenuList>
        <ButtonComponent name="Entrar"/>
    </Container>
  );
};