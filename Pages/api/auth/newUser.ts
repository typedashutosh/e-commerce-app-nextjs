import { NextApiRequest, NextApiResponse } from 'next'
import UserModel from '../../../Models/User.model'
import dbConnect from '../../../utils/dbConnect'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise(() => {
    dbConnect()
    const user = req.body
    UserModel.create(user)
      .then((user) => console.log(user))
      .catch((err) => {
        if (err._message.includes('User validation failed')) {
          let errors: Object[] = []
          Object.values(err.errors).forEach((error: any) => {
            const { properties } = error
            errors.push(properties)
          })
          res.json({ errors })
        }
      })
  })
}
