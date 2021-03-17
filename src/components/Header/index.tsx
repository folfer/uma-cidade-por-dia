import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import { ReactComponent as IconMask } from '../../assets/iconMask.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <strong>Uma cidade por dia.</strong>
      </Link>
      <Link to="/">
        <IconMask className="icon-mask" />
      </Link>
      <div className="urls-content">
        <Link to="/about">Sobre esse site</Link>
        <Link to="/history">Histórico</Link>
      </div>
    </Container>
  );
};

export default Header;
