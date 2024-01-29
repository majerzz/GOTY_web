import { cx } from '@emotion/css'
import { useState } from 'react'
import { styles } from 'src/components/ContentBlock/components/ImageSlider.styles'
import img1 from 'src/img/bg-screen1.jpg'
import img2 from 'src/img/bg-screen1.jpg'
import img3 from 'src/img/bg-screen1.jpg'
import img4 from 'src/img/123123213.jpg'
import img5 from 'src/img/ebaliga.jpg'
import img6 from 'src/img/m.jpg'

const images = [img1, img2, img3, img4, img5, img6]

export const ImageSlider: React.FC = () => {

  const [currentImage, setCurrentImage] = useState(0)
  const prev = currentImage === 0 ? images.length - 1 : currentImage - 1;
  const next = currentImage === images.length - 1 ? 0 : currentImage + 1;

  const moveSlider = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentImage(prev);
    } else {
      setCurrentImage(next);
    }
  }

  return (
    <div className={styles.imageSlider}>
      {images.map((image, index) => {
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