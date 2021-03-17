import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: #1f1f1f;

  .first-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .fonts {
    display: flex;
    flex-direction: column;
    color: #000;
    gap: 5px;
    margin-top: 10px;
  }

    a {
      color: #000;
    }
  }

  .sup {
    font-size: 7px !important;
    color: #1b1b1b !important;
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 900;
  }

  .sup-white {
    font-size: 7px !important;
    color: #fff !important;
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 900;
  }

  .about-all {
    width: 100%;

    font-size: 35px;
    font-weight: 900;
    text-align: center;

    > h1 {
      color: #2a5fe8;
      font-size: 7rem;
    }
  }

  .text-content {
    width: 90%;

    padding: 10px;

    color: #fff;
    font-size: 14px;
    font-weight: 700;
    text-align: center;

    z-index: 10;
  }

  .second-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 20px;

    background: #525252;
  }

  .first-text {
    font-size: 24px;
    font-weight: 900;

    color: #1b1b1b;
  }

  .second-text {
    font-size: 21px;
    font-weight: 900;

    color: white;
  }

  .third-text {
    font-size: 21px;
    font-weight: 900;

    text-decoration: underline white;

    color: white;
  }

  .four-text {
    width: 100%;
    font-size: 20px;
    font-weight: 900;

    color: #1b1b1b;
  }

  .position-number {
    width: 100%;
    text-align: center;
    font-weight: 900;

    color: #464646;
  }

  .position-city-number {
    font-weight: 500;
    color: #d7d7d7;

    font-size: 18px;
  }

  .texts-with-band {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bands {
    width: 50px;
    height: 50px;
  }

  .describe-city {
    width: 100%;

    color: #d7d7d7;
    font-size: 12px;

    margin-top: 20px;

    word-break: break-word;
  }

  .img {
    width: 320px;
    height: 200px;

    margin-top: 10px;
  }

  .third-container {
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 10px;

    background: #1b1b1b;

    > p {
      color: #d7d7d7;
      font-size: 9px;
    }
  }

  .icons {
    width: 20px;
    height: 20px;
  }

  .four-container {
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: #2a5fe8;

    padding: 20px;
    gap: 15px;

    font-size: 14px;

    text-align: center;

    > p {
      font-size: 12px;
      color: #1b1b1b;
      font-weight: 400;
    }
  }

  .shared {
    width: 130px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 30px;

    color: #d7d7d7;
    background: #1b1b1b;

    font-size: 11px;
  }

  .prey-icon {
    width: 20px;
    height: 20px;
  }

  .outside-first-container {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    text-align: start;
  }

  @media (min-width: 980px) {
    .first-container {
      width: 100%;
      height: auto;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .out-first-text {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
    }

    .sup {
      font-size: 15px !important;
    }

    .sup-white {
      font-size: 15px !important;
      color: #fff !important;
    }

    .about-all {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 35px;
      font-weight: 900;
      text-align: center;

      > h1 {
        color: #2a5fe8;
        font-size: 20rem;
      }
    }

    .text-content {
      width: 47%;

      color: #fff;
      font-size: 2rem;
      font-weight: 700;
      text-align: center;
    }

    .second-container {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .inside-second-container {
      width: 100%;
      height: auto;

      display: grid;
      grid-template-columns: 50% 50%;
      align-items: center;
      justify-content: center;

      padding: 20px;

      background: #525252;
    }

    .outside-first-container {
      width: 100%;
      height: auto;

      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
    }

    .first-text {
      font-size: 50px;
      font-weight: 900;

      color: #1b1b1b;
    }

    .second-text {
      font-size: 50px;
      font-weight: 900;

      color: white;
    }

    .third-text {
      font-size: 50px;
      font-weight: 900;

      text-decoration: underline white;

      color: white;
    }

    .four-text {
      font-size: 50px;
      font-weight: 900;

      color: #1b1b1b;
    }

    .position-number {
      font-weight: 900;
      color: #464646;
      text-align: start;
    }

    .position-city-number {
      font-weight: 500;
      color: #d7d7d7;

      font-size: 2rem;
    }

    .texts-with-band {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      font-family: 'Barlow Condensed', sans-serif;
    }

    .bands {
      width: 60px;
      height: 60px;
    }

    .describe-city {
      width: 100%;
      height: auto;

      color: #d7d7d7;
      font-size: 25px;
      margin-top: 20px;
    }

    .img {
      width: 345px;
      height: 220px;

      margin-top: 20px;
    }

    .third-container {
      width: 100%;
      height: 100px;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: unset;

      gap: 10px;

      background: #1b1b1b;

      > p {
        color: #d7d7d7;
        font-size: 2vw;
      }
    }

    .icons {
      width: 35px;
      height: 35px;
    }

    .four-container {
      width: 100%;
      height: 500px;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      background: #2a5fe8;

      padding: 20px;
      gap: 15px;
    }

    .inside-four-container {
      width: 70%;

      display: flex;
      justify-content: center;
      align-items: center;

      > p {
        font-size: 4rem;
        color: #1b1b1b;
      }
    }

    .shared {
      width: 180px;
      height: 50px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 17px;

      border-radius: 30px;

      color: #d7d7d7;
      background: #1b1b1b;
    }

    .prey-icon {
      width: 35px;
      height: 35px;
    }
  }

  @media (min-width: 1500px) {
    .first-container {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .sup {
      font-size: 15px !important;
    }

    .sup-white {
      font-size: 15px !important;
      color: #fff !important;
    }


    .about-all {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 900;
      text-align: center;

      > h1 {
        color: #2a5fe8;
        font-size: 22rem;
      }
    }

    .text-content {
      width: 45%;

      color: #fff;
      font-size: 35px;
      font-weight: 700;
      text-align: center;

      z-index: 10;
    }

    .second-container {
      width: 100%;
      height: auto;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 20px;

      background: #525252;
    }

    .outside-first-container {
      width: 100%;
      height: auto;

      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
    }

    .first-text {
      font-size: 4rem;
      font-weight: 900;

      color: #1b1b1b;
    }

    .second-text {
      font-size: 4rem;
      font-weight: 900;

      color: white;
    }

    .third-text {
      font-size: 4rem;
      font-weight: 900;

      text-decoration: underline white;

      color: white;
    }

    .four-text {
      font-size: 4rem;
      font-weight: 900;

      color: #1b1b1b;
    }

    .position-number {
      font-weight: 900;

      color: #464646;
    }

    .position-city-number {
      font-weight: 500;
      color: #d7d7d7;

      font-size: 35px;
    }

    .texts-with-band {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .bands {
      width: 100px;
      height: 100px;
    }

    .describe-city {
      width: 100%;
      height: auto;

      color: #d7d7d7;
      font-size: 35px;
      margin-top: 20px;
    }

    .img {
      width: 480px;
      height: 350px;

      margin-top: 20px;
    }

    .third-container {
      width: 100%;
      height: 100px;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: unset;

      gap: 10px;

      background: #1b1b1b;

      > p {
        color: #d7d7d7;
        font-size: 2vw;
      }
    }

    .icons {
      width: 35px;
      height: 35px;
    }

    .four-container {
      width: 100%;
      height: 500px;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      background: #2a5fe8;

      padding: 20px;
      gap: 15px;
    }

    .inside-four-container {
      width: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      > p {
        font-size: 2.8rem;
        color: #1b1b1b;
      }
    }

    .shared {
      width: 180px;
      height: 50px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 17px;

      border-radius: 30px;

      color: #d7d7d7;
      background: #1b1b1b;
    }

    .prey-icon {
      width: 35px;
      height: 35px;
    }
  }
`;
