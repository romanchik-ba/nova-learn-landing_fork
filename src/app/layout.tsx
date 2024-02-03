import type { Metadata } from 'next'
import { Montserrat, Nunito_Sans } from 'next/font/google'

import { Footer } from '@/components/footer'

import './globals.css'

const montserrat = Montserrat({
	style: 'normal',
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '700'],
	variable: '--font-montserrat'
})
const nunitoSans = Nunito_Sans({
	style: 'normal',
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '700'],
	variable: '--font-nunitoSans'
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={` ${montserrat.variable} ${nunitoSans.variable}`}>
				<main className='relative flex min-h-screen max-w-[1440px] flex-col items-center overflow-x-hidden m-auto'>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	)
}
