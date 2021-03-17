import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import { ReactComponent as Circle } from '../../assets/circleWhite.svg';
import { ReactComponent as Spike } from '../../assets/swhite.svg';
import { ReactComponent as Clock } from '../../assets/clock.svg';
import { ReactComponent as Woman } from '../../assets/woman.svg';

import Icon from '../../assets/img_logo-b.png';

const About: React.FC = () => {
  return (
    <>
      <Container>
        <div className="inside-content">
          <div className="about-all">
            <h1>SOBRE</h1>
            <h1 className="bottom-avoid">TUDO</h1>
            <h1 className="bottom-avoid">ISSO</h1>
          </div>
          <p className="text-content top-avoid">
            Reduzir pessoas à números é algo que sempre fizemos como humanidade,
            afinal, somos tantos. No ciclo da vida, é irrelevante pensar em{' '}
            <span>quantas</span> pessoas se conectaram com a gente e nos
            impactaram, mas sim em <span>como</span> elas nos impactaram. Às
            vezes, é necessário apenas uma pessoa.
          </p>
          <p className="text-content">
            Ao pensar sobre o impacto que as nossas ações têm sobre a vida de
            outras pessoas, percebemos como todos nós somos transformadores e
            influenciadores. O nosso descuido é o acidente do outro, o nosso
            cuidado é o momento especial de outra pessoa. Quando nos sentimos
            responsáveis e relevantes, partimos em uma jornada de vida que busca
            sempre trazer o melhor para os que estão ao nosso redor e os que
            ainda vão chegar nesse planeta maravilhoso.
          </p>
          <p className="text-content">
            Esse projeto nasce da necessidade de termos uma projeção
            imaginativa, para a partir dela, conseguir observar a dimensão do
            impacto gerado por essa pandemia em tão pouco tempo.
          </p>
          <p className="message-content">
            Esse projeto foi desenvolvido pela Neopop Imaginária e o Laje. A
            partir de dados oficiais coletados diariamente e uma programação
            dinâmica de informações, você vai observar todo dia que uma cidade
            cada vez maior foi extinta por esse número absurdo de mortos. Um
            número que representa muito a responsabilidade que nós, independente
            de crença, raça, gênero ou opinião política, temos sobre a nossa
            comunidade.
          </p>
          <div className="icons-content">
            <Circle className="icons" />
            <Spike className="icons" />
            <p className="text-side-icons">Neopop Imaginária</p>
            <a href="https://icon.ufba.br">
              <img src={Icon} alt="ICON" className="iconlab" />
            </a>
          </div>
          <p className="sugestion-content">
            Para qualquer sugestão, reclamação ou crítica:
            joao@neopopimaginaria.com
          </p>
          <Link to="/history" className="link">
            <div className="evolution-content">
              <p className="inside-evolution-content">
                Acompanhe a evolução e veja outras cidades que já passaram por
                essa lista.
              </p>
              <div className="content-icons">
                <Woman className="icons-inside-evolution-content" />
                <Clock className="icons-inside-evolution-content" />
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default About;
