import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

NextAuth({
  providers: [
    // Providers.GitHub({
    // clientId: process.env.GITHUB_ID,
    // clientSecret: process.env.GITHUB_SECRET
    // })
  ],
  database: {
    type: 'mongodb',
    database: process.env.MONGODB_URI
  }
})
