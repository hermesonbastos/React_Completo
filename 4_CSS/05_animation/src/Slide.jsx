import React from "react";
import styles from "./Slide.module.css";

const Slide = ({ slides }) => {
  const [ativo, setAtivo] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * ativo));
  }, [ativo])

  function slidePrev() {
    if(ativo > 0) setAtivo(ativo - 1);
  }

  function slideNext() {
    if(ativo < slides.length - 1) setAtivo(ativo + 1);
  }

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div className={styles.item} key={slide.id}>
            {slide.text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
    </section>
  );
};

export default Slide;
