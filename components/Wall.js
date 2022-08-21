import styles from '../styles/Home.module.scss';

export default function Wall  (props) {

function TestFunktion (){

};

  return (
    <section className={`${styles.wall}`}>
      <div className={`${styles.newpost}`}>
        <img src={props.profileImage} alt="Profilbild"></img>
        <button title="Schreib einen Post">
          Was machst du gerade?
        </button>
      </div>

      <div className={`${styles.currentwall}`}>
        <h2>Wall</h2>
        <h2>MONGO DB TestFunktion</h2>
        <button onClick={TestFunktion}>OK TEST</button>
      </div>
    </section>
  );
}
