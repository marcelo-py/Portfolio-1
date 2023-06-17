import axios from 'axios';

export const apiLocalidades = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/',
});
