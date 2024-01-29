import React, { useEffect, useState } from 'react';
import { FirstBlock } from 'src/components/FirstBlock/FirstBlock';
import { ContentBlock } from 'src/components/ContentBlock/ContentBlock';
import { games } from 'src/gamesInfo/games'

// пытаюсь ебучий плавный скролл сделать.

// const [scroll, setScroll] = useState(window.scrollY);

// useEffect(() => {
//   window.scrollY > scroll ? 
// },
// [window.scrollY])
 
function App() {
  return (
    <div className="App">
      <FirstBlock/>
      <ContentBlock {...games[0]} />
      <ContentBlock {...games[1]} />
      <ContentBlock {...games[2]} />
    </div>
  );
}

export default App;
