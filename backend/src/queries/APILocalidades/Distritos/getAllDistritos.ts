import { useQuery, QueryFunctionContext } from 'react-query';
import { apiLocalidades } from '../../../services/APILocalidades/connection';

export async function getAllDistritos(ctx: QueryFunctionContext) {
  const [, endPoint] = ctx.queryKey;
  const { data } = await apiLocalidades.get(`${endPoint}`);
  return data;
}

export const useGetAllLocalidades = (endPoint: string) => {
  return useQuery(['distritos', endPoint], getAllDistritos);
};
