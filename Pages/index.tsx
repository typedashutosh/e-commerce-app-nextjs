import { Grid, Container, makeStyles } from '@material-ui/core'
import { FC, ReactElement } from 'react'
import Card from '../Components/Card'
interface Iindex {}
const useStyles = makeStyles({
  root: {
    paddingTop: '1rem'
  },
  main: {
    margin: 'auto'
  }
})
const index: FC<Iindex> = (): ReactElement => {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
          <Grid key={key} item style={{ margin: 'auto' }}>
            <Card
              title='Title'
              content='This is content'
              image='http://source.unsplash.com/480x360?water'
              price={449}
              href='#'
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default index
