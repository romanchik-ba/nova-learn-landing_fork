import { Container } from '../container'
import { Blink } from '../icons/Blink'
import { VaweBG } from '../image/VaweBG'
import { Title } from '../ui'
import { courseItemsArr } from './WeOffer.data'
import { CourseCard } from './WeOfferCard'

export const Courses = () => {
	return (
		<section className='relative pb-[100px] xq:pb-[250px]'>
			<Container>
				<VaweBG className='transform scale-x-[-1] -left-[206px] top-[0]' />
				<Blink
					color='#8F15FF'
					width='740px'
					height='740px'
					className='opacity-[25%] top-[140px] -left-[306px] -z-10'
				/>
				<div className='flex flex-wrap max-w-[1065px] gap-[30px]'>
					<Title
						variant='h2'
						className='w-[300px] mr-[55px] sm:mr-[330px] md:mr-[160px] lg:mr-[250px] pt-[20px]'
					>
						We offer
					</Title>
					{courseItemsArr.map(
						({
							colorIcon,
							alt,
							CourseName,
							CoursesQuantity,
							className
						}) => (
							<CourseCard
								key={alt}
								colorIcon={colorIcon}
								alt={alt}
								CourseName={CourseName}
								CoursesQuantity={CoursesQuantity}
								className={className}
							/>
						)
					)}
				</div>
			</Container>
		</section>
	)
}
