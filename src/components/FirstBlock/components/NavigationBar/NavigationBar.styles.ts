import { css } from "@emotion/css";
import { hover } from "@testing-library/user-event/dist/hover";

export const styles = {
  navigationBar: css`
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
    display: flex;
    position: fixed;
    flex-direction: column;
    width: 40px;
    height: 100vh;
    justify-content: space-evenly;
    padding: 0px 50px;
    font-weight: 700;
  `,
  year: css`
    font-size: 15px;
    text-decoration: none;
    color: #FFF;
    transition: 0.25s;
    user-select: none;
    &:hover {
        transform: scale(1.5);
        cursor: pointer;
      }
  `,
}