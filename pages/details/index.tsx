import { Button, Grid, Typography } from '@material-ui/core'
import { Container } from 'next/app'
import Image from 'next/image'
import { FC, ReactElement } from 'react'

interface Iindex {}

const index: FC<Iindex> = (): ReactElement => {
	return (
		<Container>
			<Grid container spacing={2} justify='center'>
				<Grid item xs>
					{/* <Image /> */}
					<div style={{ height: 255, width: 255, background: 'gray' }} className='image'></div>
				</Grid>
				<Grid item>
					<Grid item>
						<Typography variant='h3'>Product title</Typography>
					</Grid>
					<Grid item>
						<Typography>
							Here will be all product details... Lorem ipsum dolor, sit amet consectetur
							adipisicing elit. Similique sapiente distinctio a modi tempore laborum dicta deleniti
							velit officiis eligendi porro, maiores dolorum suscipit. Quo possimus porro
							consectetur. Recusandae, tenetur.
						</Typography>
					</Grid>
					<Grid item>
						<Typography>Price: 599.99</Typography>
					</Grid>
					<Grid item>
						<Button color='primary'>
							Buy now
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	)
}

export default index
