import styles from '../styles/Home.module.scss';

export default function RightSidebar(props){

    return (
        <section className={`${styles.rightSidebar}`}>
            
            <div className={`${styles.rightSidebar_ads}`}>
                <h2>Gesponsert</h2>
                    <div className={`${styles.rightSidebar_ad1}`}>
                        <a href='#'>
                            <div>AD 1 & Text</div>
                        </a>  
                    </div>
                    <div className={`${styles.rightSidebar_ad2}`}>
                        <a href='#'>
                            <div>AD 2 & Text</div>
                        </a>  
                    </div>
            </div>

            <div className={`${styles.rightSidebar_friendrequests}`}>
                <h2>Freundschaftsanfragen</h2>
                <div>
                    Offene Anfrage, Bestätigen, Entfernen, Popup... 
                </div>
            </div>

            <div className={`${styles.rightSidebar_birthdays}`}>
                <h2>Geburtstage</h2>
                <div>
                    Geburtstagsinfos + Popup
                </div>
            </div>

            <div className={`${styles.rightSidebar_contactlist}`}>
                <h2>Kontakte</h2>
                <div>
                    Kontaktliste + Popup
                </div>
            </div>

        </section>
    )
};