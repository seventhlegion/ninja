import { Fragment, StrictMode } from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import style from '../styles/Home.module.css'
import { useRouter } from 'next/router'

const Home: NextPage = () => {

  const router = useRouter();

  return (
    <Fragment>
      <StrictMode>
        <Head>
          <title>Ninja List | {router.asPath === '/' ? 'Home' : ''}</title>
        </Head>
        <div className={style.container}>
          <h2 className={style.title}>Salman Rushdie off ventilator and able to talk</h2>
          <p className={style.p}>
            Mr Rushdie, 75, was attacked while speaking at an event in New York state and was in a critical condition.

            He has faced years of death threats for his novel The Satanic Verses, which some Muslims see as blasphemous.

            The man charged over Friday's attack has pleaded not guilty to attempted murder, and has been remanded in custody without bail.

            Hadi Matar, 24, is accused of running onto the stage and stabbing Mr Rushdie at least 10 times in the face, neck and abdomen.

            Following the attack, his agent Andrew Wylie said the novelist had suffered severed nerves in one arm, damage to his liver, and would likely lose an eye.

            Henry Reese, who had been due to interview Mr Rushdie at the event, suffered a minor head injury. He is the co-founder of a non-profit organisation that provides sanctuary to writers exiled under threat of persecution.

            Before the attack, Mr Rushdie was about to give a speech about how the US has served as a haven for such writers.

            The novelist was forced into hiding for nearly 10 years after The Satanic Verses was published in 1988. Many Muslims reacted with fury to it, arguing that the portrayal of the Prophet Muhammad was a grave insult to their faith.
          </p>
        </div>
      </StrictMode>
    </Fragment>
  )
}

export default Home
