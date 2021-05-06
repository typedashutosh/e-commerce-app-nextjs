import { Container, makeStyles } from '@material-ui/core'
import { FC, ReactElement } from 'react'
import * as Carousel from '../Components/Carousel'
import Card from '../Components/Card'
interface Iindex {}
const useStyles = makeStyles({
  root: {
    paddingTop: '1rem',
    paddingBottom: '1rem'
  },
  main: {
    margin: 'auto'
  }
})
const index: FC<Iindex> = (): ReactElement => {
  const classes = useStyles()
  return (
    <>
      <Carousel.Skeleton />
      <Container className={classes.root}>
        <Carousel.Slides title='Cars' nav={false}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
            <Card
              key={'Cars' + key}
              title='Title'
              content='This is content'
              image='http://source.unsplash.com/240x160?car'
              price={449}
              href={`/details`}
            />
          ))}
        </Carousel.Slides>
        <Carousel.Slides title='Electronics' nav={false}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
            <Card
              key={'Electrinics' + key}
              title='Title'
              content='This is content'
              image='http://source.unsplash.com/240x160?electronics'
              price={449}
              href={`/details/`}
            />
          ))}
        </Carousel.Slides>
      </Container>
    </>
  )
}

export default index
