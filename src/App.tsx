import React, { useEffect, useState } from 'react';
import { FirstBlock } from 'src/components/FirstBlock/FirstBlock';
import { ContentBlock } from 'src/components/ContentBlock/ContentBlock';
import { games } from 'src/gamesInfo/games'
import throttle from 'lodash/throttle';
import { Link } from 'react-scroll'

// пытаюсь ебучий плавный скролл сделать.

// const [scroll, setScroll] = useState(window.scrollY);

// useEffect(() => {
//   window.scrollY > scroll ? 
// },
// [window.scrollY])



function App() {

  // Добавить функционал прокрутки по колесику мыши
  
  // useEffect(() => {

  //   const handleScroll = throttle((e: { deltaY: number; }) => {
  //     if (e.deltaY > 0) {
  //       console.log('Прокрутка вниз');
  //     } else if (e.deltaY < 0) {
  //       console.log('Прокрутка вверх');
  //     }
  //   }, 1000)

  //   window.addEventListener('wheel', handleScroll)
  //   return () => window.removeEventListener('wheel', (e: MouseEvent) => handleScroll);
  // }, [])



  return (
    <div className="App">
      <FirstBlock />
      <ContentBlock {...games[0]} />
      <ContentBlock {...games[1]} />
      <ContentBlock {...games[2]} />
      <ContentBlock {...games[3]} />
    </div>
  );
}

export default App;
