import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation.module.css';

const Navigation = () => {
  return (
    <>
      <div className={styles.logoContainer}>
        <Link to="/" >
          <div className={styles.logoDesktop}></div>
          <div className={styles.logoMobil}></div>
        </Link>
      </div>
      <div className={styles.navigation}>
        <ul>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/sketchbook">Sketchbook</Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/chocolatechiphelmet/ "
              target="blank"
            >
              Instagram
            </a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
