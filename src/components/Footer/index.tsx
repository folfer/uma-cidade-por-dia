import React from 'react';
import { Container } from './styles';

import { ReactComponent as Circle } from '../../assets/circle.svg';
import { ReactComponent as Spike } from '../../assets/spike.svg';

import Icon from '../../assets/icon-logo-vertical-black-white.png';
import Ufbas from '../../assets/logoufba.png';
import Ihac from '../../assets/logo-site-ihac10.png';

import { useFetch } from '../../hooks/useFetch';

const Footer: React.FC = () => {
  const { data } = useFetch('/query');

  if (!data) {
    return <></>;
  }

  const { date } = data[0];

  const localeDate = (unformatedDate: string) => {
    const splitedDate = unformatedDate.split('-');
    return `${splitedDate[2]}/${splitedDate[1]}/${splitedDate[0]}`;
  };

  return (
    <Container>
      <div className="first-container">
        <p>Dados atualizados em {localeDate(date)}.</p>
      </div>

      <div className="icons-content">
        <div>
          <Circle className="icons" />
          <Spike className="icons" />
        </div>
        <a href="https://icon.ufba.br">
          <img src={Icon} alt="ICON" className="iconlab" />
        </a>
        <a href="https://www.ufba.br">
          <img src={Ufbas} alt="ufba" className="iconlab" />
        </a>
        <a href="https://ihac.ufba.br">
          <img src={Ihac} alt="ihac" className="ihac" />
        </a>
      </div>
      <div className="second-container">
        <p>Esse projeto é um experimento da Neopop Imaginária e ICON @ 2021</p>
      </div>
    </Container>
  );
};

export default Footer;
