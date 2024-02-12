import { Blink } from '../icons/Blink'
import { ProjectsBG } from '../image/ProjectsBG'
import { Title } from '../ui'
import { CourseCard } from './CourseCard'
import { courseItemsArr } from './Courses.data'

export const Courses = () => {
	return (
		<section className='relative mb-[250px]'>
			<ProjectsBG className='transform scale-x-[-1] -left-[206px] top-[0]' />
			<Blink
				color='#8F15FF'
				width='740px'
				height='740px'
				className='opacity-[25%] top-[140px] -left-[306px] -z-10'
			/>
			<div className='flex flex-wrap max-w-[1065px] gap-[30px]'>
				<Title variant='h2' className='w-[300px] mr-[250px] pt-[20px]'>
					We offer
				</Title>
				{courseItemsArr.map(
					({ src, alt, CourseName, CoursesQuantity, className }) => (
						<CourseCard
							key={alt}
							src={src}
							alt={alt}
							CourseName={CourseName}
							CoursesQuantity={CoursesQuantity}
							className={className}
						/>
					)
				)}
			</div>
		</section>
	)
}
