import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { Profile, Session, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import Providers from 'next-auth/providers'
import UserModel from '../../../Models/User.model'
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
          authorize: async ({
            csrfToken,
            username,
            password
          }: Record<string, string>): Promise<User | null> => {
            if (!csrfToken) return null
            dbConnect()
            const user: User = await UserModel.findOne(
              {
                username: username,
                password: password
              },
              ['id', 'firstname', 'lastname', 'username']
            )
            // console.log(user)
            return !!user._id ? user : null
          }
        })
      ],
      //database: undefined,
      secret: process.env.SECRET,
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
        signIn: async (user: User): Promise<string | boolean> => {
          return !!user
        },
        redirect: async (url, baseUrl) => {
          return url.startsWith(baseUrl) ? url : baseUrl
        },
        session: async (
          session: Session,
          userOrToken: User | JWT
        ): Promise<Session> => {
          const returnSession = {
            expires: session.expires,
            user: {
              _id: userOrToken._id,
              firstname: userOrToken.firstname,
              lastname: userOrToken.lastname,
              username: userOrToken.username
            },
            accessToken: session.accessToken
          }
          return returnSession
        },
        jwt: async (token: JWT, user: User): Promise<JWT> => {
          user &&
            (token = {
              _id: user._id,
              firstname: user.firstname,
              lastname: user.lastname,
              username: user.username
            })
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
