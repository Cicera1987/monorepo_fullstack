"use client";
import getUsers from "@/service/userService";

interface User {
  id: number;
  name: string;
  role: string;
  email: string;
}
export default async function Home() {
  const users = await getUsers()

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Usuários</h1>

      <ul className="space-y-4">
        {users.map((user: User) => (
          <li
            key={user.id}
            className="p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.role}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
