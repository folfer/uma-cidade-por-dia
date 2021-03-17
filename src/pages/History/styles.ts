import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;

  background: #1e1e1e;
  color: #e5e5e5;

  overflow-y: auto;
  overflow-x: auto;

  > table {
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;
  }

  .th {
    border: 1px solid #999;
    padding: 0.5rem;
    text-align: left;
    height: 50px;
  }

  .td {
    border: 1px solid #999;
    padding: 0.5rem;
    text-align: left;
    height: 50px;
    font-weight: 500;
  }

  .tr {
    border: 1px solid black;
  }

  @media (min-width: 980px) {
    padding: 40px;
  }
`;
