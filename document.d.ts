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

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
