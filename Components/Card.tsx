import { useState, FC, ReactElement } from 'react'
import Link from 'next/link'
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonGroup
} from '@material-ui/core'

interface IMediaCard {
  image: string
  title: string
  price: number
  content: string
  href: string
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 160
  },
  actions: {
    display: 'flex',
    justifyContent: 'center'
  }
})

const MediaCard: FC<IMediaCard> = ({
  image,
  title,
  price,
  content,
  href
}): ReactElement => {
  const classes = useStyles()
  const [quantity, setQuantity] = useState<number>(1)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component='img'
          alt={title}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant='subtitle2'>&#8377; {price}</Typography>
          <Typography variant='body2' color='textSecondary'>
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <ButtonGroup>
          <Button
            disabled={quantity < 2}
            onClick={() => setQuantity(quantity - 1)}
          >
            -
          </Button>
          <Button>{quantity}</Button>
          <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
        </ButtonGroup>
        <Button color='primary'>Add to cart</Button>
        <Link href={href}>
          <Button color='primary'>Details</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default MediaCard
