'use client'

import { DragDropContext } from '@hello-pangea/dnd'

import { useTaskDnd } from '@/hooks/tasks/useTaskDnd'
import { useTasks } from '@/hooks/tasks/useTasks'

import style from './KanbanView.module.scss'
import { COLUMNS } from '@/app/i/tasks/columns.data'
import { KanbanColumn } from '@/app/i/tasks/kanban-view/KanbanColumn'

export function KanbanView() {
	const { items, setItems } = useTasks()

	const { onDragEnd } = useTaskDnd()

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={style.table}>
				<div className={style.header}>
					<div>Task name</div>
					<div>Due date</div>
					<div>Priority</div>
					<div></div>
				</div>

				<div className={style.parentsWrapper}>
					{COLUMNS.map(column => (
						<KanbanColumn
							value={column.value}
							label={column.label}
							items={items}
							setItems={setItems}
							key={column.value}
						/>
					))}
				</div>
			</div>
		</DragDropContext>
	)
}
