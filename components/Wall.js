import '../sass/home.scss';
import profileIMG from '../images/sonnenbild.jpg';

export default function Wall(props) {
  return (
    <section className={`wall`}>
      <div className={`newpost`}>
        <img src={profileIMG} alt="Profilbild"></img>
        <button type="text" title="Schreib einen Post">
          Was machst du gerade?
        </button>
      </div>

      <div className={`currentwall`}>
        <h2>Wall</h2>
      </div>
    </section>
  );
}
