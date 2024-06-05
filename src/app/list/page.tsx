import { db } from "@/lib/db"

export default async function List() {
  const users = await db.user.findMany();
    return (
      <main className="py-16 mx-auto w-3/4">
        <h1 className="title mb-8">Users</h1>
        <div className="rounded-xl border-2 px-8 list">
          <table className="w-full text-left">
            <tr>
              <th>Username</th> 
              <th>Password</th> 
              <th>Id</th>
            </tr>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.id}</td>
              </tr>
            ))}
          </table>
        </div>
      </main>
    )
  }
  
  