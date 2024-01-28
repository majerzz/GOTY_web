import { styles } from "src/components/FirstBlock/components/MainInfo/MainInfo.styles"
import { Timer } from "src/components/FirstBlock/components/MainInfo/components/Timer/Timer"
import { TextInfo } from "src/components/TextInfo/TextInfo"

const mainInfo = {
  header: 'GOTY',
  main: `The Game Award for Game of the Year is given to a video game judged to deliver 
  the best experience across creative and technical fields. It is presented as the final 
  award of the ceremony and is widely considered its most prestigious honor.`,
  year: '2024'
}

export const MainInfo = () => {
  return (
    <div className={styles.mainInfo}>
      <TextInfo {...mainInfo} />
      <Timer />
    </div>
  )
}