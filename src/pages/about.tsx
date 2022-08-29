import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, ReactNode } from 'react';
import Container from '../components/Container/Container';

function About(): ReactNode {
  const router = useRouter();
  return (
    <Fragment>
      <Head>
        <title>Ninja List | {router.asPath === '/about' ? 'About' : ''}</title>
      </Head>
      <Container>
        <h1 className='p-5 text-4xl text-left w-full'>
          About
        </h1>
        <p className='p-5 text-2xl text-justify'>
          Despite many popular folktales, historical accounts of the ninja are scarce. Historian Stephen Turnbull asserts that the ninja were mostly recruited from the lower class, and therefore little literary interest was taken in them.
          The social origin of the ninja is seen as the reason they agree to operate in secret, trading their service for money without honor and glory.
          The scarcity of historical accounts is also demonstrated in war epics such as The Tale of Hōgen (Hōgen Monogatari) and The Tale of the Heike (Heike Monogatari), which focus mainly on the aristocratic samurai, whose deeds were apparently more appealing to the audience.
          Historian Kiyoshi Watatani states that the ninja were trained to be particularly secretive about their actions and existence:
          So-called ninjutsu techniques, in short are the skills of shinobi-no-jutsu and shinobijutsu, which have the aims of ensuring that one's opponent does not know of one's existence, and for which there was special training.
          However, some ninjutsu books described specifically what tactics ninja should use to fight, and the scenarios a ninja might find themselves can be deduced from those tactics. For example, in the manuscript of volume 2 of Kanrin Seiyō (間林清陽) which is the original book of Bansenshūkai (万川集海), there are 48 points of ninja's fighting techniques, such as how to make makibishi from bamboo, how to make footwear that makes no sound, fighting techniques when surrounded by many enemies, precautions when using swords at night, how to listen to small sounds, kuji-kiri that prevents guard dogs from barking, and so on.
        </p>
      </Container>
    </Fragment>
  )
}

export default About