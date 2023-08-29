import Image from 'next/image'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

export default function Home() {
  return (
    <main className='mx-auto'>
      <title>Sriniwas Jha - Programmer | Gamer | Geek</title>
      <Header />
      <AboutMe />
      <Projects />
    </main>
  )
}
