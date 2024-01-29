import { NavigationBar } from "src/components/FirstBlock/components/NavigationBar/NavigationBar"
import { styles } from "./FirstBlock.styles"
import { MainInfo } from "src/components/FirstBlock/components/MainInfo/MainInfo"
import { Timer } from "src/components/FirstBlock/components/MainInfo/components/Timer/Timer"

export const FirstBlock:React.FC = () => {
  return (
    <section id='main' className={styles.firstBlock}>
      <NavigationBar/>
      <MainInfo/>
    </section>
  )
}