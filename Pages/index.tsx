import * as Carousal from '../Components/Carousal'
import Header from '../Components/Header'
import * as ProductCard from '../Components/ProductCard'

const index = () => {
  return (
    <>
      <Header />
      <Carousal.Skeleton />
      <ProductCard.Skeleton />
    </>
  )
}

export default index
