import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { createSecretKey } from 'node:crypto'

const options = {
  providers: [Providers.Email({})],
  database: process.env.MONGODB_URI
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)
