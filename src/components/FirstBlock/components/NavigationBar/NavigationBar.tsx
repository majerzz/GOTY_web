import { styles } from "src/components/FirstBlock/components/NavigationBar/NavigationBar.styles"
import { Link } from 'react-scroll'
import { games } from 'src/gamesInfo/games'

export const NavigationBar:React.FC = () => {
  return (
    <nav className={styles.navigationBar}>
      {games.map((item) => {
        return (
          <Link key={item.year} className={styles.year} to={item.year} smooth={true} duration={500}>{item.year}</Link>
        )
      })}
    </nav>
  )
}