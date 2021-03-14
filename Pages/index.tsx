import * as Carousel from '../Components/Carousel'
import Header from '../Components/Header'
import * as ProductCard from '../Components/ProductCard'

const index = () => {
  return (
    <div className=''>
      <Header />
      <Carousel.Skeleton />
      <ProductCard.Skeleton />
    </div>
  )
}

export default index
