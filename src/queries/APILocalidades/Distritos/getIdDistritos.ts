import { useQuery, QueryFunctionContext } from 'react-query';
import { apiLocalidades } from '../../../services/APILocalidades/connection';

export async function getIdDistritos(ctx: QueryFunctionContext) {
  const [, id] = ctx.queryKey;
  const { data } = await apiLocalidades.get(`distritos/${id}`);
  return data;
}

export const useGetIdLocalidades = (id: number) => {
  return useQuery(['distritos', id], getIdDistritos);
};
