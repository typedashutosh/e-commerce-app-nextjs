declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string
      MONGODB_URI: string
      NEXTAUTH_URL: string
      SECRET: string
      JWT_SIGNING_KEY: string
      JWT_ENCRYPTION_KEY: string
    }
  }
}

export {}
