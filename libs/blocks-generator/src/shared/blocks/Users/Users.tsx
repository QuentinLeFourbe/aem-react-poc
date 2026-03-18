import { defineBlock } from 'eds-react-adapter';
import { useQuery } from '@tanstack/react-query';
import './Users.css';

interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
  website: string;
}

function UserCard({ name, email, company, website }: User) {
  return (
    <li className="users-item">
      <div className="users-item-avatar">{name.charAt(0)}</div>
      <div className="users-item-info">
        <h3 className="users-item-name">{name}</h3>
        <a className="users-item-email" href={`mailto:${email}`}>{email}</a>
        <p className="users-item-company">{company.name}</p>
        <a className="users-item-website" href={`https://${website}`} target="_blank" rel="noreferrer">
          {website}
        </a>
      </div>
    </li>
  );
}

function Users() {
  const { data: users, isLoading, isError, error } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/users').then((r) => r.json()),
  });

  if (isLoading) return <div className="users-loading">Chargement des utilisateurs...</div>;
  if (isError) return <div className="users-error">Erreur : {(error as Error).message}</div>;

  return (
    <ul className="users-grid">
      {users?.map((user) => <UserCard key={user.id} {...user} />)}
    </ul>
  );
}

export default defineBlock(Users, { cells: [] });
