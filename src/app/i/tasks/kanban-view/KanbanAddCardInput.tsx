import  type { Dispatch, SetStateAction } from 'react'

import type { ITaskResponse } from '@/types/task.types'

import style from './KanbanView.module.scss'

interface IKanbanAddCardInput {
	filterDate?: string
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function KanbanAddCardInput({ setItems, filterDate }: IKanbanAddCardInput) {
	const addRow = () => {
		setItems(prev => {
			if (!prev) return

			return [
				...prev,
				{
					id: '',
					text: '',
					isCompleted: false,
					createdAt: filterDate || Date.now(),
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
