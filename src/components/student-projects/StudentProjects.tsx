'use client'

import dynamic from 'next/dynamic'
import type { StaticImageData } from 'next/image'
import { useState } from 'react'

import { projectsItemsArr } from './projects.data'

const ProjectSlider = dynamic(() => import('./ProjectSlider'), {
	ssr: false,
	loading: () => <div>Loading...</div>
}) // need to swiper working

export const StudentProjects = () => {
	// (active slide will be used in image preview, but now not used)
	// eslint-disable-next-line no-unused-vars
	const [activeSlide, setActiveSlide] = useState<StaticImageData>(
		projectsItemsArr[0].src
	)
	return (
		<section className='w-full mt-[20px]'>
			<div className='container flex justify-between gap-x-[45px]'>
				<h1 className='text-[64px] w-full font-bold max-w-[446px]'>
					Our students project
				</h1>
				<ProjectSlider setActiveSlide={setActiveSlide} />
			</div>
		</section>
	)
}
