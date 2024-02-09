import { Container } from '../container'
import { Text, Title } from '../ui'

export const RapidGrowth = () => {
	return (
		<section className='mb-[250px] w-full'>
			<Container>
				<div className='flex rapid-growth-bg min-[540px]:pb-[500px] min-[440px]:pb-[450px] pb-[380px] justify-center min-[1040px]:justify-end min-[1040px]:pb-[210px]'>
					<div className='min-[1040px]:max-w-[515px] max-[1040px]:mb-[40px] max-[540px]:mb-0'>
						<Title
							className='mb-[20px] md-[725px]:mb-[30px]'
							variant='h2'
						>
							Rapid Growth Awaits
						</Title>
						<Text className='min-[1040px]:max-w-[440px]'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Repudiandae nam, eaque eius iusto itaque Lorem
							ipsum dolor sit amet consectetur adipisicing elit.
							Repudiandae nam, eaque eius iusto itaque Lorem ipsum
							dolor sit amet consectetur adipisicing elit.
						</Text>
					</div>
				</div>
			</Container>
		</section>
	)
}
