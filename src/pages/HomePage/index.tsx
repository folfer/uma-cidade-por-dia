import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

import { ReactComponent as Woman } from '../../assets/woman.svg';
import { ReactComponent as Brasil } from '../../assets/brasil.svg';
import { ReactComponent as Clock } from '../../assets/clock.svg';
import { Container } from './styles';

import Prey from '../../assets/prey.png';
import Map from '../../components/Map';

import { useFetch } from '../../hooks/useFetch';

const HomePage: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { data } = useFetch('/query');

  // useEffect(() => {
  //   Api.get(`/query`).then((response) => {
  //     const allData = response.data;
  //     const {
  //       city,
  //       description,
  //       population,
  //       ranking,
  //       state,
  //       total,
  //       url,
  //       location,
  //     } = all  //     setCityLocation(city);
  //     setDescriptionText(description);
  //     setPopulationNumber(population);
  //     setRankingPosition(ranking);
  //     setStateLocation(state);
  //     setTotalNumber(total.toLocaleString('pt-BR'));
  //     setUrlParams(url);
  //     setLocationCoordinates(location);
  //   });
  // }, []);

  if (!data) {
    return <></>;
  }

  const {
    city,
    description,
    population,
    ranking,
    state,
    total,
    url,
    location,
  } = data[0];
  return (
    <>
      <Container>
        <div className="first-container">
          <div className="about-all">
            <h1>{total.toLocaleString('pt-BR')}</h1>
          </div>
          <p className="text-content top-avoid">
            Pessoas morreram de COVID-19 desde de março de 2020{' '}
            <a href="#fonts">
              <sup className="sup-white">1</sup>
            </a>{' '}
          </p>
        </div>
        <div className="second-container">
          <div className="out-first-text">
            <p className="first-text">
              Isso equivale à população de{' '}
              <a href={url} className="third-text">
                {city}
              </a>
              ,
              <span className="four-text">
                <strong>{state}</strong>
                <a href="#fonts">
                  <sup className="sup">2</sup>
                </a>
                .
              </span>
            </p>
          </div>
          <div className="inside-second-container">
            <div className="outside-first-container">
              {location ? (
                <Map
                  location={location}
                  excLocation={location}
                  cityLocation={city}
                />
              ) : (
                <></>
              )}
            </div>
            <div>
              <div className="texts-with-band">
                <div>
                  <Brasil className="bands" />
                  <h5 className="position-city-number">
                    <strong>{city.toUpperCase()}</strong> É A {ranking} CIDADE
                    MAIS POPULOSA DO BRASIL.
                  </h5>
                  <h5 className="position-city-number">
                    POPULAÇÃO ATUAL: {population.toLocaleString('pt-BR')}
                    <a href="#fonts">
                      <sup className="sup">3</sup>
                    </a>
                    .
                  </h5>
                </div>
              </div>
              <p className="describe-city">
                {description}
                <a href="#fonts">
                  <sup className="sup">2</sup>
                </a>
              </p>
              <div className="fonts">
                <p id="fonts">Fontes:</p>
                <a href="https://covid.saude.gov.br" target="#">
                  <sup>1</sup>covid.saude.gov.br
                </a>
                <a href={url} target="#">
                  <sup>2</sup>wikipédia
                </a>
                <a
                  href="https://servicodados.ibge.gov.br/api/docs/localidades"
                  target="#"
                >
                  <sup>3</sup>ibge.gov.br
                </a>
              </div>
            </div>
          </div>
        </div>
        <Link to="/history" className="link">
          <div className="third-container">
            <p>
              Acompanhe a evolução e veja outras cidades que já passaram por
              essa lista.
            </p>
            <div className="icon-box">
              <Woman className="icons" />
              <Clock className="icons" />
            </div>
          </div>
        </Link>
        <div className="four-container">
          <div className="inside-four-container">
            <p>
              Pela população de {city} e por todas as outras cidades, fique em
              casa e, quando possível, se vacine{' '}
              <a href="#fonts">
                <sup className="sup">1</sup>
              </a>
              .
            </p>
          </div>
          <Button className="shared" color="primary" onClick={handleClickOpen}>
            Compartilhar
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Compartilhe</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <FacebookShareButton
                  url="https://uma-cidade-por-dia-deploy.vercel.app"
                  quote="Uma Cidade Por Dia - Acompanhe a evolução e veja outras cidades que já passaram por essa lista"
                  hashtag="#ICON"
                >
                  <FacebookIcon size={36} />
                </FacebookShareButton>
                <TwitterShareButton
                  url="https://uma-cidade-por-dia-deploy.vercel.app"
                  title="Uma Cidade Por Dia - Acompanhe a evolução e veja outras cidades que já passaram por essa lista"
                  hashtags={['ICON']}
                >
                  <TwitterIcon size={36} />
                </TwitterShareButton>
                <WhatsappShareButton
                  url="https://uma-cidade-por-dia-deploy.vercel.app"
                  title="Uma Cidade Por Dia - Acompanhe a evolução e veja outras cidades que já passaram por essa lista"
                  separator=": "
                >
                  <WhatsappIcon size={36} />
                </WhatsappShareButton>
                <TelegramShareButton
                  url="https://uma-cidade-por-dia-deploy.vercel.app"
                  title="Uma Cidade Por Dia - Acompanhe a evolução e veja outras cidades que já passaram por essa lista"
                >
                  <TelegramIcon size={36} />
                </TelegramShareButton>
                <LinkedinShareButton
                  summary="ICON"
                  title="Uma Cidade Por Dia - Acompanhe a evolução e veja outras cidades que já passaram por essa lista"
                  source="https://uma-cidade-por-dia-deploy.vercel.app"
                  url="https://uma-cidade-por-dia-deploy.vercel.app"
                >
                  <LinkedinIcon size={36} />
                </LinkedinShareButton>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Recusar
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                Aceitar
              </Button>
            </DialogActions>
          </Dialog>
          <img src={Prey} alt="prey" className="prey-icon" />
        </div>
      </Container>
    </>
  );
};

export default HomePage;
