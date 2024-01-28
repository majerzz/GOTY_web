import { useEffect, useState } from "react"
import { styles } from "src/components/FirstBlock/components/MainInfo/components/Timer/Time.styles"

const _oneDay = 24 * 60 * 60 * 1000;
const _oneHour = 60 * 60 * 1000;
const knownDate = new Date('2024-12-12');


const getTime = () => {

  const now = new Date()

  const timeDiff = knownDate.getTime() - now.getTime()

  const days = Math.floor(timeDiff / _oneDay);
  const hours = Math.floor((timeDiff % _oneDay) / _oneHour);

  const output = `${days} days, ${hours} hours`

  return output
}

export const Timer: React.FC = () => {
  const [time, setTime] = useState(getTime())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTime())
    }, 3600000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])


  return (
    <div className={styles.timer}>{time} left</div>
  )
}