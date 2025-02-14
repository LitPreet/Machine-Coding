import { useEffect, useState } from "react";

// Define prop types for components
interface WithLoaderProps {
    isLoading: boolean;
    [key: string]: any;
   }
   
   interface UserType {
    id: number;
    name: string;
   }
   
   interface UserListProps {
    users: UserType[];
   }
   
   // HOC
   const withLoader = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    return function WithLoaderComponent({ 
      isLoading, 
      ...props 
    }: WithLoaderProps & P) {
      if (isLoading) {
        return <div>Loading...</div>;
      }
      return <WrappedComponent {...props as P} />;
    };
   };
   
   // Component
   const UserList: React.FC<UserListProps> = ({ users }) => {
    return (
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
   };
   
   // Enhanced component
   const UserListWithLoader = withLoader(UserList);
   
   // Usage
   function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState<UserType[]>([]);
   
    useEffect(() => {
      setTimeout(() => {
        setUsers([
          { id: 1, name: 'John' },
          { id: 2, name: 'Jane' }
        ]);
        setIsLoading(false);
      }, 2000);
    }, []);
   
    return (
      <UserListWithLoader 
        isLoading={isLoading}
        users={users}
      />
    );
   }
   export default App