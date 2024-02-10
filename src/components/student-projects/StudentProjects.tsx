import { Container } from '../container'
import { Blink } from '../icons/Blink'
import { ProjectsBG } from '../image/ProjectsBG'
import { Title } from '../ui'
import { ProjectSlider } from './ProjectSlider'

export const StudentProjects = () => {
	return (
		<section id='projects' className='relative w-full mb-[250px]'>
			<ProjectsBG />
			<Blink
				color='#8F15FF'
				width='740px'
				height='740px'
				className='opacity-[25%] -top-[330px] -right-[440px]'
			/>
			<Container>
				<div className='flex  lg:gap-x-[50px] md:flex-row md:justify-between flex-col'>
					<Title
						variant='h2'
						className='w-full grow-0 shrink md:basis-[42%] md:mb-0 mb-[30px]'
					>
						Our students project
					</Title>
					<ProjectSlider />
				</div>
			</Container>
		</section>
	)
}
