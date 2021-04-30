import 'next-auth'
import 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: {
      _id: string
      firstname: string
      lastname: string
      username: string
    }
  }
  interface User {
    _id: string
    firstname: string
    lastname: string
    username: string
  }
}
declare module 'next-auth/jwt' {
  interface JWT extends Record<string, unknown> {
    _id: string
    firstname: string
    lastname: string
    username: string
  }
}
