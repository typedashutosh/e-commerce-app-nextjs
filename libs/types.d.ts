import 'next-auth'
import 'next-auth/jwt'

declare module 'next-auth' {
  export interface User {
    _id: string
    firstname: string
    lastname: string
    username: string
  }
}
declare module 'next-auth/jwt' {
  export interface JWT extends Record<string, unknown> {
    _id: string
    firstname: string
    lastname: string
    username: string
  }
}
