import React from 'react';

import { Container } from './styles';

import { useFetch } from '../../hooks/useFetch';

interface Props {
  city: string;
  total: number;
  daily: number;
  state: string;
  population: number;
  date: string;
  region: string;
}

const History: React.FC = () => {
  // const [newDate, setNewDate] = useState<Date>();

  // const today = new Date();
  // setNewDate(today);

  // let yesterday = new Date(newDate.getTime());
  // yesterday.setDate(newDate.getDate() - 20);

  // yesterday = `${oldDate.getFullYear()}-${
  //   yesterday.getMonth >= 9
  //     ? yesterday.getMonth() + 1
  //     : `0${yesterday.getMonth() + 1}`
  // }-${
  //   yesterday.getDate() >= 10 ? yesterday.getDate() : `0${oldDate.getDate()}`
  // }`;

  // const actualDate = () => {
  //   let date: any = new Date();
  //   date = `${date.getFullYear()}-${
  //     date.getMonth >= 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  //   }-${date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`}`;
  // };
  let date: any = new Date();

  date = `${date.getFullYear()}-${
    date.getMonth >= 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  }-${date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`}`;

  const { data } = useFetch(`/query?date=${date}&qtd=20`);

  // useEffect(() => {
  //   let date: any = new Date();

  //   date = `${date.getFullYear()}-${
  //     date.getMonth >= 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  //   }-${date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`}`;

  //   Api.get(`/query?date=${date}&qtd=20`).then((response) => {
  //     setNotification(response.data);
  //   });
  // }, []);

  const localeDate = (unformatedDate: string) => {
    const splitedDate = unformatedDate.split('-');
    return `${splitedDate[2]}/${splitedDate[1]}/${splitedDate[0]}`;
  };
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th className="th">CIDADE</th>
            <th className="th">ESTADO</th>
            <th className="th">DIA DO ÓBITO</th>
            <th className="th">ÓBITOS TOTAIS</th>
            <th className="th">ÓBITOS NO DIA</th>
            <th className="th">POPULAÇÃO</th>
          </tr>
          {data?.map((notifications: Props, index: any) => (
            <tr key={index} className="tr">
              <td className="td">{notifications.city}</td>
              <td className="td">{notifications.state}</td>
              <td className="td">{localeDate(notifications.date)}</td>
              <td className="td">{notifications.total}</td>
              <td className="td">{notifications.daily}</td>
              <td className="td">{notifications.population}</td>
            </tr>
          ))}
        </thead>
      </table>
    </Container>
  );
};

export default History;
