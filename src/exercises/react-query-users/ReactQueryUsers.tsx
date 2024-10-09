import axios from 'axios';
import { useQuery } from 'react-query';
import { UsersPageProps } from '../async-await/user-types';

export const ReactQueryUsers = () => {
  
  const { data, error, isLoading } = useQuery<UsersPageProps[], Error>("pokemons", async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
    return data.results;
  });

  if (isLoading) return <div>Cargando...</div>;

  if (error) return <div>Error: {error.message ? error.message : 'Ha ocurrido un error'}</div>;

  return (
    <div>
      <h1>Lista de Pokémon React Query</h1>
      <ul>
        {data?.map((user: UsersPageProps, index: number) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};