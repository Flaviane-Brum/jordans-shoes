import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "./Parallax.module.css";
const Parallax = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        `O tênis Jordan é fruto de uma velha e forte<br>
         parceria entre a Nike e o jogador Michael Jordan`,
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <section className={styles.parallaxBg} aria-label="Introdução">
      <div className="container">
        <div className={styles.parallaxWrapper}>
          <div className={styles.parallaxInfo} data-aos="fade-down">
            <h2>A melhor loja de Jordan</h2>
            <span ref={el} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
