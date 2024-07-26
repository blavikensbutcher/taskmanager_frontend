'use client'

import { ViewSwitcher } from '@/components/ViewSwitcher/ViewSwitcher'
import Loader from '@/components/ui/Loader'

import { useLocalStorage } from '@/hooks/useLocalStorage'

import { TasksView } from '@/app/i/tasks/list-view/TasksView'
import {KanbanView} from "@/app/i/tasks/kanban-view/KanbanView";

export type TypeView = 'list' | 'kanban'

export const View = () => {
	const [type, setType, isLoading] = useLocalStorage<TypeView>({
		key: 'view-type',
		defaultValue: 'list'
	})

	if (isLoading) return <Loader />

	return (
		<div>
			<ViewSwitcher
				setType={setType}
				type={type}
			/>
			{type === 'list' ? <TasksView /> : <KanbanView /> }

		</div>
	)
}
