import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type CardProps = {
  imgSrc: string
  title: string
  details: string
  anchor: string
}
const Card: FC<CardProps> = ({ anchor, details, title, imgSrc }: CardProps): JSX.Element => {
  return (
    <div className='card-container'>
      <Link href={anchor}>
        <div className='card'>
          <Image height={50} width={70} src={imgSrc} className='' />
          <div className='title'>{title}</div>
          <div className='details'>{details}</div>
        </div>
      </Link>
    </div>
  )
}

export default Card
