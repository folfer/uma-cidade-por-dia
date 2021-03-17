import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 810px);
  min-height: 180px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  background: #d7d7d7;

  > p {
    font-size: 3vw;
    color: #1b1b1b;
    font-weight: 400;
    text-align: center;
  }

  .icons-content {
    width: 75%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icons {
    width: 25px;
    height: 25px;
  }

  .iconlab {
    width: 35px;
    height: 35px;
  }

  .ihac {
    width: 75px;
    height: 40px;
  }

  .first-container {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .second-container {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
  }

  @media (min-width: 980px) {
    flex-direction: unset;

    .icons {
      width: 25px;
      height: 25px;
    }

    .iconlab {
      width: 50px;
      height: 50px;
    }

    .icons-content {
      width: 33%;

      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    .ihac {
      width: 100px;
      height: 50px;
    }

    .first-container {
      width: 33%;
    }

    .second-container {
      width: 33%;
    }

    > p {
      font-size: 1vw;
    }
  }
`;
