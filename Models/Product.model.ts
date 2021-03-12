import { Document, model, Schema, models } from 'mongoose'

export interface IProduct extends Document {
  name: string
  highlights: string
  description: string
  price: number
  imgSrc: string
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    highlights: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imgSrc: { type: String, required: true }
  },
  { timestamps: true }
)

export default models.Product || model<IProduct>('Product', ProductSchema)
