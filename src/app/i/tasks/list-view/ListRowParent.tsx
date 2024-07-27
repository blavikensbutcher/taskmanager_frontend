import {
	Draggable,
	DraggableProvided,
	Droppable,
	DroppableProvided
} from '@hello-pangea/dnd'
import { Dispatch, SetStateAction } from 'react'

import type { ITaskResponse } from '@/types/task.types'

import style from './ListView.module.scss'
import { FILTERS } from '@/app/i/tasks/columns.data'
import { filterTasks } from '@/app/i/tasks/filter-tasks'
import { ListAddRowInput } from '@/app/i/tasks/list-view/ListAddRowInput'
import { ListView } from '@/app/i/tasks/list-view/ListView'

interface IListRowParent {
	value: string
	label: string
	items: ITaskResponse[] | undefined
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function ListRowParent({
	value,
	label,
	items,
	setItems
}: IListRowParent) {
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
							draggableId={item.id || `item-${index}`}
							index={index}
						>
							{(draggableProvided: DraggableProvided) => (
								<div
									ref={draggableProvided.innerRef}
									{...draggableProvided.draggableProps}
									{...draggableProvided.dragHandleProps}
								>
									<ListView
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
						<ListAddRowInput
							setItems={setItems}
							filterDate={FILTERS[value] ? FILTERS[value].format() : undefined}
						/>
					)}
				</div>
			)}
		</Droppable>
	)
}
