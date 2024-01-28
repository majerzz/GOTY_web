import { styles } from "src/components/TextInfo/TextInfo.styles"


type Props = {
  header: string,
  main: string,
  year: string
}

export const TextInfo: React.FC<Props> = ({year, header, main}) => {
  return (
    <div className={styles.textInfo}>
      <h1>{year} - {header}</h1>
      <p>{main}</p>
    </div>
  )
}