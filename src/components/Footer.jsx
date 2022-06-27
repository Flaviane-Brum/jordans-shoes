import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container  ${styles.footerWrapper}`}>
        <p>
          &copy; 2022 -{" "}
          <a href="https://www.linkedin.com/in/flaviane-brum/" target="_blank">
            Flaviane Brum
          </a>
        </p>

        <p>
          <a
            href="https://www.instagram.com/iuricode/"
            target="_blank"
            className={styles.powered}
          >
            Powered by @iuricode
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
