import image2023 from 'src/img/bg3.jpg'
import image2022 from 'src/img/eldenRing/eldenring.jpg'
import image2021 from 'src/img/itTakesTwo/ittakestwo.jpg'
import bgimg1 from 'src/img/bg-screen1.jpg'
import bgimg2 from 'src/img/bg-screen2.jpg'
import bgimg3 from 'src/img/bg-screen3.jpg'
import bgimg4 from 'src/img/bg-screen4.webp'
import eldenringimg1 from 'src/img/eldenRing/eldenring-screen1.jpg'
import eldenringimg2 from 'src/img/eldenRing/eldenring-screen2.webp'
import eldenringimg3 from 'src/img/eldenRing/eldenring-screen3.webp'
import eldenringimg4 from 'src/img/eldenRing/eldenring-screen4.webp'
import eldenringimg5 from 'src/img/eldenRing/eldenring-screen5.jfif'
import takestwoimg1 from 'src/img/itTakesTwo/takestwo-screen1.jpg'
import takestwoimg2 from 'src/img/itTakesTwo/takestwo-screen2.jpg'
import takestwoimg3 from 'src/img/itTakesTwo/takestwo-screen3.jpeg'
import takestwoimg4 from 'src/img/itTakesTwo/takestwo-screen4.jpg'


export const games = [
  {
    year: '2023',
    gameName: `Baldur's Gate III`,
    gameDescription: `Baldur's Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons,
     where your choices shape a tale of fellowship and betrayal, survival and sacrifice, and the lure of absolute power.`,
    bgImage: image2023,
    gameImages: [bgimg1, bgimg2, bgimg3, bgimg4]
  },
  {
    year: '2022',
    gameName: `Elden Ring`,
    gameDescription: `Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.`,
    bgImage: image2022,
    gameImages: [eldenringimg1, eldenringimg2, eldenringimg3, eldenringimg4, eldenringimg5]
  },
  {
    year: '2021',
    gameName: `It Takes Two`,
    gameDescription: `It Takes Two is an action-adventure video game with elements from platform games. It is specifically 
    designed for split-screen cooperative multiplayer, which means that it must be played with another player through either local or online play.`,
    bgImage: image2021,
    gameImages: [takestwoimg1, takestwoimg2, takestwoimg3, takestwoimg4]
  }
]