import { Document, model, Schema, models } from 'mongoose'

export interface IUser extends Document {
  firstname: string
  lastname: string
  username: string
  password: string
}

const UserSchema = new Schema<IUser>(
  {
    firstname: { type: String, required: [true, 'Firstname is  required'] },
    lastname: { type: String, required: false },
    username: {
      type: String,
      required: [true, 'Username Required'],
      unique: true
    },
    password: { type: String, required: [true, 'Password is required'] }
  },
  { timestamps: true }
)

export default models.User || model<IUser>('User', UserSchema)
