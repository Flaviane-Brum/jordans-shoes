import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.promotion}>
        Ganhe R$ 10,00 de desconto no frete
      </span>
      <h1 className={styles.titleHeader}>JordanShoes</h1>
    </header>
  );
};

export default Header;
