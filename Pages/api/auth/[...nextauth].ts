import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { User } from 'next-auth'
import Providers from 'next-auth/providers'
import UserModel, { Iuser } from '../../../Models/User.model'
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
              placeholder: 'password',
              type: 'text'
            }
          },
          async authorize(
            credentials: Record<string, string>
          ): Promise<Iuser | null> {
            // console.log({ credentials })
            // dbConnect()
            // UserModel.find({username, password})
            // return user
            return null //-need to work on this
          }
        })
      ],
      callbacks: {
        async signIn(user, account, profile): Promise<string | boolean> {
          console.log({ user, account, profile })
          return true
        },
        async redirect(url, baseUrl) {
          return url
        }

        // async session(session, user) {
        //   console.log({ session, user })
        //   return session
        // },
        // async jwt(token, user, account, profile, isNewUser) {
        //   console.log({ token, user, account, profile, isNewUser })
        //   return token
        // }
      },
      pages: {
        signIn: '/signin',
        newUser: '/signin',
        signOut: '/signout'
      },
      jwt: {
        maxAge: 24 * 60 * 60,
        encryption: true,
        secret: process.env.JWT_SECRET
      },
      session: { jwt: true }
    })
  })
}
