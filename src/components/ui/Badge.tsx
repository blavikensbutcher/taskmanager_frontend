import type { CSSProperties, PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'

interface IBadge {
	className?: string
	variant?: string
	style?: CSSProperties
	backgroundColor?: 'gray' | 'high' | 'medium' | 'low'
}

const badge = tv({
	base: 'rounded-lg w-max py-1 px-2 test-xs font-semibold text-sm text-white transition',
	variants: {
		backgroundColor: {
			gray: 'bg-gray-500/20',
			HIGH: 'bg-red-400/60',
			MEDIUM: 'bg-orange-400/70',
			LOW: 'bg-blue-400/70'
		}
	},
	defaultVariants: {
		backgroundColor: 'gray'
	}
})

export const Badge = ({
	children,
	className,
	variant,
	style
}: PropsWithChildren<IBadge>) => {
	return (
		<span
			className={badge({
				backgroundColor: variant as 'LOW' | 'MEDIUM' | 'HIGH',
				className
			})}
			style={style}
		>
			{children}
		</span>
	)
}
