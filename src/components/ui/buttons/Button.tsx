import clsx from 'clsx'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }

export function Button({
						   children,
						   className,
						   ...rest
					   }: PropsWithChildren<ButtonProps>) {
	return (
		<button
			className={clsx(
				'linear rounded-lg bg-transparent border border-primary py-2 px-7 text-base font-medium text-white transition hover:bg-primary active:bg-brand-700',
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}
