import Head from 'next/head'
import styles from 'styles/Home.module.css'
import Navlink from 'components/elements/Navlink'
import Card from 'components/modules/Card'
import NavBar from 'components/modules/NavBar'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <NavBar>
        </NavBar>

      <main className={styles.main}>
        <Card>
          <Navlink target="_blank" >Get started</Navlink>
        </Card>
        <Card>
          <Navlink target="_blank" >Get started</Navlink>
        </Card>

        <Navlink css={{ color: 'yellow' }}>Link</Navlink>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
