import { useEffect, useState } from "react";
import { UsersPageProps } from './user-types';
import { UserListItem } from "./user-list-item";

export const PageAsync = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const getApi = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await getApi.json();

        setCount(data.count);
        setUsers(data.results);        
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>List: {count} </h1>
      {users.map((user: UsersPageProps) => (
        <UserListItem key={`user-list-item-${user.name}`} {...user} />
      ))}
    </div>
  );
};
