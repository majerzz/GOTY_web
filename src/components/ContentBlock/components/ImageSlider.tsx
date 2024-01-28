import { cx } from '@emotion/css'
import { styles } from 'src/components/ContentBlock/components/ImageSlider.styles'
import img from 'src/img/bg-screen1.jpg'

export const ImageSlider:React.FC = () => {
  return(
    <div className={styles.imageSlider}>
      <img className={cx(styles.imageSliderItem, styles.prev)} src={img} alt="fdsdfs" />
      <img className={cx(styles.imageSliderItem, styles.active)} src={img} alt="fdsdfs" />
      <img className={cx(styles.imageSliderItem, styles.next)} src={img} alt="fdsdfs" />
    </div>
  )
}