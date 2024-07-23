import type { Config } from 'tailwindcss'

import { COLORS } from './src/constants/color.constants'

const config: Config = {
	darkMode: 'class',
	mode: 'jit',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: COLORS,
			spacing: {
				0.5: '0.12rem',
				layout: '1.4rem',
				'big-layout': '2.3rem'
			},
			fontSize: {
				xs: '0.9rem',
				sm: '1.07rem',
				base: '1.18rem',
				lg: '1.24rem',
				xl: '1.38rem',
				'1.5xl': '1.5rem',
				'2xl': '1.82rem',
				'3xl': '2.22rem',
				'4xl': '2.66rem',
				'5xl': '3.56rem',
				'6xl': '4.44rem',
				'7xl': '5.33rem',
				'8xl': '7.1rem',
				'9xl': '9.5rem'
			},
			transitionDuration: { DEFAULT: '266ms' },
			width: {
				'1p': '1%',
				'2p': '2%',
				'3p': '3%',
				'4p': '4%',
				'5p': '5%',
				'6p': '6%',
				'7p': '7%',
				'8p': '8%',
				'9p': '9%',
				'10p': '10%',
				'11p': '11%',
				'12p': '12%',
				'13p': '13%',
				'14p': '14%',
				'15p': '15%',
				'16p': '16%',
				'17p': '17%',
				'18p': '18%',
				'19p': '19%',
				'20p': '20%',
				'21p': '21%',
				'22p': '22%',
				'23p': '23%',
				'24p': '24%',
				'25p': '25%',
				'26p': '26%',
				'27p': '27%',
				'28p': '28%',
				'29p': '29%',
				'30p': '30%',
				'31p': '31%',
				'32p': '32%',
				'33p': '33%',
				'34p': '34%',
				'35p': '35%',
				'36p': '36%',
				'37p': '37%',
				'38p': '38%',
				'39p': '39%',
				'40p': '40%',
				'41p': '41%',
				'42p': '42%',
				'43p': '43%',
				'44p': '44%',
				'45p': '45%',
				'46p': '46%',
				'47p': '47%',
				'48p': '48%',
				'49p': '49%',
				'50p': '50%',
				'51p': '51%',
				'52p': '52%',
				'53p': '53%',
				'54p': '54%',
				'55p': '55%',
				'56p': '56%',
				'57p': '57%',
				'58p': '58%',
				'59p': '59%',
				'60p': '60%',
				'61p': '61%',
				'62p': '62%',
				'63p': '63%',
				'64p': '64%',
				'65p': '65%',
				'66p': '66%',
				'67p': '67%',
				'68p': '68%',
				'69p': '69%',
				'70p': '70%',
				'71p': '71%',
				'72p': '72%',
				'73p': '73%',
				'74p': '74%',
				'75p': '75%',
				'76p': '76%',
				'77p': '77%',
				'78p': '78%',
				'79p': '79%',
				'80p': '80%',
				'81p': '81%',
				'82p': '82%',
				'83p': '83%',
				'84p': '84%',
				'85p': '85%',
				'86p': '86%',
				'87p': '87%',
				'88p': '88%',
				'89p': '89%',
				'90p': '90%',
				'91p': '91%',
				'92p': '92%',
				'93p': '93%',
				'94p': '94%',
				'95p': '95%',
				'96p': '96%',
				'97p': '97%',
				'98p': '98%',
				'99p': '99%'
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				dm: ['DM sans', 'sans-serif']
			},
			boxShadow: {
				'3xl': '14px 17px 40px 4px',
				inset: 'inset 0px 18px 22px',
				darkinset: '0px 4px 4px inset'
			},
			backgroundImage: {
				ballanceDashboard: "url('/src//public/img/dashboards/balanceImg.png')",
				ellispisModeCarInterface:
					"url('https://i.ibb.co/Y3nrFfd/elipse-light.png')",
				ellispisModeCarInterfaceDark:
					"url('https://i.ibb.co/g66yJnm/Ellipse-94.png')",
				homeButton:
					'linear-gradient(112.83deg, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0) 110.84%)',
				smartHomeDropzone: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='13' ry='13' stroke='%23E0E5F2FF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='5' stroke-linecap='square' /%3e%3c/svg%3e")`
			}
		},
		screens: {
			sm: '576px',
			'sm-max': { max: '576px' },
			md: '768px',
			'md-max': { max: '768px' },
			lg: '992px',
			'lg-max': { max: '992px' },
			xl: '1200px',
			'xl-max': { max: '1200px' },
			'2xl': '1320px',
			'2xl-max': { max: '1320px' },
			'3xl': '1600px',
			'3xl-max': { max: '1600px' },
			'4xl': '1850px',
			'4xl-max': { max: '1850px' }
		},
		colors: {
			orange: {
				50: '#fffbeb',
				100: '#fef3c7',
				200: '#fde68a',
				300: '#fcd34d',
				400: '#fbbf24',
				500: '#f59e0b',
				600: '#d97706',
				700: '#b45309',
				800: '#92400e',
				900: '#78350f'
			},
			teal: {
				50: '#f0fdfa',
				100: '#ccfbf1',
				200: '#99f6e4',
				300: '#5eead4',
				400: '#2dd4bf',
				500: '#14b8a6',
				600: '#0d9488',
				700: '#0f766e',
				800: '#115e59',
				900: '#134e4a'
			},
			cyan: {
				50: '#ecfeff',
				100: '#cffafe',
				200: '#a5f3fc',
				300: '#67e8f9',
				400: '#22d3ee',
				500: '#06b6d4',
				600: '#0891b2',
				700: '#0e7490',
				800: '#155e75',
				900: '#164e63'
			},
			blue: {
				50: '#eff6ff',
				100: '#dbeafe',
				200: '#bfdbfe',
				300: '#93c5fd',
				400: '#60a5fa',
				500: '#3b82f6',
				600: '#2563eb',
				700: '#1d4ed8',
				800: '#1e40af',
				900: '#1e3a8a'
			},
			purple: {
				50: '#faf5ff',
				100: '#f3e8ff',
				200: '#e9d5ff',
				300: '#d8b4fe',
				400: '#c084fc',
				500: '#a855f7',
				600: '#9333ea',
				700: '#7e22ce',
				800: '#6b21a8',
				900: '#581c87'
			},
			pink: {
				50: '#fdf2f8',
				100: '#fce7f3',
				200: '#fbcfe8',
				300: '#f9a8d4',
				400: '#f472b6',
				500: '#ec4899',
				600: '#db2777',
				700: '#be185d',
				800: '#9d174d',
				900: '#831843'
			},
			gray: {
				50: '#f9fafb',
				100: '#f3f4f6',
				200: '#e5e7eb',
				300: '#d1d5db',
				400: '#9ca3af',
				500: '#6b7280',
				600: '#4b5563',
				700: '#374151',
				800: '#1f2937',
				900: '#111827',
				950: '#030712'
			},
			green: {
				50: '#f0fdf4',
				100: '#dcfce7',
				200: '#bbf7d0',
				300: '#86efac',
				400: '#4ade80',
				500: '#22c55e',
				600: '#16a34a',
				700: '#15803d',
				800: '#166534',
				900: '#14532d',
				950: '#052e16'
			},
			red: {
				50: '#fef2f2',
				100: '#fee2e2',
				200: '#fecaca',
				300: '#fca5a5',
				400: '#f87171',
				500: '#ef4444',
				600: '#dc2626',
				700: '#b91c1c',
				800: '#991b1b',
				900: '#7f1d1d',
				950: '#450a0a'
			},
			dark: {
				50: '#f5f5f5',
				100: '#e0e0e0',
				200: '#b3b3b3',
				300: '#808080',
				400: '#4d4d4d',
				500: '#262626',
				600: '#1a1a1a',
				700: '#0d0d0d',
				800: '#050505',
				900: '#000000',
				950: '#000000'
			},
			white: '#FFFFFF'
		},
		plugins: []
	}
}

export default config
