import React from 'react';
import styles from './Header.module.css';
import { NavLink, Link } from 'react-router-dom';
import  logo from '../Assets/logo.png';
import { UserContext } from '../UserContext';

const Header = () => {

  const {data} = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Recyq - Home">
          <img src={logo} />
          <span>recyq</span>
        </Link>
        <ul className={`${styles.menuList}`}>
          <li><NavLink to="/" end>Ínicio</NavLink></li>
          <li><NavLink to="/feed">Feed</NavLink></li>
          <li><NavLink to="/sobre">Sobre Nós</NavLink></li>
        </ul>
        { data ? 
        ( 
            <Link className={styles.login} to="/conta">
            {data.nome}
           </Link> 
        ) : (
            <Link className={styles.login} to="/login">
            Login / Criar
            </Link> 
        )}
      </nav>
    </header>
  );
};

export default Header;
