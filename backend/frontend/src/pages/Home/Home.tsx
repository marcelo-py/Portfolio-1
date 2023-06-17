import 'aos/dist/aos.css';
import { useGetIdLocalidades } from '../../queries/APILocalidades/Distritos/getIdDistritos';

export function Home() {
  const { data } = useGetIdLocalidades(1);

  return (
    <div>
      <div data-aos={'fade-up'}>
        <button>Clique aqui</button>
      </div>
    </div>
  );
}
