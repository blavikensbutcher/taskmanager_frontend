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
		<Droppable droppableId={String(value)}>
			{provided => (
				<div
					ref={provided.innerRef}
					{...provided.droppableProps}
				>
					<div className={style.column}>
						<div className='capitalize'>{label}</div>

						{filterTasks(items, value)?.map((item, index) => (
							<Draggable
								key={item.id}
								draggableId={item.id ? item.id : 'id'}
								index={index}
							>
								{provided => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
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
						{provided.placeholder}

						{value !== 'completed' && !items?.some(item => !item.id) && (
							<KanbanAddCardInput
								setItems={setItems}
								filterDate={FILTERS[value] ? FILTERS[value].format() : undefined}
							/>
						)}
					</div>
				</div>
			)}
		</Droppable>
	)
}
