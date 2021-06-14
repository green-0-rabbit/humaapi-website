/* eslint-disable import/no-unresolved */
import Head from 'next/head';
import styles from '@styles/Home.module.css';
import Navlink from '@elements/Navlink';
import Card from '@modules/Card';
import RatingCard from '@modules/RatingCard';
import NavBar from '@modules/NavBar';
import FigureCard from '@modules/FigureCard';
import BlocOutset from '@elements/BlocOutset';
import BlocInset from '@elements/BlocInset';
import BlocRidge from '@elements/BlocRidge';
import LandingSection from '@sections/LandingSection';
import Hublot from '@modules/Hublot';
import tw, { css } from 'twin.macro';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main css={[tw`flex flex-col justify-center`]}>
        <LandingSection />
        <Card>
          <Navlink target="_blank">Get started</Navlink>
        </Card>
        {/* <RatingCard
          imgRelPath="home/customer_rating.png"
          ratingStars="4"
        /> */}
        <Card>
          <Navlink target="_blank">Get started</Navlink>
        </Card>
        <BlocOutset>
          Hello
        </BlocOutset>
        <BlocRidge>
          Hello
        </BlocRidge>
        <div css={[tw`p-6`, css`background-color: black;`]}>
          <Hublot imgRelPath="ellipse/support.png" />
        </div>
        <FigureCard
          number="99%"
          text="Satisfaction Rate"
          color="purple"
        />
        <FigureCard
          number="99.9"
          text="Satisfaction Rate"
          color="purple"
          symbol="%"
          rounded="10"
          propEasing="steps(1000)"
        />
        <FigureCard
          number="122"
          text="Projects"
          propEasing="steps(1000)"
        />
        <FigureCard
          number="12"
          text="Marketing Strategies Deployed"
          color="purple"
          propEasing="steps(1000)"
        />
        <FigureCard
          number="50"
          text="Customers"
          color="saumon"
          symbol="+"
        />
        <FigureCard
          number="40"
          text="Followers"
          color="saumon"
          symbol="K"
          rounded="10"
          propEasing="steps(1000)"
        />
        <BlocInset>
          Test
        </BlocInset>
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
