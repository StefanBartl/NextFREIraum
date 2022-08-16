import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Wall from '../components/Wall';

export default function Home() {

  const DEVlogo = '/graphics/logos/dev_logo.png';
  const staticProfileImage = '/graphics/images/sonnenbild.jpg';
  
  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='author' content='Stefan Bartl (WKDSteve)' />
        <meta name='description' content='Web-Development Project || The Odin Project || FREI:raum by Stefan Bartl (WKDSteve).' />
        <meta name='keywords' content='Web, Dev, TOP, Project, Facebook, Webpage, HTML, CSS, Sass, Javascript, Node, React' />
        <link rel='icon' sizes='16x16' href='/graphics/logos/dev_logo.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/graphics/logos/dev_logo.png' />
        <title>NEXT FREI:raum (Alpha)</title>
      </Head>

      <Navbar devLogo={DEVlogo} profileImage={staticProfileImage} />  

      <main className={styles.main}>
        <LeftSidebar />
        <Wall profileImage={staticProfileImage}/>
        <RightSidebar />
      </main>

      <footer className={styles.footer}>
      </footer>

    </div>
  )
};
