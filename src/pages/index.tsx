import { Fragment } from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Container from '../components/Container/Container'

const Home: NextPage = () => {

  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>Ninja List | {router.asPath === '/' ? 'Home' : ''}</title>
      </Head>
      <Container>
        <h2 className='p-5 text-4xl text-left w-full'>Ninja</h2>
        <p className='p-5 text-justify text-2xl'>
          A ninja 忍者 ,or shinobi 忍び was a covert agent or mercenary in feudal Japan.
          The functions of a ninja included reconnaissance, espionage, infiltration, deception, ambush, bodyguarding and their fighting skills in martial arts, including ninjutsu.
          Their covert methods of waging irregular warfare were deemed dishonorable and beneath the honor of the samurai.
          Though shinobi proper, as specially trained spies and mercenaries, appeared in the 15th century during the Sengoku period, antecedents may have existed as early as the 12th century.
          In the unrest of the Sengoku period, mercenaries and spies for hire became active in Iga Province and the adjacent area around the village of Kōga.
          It is from these areas that much of the knowledge regarding the ninja is drawn.
          Following the unification of Japan under the Tokugawa shogunate in the 17th century, the ninja faded into obscurity.
          A number of shinobi manuals, often based on Chinese military philosophy, were written in the 17th and 18th centuries, most notably the Bansenshūkai (1676).
          By the time of the Meiji Restoration (1868), shinobi had become a topic of popular imagination and mystery in Japan.
          Ninja figured prominently in legend and folklore, where they were associated with legendary abilities such as invisibility, walking on water and control over natural elements.
          Much of their perception in popular culture is based on such legends and folklore, as opposed to the covert actors of the Sengoku period.
          Ninja is the on'yomi (Early Middle Chinese–influenced) reading of the two kanji "忍者". In the native kun'yomi reading, it is pronounced shinobi, a shortened form of shinobi-no-mono (忍びの者).
          The word shinobi appears in the written record as far back as the late 8th century in poems in the Man'yōshū.The underlying connotation of shinobi (忍) means "to steal away; to hide" and—by extension—"to forbear", hence its association with stealth and invisibility. Mono (者) means "a person".
          Historically, the word ninja was not in common use, and a variety of regional colloquialisms evolved to describe what would later be dubbed ninja.
          Along with shinobi, these include monomi ("one who sees"), nokizaru ("macaque on the roof"), rappa ("ruffian"), kusa ("grass") and Iga-mono ("one from Iga").
          In historical documents, shinobi is almost always used.
          Kunoichi (くノ一）is, originally, an argot which means "woman";
          it supposedly comes from the characters くノ一 (respectively hiragana ku, katakana no and kanji ichi), which make up the three strokes that form the kanji for "woman" (女).
          In fiction written in the modern era kunoichi means "female ninja".
          In the Western world, the word ninja became more prevalent than shinobi in the post–World War II culture, possibly because it was more comfortable for Western speakers.
          In English, the plural of ninja can be either unchanged as ninja, reflecting the Japanese language's lack of grammatical number, or the regular English plural ninjas.
        </p>
      </Container>
    </Fragment>
  )
}

export default Home
