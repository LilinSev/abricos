import { db } from "@/lib/db";
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    session: {
      strategy: 'jwt'
    },
    pages: {
      signIn: '/login'
    },
    providers: [
        CredentialsProvider({
          credentials: {
            username: { },
            password: { }
          },
          async authorize(credentials) {
            
            const user = await db.user.findUnique({
              where: {username: credentials?.username}
            });
            if(!user) {
              return null;
            }
            if(user.password !== credentials?.password) {
              return null;
            }

            return {
              id: `${user.id}`,
              username: user.username,
            }
          }
        })
    ]
})

export { handler as GET, handler as POST }