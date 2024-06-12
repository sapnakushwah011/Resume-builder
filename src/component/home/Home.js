import React from 'react'
import Header from '../header/Header' ;
import Navbar from '../navbar/Navbar';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.conatiner}>
        <Navbar/>
        <Header/>
    </div>
  )
}

export default Home