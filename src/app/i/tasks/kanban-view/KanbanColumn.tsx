import {
	Draggable,
	DraggableProvided,
	Droppable,
	DroppableProvided
} from '@hello-pangea/dnd'
import { Dispatch, SetStateAction } from 'react'

import { ITaskResponse } from '@/types/task.types'

import style from './KanbanView.module.scss'
import { FILTERS } from '@/app/i/tasks/columns.data'
import { filterTasks } from '@/app/i/tasks/filter-tasks'
import { KanbanAddCardInput } from '@/app/i/tasks/kanban-view/KanbanAddCardInput'
import { KanbanCard } from '@/app/i/tasks/kanban-view/KanbanCard'

interface IKanbanColumn {
	value: string
	label: string
	items: ITaskResponse[] | undefined
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function KanbanColumn({ value, label, items, setItems }: IKanbanColumn) {
	return (
		<Droppable droppableId={value}>
			{(droppableProvided: DroppableProvided) => (
				<div
					ref={droppableProvided.innerRef}
					{...droppableProvided.droppableProps}
				>
					<div className={style.colHeading}>
						<div className='w-full'>{label}</div>
					</div>
					{filterTasks(items, value)?.map((item, index) => (
						<Draggable
							key={item.id}
							draggableId={item.id ? item.id : 'id'}
							index={index}
						>
							{(draggableProvided: DraggableProvided) => (
								<div
									ref={draggableProvided.innerRef}
									{...draggableProvided.draggableProps}
									{...draggableProvided.dragHandleProps}
								>
									<KanbanCard
										key={item.id}
										item={item}
										setItems={setItems}
									/>
								</div>
							)}
						</Draggable>
					))}
					{droppableProvided.placeholder}
					{value !== 'completed' && !items?.some(item => !item.id) && (
						<KanbanAddCardInput
							setItems={setItems}
							filterDate={FILTERS[value] ? FILTERS[value].format() : undefined}
						/>
					)}
				</div>
			)}
		</Droppable>
	)
}
