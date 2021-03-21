import * as Carousel from '../Components/Carousel'
import Header from '../Components/Header'
import * as ProductCard from '../Components/ProductCard'
import { useSession, signIn, signout } from 'next-auth/client'
import Link from 'next/link'

const index = () => {
  const session = useSession()
  return (
    <div className=''>
      {/*  <Header /> */}
      {/*  <Carousel.Skeleton /> */}
      {/*  <ProductCard.Skeleton /> */}
      <button onClick={() => signIn()}>Click signin</button>
      <br />
      <Link href='/newUser'>
        <button>Signup</button>
      </Link>
    </div>
  )
}

export default index
