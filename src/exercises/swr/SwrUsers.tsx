import useSWR from "swr";
import axios from "axios";
import { UsersPageProps } from '../async-await/user-types';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const SwrUsers = () => {
  const { data, error } = useSWR("https://pokeapi.co/api/v2/pokemon", fetcher);

  if (error) return <div>Error al cargar los datos</div>;
  if (!data) return <div>Cargando...</div>;

  return (
    <div>
      <h1>Lista de Pokémon con SWR</h1>
      <ul>
        {data.results.map((user: UsersPageProps, index: number) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
