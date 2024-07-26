import { DragDropContext } from '@hello-pangea/dnd'

import { useTaskDnd } from '@/hooks/tasks/useTaskDnd'
import { useTasks } from '@/hooks/tasks/useTasks'

import style from './ListView.module.scss'
import { COLUMNS } from '@/app/i/tasks/columns.data'
import { ListRowParent } from '@/app/i/tasks/list-view/ListRowParent'

export function TasksView() {
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
						<ListRowParent
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
