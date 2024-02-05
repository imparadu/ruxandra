import styles from './backtotopbutton.module.css';

export default function BackToTopButton() {
  function onClick() {
    window.scrollTo(0, 0);
  }
  return (
    <div className={styles.containerButton}>
      <button id={styles.backToTopButton} onClick={onClick}>
        <img alt="backToTopButton" src="/Back_to_top_bl_pencil.svg" />
      </button>
    </div>
  );
}
