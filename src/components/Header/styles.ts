import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 85px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background: #1f1f1f;

  > p,
  a {
    font-size: 12px;
    color: #d7d7d7;
    font-weight: 400;
  }

  .icon-mask {
    width: 15px;
    height: 15px;
  }

  .urls-content {
    width: 40%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 980px) {
    .icon-mask {
      width: 40px;
      height: 40px;
    }

    .urls-content {
      width: 25%;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    > p,
    a {
      font-size: 1.5vw;
    }
  }
`;
