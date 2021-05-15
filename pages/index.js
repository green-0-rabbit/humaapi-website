import Head from 'next/head';
// eslint-disable-next-line import/no-unresolved
import styles from 'styles/Home.module.css';
// eslint-disable-next-line import/no-unresolved
import Navlink from 'components/elements/Navlink';
// eslint-disable-next-line import/no-unresolved
import Card from 'components/modules/Card';
// eslint-disable-next-line import/no-unresolved
import NavBar from 'components/modules/NavBar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        <Card>
          <Navlink target="_blank">Get started</Navlink>
        </Card>
        <Card>
          <Navlink target="_blank">Get started</Navlink>
        </Card>

        <Navlink css={{ color: 'yellow' }}>Link</Navlink>
        <h1 className={styles.title}>
          Welcome to
          {' '}
          <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
