import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { Session, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import Providers from 'next-auth/providers'
import { WithAdditionalParams } from 'next-auth/_utils'
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
        signIn: async (user, account, profile): Promise<string | boolean> => {
          //- user is returned from authorize
          //- account is probably credential type from provider
          //- profile is form data returned from client

          // console.log('signin here:::', { user, account, profile })
          return !!user
        },
        redirect: async (url, baseUrl) => {
          //- url is previous url
          //- baseUrl is base URL,  homepage?

          // console.log({ url, baseUrl })
          return url.startsWith(baseUrl) ? url : baseUrl
        },
        session: async (
          session: Session,
          userOrToken: User | JWT
        ): Promise<WithAdditionalParams<Session>> => {
          const returnSession: WithAdditionalParams<Session> = {
            expires: session.expires,
            user: {
              _id: userOrToken._id,
              firstname: userOrToken.firstname,
              lastname: userOrToken.lastname,
              username: userOrToken.username
            },
            accessToken: session.accessToken
          }
          // console.log({ session, user })
          return returnSession
        },
        jwt: async (
          token: JWT,
          user: User,
          account: Record<string, unknown>,
          profile: Record<string, unknown>,
          isNewUser: boolean
        ): Promise<WithAdditionalParams<JWT>> => {
          //-   token: this is jwt token,
          //-   user: user returned from authorize ,
          //-   account: type of account, here credentials
          //?   profile: this is equal to user. I wonder why?
          //-   isNewUser: returns boolean

          // console.log({ token, user, account, profile, isNewUser })
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
