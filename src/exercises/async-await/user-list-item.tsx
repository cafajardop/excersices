import { UsersPageProps } from './user-types';

export const UserListItem = (user: UsersPageProps) => {  
  return (
    <div>
      Pokemón: <span>{user.name}</span>
      Url : <span>{user.url}</span>
    </div>
  );
};
