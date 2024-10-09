import { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  url: string;
}

export const PromisePageUsers = () => {
  const [users, setUsers] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        
        if (!res.ok) {
          throw new Error("Error al obtener los datos");
        }

        return res.json();
      })
      .then((data) => setUsers(data.results))
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, []);


  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
