import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #1f1f1f;

  .inside-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding-top: 50px;
  }

  span {
    text-decoration: underline white;
  }

  .link {
    width: 100%;
  }

  .iconlab {
    width: 130px;
    height: 40px;
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

  .message-content {
    width: 90%;

    padding-top: 50px;

    color: #fff;
    font-size: 12px;
    font-weight: 400;
    text-align: center;

    z-index: 10;
  }

  .icons-content {
    width: 70%;

    padding-top: 90px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;

    z-index: 10;
  }

  .icons {
    width: 25px;
    height: 25px;

    z-index: 10;
  }

  .text-side-icons {
    width: 50%;

    padding-left: 5px;

    font-size: 12px;

    z-index: 10;
  }

  .sugestion-content {
    width: 80%;

    padding-top: 30px;
    padding-bottom: 45px;

    color: #fff;
    font-size: 12px;
    font-weight: 400;
    text-align: center;

    z-index: 10;
  }

  .evolution-content {
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: #2a5fe8;

    z-index: 10;
  }

  .inside-evolution-content {
    width: 75%;

    color: #fff;
    font-size: 12px;
    font-weight: 400;
    text-align: center;

    z-index: 10;
  }

  .content-icons {
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 10;
  }

  .icons-inside-evolution-content {
    width: 20px;
    height: 20px;
    margin: 5px;

    z-index: 10;
  }

  .top-avoid {
    padding-top: 0px;
  }

  .about-all {
    width: 100%;
    height: 100%;

    top: 105px;

    font-size: 70px;
    position: absolute;
    font-weight: 900;
    text-align: center;

    > p {
    }
  }

  .bottom-avoid {
    margin-top: -76px;
  }

  @media (min-width: 980px) {
    width: 100%;
    height: 100%;

    background: #1f1f1f;

    .inside-content {
      padding-top: 50px;
    }

    .iconlab {
      width: 130px;
      height: 40px;
    }

    .text-content {
      width: 75%;

      padding: 20px;

      color: #fff;
      font-size: 42px;
      font-weight: 700;
      text-align: center;
    }

    .message-content {
      width: 65%;

      padding-top: 150px;

      color: #fff;
      font-size: 20px;
      font-weight: 400;
      text-align: center;
    }

    .icons-content {
      width: 45%;

      padding-top: 300px;

      color: #fff;
    }

    .icons {
      width: 40px;
      height: 40px;
    }

    .text-side-icons {
      width: 15%;

      padding-left: 5px;
    }

    .sugestion-content {
      width: 30%;

      padding-top: 30px;
      padding-bottom: 45px;

      color: #fff;

      font-size: 22px;
      font-weight: 400;

      text-align: center;
    }

    .evolution-content {
      flex-direction: unset;

      background: #2a5fe8;
    }

    .inside-evolution-content {
      width: 41%;

      color: #fff;

      font-size: 22px;
      font-weight: 400;

      text-align: center;
    }

    .icons-inside-evolution-content {
      width: 35px;
      height: 35px;
      margin: 10px;
    }

    .about-all {
      width: 100%;
      height: 100%;

      top: 150px;

      font-size: 250px;
      position: absolute;
      font-weight: 900;
      text-align: center;

      > p {
      }
    }

    .bottom-avoid {
      margin-top: -269px;
    }

    .top-avoid {
      padding-top: 250px;
    }
  }

  @media (min-width: 1500px) {
    width: 100%;
    height: 100%;

    background: #1f1f1f;

    .inside-content {
      padding-top: 50px;
    }

    .text-content {
      width: 70%;

      padding: 20px;

      color: #fff;
      font-size: 50px;
      font-weight: 700;
      text-align: center;
    }

    .message-content {
      width: 60%;

      padding-top: 150px;

      color: #fff;

      font-size: 25px;
      font-weight: 400;

      text-align: center;
    }

    .icons-content {
      width: 45%;

      padding-top: 300px;

      color: #fff;
    }

    .icons {
      width: 40px;
      height: 40px;
    }

    .text-side-icons {
      width: 15%;

      padding-left: 5px;
    }

    .sugestion-content {
      width: 30%;

      padding-top: 30px;
      padding-bottom: 45px;

      color: #fff;

      font-size: 22px;
      font-weight: 400;

      text-align: center;
    }

    .evolution-content {
      flex-direction: unset;

      background: #2a5fe8;
    }

    .inside-evolution-content {
      width: 41%;

      color: #fff;

      font-size: 22px;
      font-weight: 400;

      text-align: center;
    }

    .icons-inside-evolution-content {
      width: 35px;
      height: 35px;
      margin: 10px;
    }

    .about-all {
      width: 100%;
      height: 100%;

      top: 130px;

      font-size: 300px;
      position: absolute;
      font-weight: 900;
      text-align: center;
    }

    .bottom-avoid {
      margin-top: -360px;
    }

    .top-avoid {
      padding-top: 350px;
    }
  }
`;
