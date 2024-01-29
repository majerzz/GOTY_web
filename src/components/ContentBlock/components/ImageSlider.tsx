import { cx } from '@emotion/css'
import { useState } from 'react'
import { styles } from 'src/components/ContentBlock/components/ImageSlider.styles'

type Props = {gameImages: any[]}

export const ImageSlider: React.FC<Props> = ({gameImages}) => {

  const [currentImage, setCurrentImage] = useState(0)
  const prev = currentImage === 0 ? gameImages.length - 1 : currentImage - 1;
  const next = currentImage === gameImages.length - 1 ? 0 : currentImage + 1;

  const moveSlider = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentImage(prev);
    } else {
      setCurrentImage(next);
    }
  }

  return (
    <div className={styles.imageSlider}>
      {gameImages.map((image, index) => {
        let type = '';
        if (index === currentImage) {
          type = styles.active
        } else if (index === prev) {
          type = styles.prev
        } else if (index === next) {
          type = styles.next
        } else {
          type = styles.toggle;
        }
        return (<img className={cx(styles.imageSliderItem, type)} src={image} key={index} alt="fdsdfs" />)
      })}
      <div className={cx(styles.button, styles.buttonLeft)} onClick={() => moveSlider('left')}></div>
      <div className={cx(styles.button, styles.buttonRight)} onClick={() => moveSlider('right')}></div>
    </div>
  )
}