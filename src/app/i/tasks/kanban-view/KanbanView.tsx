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
			<div className={style.board}>
				{COLUMNS.map(column => (
					<KanbanColumn
						key={column.value}
						value={column.value}
						label={column.value}
						items={items}
						setItems={setItems}
					/>
				))}
			</div>
		</DragDropContext>
	)
}
