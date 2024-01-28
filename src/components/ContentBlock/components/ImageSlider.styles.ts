import { css } from "@emotion/css";

export const styles = {
  imageSlider: css`
    position: relative;
    width: 600px;
    height: 100%;
    align-items: center;
  `,
  imageSliderItem: css`
    position: absolute;
    max-width: 300px;
    height: auto;
    user-select: none;
    filter: grayscale(80%) blur(1px);
    box-shadow: 0px 0px 2px black;
    z-index: 1;
    margin: auto;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
  `,
  prev: css`
    right: auto;
  `,
  next: css`
    left: auto;
  `,
  active: css`
  transform: scale(1.5);
  filter: unset;
  z-index: 2;
`
}