import axios from "axios";
import { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  url: string;
}

export const UsersAxios = () => {
  const [users, setUsers] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setUsers(data.results);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message)
        } else {
          setError("Ha ocurrido un error")
        }
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Lista de Pokémon con Axios</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
