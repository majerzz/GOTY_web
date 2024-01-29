import { styles } from "src/components/ContentBlock/ContentBlock.styles"
import { ImageSlider } from "src/components/ContentBlock/components/ImageSlider";
import { TextInfo } from "src/components/TextInfo/TextInfo";

type Props = {
  year: string,
  gameName: string,
  gameDescription: string,
  bgImage: any,
  gameImages: any[];
}

console.log(styles)

export const ContentBlock: React.FC<Props> = ({ year, gameName, gameDescription, bgImage, gameImages }) => {
    return (
      <section className={styles.contentBlock(bgImage)} id={year}>
        {+year[3] % 2 === 0 && <ImageSlider gameImages={gameImages}/>}
        <TextInfo year = {year} header={gameName} main={gameDescription}/>
        {+year[3] % 2 !== 0 && <ImageSlider gameImages={gameImages}/>}
      </section>
    )
}

