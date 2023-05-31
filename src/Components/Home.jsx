import React from 'react';
import Head from './Helper/Head';
import PropTypes  from 'prop-types';
import styles from './Home.module.css'
import landingPage from '../Assets/landing-page.jpg';

const Home = () => {
  return (
    <section className={styles.container}>
      <Head title="Home"/>
      <div className={styles.main}>
          <div className={styles.column}>
            <h1>Contribua para um mundo mais sustentável com nossas soluções de reciclagem.</h1>
            <p>Aqui você encontrará informações e dicas sobre como fazer a sua parte para ajudar a preservar o meio ambiente.
               Acreditamos que cada pequena ação conta e estamos comprometidos em tornar o mundo um lugar melhor. 
              Venha fazer parte desse movimento e junte-se a nós na jornada rumo à sustentabilidade.</p>
          </div>
          <div className={styles.column}>
            <img src={landingPage} alt="" />
          </div>
        </div>
    </section>
  )
};

Home.propTypes = {
  title: PropTypes.string
}

export default Home;
