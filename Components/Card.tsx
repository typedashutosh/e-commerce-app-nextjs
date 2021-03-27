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
  ButtonGroup,
  Tooltip,
  IconButton,
  Box
} from '@material-ui/core'
import { AddShoppingCartOutlined as CartIcon } from '@material-ui/icons'

interface IMediaCard {
  image: string
  title: string
  price: number
  content: string
  href: string
}

const useStyles = makeStyles({
  root: {
    width: 280
  },
  media: {
    height: 160
  },
  tooltip: {
    cursor: 'pointer'
  },
  details: {
    marginLeft: 'auto'
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
      <CardActions>
        <ButtonGroup>
          <Button
            size='small'
            disabled={quantity < 2}
            onClick={() => setQuantity(quantity - 1)}
          >
            -
          </Button>
          <Button disableRipple size='small'>
            {quantity}
          </Button>
          <Button size='small' onClick={() => setQuantity(quantity + 1)}>
            +
          </Button>
        </ButtonGroup>
        <Tooltip arrow title='Add to Cart' className={classes.tooltip}>
          <IconButton
          //todo: disabled true untill product ads to cart
          >
            <CartIcon color='primary' />
          </IconButton>
        </Tooltip>
        <Link href={href}>
          <Button className={classes.details} color='primary'>
            Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default MediaCard
