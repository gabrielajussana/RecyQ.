import React from 'react';
import { Container, Logo} from './style';
import { Link } from 'react-router-dom'
import instagram from '../../assets/mdi_instagram.svg'

export const TheFooter = () => {
  return (
    <Container>
        <p>Siga-nos no Instagram</p>
        <Link to="https://instagram.com/recy.q?igshid=ZDdkNTZiNTM=">
            <img src={instagram} alt="instagram recyq" />
        </Link>
    </Container>
  );
};