import styles from '../styles/Home.module.scss';

export default function LeftSidebar (props) {

    return (
        <>
            <section className={`${styles.leftSidebar}`}>

                <div className={`${styles.leftSidebarFirstSection}`}>
                    <h2>{props.hm}</h2>
                    <a href='#'>Profilname</a>
                    <a href='#'>Freunde</a>
                    <a href='#'>Gruppen</a>
                    <a href='#'>Marketplace</a>
                    <a href='#'>Play</a>
                    <a href='#'>Erinnerungen</a>
                    <a href='#'>Messenger</a>
                    <a href='#'>Veranstaltungen</a>
                </div>

                <div className={`${styles.leftSidebarSecondSection}`}>
                    <h2>Deine Shortcuts</h2>
                    <a href='#'>Favgruppe</a>
                    <a href='#'>Favprofil</a>
                </div>

            </section>
        </>

    )
};

