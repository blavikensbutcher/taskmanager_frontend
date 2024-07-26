import clsx from 'clsx'
import { X } from 'lucide-react'

import { Badge } from '@/components/ui/Badge'

import { useOutside } from '@/hooks/useOutside'

export interface IOption {
	label: string
	value: string
}
interface ISingleSelect {
	data: IOption[]
	onChange: (value: string) => void
	value: string
	isColorSelect?: boolean
}

export function SingleSelect({
	data,
	onChange,
	value,
	isColorSelect
}: ISingleSelect) {
	const { isShow, setIsShow, ref } = useOutside(false)
	const getValue = () => data.find(item => item.value === value)?.value

	return (
		<div className={clsx('relative min-w-36', {
				'w-max': isColorSelect
			})}
			ref={ref}
		>
			<button
				onClick={event => {
					event.preventDefault()
					setIsShow(!isShow)
				}}
			>
				{getValue() ? (
					<Badge
						variant={value}
						className='capitalize'
						style={isColorSelect ? { backgroundColor: value } : {}}
					>
						{getValue()}
					</Badge>
				) : (
					<Badge>Click for select</Badge>
				)}
			</button>
			{value && (
				<button
					className='absolute top-0 right-0 opacity-30 hover:opacity-100 transition-opacity'
					onClick={event => {
						event.preventDefault()
						onChange('')
					}}
				>
				</button>
			)}
			{isShow && (
				<div
					className={clsx(
						'absolute w-full p-2.5 left-0 slide bg-sidebar z-10 shadow rounded-lg'
					)}
					style={{
						top: 'calc(100% + .5rem)'
					}}
				>
					{data.map(item => (
						<button
							key={item.value}
							onClick={event => {
								event.preventDefault()
								onChange(item.value.toUpperCase())
								setIsShow(false)
							}}
							className='block mb-4 last:mb-0 capitalize rounded-lg'
							style={isColorSelect ? { backgroundColor: item.value } : {}}
						>
							<Badge variant={item.value}>{item.label}</Badge>
						</button>
					))}
				</div>
			)}
		</div>
	)
}