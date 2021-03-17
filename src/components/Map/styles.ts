import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 30px;

  pointer-events: none !important;

  box-shadow: 5px 5px #3339;

  .leaflet-container {
    height: 300px;
  }

  .none {
    pointer-events: none !important;
  }

  * {
    pointer-events: none !important;
  }

  @media (min-width: 980px) {
    width: 100%;
    max-width: 450px;
  }
`;
