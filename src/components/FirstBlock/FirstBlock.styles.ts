import { css } from "@emotion/css";
import background from "src/img/sectionOneAlternate.jpg"

export const styles = {
  firstBlock: css`
    display:flex;
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    font-family: 'Play', sans-serif;
    color: #FFF;
  `
}