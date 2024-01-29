import { css } from "@emotion/css";

export const styles = {
  contentBlock: (bgImage: any) => {
    return (
      css`
        background-image: url(${bgImage});
        width: auto;
        height: 100vh;
        display:flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
        font-family: 'Play', sans-serif;
        color: #FFF;
      `
    )
  },
  mainInfo: css`
    display: flex;
    line-height: 1.7;
    flex-direction: column;
    gap: 20px;
    width: fit-content;
    max-width: 400px;
`
}