import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import UserModel, { IUser } from '../../../Models/User.model'
import dbConnect from '../../../utils/dbConnect'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise((resolve) => {
    NextAuth(req, res, {
      providers: [
        Providers.Credentials({
          name: 'Credentials',
          credentials: {
            username: {
              label: 'Username',
              type: 'text',
              placeholder: 'Username'
            },
            password: {
              label: 'Password',
              type: 'text',
              placeholder: 'password'
            }
          },
          async authorize(credentials): Promise<IUser | null> {
            dbConnect()
            const user: IUser = await UserModel.findOne({
              username: credentials.username,
              password: credentials.password
            })
            return !!user._id ? user : null
          }
        })
      ],
      //database: undefined,
      //secret: process.env.SECRET,
      session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60
      },
      jwt: {
        maxAge: 24 * 60 * 60,
        encryption: true,
        secret: process.env.JWT_SECRET,
        signingKey: process.env.JWT_SIGNING_KEY,
        encryptionKey: process.env.JWT_ENCRYPTION_KEY
      },
      callbacks: {
        async signIn(user, account, profile): Promise<string | boolean> {
          // console.log({ user, account, profile })
          return !!user
        },
        async redirect(url, baseUrl) {
          // console.log({ url, baseUrl })
          return url
        },
        async session(session, user) {
          // console.log({ session, user })
          session.user = user
          return session
        },
        async jwt(token, user, account, profile, isNewUser) {
          // console.log({ token })
          user && (token.user = user)
          return token
        }
      },
      pages: {
        signIn: '/signin',
        error: '/signin'
        // signOut: '/signout'
      }
    })
  })
}
