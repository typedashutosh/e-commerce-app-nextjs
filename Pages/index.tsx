import Router from 'next/router'
import { FC, ReactElement, useEffect } from 'react'

interface Iindex {}

const index: FC<Iindex> = (): ReactElement => {
  return <div>Index</div>
}

export default index
