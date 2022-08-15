import styles from '../styles/Home.module.scss';

export default function Wall(props) {
  return (
    <section className={`${styles.wall}`}>
      <div className={`${styles.newpost}`}>
        <img src={props.profileImage} alt="Profilbild"></img>
        <button type="text" title="Schreib einen Post">
          Was machst du gerade?
        </button>
      </div>

      <div className={`${styles.currentwall}`}>
        <h2>Wall</h2>
      </div>
    </section>
  );
}
