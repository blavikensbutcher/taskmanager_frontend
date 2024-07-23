import  type { Dispatch, SetStateAction } from 'react'

import type { ITaskResponse } from '@/types/task.types'

import style from './ListView.module.scss'

interface IListAddRowInput {
	filterDate?: string
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function ListAddRowInput({ setItems, filterDate }: IListAddRowInput) {
	const addRow = () => {
		setItems(prev => {
			if (!prev) return

			return [
				...prev,
				{
					id: '',
					text: '',
					isCompleted: false,
					createdAt: filterDate || Date.now()
				}
			]
		})
	}

	return (
		<div className={style.addRow}>
			<button
				onClick={addRow}
				className='italic opacity-40 text-sm'
			>
				Add task...
			</button>
		</div>
	)
}
