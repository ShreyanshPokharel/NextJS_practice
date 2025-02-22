// import React from 'react'

// interface User{
//     id: number;
//     name: string;
//     username: string;
// }
// const   UsersPage  = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users : User[]= await res.json();
//   return (
    
//         <>
//         <main className="p-5">
//         <ul className="mt-4 space-y-3">
//         <h1 className="text-2xl font-bold">Company Users</h1>
//             {users.map(users => <li key = {users.id} className="p-4 bg-gray-100 rounded-lg shadow">Name: {users.name} <br/>Username: {users.username}</li>) }
//         </ul>
//         </main>
//         </>
    
//   )
// }

// export default UsersPage 


import React from 'react';

interface User {
  id: number;
  name: string;
  username: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <main className="p-6 bg-gradient-to-br from-teal-700 to-gray-300 min-h-screen text-gray-900">
\
      <h1 className="text-4xl font-extrabold text-white text-center drop-shadow-lg">Company Users</h1>
      <p className="text-lg text-gray-200 text-center mt-2">Meet the members of our growing team.</p>

  
      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {users.map((user) => (
          <li key={user.id} className="p-6 bg-white rounded-lg shadow-lg text-center transform transition hover:scale-105">
            <h3 className="text-xl font-semibold text-teal-700">{user.name}</h3>
            <p className="text-gray-600">@{user.username}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default UsersPage;
