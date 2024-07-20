const Checkbox = (props: {
	id?: string
	extra?: string
	color?:
		| 'red'
		| 'blue'
		| 'green'
		| 'yellow'
		| 'orange'
		| 'teal'
		| 'navy'
		| 'lime'
		| 'cyan'
		| 'pink'
		| 'purple'
		| 'amber'
		| 'indigo'
		| 'gray'
	[x: string]: any
}) => {
	const { extra, color, id, ...rest } = props
	return (
		<input
			id={id}
			type='checkbox'
			className={`defaultCheckbox relative inline-flex h-[20px] min-h-[20px] w-
			[20px] min-w-[20px] appearance-none items-center justify-center rounded-md border-gray-300 text-white/0
			outline-none transition ease-linear checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 ${
				color === 'red'
					? 'checked:border-none checked:bg-red-500 dark:checked:bg-red-400'
					: color === 'blue'
						? 'checked:border-none checked:bg-blue-500 dark:checked:bg-blue-400'
						: color === 'green'
							? 'checked:border-none checked:bg-green-500 dark:checked:bg-green-400'
							: color === 'yellow'
								? 'checked:border-none checked:bg-yellow-500 dark:checked:bg-yellow-400'
								: color === 'purple'
									? 'checked:border-none checked:bg-purple-500 dark:checked:bg-purple-400'
									: color === 'amber'
										? 'checked:border-none checked:bg-amber-500 dark:checked:bg-amber-400'
										: color === 'indigo'
											? 'checked:border-none checked:bg-indigo-500 dark:checked:bg-indigo-400'
											: color === 'gray'
												? 'checked:border-none checked:bg-gray-500 dark:checked:bg-gray-400'
												: 'checked:bg-brand-400 dark:checked:bg-brand-400'
			} ${extra}`}
			name='weekly'
			{...rest}
		/>
	)
}
